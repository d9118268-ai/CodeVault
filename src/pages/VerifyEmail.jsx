import AnimatedBG from "../components/AnimatedBG"
import { useNavigate } from "react-router-dom"

function VerifyEmail() {
  const navigate = useNavigate()

  return (
    <AnimatedBG>
      <div style={{ maxWidth: "400px", width: "90%", fontFamily: "Arial", textAlign: "center" }}>
        <div style={{ fontSize: "60px" }}>🎉</div>
        <h1 style={{ color: "#a066ff", marginTop: "10px" }}>Account Created!</h1>
        <p style={{ color: "#aaa", marginTop: "10px", lineHeight: "1.6" }}>
          Welcome to CodeVault! Your account has been created successfully.
        </p>
        <button
          onClick={() => navigate("/login")}
          style={{ padding: "12px", background: "linear-gradient(135deg, #4466ff, #8833dd)", color: "white", border: "none", borderRadius: "8px", fontSize: "16px", cursor: "pointer", width: "100%", marginTop: "30px", fontWeight: "700" }}>
          Go to Login
        </button>
      </div>
    </AnimatedBG>
  )
}

export default VerifyEmail