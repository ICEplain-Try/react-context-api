// Import Context และ React
import React, { useContext } from "react";
import UserContext from "../contexts/UserContext";

function AppHeader() {
  // ใช้ useContext เพื่อดึงข้อมูล username จาก Context
  const user = useContext(UserContext);

  return (
    <div className="app-header-container">
      <h1 className="app-title">Products</h1>
      {/* แสดงข้อความพร้อม username */}
      <h2>สวัสดีคุณ {user.username}</h2>
    </div>
  );
}

export default AppHeader;
