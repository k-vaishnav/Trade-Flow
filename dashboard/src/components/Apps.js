// src/components/Apps.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const apps = [
  { name: "Watchlist", path: "/" },
  { name: "Portfolio", path: "/" },
  { name: "Virtual Trading", path: "/" },
  { name: "Charts", path: "/" },
  { name: "Options Chain", path: "/" },
  { name: "Trade Journal", path: "/" },
];

const Apps = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: 20 }}>
      <h2>Your Trading Apps</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: 20,
          marginTop: 20,
        }}
      >
        {apps.map((app, i) => (
          <div
            key={i}
            onClick={() => navigate(app.path)}
            style={{
              padding: 20,
              border: "1px solid #ddd",
              borderRadius: 10,
              cursor: "pointer",
              textAlign: "center",
              background: "#f9f9f9",
              transition: "0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#4f8cff", e.currentTarget.style.color = "#fff")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#f9f9f9", e.currentTarget.style.color = "#000")}
          >
            {app.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Apps;
