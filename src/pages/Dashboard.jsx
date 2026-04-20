import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { supabase } from "../supabase"
import AnimatedBG from "../components/AnimatedBG"

function Dashboard() {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) navigate("/login")
      setUser(user)
    }
    getUser()
  }, [])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    navigate("/")
  }

  return (
    <AnimatedBG>
      <div style={{ maxWidth: "800px", width: "90%", fontFamily: "Arial", textAlign: "center" }}>
        <h1 style={{ color: "#a066ff", fontSize: "2.5rem" }}>Welcome to CodeVault 🔥</h1>
        <p style={{ color: "#aaa", marginTop: "10px", fontSize: "1.1rem" }}>
          Hello {user?.user_metadata?.full_name || "Coder"}! Ready to learn?
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px", marginTop: "40px" }}>
          
          <div onClick={() => navigate("/courses")} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid #333", borderRadius: "12px", padding: "30px", cursor: "pointer", transition: "border 0.2s" }}>
            <div style={{ fontSize: "40px" }}>📚</div>
            <h3 style={{ color: "#fff", marginTop: "10px" }}>Courses</h3>
            <p style={{ color: "#aaa", fontSize: "14px" }}>Start learning coding</p>
          </div>

          <div onClick={() => navigate("/profile")} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid #333", borderRadius: "12px", padding: "30px", cursor: "pointer" }}>
            <div style={{ fontSize: "40px" }}>👤</div>
            <h3 style={{ color: "#fff", marginTop: "10px" }}>Profile</h3>
            <p style={{ color: "#aaa", fontSize: "14px" }}>Update your profile</p>
          </div>

          <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid #333", borderRadius: "12px", padding: "30px", cursor: "pointer" }}>
            <div style={{ fontSize: "40px" }}>🎓</div>
            <h3 style={{ color: "#fff", marginTop: "10px" }}>Certificates</h3>
            <p style={{ color: "#aaa", fontSize: "14px" }}>Your achievements</p>
          </div>

          <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid #333", borderRadius: "12px", padding: "30px", cursor: "pointer" }}>
            <div style={{ fontSize: "40px" }}>🤖</div>
            <h3 style={{ color: "#fff", marginTop: "10px" }}>AI Tutor</h3>
            <p style={{ color: "#aaa", fontSize: "14px" }}>Ask anything</p>
          </div>

        </div>

        <button onClick={handleLogout} style={{ marginTop: "40px", padding: "12px 40px", background: "transparent", color: "#ff4444", border: "2px solid #ff4444", borderRadius: "8px", fontSize: "16px", cursor: "pointer", fontWeight: "700" }}>
          Log Out
        </button>
      </div>
    </AnimatedBG>
  )
}

export default Dashboard