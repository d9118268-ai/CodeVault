import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { supabase } from "../supabase"
import AnimatedBG from "../components/AnimatedBG"

function Login() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: "", password: "" })
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    setLoading(true)
    const { error } = await supabase.auth.signInWithPassword({
      email: form.email,
      password: form.password
    })
    setLoading(false)
    if (error) return setError(error.message)
    navigate("/dashboard")
  }

  const inputStyle = { padding: "12px", borderRadius: "8px", border: "1px solid #333", fontSize: "16px", background: "rgba(255,255,255,0.08)", color: "#fff", width: "100%" }

  return (
    <AnimatedBG>
      <div style={{ maxWidth: "400px", width: "90%", fontFamily: "Arial" }}>
        <h1 style={{ textAlign: "center", color: "#a066ff" }}>Welcome Back</h1>
        <p style={{ textAlign: "center", color: "#aaa" }}>Log in to continue learning</p>

        {error && <p style={{ color: "#ff4444", textAlign: "center", marginTop: "10px" }}>{error}</p>}

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px", marginTop: "20px" }}>
          <input name="email" type="email" placeholder="Email Address" onChange={handleChange} style={inputStyle} required />
          <input name="password" type="password" placeholder="Password" onChange={handleChange} style={inputStyle} required />
          <button type="submit" disabled={loading} style={{ padding: "12px", background: "linear-gradient(135deg, #4466ff, #8833dd)", color: "white", border: "none", borderRadius: "8px", fontSize: "16px", cursor: "pointer", fontWeight: "700" }}>
            {loading ? "Logging in..." : "Log In"}
          </button>
        </form>

        <p style={{ textAlign: "center", marginTop: "20px", color: "#aaa" }}>
          Don't have an account? <a href="/signup" style={{ color: "#a066ff" }}>Sign up</a>
        </p>
        <p style={{ textAlign: "center", color: "#aaa" }}>
          <a href="/forgot-password" style={{ color: "#a066ff" }}>Forgot password?</a>
        </p>
      </div>
    </AnimatedBG>
  )
}

export default Login