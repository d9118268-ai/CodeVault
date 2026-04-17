function VerifyEmail() {
  return (
    <div style={{ maxWidth: "400px", margin: "50px auto", fontFamily: "Arial", textAlign: "center" }}>
      <h1 style={{ color: "#6c63ff" }}>Check Your Email</h1>
      <p style={{ color: "#888" }}>We sent a 6-digit code to your email address. Enter it below to verify your account.</p>

      <div style={{ display: "flex", justifyContent: "center", gap: "10px", margin: "30px 0" }}>
        <input maxLength="1" style={{ width: "45px", height: "55px", textAlign: "center", fontSize: "24px", borderRadius: "8px", border: "2px solid #6c63ff" }} />
        <input maxLength="1" style={{ width: "45px", height: "55px", textAlign: "center", fontSize: "24px", borderRadius: "8px", border: "2px solid #6c63ff" }} />
        <input maxLength="1" style={{ width: "45px", height: "55px", textAlign: "center", fontSize: "24px", borderRadius: "8px", border: "2px solid #6c63ff" }} />
        <input maxLength="1" style={{ width: "45px", height: "55px", textAlign: "center", fontSize: "24px", borderRadius: "8px", border: "2px solid #6c63ff" }} />
        <input maxLength="1" style={{ width: "45px", height: "55px", textAlign: "center", fontSize: "24px", borderRadius: "8px", border: "2px solid #6c63ff" }} />
        <input maxLength="1" style={{ width: "45px", height: "55px", textAlign: "center", fontSize: "24px", borderRadius: "8px", border: "2px solid #6c63ff" }} />
      </div>

      <button style={{ padding: "12px 40px", backgroundColor: "#6c63ff", color: "white", border: "none", borderRadius: "8px", fontSize: "16px", cursor: "pointer", width: "100%" }}>
        Verify Email
      </button>

      <p style={{ marginTop: "20px", color: "#888" }}>
        Didn't receive a code? <a href="#" style={{ color: "#6c63ff" }}>Resend code</a>
      </p>
    </div>
  )
}

export default VerifyEmail