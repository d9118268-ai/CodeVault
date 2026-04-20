import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { supabase } from "../supabase"
import AnimatedBG from "../components/AnimatedBG"

function Signup() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "", country: "", state: "" })
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    if (form.password.length < 8) return setError("Password must be at least 8 characters")
    if (form.password !== form.confirm) return setError("Passwords do not match")
    setLoading(true)
    const { error } = await supabase.auth.signUp({
      email: form.email,
      password: form.password,
      options: { data: { full_name: form.name, country: form.country, state: form.state } }
    })
    setLoading(false)
    if (error) return setError(error.message)
    navigate("/profile")
  }

  const inputStyle = { padding: "12px", borderRadius: "8px", border: "1px solid #333", fontSize: "16px", background: "rgba(255,255,255,0.08)", color: "#fff", width: "100%" }

  return (
    <AnimatedBG>
      <div style={{ maxWidth: "400px", width: "90%", fontFamily: "Arial" }}>
        <h1 style={{ textAlign: "center", color: "#a066ff" }}>Join CodeVault</h1>
        <p style={{ textAlign: "center", color: "#aaa" }}>Create your account and start learning</p>

        {error && <p style={{ color: "#ff4444", textAlign: "center", marginTop: "10px" }}>{error}</p>}

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px", marginTop: "20px" }}>
          <input name="name" type="text" placeholder="Full Name" onChange={handleChange} style={inputStyle} required />
          <input name="email" type="email" placeholder="Email Address" onChange={handleChange} style={inputStyle} required />
          <input name="password" type="password" placeholder="Password (min 8 characters)" onChange={handleChange} style={inputStyle} required />
          <input name="confirm" type="password" placeholder="Confirm Password" onChange={handleChange} style={inputStyle} required />
          <input name="country" type="text" placeholder="Country" onChange={handleChange} style={inputStyle} required />
          <input name="state" type="text" placeholder="State" onChange={handleChange} style={inputStyle} required />

          <button type="submit" disabled={loading} style={{ padding: "12px", background: "linear-gradient(135deg, #4466ff, #8833dd)", color: "white", border: "none", borderRadius: "8px", fontSize: "16px", cursor: "pointer", fontWeight: "700" }}>
            {loading ? "Creating Account..." : "Create Account"}
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