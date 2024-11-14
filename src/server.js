// server.js
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 5000;

mongoose.connect('mongodb://localhost/sport-club', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const bookingSchema = new mongoose.Schema({
    courtType: String,
    bookingDate: String,
    bookingTime: String,
    userName: String,
    userContact: String,
});

const Booking = mongoose.model('Booking', bookingSchema);

app.use(express.json());

app.post('/api/book', async (req, res) => {
    const { courtType, bookingDate, bookingTime, userName, userContact } = req.body;

    const newBooking = new Booking({
        courtType,
        bookingDate,
        bookingTime,
        userName,
        userContact,
    });

    try {
        await newBooking.save();
        res.status(200).json({ message: 'การจองสำเร็จ!' });
    } catch (error) {
        res.status(400).json({ message: 'เกิดข้อผิดพลาดในการจอง' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
