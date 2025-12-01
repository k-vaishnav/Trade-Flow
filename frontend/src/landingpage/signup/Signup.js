import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useUser } from "../../context/AuthProvider";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [DOB, setDOB] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useUser();

  const handleSuccess = (message) => {
    toast.success(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const handleError = (message) => {
    toast.error(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3002/users/signup",
        { name, email, DOB, password },
        { withCredentials: true }
      );
      const { success, message } = data;
      if (success) {
        setUser(data.user);
        handleSuccess(message);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      }
      else {
        setUser(null);
        handleError(message);
      }
    } catch (e) {}
  };
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-sm p-4 rounded-4">
            <h3 className="text-center mb-4">Create an Account</h3>

            <form>
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Enter your full name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter your email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">DOB</label>
                <input
                  type="date"
                  name="DOB"
                  className="form-control"
                  placeholder="Enter your date of birth"
                  required
                  value={DOB}
                  onChange={(e) => setDOB(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Create a password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              {/* <div class="mb-3">
                <label class="form-label">Confirm Password</label>
                <input
                  type="password"
                  class="form-control"
                  placeholder="Re-enter your password"
                  required
                />
              </div> */}

              <button
                className="btn btn-primary w-100 mt-2"
                onClick={(e) => handleSubmit(e)}
              >
                Sign Up
              </button>

              <p className="text-center mt-3">
                Already have an account?
                <Link to="/login">Login</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
