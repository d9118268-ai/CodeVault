import AnimatedBG from "../components/AnimatedBG"

function Profile() {
  return (
    <AnimatedBG>
      <div style={{ maxWidth: "400px", width: "90%", fontFamily: "Arial", textAlign: "center" }}>
        <h1 style={{ color: "#a066ff" }}>Set Up Your Profile</h1>
        <p style={{ color: "#aaa", marginTop: "10px" }}>Upload a profile picture to get started</p>
        <div style={{ width: "120px", height: "120px", borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.08)", margin: "20px auto", display: "flex", alignItems: "center", justifyContent: "center", border: "3px dashed #a066ff", overflow: "hidden" }}>
          <span style={{ color: "#aaa", fontSize: "14px" }}>No photo</span>
        </div>
        <input type="file" accept="image/*" style={{ margin: "15px 0", color: "#aaa" }} />
        <button style={{ padding: "12px", background: "linear-gradient(135deg, #4466ff, #8833dd)", color: "white", border: "none", borderRadius: "8px", fontSize: "16px", cursor: "pointer", width: "100%", marginTop: "10px", fontWeight: "700" }}>Save Profile Picture</button>
        <button style={{ padding: "12px", background: "transparent", color: "#a066ff", border: "2px solid #a066ff", borderRadius: "8px", fontSize: "16px", cursor: "pointer", width: "100%", marginTop: "10px", fontWeight: "700" }}>Skip for Now</button>
      </div>
    </AnimatedBG>
  )
}

export default Profile