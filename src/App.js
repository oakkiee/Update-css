import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Body from './components/Body';
import Information from './components/Information';
import Login from './Pages/Login';
import Register from './Pages/Register';
import HistoryPage from './Pages/HistoryPage';
import BookingPage from './Pages/BookingPage'; // นำเข้า BookingPage ใหม่
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// ส่วนของ Layout ที่จะใช้ร่วมกัน
function Layout({ children }) {
  return (
    <div>
      <Header />
      {children} {/* ใช้ children สำหรับเนื้อหาของแต่ละหน้า */}
    </div>
  );
}

function App() {
  const [message, setMessage] = useState(''); // เก็บข้อความจาก API

  // ใช้ useEffect เพื่อดึงข้อมูลจาก API เมื่อโหลดหน้า
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5001/');
        setMessage(response.data); // เก็บข้อมูลที่ได้รับจาก API
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // เรียกฟังก์ชันเพื่อดึงข้อมูล
  }, []); // empty dependency array ให้ทำงานแค่ครั้งเดียวเมื่อ component โหลด

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Body /><Information /></Layout>} />
        <Route path="/login" element={<Layout><Login /></Layout>} />
        <Route path="/register" element={<Layout><Register /></Layout>} />
        <Route path="/historyPage" element={<Layout><HistoryPage /></Layout>} />
        <Route path="/booking" element={<Layout><BookingPage /></Layout>} />
      </Routes>

      {/* แสดงข้อความจาก backend ในหน้าแรก */}
     
    </Router>
  );
}

export default App;
