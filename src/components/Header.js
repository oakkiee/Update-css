// Header.js
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
    return (
    <nav>
        <div className="logo">
            <Link to="/">PUNCH COURT BOOKING</Link>
        </div>

        <ul className="menu">
            <li><Link to="/community">Community</Link></li>
            <li><Link to="/booking">Booking</Link></li> {/* ลิงก์ไปยังหน้า BookingPage */}
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/login">Login</Link></li>
        </ul>
    </nav>
    );
}
