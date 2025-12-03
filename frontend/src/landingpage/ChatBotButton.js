import React, { useState } from "react";
import WebLLMChat from "./WebLLMChat";

export default function ChatBotButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating ASK AI Button */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          background: "#4f8cff",
          color: "white",
          border: "none",
          borderRadius: "50%",
          width: "60px",
          height: "60px",
          cursor: "pointer",
          fontSize: "14px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
          zIndex: 999,
        }}
      >
        ASK AI
      </button>

      {/* Chat Window */}
      {open && (
        <div
          style={{
            position: "fixed",
            bottom: "100px",
            right: "20px",
            zIndex: 999,
          }}
        >
          <WebLLMChat />
        </div>
      )}
    </>
  );
}
