import AnimatedBG from "../components/AnimatedBG"

function Signup() {
  return (
    <AnimatedBG>
      <div style={{ maxWidth: "400px", width: "90%", margin: "50px auto", fontFamily: "Arial" }}>
        <h1 style={{ textAlign: "center", color: "#a066ff" }}>Join CodeVault</h1>
        <p style={{ textAlign: "center", color: "#aaa" }}>Create your account and start learning</p>

        <form style={{ display: "flex", flexDirection: "column", gap: "15px", marginTop: "20px" }}>
          <input type="text" placeholder="Full Name" style={{ padding: "12px", borderRadius: "8px", border: "1px solid #333", fontSize: "16px", background: "rgba(255,255,255,0.08)", color: "#fff" }} />
          <input type="email" placeholder="Email Address" style={{ padding: "12px", borderRadius: "8px", border: "1px solid #333", fontSize: "16px", background: "rgba(255,255,255,0.08)", color: "#fff" }} />
          <input type="password" placeholder="Password (min 8 characters)" style={{ padding: "12px", borderRadius: "8px", border: "1px solid #333", fontSize: "16px", background: "rgba(255,255,255,0.08)", color: "#fff" }} />
          <input type="password" placeholder="Confirm Password" style={{ padding: "12px", borderRadius: "8px", border: "1px solid #333", fontSize: "16px", background: "rgba(255,255,255,0.08)", color: "#fff" }} />
          <input type="text" placeholder="Country" style={{ padding: "12px", borderRadius: "8px", border: "1px solid #333", fontSize: "16px", background: "rgba(255,255,255,0.08)", color: "#fff" }} />
          <input type="text" placeholder="State" style={{ padding: "12px", borderRadius: "8px", border: "1px solid #333", fontSize: "16px", background: "rgba(255,255,255,0.08)", color: "#fff" }} />
          <button type="submit" style={{ padding: "12px", background: "linear-gradient(135deg, #4466ff, #8833dd)", color: "white", border: "none", borderRadius: "8px", fontSize: "16px", cursor: "pointer", fontWeight: "700" }}>
            Create Account
          </button>
        </form>

        <p style={{ textAlign: "center", marginTop: "20px", color: "#aaa" }}>
          Already have an account? <a href="/login" style={{ color: "#a066ff" }}>Log in</a>
        </p>
      </div>
    </AnimatedBG>
  )
}

export default Signup