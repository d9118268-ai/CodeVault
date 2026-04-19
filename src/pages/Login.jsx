import AnimatedBG from "../components/AnimatedBG"

function Login() {
  return (
    <AnimatedBG>
      <div style={{ maxWidth: "400px", width: "90%", fontFamily: "Arial" }}>
        <h1 style={{ textAlign: "center", color: "#a066ff" }}>Welcome Back</h1>
        <p style={{ textAlign: "center", color: "#aaa" }}>Log in to continue learning</p>
        <form style={{ display: "flex", flexDirection: "column", gap: "15px", marginTop: "20px" }}>
          <input type="email" placeholder="Email Address" style={{ padding: "12px", borderRadius: "8px", border: "1px solid #333", fontSize: "16px", background: "rgba(255,255,255,0.08)", color: "#fff" }} />
          <input type="password" placeholder="Password" style={{ padding: "12px", borderRadius: "8px", border: "1px solid #333", fontSize: "16px", background: "rgba(255,255,255,0.08)", color: "#fff" }} />
          <button type="submit" style={{ padding: "12px", background: "linear-gradient(135deg, #4466ff, #8833dd)", color: "white", border: "none", borderRadius: "8px", fontSize: "16px", cursor: "pointer", fontWeight: "700" }}>Log In</button>
        </form>
        <p style={{ textAlign: "center", marginTop: "20px", color: "#aaa" }}>Don't have an account? <a href="/signup" style={{ color: "#a066ff" }}>Sign up</a></p>
        <p style={{ textAlign: "center", color: "#aaa" }}><a href="/forgot-password" style={{ color: "#a066ff" }}>Forgot password?</a></p>
      </div>
    </AnimatedBG>
  )
}

export default Login