// ConfirmationPage.js
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function ConfirmationPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const { state: formData } = location;

    const handleConfirm = () => {
        // ส่งข้อมูลการจองไปยังเซิร์ฟเวอร์หรือบันทึกลงในฐานข้อมูล
        alert('Booking Successful!!');
        navigate('/');
    };

    const handleEdit = () => {
        navigate('/booking');
    };

    return (
        <div className="confirmation-container">
            <h2>Your Booking Information</h2>
            <div className="confirmation-details">
                <p>Type of Court: {formData.courtType}</p>
                <p>Date: {formData.bookingDate}</p>
                <p>Booked Time: {formData.bookingTime}</p>
                <p>Name: {formData.userName}</p>
                <p>Contact: {formData.userContact}</p>
            </div>
            <button onClick={handleConfirm}>ยืนยันการจอง</button>
            <button onClick={handleEdit}>แก้ไขข้อมูล</button>
        </div>
    );
}
