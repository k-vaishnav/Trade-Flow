import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Menu = ({user,setUser}) => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  
  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleLogout = () => {
    axios
      .get("https://trade-flow-qzb2.onrender.com/users/logout", { withCredentials: true })
      .then((res) => {
        console.log(res.data);
        setUser(null);
        window.location.href = "https://trade-flow-frontend.onrender.com/"; // Login page app
      })
      .catch((err) => {
        if(err.response?.status === 401){
          window.location.href = "https://trade-flow-frontend.onrender.com/"; // Login page app
        }
      });
  };

  const menuClass = "menu";

  const activeMenuClass = "menu selected";

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => handleMenuClick(0)}
             
            >
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/orders"
              onClick={() => handleMenuClick(1)}
            >
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/holdings"
              onClick={() => handleMenuClick(2)}
            >
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/positions"
              onClick={() => handleMenuClick(3)}
            >
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/funds"
              onClick={() => handleMenuClick(4)}
            >
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/apps"
              onClick={() => handleMenuClick(5)}
            >
              <p className={selectedMenu === 5 ? activeMenuClass : menuClass}>
                Apps
              </p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">
            {user ? user.name[0].toUpperCase() : "U"}
          </div>
          <p className="username">{user ? user.name : "User"}</p>
        </div>

        {isProfileDropdownOpen && (
          <div className="custom-dropdown" onClick={(e) => e.stopPropagation()}>
            <p className="dropdown-item" onClick={handleLogout}>
              Logout
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
