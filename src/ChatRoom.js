import React, { useState } from 'react';
import './ChatRoom.css';

export default function ChatRoom() {
    const [posts, setPosts] = useState([]); // เก็บโพสต์ใน state
    const [newPost, setNewPost] = useState(""); // ข้อความใหม่ที่ผู้ใช้กำลังพิมพ์

    // ฟังก์ชันจัดการการเปลี่ยนแปลงของ input
    const handleInputChange = (e) => {
        setNewPost(e.target.value);
    };

    // ฟังก์ชันการโพสต์ข้อความ
    const handlePostSubmit = (e) => {
        e.preventDefault();
        if (newPost.trim() !== "") {
            const newPostData = {
                id: posts.length + 1,
                userName: "User" + (posts.length + 1),
                message: newPost,
                timestamp: new Date().toLocaleString(),
            };
            setPosts([newPostData, ...posts]); // เพิ่มโพสต์ใหม่เข้าไปใน state
            setNewPost(""); // เคลียร์ input หลังจากโพสต์
        }
    };

    return (
        <div className="chat-room-container">
            <h2>Chat Room</h2>
            <form className="post-form" onSubmit={handlePostSubmit}>
                <textarea
                    value={newPost}
                    onChange={handleInputChange}
                    placeholder="Write something..."
                    rows="4"
                    required
                />
                <button type="submit">Post</button>
            </form>

            <div className="posts">
                {posts.map((post) => (
                    <div className="post" key={post.id}>
                        <div className="post-header">
                            <span className="post-user">{post.userName}</span>
                            <span className="post-time">{post.timestamp}</span>
                        </div>
                        <div className="post-content">{post.message}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
