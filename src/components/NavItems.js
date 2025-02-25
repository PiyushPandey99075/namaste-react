import { useState } from "react";

const NavItems = () => {
  const [btnName, SetBtnName] = useState("Login");
  return (
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
        <button
          className="log-btn"
          onClick={() => {
            btnName === "Login" ? SetBtnName("Logout") : SetBtnName("Login");
          }}
        >
          {btnName}
        </button>
      </ul>
    </div>
  );
};

export default NavItems;
