// App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Body from './components/Body';
import Information from './components/Information';
import Login from './Login';
import Register from './Register';
import ChatRoom from './ChatRoom';
import BookingPage from './BookingPage'; // นำเข้า BookingPage ใหม่

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<><Body /><Information /></>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/community" element={<ChatRoom />} />
        <Route path="/booking" element={<BookingPage />} /> {/* เพิ่มเส้นทางสำหรับ BookingPage */}
      </Routes>
    </Router>
  );
}

export default App;
