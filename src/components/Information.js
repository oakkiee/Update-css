import "./Information.css";
import { Link } from "react-router-dom";

export default function Information() {
    return (
        <div className="reserve">
            
            <div className="images">
                {/* Link wrapping the image to navigate to BookingPage */}
                <Link to="/BookingPage">
                    <img className="Badminton" src="https://vrun.sp.ku.ac.th/court/assets/img/badminton%20banner.png" alt="Badminton" />
                </Link>
                
                <Link to="/BookingPage">
                    <img className="tennis" src="https://vrun.sp.ku.ac.th/court/assets/img/tennis%20banner.png" alt="Tennis" />
                </Link>
            </div>
            <p>After the payment for the field booking is successful, no cancellations, changes, or refunds will be accepted.</p>
        </div>
    );
}
