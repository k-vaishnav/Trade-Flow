import React ,{useState} from 'react'
import {Link,useNavigate} from "react-router-dom";
import axios from "axios"
import {toast} from "react-toastify"
import { useUser } from '../../context/AuthProvider';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const {setUser} = useUser();
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
      const {data} = await axios.post("https://trade-flow-qzb2.onrender.com/users/login", { email, password },{withCredentials: true});
      console.log(email,password);
      const {success , message} = data;
      if(success){
        setUser(data.user);
        handleSuccess(message);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      }
      else{
        setUser(null);
        handleError(message);
      }
    }
    catch(e){
      // handleError(e.response.data.message);
      console.log(e);
    }

  }
    return (
       <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-5">

        <div class="card shadow-sm p-4 rounded-4">
          <h3 class="text-center mb-4">Login</h3>

          <form>
            <div class="mb-3">
              <label class="form-label">Email Address</label>
              <input
                type="email"
                name = "email"
                class="form-control"
                placeholder="Enter your email"
                required
                value ={email}
                onChange={(e)=>setEmail(e.target.value)}
              />
            </div>

            <div class="mb-3">
              <label class="form-label">Password</label>
              <input
                type="password"
                name ="password"
                class="form-control"
                placeholder="Enter your password"
                required
                value ={password}
                onChange={(e)=>setPassword(e.target.value)}
              />
            </div>

            <button class="btn btn-primary w-100 mt-2" onClick = {(e)=>handleSubmit(e)}>Login</button>

            <p class="text-center mt-3">
              Don’t have an account?
              <Link to="/signup" className="btn btn-warning text-center text-white ms-2 ">Sign Up</Link>
            </p>
          </form>

        </div>
      </div>
    </div>
  </div>
    )
}

export default Login