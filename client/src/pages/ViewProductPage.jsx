// Import Context และ React
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../contexts/UserContext";

function ViewProductPage() {
  const navigate = useNavigate();

  // ใช้ useContext เพื่อดึงข้อมูล level จาก Context
  const user = useContext(UserContext);

  return (
    <div>
      <h1>View Product Page</h1>
      <div className="view-product-container">
        <h2>Product Title</h2>
        <p>Content</p>
      </div>

      {/* แสดงข้อความพร้อม level */}
      <div className="product-promotion-box">
        <h2>คุณคือสมาชิกในระดับ {user.level} ดังนั้นคุณได้สิทธิพิเศษลด 50%</h2>
        <button onClick={function () { alert("🥳🥳🥳🥳"); }}>กดรับสิทธิ</button>
      </div>

      <button onClick={function () { navigate("/"); }}>Back to Home</button>
    </div>
  );
}

export default ViewProductPage;
