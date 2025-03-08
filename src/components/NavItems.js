import { useState } from "react";
import { Link } from "react-router";

const NavItems = () => {
  const [btnName, SetBtnName] = useState("Login");
  return (
    <div className="">
      <ul className="flex">
        <li className="px-4">
          <Link to="/">Home</Link>
        </li>
        <li className="px-4">
          <Link to="/about">About Us</Link>
        </li>
        <li className="px-4">
          <Link to="/contact">Contact Us</Link>
        </li>
        <li className="px-4">
          <Link to="/grocery">Grocery</Link>
        </li>
        <li className="px-4">Cart</li>
        <button
          className="log-btn px-5"
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
