const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5001;

// ใช้ cors และ bodyParser
app.use(cors());
app.use(bodyParser.json());

// เชื่อมต่อกับ MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // ค่าเริ่มต้นของ XAMPP
  password: '', // ถ้าไม่มีรหัสผ่านปล่อยไว้เป็นค่าว่าง
  database: 'registerDB', // ชื่อฐานข้อมูลที่สร้างใน phpMyAdmin
});

db.connect((err) => {
  if (err) {
    console.error('Failed to connect to MySQL', err);
  } else {
    console.log('Connected to MySQL');
  }
});

// Route สำหรับบันทึกข้อมูลผู้ใช้
app.post('/register', (req, res) => {
  const { username, password, email } = req.body;

  const query = 'INSERT INTO users (username, password, email) VALUES (?, ?, ?)';
  db.query(query, [username, password, email], (err, results) => {
    if (err) {
      console.error('Error registering user', err);
      res.status(500).send({ message: 'Error registering user' });
    } else {
      res.status(201).send({ message: 'User registered successfully!' });
    }
  });
});

// Route สำหรับดึงข้อมูลผู้ใช้ทั้งหมด
app.get('/users', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) {
      console.error('Error fetching users', err);
      res.status(500).send({ message: 'Error fetching users' });
    } else {
      res.status(200).json(results);
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
