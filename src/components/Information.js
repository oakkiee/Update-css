import "./Information.css";
import { Link } from "react-router-dom";

export default function Information() {
    return (
        <div className="reserve">
            <h4>จองสนาม</h4>
            <div className="images">
                {/* Link wrapping the image to navigate to BookingForm */}
                <Link to="/BookingForm">
                    <img className="Badminton" src="https://vrun.sp.ku.ac.th/court/assets/img/badminton%20banner.png" alt="Badminton" />
                </Link>
                
                <Link to="/BookingForm">
                    <img className="tennis" src="https://vrun.sp.ku.ac.th/court/assets/img/tennis%20banner.png" alt="Tennis" />
                </Link>
            </div>
            <p>หากชำระค่าบริการสนามสำเร็จแล้ว ไม่สามารถ ยกเลิก ขอเลื่อน หรือขอคืนเงินได้</p>
        </div>
    );
}
