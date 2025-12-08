import { Link, useNavigate } from "react-router-dom";

import { useUser } from "../context/AuthProvider";

import axios from "axios";

const Navbar = () => {
  const navigate = useNavigate();

  const { user, setUser } = useUser();

  const logOut = async () => {
    await axios.get("https://trade-flow-qzb2.onrender.com/users/logout", {
      withCredentials: true,
    });
    setUser(null);
    navigate("/");
  };

  return (
    <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "white" }}
    >
      <div className="container p-1">
        <Link to="/" className="navbar-brand">
          <img
            src="media/images/logo.svg"
            alt="logo"
            style={{ width: "28%" }}
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex align-items-center justify-content-end">
            <ul className="navbar-nav   mb-lg-0">
              <li className="nav-item">
                <Link to="/about" className="nav-link active">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/product" className="nav-link active">
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/pricing" className="nav-link active" href="#">
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/support" className="nav-link active">
                  Support
                </Link>
              </li>
              {!user && (
                <li className="nav-item">
                  <Link
                    to="/signup"
                    className="nav-link active"
                    aria-current="page"
                  >
                    SignUp
                  </Link>
                </li>
              )}
            </ul>
            {user && user.name && (
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                  <button
                    className="btn d-flex align-items-center justify-content-center rounded-circle "
                    type="button"
                    id="userDropdown"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{
                      width: "30px",
                      height: "30px",
                      fontWeight: "bold",
                      textTransform: "uppercase",
                      fontSize: "1rem",
                      backgroundColor: "#ff6b6b", // change to any color you like
                      color: "white",
                      border: "none",
                      marginLeft: "2rem",
                    }}
                  >
                    {user.name[0]}
                  </button>
                  <ul
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="userDropdown"
                  >
                    <li>
                      <Link className="dropdown-item" to="/profile">
                        Profile
                      </Link>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="https://trade-flow-dashboard-fhaz.onrender.com"
                        target="_blank"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <button className="dropdown-item" onClick={logOut}>
                        Logout
                      </button>
                    </li>
                  </ul>
                </li>
              </ul>
            )}
          </form>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
