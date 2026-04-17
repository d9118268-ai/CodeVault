function Login() {
  return (
    <div style={{ maxWidth: "400px", margin: "50px auto", fontFamily: "Arial" }}>
      <h1 style={{ textAlign: "center", color: "#6c63ff" }}>Welcome Back</h1>
      <p style={{ textAlign: "center", color: "#888" }}>Log in to continue learning</p>

      <form style={{ display: "flex", flexDirection: "column", gap: "15px" }}>

        <input type="email" placeholder="Email Address" style={{ padding: "12px", borderRadius: "8px", border: "1px solid #ccc", fontSize: "16px" }} />

        <input type="password" placeholder="Password" style={{ padding: "12px", borderRadius: "8px", border: "1px solid #ccc", fontSize: "16px" }} />

        <button type="submit" style={{ padding: "12px", backgroundColor: "#6c63ff", color: "white", border: "none", borderRadius: "8px", fontSize: "16px", cursor: "pointer" }}>
          Log In
        </button>

      </form>

      <p style={{ textAlign: "center", marginTop: "20px", color: "#888" }}>
        Don't have an account? <a href="/signup" style={{ color: "#6c63ff" }}>Sign up</a>
      </p>

      <p style={{ textAlign: "center", color: "#888" }}>
        <a href="/forgot-password" style={{ color: "#6c63ff" }}>Forgot password?</a>
      </p>
    </div>
  )
}

export default Login