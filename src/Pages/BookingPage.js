import React, { useState } from 'react';
import './BookingPage.css';

export default function BookingPage() {
    const [formData, setFormData] = useState({
        courtType: '',
        bookingDate: '',
        bookingStartTime: '',
        bookingEndTime: '',
        userName: '',
        userContact: '',
    });

    // ฟังก์ชันสร้างเวลาที่สามารถเลือกได้ตั้งแต่ 7 โมงเช้าถึง 4 ทุ่ม
    const generateAvailableTimes = () => {
        const times = [];
        for (let hour = 7; hour <= 22; hour++) {
            const hourString = hour < 10 ? `0${hour}` : `${hour}`;
            times.push(`${hourString}:00`);
            
        }
        return times;
    };

    const availableTimes = generateAvailableTimes(); // สร้างอาเรย์เวลาที่สามารถเลือกได้

    // ฟังก์ชันจัดการการเปลี่ยนแปลงของ input
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
            alert('Please complete all the information.');
            return;
        }

        // ตรวจสอบว่าเวลาสิ้นสุดไม่น้อยกว่าเวลาเริ่มต้น
        const startTime = new Date(`1970-01-01T${formData.bookingStartTime}:00`);
        const endTime = new Date(`1970-01-01T${formData.bookingEndTime}:00`);

        if (endTime <= startTime) {
            alert('The end time must be greater than the start time.');
            return;
        }

        // สร้างการแจ้งเตือนการจองสำเร็จ
        alert('Booking Successful!');
    };

    return (
        <div className="booking-page-container">
            <h2>Booking</h2>
            <form onSubmit={handleSubmit} className="booking-page-form">
                <div className="form-group">
                    <label htmlFor="courtType">Type of Court</label>
                    <select
                        id="courtType"
                        name="courtType"
                        value={formData.courtType}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Field Type</option>
                        <option value="badminton">Badminton</option>
                        <option value="tennis">Tennis</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="bookingDate">Reservation Date</label>
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
                    <label htmlFor="bookingStartTime">Time of Reservation</label>
                    <select
                        id="bookingStartTime"
                        name="bookingStartTime"
                        value={formData.bookingStartTime}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Time for Booking</option>
                        {availableTimes.map((time, index) => (
                            <option key={index} value={time}>
                                {time}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="bookingEndTime">Reservation End Time</label>
                    <select
                        id="bookingEndTime"
                        name="bookingEndTime"
                        value={formData.bookingEndTime}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Reservation End Time</option>
                        {availableTimes
                            .filter(
                                (time) =>
                                    time > formData.bookingStartTime &&
                                    (new Date(`1970-01-01T${time}:00`) -
                                        new Date(`1970-01-01T${formData.bookingStartTime}:00`)) >=
                                        30 * 60 * 1000
                            )
                            .map((time, index) => (
                                <option key={index} value={time}>
                                    {time}
                                </option>
                            ))}
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="userName">Name</label>
                    <input
                        id="userName"
                        type="text"
                        name="userName"
                        value={formData.userName}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="userContact">Contact</label>
                    <input
                        id="userContact"
                        type="text"
                        name="userContact"
                        value={formData.userContact}
                        onChange={handleChange}
                        placeholder="Contact Number"
                        pattern="\d{10}" // ใช้ pattern เพื่อตรวจสอบเบอร์โทรที่มี 10 หลัก
                        required
                    />
                </div>

                <button type="submit" className="submit-btn">Confirm</button>
            </form>
        </div>
    );
}
