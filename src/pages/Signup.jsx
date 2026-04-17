function Signup() {
  return (
    <div style={{ maxWidth: "400px", margin: "50px auto", fontFamily: "Arial" }}>
      <h1 style={{ textAlign: "center", color: "#6c63ff" }}>Join CodeVault</h1>
      <p style={{ textAlign: "center", color: "#888" }}>Create your account and start learning</p>

      <form style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        
        <input type="text" placeholder="Full Name" style={{ padding: "12px", borderRadius: "8px", border: "1px solid #ccc", fontSize: "16px" }} />
        
        <input type="email" placeholder="Email Address" style={{ padding: "12px", borderRadius: "8px", border: "1px solid #ccc", fontSize: "16px" }} />
        
        <input type="password" placeholder="Password (min 8 characters)" style={{ padding: "12px", borderRadius: "8px", border: "1px solid #ccc", fontSize: "16px" }} />
        
        <input type="password" placeholder="Confirm Password" style={{ padding: "12px", borderRadius: "8px", border: "1px solid #ccc", fontSize: "16px" }} />
        
        <input type="text" placeholder="Country" style={{ padding: "12px", borderRadius: "8px", border: "1px solid #ccc", fontSize: "16px" }} />
        
        <input type="text" placeholder="State" style={{ padding: "12px", borderRadius: "8px", border: "1px solid #ccc", fontSize: "16px" }} />

        <button type="submit" style={{ padding: "12px", backgroundColor: "#6c63ff", color: "white", border: "none", borderRadius: "8px", fontSize: "16px", cursor: "pointer" }}>
          Create Account
        </button>

      </form>

      <p style={{ textAlign: "center", marginTop: "20px", color: "#888" }}>
        Already have an account? <a href="/login" style={{ color: "#6c63ff" }}>Log in</a>
      </p>
    </div>
  )
}

export default Signup