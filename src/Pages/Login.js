import React, { useState } from 'react';
import "./Login.css"; // อย่าลืมสร้างไฟล์ CSS ถ้ายังไม่มี

export default function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [error, setError] = useState(""); // เพิ่มการแสดงข้อความผิดพลาด

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // ตรวจสอบการล็อกอิน (แทนที่ด้วยการตรวจสอบจริง)
        if (formData.email === "user@example.com" && formData.password === "password123") {
            alert("Login Successful!");
            setError(""); // รีเซ็ตข้อผิดพลาดหากล็อกอินสำเร็จ
        } else {
            setError("Incorrect email or password.");
        }
    };

    return (
        <div className="login-container">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Password"
                        required
                    />
                </div>

                {error && <div className="error-message">{error}</div>}

                <button type="submit" className="submit-button">Login</button>
            </form>
        </div>
    );
}
