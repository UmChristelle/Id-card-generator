import CardList from "./components/CardList";

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0f0f1a",
        position: "relative",
        overflow: "hidden",
        fontFamily: "'Georgia', serif",
      }}
    >
      <div
        style={{
          position: "fixed",
          top: "-200px",
          left: "-200px",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "fixed",
          bottom: "-150px",
          right: "-150px",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(236,72,153,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "60%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(34,197,94,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div style={{ position: "relative", zIndex: 1, padding: "60px 24px 80px" }}>
        
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <div
            style={{
              display: "inline-block",
              fontSize: "11px",
              letterSpacing: "5px",
              textTransform: "uppercase",
              color: "#6366f1",
              fontFamily: "monospace",
              marginBottom: "16px",
              padding: "6px 16px",
              border: "1px solid rgba(99,102,241,0.3)",
              borderRadius: "20px",
            }}
          >
            Staff Directory 2025
          </div>
          <h1
            style={{
              fontSize: "clamp(36px, 6vw, 64px)",
              fontWeight: "bold",
              color: "#ffffff",
              margin: "0 0 12px",
              lineHeight: 1.1,
              letterSpacing: "-1px",
            }}
          >
            Employee{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #6366f1, #ec4899)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              ID Cards
            </span>
          </h1>
          <p
            style={{
              color: "#666",
              fontSize: "16px",
              margin: 0,
              letterSpacing: "1px",
            }}
          >
            Company Employee Directory
          </p>
        </div>

        <CardList />
      </div>
    </div>
  );
}

export default App;