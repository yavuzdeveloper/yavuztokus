import { useState } from "react";

const ChatPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* HEADER BUTTON - TOP RIGHT */}
      <button
        onClick={() => setIsOpen(true)}
        style={{
          position: "fixed",
          top: "80px",
          right: "20px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          padding: "10px 16px",
          backgroundColor: "#2563eb",
          color: "white",
          border: "none",
          borderRadius: "8px",
          fontSize: "14px",
          fontWeight: "500",
          cursor: "pointer",
          boxShadow:
            "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
          zIndex: 1000,
        }}
        onMouseOver={e => (e.target.style.backgroundColor = "#1d4ed8")}
        onMouseOut={e => (e.target.style.backgroundColor = "#2563eb")}
      >
        <span>🤖</span>
        AI Assistant
      </button>

      {/* POPUP MODAL */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "90vw",
            height: "80vh",
            maxWidth: "1000px",
            maxHeight: "700px",
            backgroundColor: "white",
            borderRadius: "16px",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
            zIndex: 9999,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
          }}
        >
          {/* MINIMAL HEADER - Sadece butonlar */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "12px 16px",
              borderBottom: "1px solid #e5e7eb",
              backgroundColor: "#f8fafc",
            }}
          >
            {/* Open in New Tab Button */}
            <a
              href="https://yavuz-ai-lime.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "8px 16px",
                backgroundColor: "#3b82f6",
                color: "white",
                border: "none",
                borderRadius: "8px",
                fontSize: "14px",
                cursor: "pointer",
                fontWeight: 500,
                textDecoration: "none",
                transition: "all 0.2s",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
              onMouseOver={e => {
                e.target.style.backgroundColor = "#2563eb";
                e.target.style.transform = "scale(1.05)";
              }}
              onMouseOut={e => {
                e.target.style.backgroundColor = "#3b82f6";
                e.target.style.transform = "scale(1)";
              }}
            >
              <span>↗</span>
              Open Fullscreen
            </a>

            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              style={{
                color: "#6b7280",
                background: "none",
                border: "none",
                fontSize: "20px",
                cursor: "pointer",
                padding: "6px 10px",
                borderRadius: "6px",
                transition: "all 0.2s",
              }}
              onMouseOver={e => {
                e.target.style.color = "#374151";
                e.target.style.backgroundColor = "#f3f4f6";
              }}
              onMouseOut={e => {
                e.target.style.color = "#6b7280";
                e.target.style.backgroundColor = "transparent";
              }}
            >
              ✕
            </button>
          </div>

          {/* IFRAME CONTENT */}
          <div style={{ flex: 1, minHeight: 0 }}>
            <iframe
              src="https://yavuz-ai-lime.vercel.app/"
              style={{
                width: "100%",
                height: "100%",
                border: "none",
              }}
              title="Yavuz AI Assistant"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ChatPopup;
