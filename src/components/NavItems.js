import { useContext, useState } from "react";
import { Link } from "react-router";
import userName from "../utils/UserContext";

const NavItems = () => {
  const [btnName, SetBtnName] = useState("Login");

  const { loggedIn } = useContext(userName);

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
          className="log-btn px-4 cursor-pointer"
          onClick={() => {
            btnName === "Login" ? SetBtnName("Logout") : SetBtnName("Login");
          }}
        >
          {btnName}
        </button>
        {btnName === "Logout" ? (
          <li className="font-bold px-1">{loggedIn}</li>
        ) : (
          <li className="font-bold"></li>
        )}
      </ul>
    </div>
  );
};

export default NavItems;
