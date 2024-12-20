// Import Libraries และ Context
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import UserContext from "./contexts/UserContext";

import HomePage from "./pages/HomePage.jsx";
import ViewProductPage from "./pages/ViewProductPage.jsx";

function App() {
  // ข้อมูลผู้ใช้งาน
  const userData = {
    username: "John",
    avatar: "https://placedog.net/100/100",
    level: "platinum",
  };

  return (
    // ใช้ UserContext.Provider เพื่อแชร์ข้อมูลให้ Component ลูก
    <UserContext.Provider value={userData}>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/view/:id" element={<ViewProductPage />} />
          </Routes>
        </Router>
      </div>
    </UserContext.Provider>
  );
}

export default App;
