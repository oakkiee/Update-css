// BookingPage.js
import React, { useState } from 'react';
import './BookingPage.css';

export default function BookingPage() {
    const [formData, setFormData] = useState({
        courtType: '',
        bookingDate: '',
        bookingTime: '',
        userName: '',
        userContact: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // ตรวจสอบข้อมูลที่กรอก
        if (Object.values(formData).some((field) => field === '')) {
            alert('กรุณากรอกข้อมูลให้ครบถ้วน');
            return;
        }

        // สร้างการแจ้งเตือนการจองสำเร็จ
        alert('การจองสนามสำเร็จ!');
    };

    return (
        <div className="booking-page-container">
            <h2>จองสนาม</h2>
            <form onSubmit={handleSubmit} className="booking-page-form">
                <div className="form-group">
                    <label htmlFor="courtType">ประเภทสนาม</label>
                    <select
                        id="courtType"
                        name="courtType"
                        value={formData.courtType}
                        onChange={handleChange}
                        required
                    >
                        <option value="">เลือกประเภทสนาม</option>
                        <option value="badminton">แบดมินตัน</option>
                        <option value="tennis">เทนนิส</option>
                        <option value="basketball">บาสเกตบอล</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="bookingDate">วันที่จอง</label>
                    <input
                        id="bookingDate"
                        type="date"
                        name="bookingDate"
                        value={formData.bookingDate}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="bookingTime">เวลาที่จอง</label>
                    <input
                        id="bookingTime"
                        type="time"
                        name="bookingTime"
                        value={formData.bookingTime}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="userName">ชื่อผู้จอง</label>
                    <input
                        id="userName"
                        type="text"
                        name="userName"
                        value={formData.userName}
                        onChange={handleChange}
                        placeholder="ชื่อของคุณ"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="userContact">เบอร์โทรติดต่อ</label>
                    <input
                        id="userContact"
                        type="text"
                        name="userContact"
                        value={formData.userContact}
                        onChange={handleChange}
                        placeholder="เบอร์โทรติดต่อ"
                        pattern="\d{10}" // ใช้ pattern เพื่อตรวจสอบเบอร์โทรที่มี 10 หลัก
                        required
                    />
                </div>

                <button type="submit" className="submit-btn">ยืนยันการจอง</button>
            </form>
        </div>
    );
}
