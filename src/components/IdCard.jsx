function IdCard({ name, role, department, avatar, id }) {
    const deptColors = {
      Engineering: { bg: "#e8f5e9", accent: "#2e7d32", light: "#a5d6a7" },
      Design: { bg: "#fce4ec", accent: "#c2185b", light: "#f48fb1" },
      Product: { bg: "#e3f2fd", accent: "#1565c0", light: "#90caf9" },
      Analytics: { bg: "#fff3e0", accent: "#e65100", light: "#ffcc80" },
    };
  
    const colors = deptColors[department] || {
      bg: "#f3e5f5",
      accent: "#6a1b9a",
      light: "#ce93d8",
    };
  
    return (
      <div
        style={{
          width: "300px",
          borderRadius: "20px",
          overflow: "hidden",
          boxShadow: "0 20px 60px rgba(0,0,0,0.12), 0 4px 16px rgba(0,0,0,0.08)",
          background: "#fff",
          fontFamily: "'Georgia', serif",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          cursor: "default",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-8px)";
          e.currentTarget.style.boxShadow =
            "0 32px 80px rgba(0,0,0,0.18), 0 8px 24px rgba(0,0,0,0.1)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow =
            "0 20px 60px rgba(0,0,0,0.12), 0 4px 16px rgba(0,0,0,0.08)";
        }}
      >
        <div
          style={{
            height: "10px",
            background: `linear-gradient(90deg, ${colors.accent}, ${colors.light})`,
          }}
        />
        <div
          style={{
            background: "#1a1a2e",
            padding: "20px 24px 14px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <div
              style={{
                fontSize: "9px",
                letterSpacing: "4px",
                color: colors.light,
                textTransform: "uppercase",
                fontFamily: "monospace",
              }}
            >
              Employee
            </div>
            <div
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                color: "#ffffff",
                letterSpacing: "1px",
                marginTop: "2px",
              }}
            >
              ID CARD
            </div>
          </div>
          <div
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              background: `linear-gradient(135deg, ${colors.accent}, ${colors.light})`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "16px",
            }}
          >
            🏢
          </div>
        </div>
        <div style={{ padding: "0 24px 24px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              padding: "20px 0 16px",
              borderBottom: "1px solid #f0f0f0",
            }}
          >
            <div style={{ position: "relative" }}>
              <img
                src={avatar}
                alt={name}
                style={{
                  width: "72px",
                  height: "72px",
                  borderRadius: "14px",
                  border: `3px solid ${colors.accent}`,
                  background: colors.bg,
                  objectFit: "cover",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "-4px",
                  right: "-4px",
                  width: "16px",
                  height: "16px",
                  borderRadius: "50%",
                  background: "#22c55e",
                  border: "2px solid white",
                }}
              />
            </div>
            <div>
              <div
                style={{
                  fontSize: "17px",
                  fontWeight: "bold",
                  color: "#1a1a2e",
                  lineHeight: 1.2,
                }}
              >
                {name}
              </div>
              <div
                style={{
                  fontSize: "12px",
                  color: colors.accent,
                  fontWeight: "600",
                  marginTop: "4px",
                  fontFamily: "monospace",
                  letterSpacing: "0.5px",
                }}
              >
                {role}
              </div>
            </div>
          </div>
          <div style={{ marginTop: "16px", display: "flex", flexDirection: "column", gap: "10px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span
                style={{
                  fontSize: "10px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: "#999",
                  fontFamily: "monospace",
                }}
              >
                Department
              </span>
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: "600",
                  color: "#1a1a2e",
                  background: colors.bg,
                  padding: "3px 10px",
                  borderRadius: "20px",
                  border: `1px solid ${colors.light}`,
                }}
              >
                {department}
              </span>
            </div>
  
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span
                style={{
                  fontSize: "10px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: "#999",
                  fontFamily: "monospace",
                }}
              >
                ID Number
              </span>
              <span
                style={{
                  fontSize: "13px",
                  fontWeight: "bold",
                  color: colors.accent,
                  fontFamily: "monospace",
                  letterSpacing: "2px",
                }}
              >
                #{String(id).padStart(4, "0")}
              </span>
            </div>
          </div>
          <div
            style={{
              marginTop: "20px",
              padding: "10px 12px",
              background: "#f8f8f8",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", gap: "2px", alignItems: "center" }}>
              {[3,1,2,1,3,2,1,3,1,2,3,1,2,1,3,1,2,3,1,2,1,3].map((w, i) => (
                <div
                  key={i}
                  style={{
                    width: `${w}px`,
                    height: i % 5 === 0 ? "22px" : "16px",
                    background: "#1a1a2e",
                    borderRadius: "1px",
                  }}
                />
              ))}
            </div>
            <div
              style={{
                fontSize: "9px",
                color: "#aaa",
                fontFamily: "monospace",
                letterSpacing: "1px",
              }}
            >
              VALID 2026
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default IdCard;