import React, { useState, useEffect } from 'react';
import axios from 'axios'; // ต้องติดตั้ง axios ด้วยคำสั่ง npm install axios
import './HistoryPage.css';

export default function HistoryPage() {
    const [bookingHistory, setBookingHistory] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // ฟังก์ชันสำหรับดึงข้อมูลการจองจาก backend
        const fetchBookingHistory = async () => {
            try {
                const response = await axios.get('http://localhost:5001/booking-history'); // เปลี่ยน URL ตาม API ที่ใช้งาน
                setBookingHistory(response.data); // เก็บข้อมูลที่ได้รับจาก backend
            } catch (err) {
                setError('Unable to retrieve booking information');
                console.error('Error fetching booking history:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchBookingHistory(); // เรียกฟังก์ชันเพื่อดึงข้อมูลเมื่อ component ถูก mount
    }, []);

    return (
        <div className="history-page-container">
            <h2>Booking History</h2>

            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>{error}</p>
            ) : (
                <div className="history-list">
                    {bookingHistory.length === 0 ? (
                        <p>No booking history available.</p>
                    ) : (
                        bookingHistory.map((booking) => (
                            <div className="booking-item" key={booking.id}>
                                <div className="booking-header">
                                    <span className="court-type">{booking.courtType}</span>
                                    <span className="booking-time">{booking.bookingDate} {booking.bookingTime}</span>
                                </div>
                                <div className="booking-details">
                                    <p><strong>Booker Name :</strong> {booking.userName}</p>
                                    <p><strong>Contact:</strong> {booking.userContact}</p>
                                </div>
                                <div className="timestamp">
                                    <span>จองเมื่อ: {booking.timestamp}</span>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            )}
        </div>
    );
}
