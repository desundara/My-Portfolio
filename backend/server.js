const express = require('express')
const cors = require('cors')
const mysql = require('mysql2/promise')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(express.json())
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  methods: ['GET', 'POST'],
  credentials: true,
}))

// Connection Pool
const db = mysql.createPool({
  host:     process.env.DB_HOST     || 'localhost',
  port:     process.env.DB_PORT     || 3306,
  user:     process.env.DB_USER     || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME     || 'portfolio_db',
  waitForConnections: true,
  connectionLimit: 10,
})

// Auto-create table if not exists
async function initDB() {
  try {
    const sql = `
      CREATE TABLE IF NOT EXISTS contact_messages (
        id         INT AUTO_INCREMENT PRIMARY KEY,
        name       VARCHAR(100)  NOT NULL,
        email      VARCHAR(150)  NOT NULL,
        subject    VARCHAR(200)  NOT NULL,
        message    TEXT          NOT NULL,
        created_at TIMESTAMP     DEFAULT CURRENT_TIMESTAMP
      )
    `
    await db.query(sql)
    console.log('✅  Database table ready: contact_messages')
  } catch (err) {
    console.error('❌  DB init error:', err.message)
    process.exit(1)
  }
}

// Routes 

// Health check
app.get('/', (req, res) => {
  res.json({ status: 'ok', message: 'Gayani Portfolio API running 🚀' })
})

// GET all messages (optional - for your own viewing)
app.get('/api/messages', async (req, res) => {
  try {
    const [rows] = await db.query(
      'SELECT id, name, email, subject, LEFT(message, 80) AS message_preview, created_at FROM contact_messages ORDER BY created_at DESC'
    )
    res.json({ success: true, count: rows.length, data: rows })
  } catch (err) {
    res.status(500).json({ success: false, error: err.message })
  }
})

// POST - submit contact form
app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body

  // Validation
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ success: false, error: 'All fields are required.' })
  }
  if (name.trim().length < 2) {
    return res.status(400).json({ success: false, error: 'Name must be at least 2 characters.' })
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return res.status(400).json({ success: false, error: 'Invalid email address.' })
  }
  if (message.trim().length < 10) {
    return res.status(400).json({ success: false, error: 'Message must be at least 10 characters.' })
  }

  try {
    const [result] = await db.query(
      'INSERT INTO contact_messages (name, email, subject, message) VALUES (?, ?, ?, ?)',
      [name.trim(), email.trim(), subject.trim(), message.trim()]
    )
    console.log(`📩 New message from ${name} <${email}> | ID: ${result.insertId}`)
    res.status(201).json({
      success: true,
      message: 'Message sent successfully!',
      id: result.insertId,
    })
  } catch (err) {
    console.error('DB insert error:', err.message)
    res.status(500).json({ success: false, error: 'Database error. Please try again.' })
  }
})

// Start 
initDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`)
  })
})
