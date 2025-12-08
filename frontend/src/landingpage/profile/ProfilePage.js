import react from "react";
import axios from "axios";
import { useUser } from "../../context/AuthProvider";


const ProfilePage = () => {
  const { user,setUser } = useUser();
  if (!user) {
    return <h2>Loading...</h2>;
  }
  const avatarLetter = user.name ? user.name.charAt(0).toUpperCase() : "?";
  const logoutAll = async () => {
    await axios.get("https://trade-flow-qzb2.onrender.com/users/logout", {
      withCredentials: true,
    });

    setUser(null);
    window.location.href = "/";
  };
  if (!user) {
    return (
      <div className="container mt-5 text-center">
        <h4>User not found!</h4>
      </div>
    );
  }
  return (
    <div className="container profile-container mt-4">
      <div className="card shadow-sm p-4">
        <div className="text-center">
          <div className="profile-avatar">{avatarLetter}</div>
          <h3 className="mt-3">{user.name}</h3>
          <p className="text-muted">{user.email}</p>
        </div>
        <hr />
        <div className="profile-info">
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>DOB:</strong> {new Date(user.DOB).toLocaleDateString()}
          </p>
          <p>
            <strong>Member Since:</strong> Jan 2025
          </p>
        </div>
        <hr />
        <div className="d-flex gap-3">
          <button className="btn btn-primary w-100">Change Password</button>

          <button className="btn btn-outline-danger w-100" onClick={logoutAll}>
            Logout All Devices
          </button>
        </div>

        <div className="text-center mt-3">
          <a href="/support" className="text-decoration-none">
            Need help? Contact Support →
          </a>
        </div>
      </div>
    </div>
  );
};
export default ProfilePage;
