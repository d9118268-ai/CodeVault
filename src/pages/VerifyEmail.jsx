import AnimatedBG from "../components/AnimatedBG"

function VerifyEmail() {
  return (
    <AnimatedBG>
      <div style={{ maxWidth: "400px", width: "90%", fontFamily: "Arial", textAlign: "center" }}>
        <h1 style={{ color: "#a066ff" }}>Check Your Email</h1>
        <p style={{ color: "#aaa", marginTop: "10px" }}>We sent a 6-digit code to your email. Enter it below.</p>
        <div style={{ display: "flex", justifyContent: "center", gap: "10px", margin: "30px 0" }}>
          {[1,2,3,4,5,6].map(n => (
            <input key={n} maxLength="1" style={{ width: "45px", height: "55px", textAlign: "center", fontSize: "24px", borderRadius: "8px", border: "2px solid #a066ff", background: "rgba(255,255,255,0.08)", color: "#fff" }} />
          ))}
        </div>
        <button style={{ padding: "12px 40px", background: "linear-gradient(135deg, #4466ff, #8833dd)", color: "white", border: "none", borderRadius: "8px", fontSize: "16px", cursor: "pointer", width: "100%", fontWeight: "700" }}>Verify Email</button>
        <p style={{ marginTop: "20px", color: "#aaa" }}>Didn't receive a code? <a href="#" style={{ color: "#a066ff" }}>Resend code</a></p>
      </div>
    </AnimatedBG>
  )
}

export default VerifyEmail