# Portfolio Backend — Node.js + MySQL

Contact form data MySQL database save, Express.js backend.

## Setup

### 1. MySQL Database Create

MySQL Workbench or terminal:
```sql
CREATE DATABASE portfolio_db;
```

### 2. .env File Create

```bash
cp .env
```

`.env` file edit කරන්න:
```env
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=your_actual_mysql_password
DB_NAME=portfolio_db
PORT=5000
FRONTEND_URL=http://localhost:5173
```

### 3. Dependencies Install

```bash
npm install
```

### 4. Run

```bash
# Development (auto-restart)
npm run dev

# Production
npm start
```

Server starts at: `http://localhost:5000`

## API Endpoints

| Method | URL | Description |
|--------|-----|-------------|
| GET | `/` | Health check |
| POST | `/api/contact` | Save contact form |
| GET | `/api/messages` | View all messages |

## POST /api/contact

**Request Body:**
```json
{
  "name": "Kamal Perera",
  "email": "kamal@email.com",
  "subject": "Job Opportunity",
  "message": "Hello, I'd like to discuss..."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Message sent successfully!",
  "id": 1
}
```

## Database Table

Auto-created on first run:
```sql
CREATE TABLE contact_messages (
  id         INT AUTO_INCREMENT PRIMARY KEY,
  name       VARCHAR(100)  NOT NULL,
  email      VARCHAR(150)  NOT NULL,
  subject    VARCHAR(200)  NOT NULL,
  message    TEXT          NOT NULL,
  created_at TIMESTAMP     DEFAULT CURRENT_TIMESTAMP
);
```
