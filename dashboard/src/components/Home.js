import React,{useState,useEffect} from "react";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import axios from "axios";

const Home = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkAuth = () => {
      axios
        .get("http://localhost:3002/users/verify", { withCredentials: true })
        .then((res) => setUser(res.data.user))
        .catch(() => {
          // Token invalid → return to login page
          window.location.href = "http://localhost:3000";
        });
    };
    checkAuth();
  }, []);

  return (
    <>
      <TopBar user={user} setUser={setUser} />
      <Dashboard user={user} setUser={setUser} />
    </>
  );
};

export default Home;