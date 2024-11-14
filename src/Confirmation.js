// ConfirmationPage.js
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function ConfirmationPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const { state: formData } = location;

    const handleConfirm = () => {
        // ส่งข้อมูลการจองไปยังเซิร์ฟเวอร์หรือบันทึกลงในฐานข้อมูล
        alert('การจองสำเร็จ!');
        navigate('/');
    };

    const handleEdit = () => {
        navigate('/booking');
    };

    return (
        <div className="confirmation-container">
            <h2>ข้อมูลการจองของคุณ</h2>
            <div className="confirmation-details">
                <p>ประเภทสนาม: {formData.courtType}</p>
                <p>วันที่จอง: {formData.bookingDate}</p>
                <p>เวลาที่จอง: {formData.bookingTime}</p>
                <p>ชื่อผู้จอง: {formData.userName}</p>
                <p>เบอร์โทรติดต่อ: {formData.userContact}</p>
            </div>
            <button onClick={handleConfirm}>ยืนยันการจอง</button>
            <button onClick={handleEdit}>แก้ไขข้อมูล</button>
        </div>
    );
}
