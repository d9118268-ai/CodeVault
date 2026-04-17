function Profile() {
  return (
    <div style={{ maxWidth: "400px", margin: "50px auto", fontFamily: "Arial", textAlign: "center" }}>
      <h1 style={{ color: "#6c63ff" }}>Set Up Your Profile</h1>
      <p style={{ color: "#888" }}>Upload a profile picture to get started</p>

      <div style={{ width: "120px", height: "120px", borderRadius: "50%", backgroundColor: "#f0f0f0", margin: "20px auto", display: "flex", alignItems: "center", justifyContent: "center", border: "3px dashed #6c63ff", overflow: "hidden" }}>
        <span style={{ color: "#aaa", fontSize: "14px" }}>No photo</span>
      </div>

      <input type="file" accept="image/*" style={{ margin: "15px 0" }} />

      <button style={{ padding: "12px 40px", backgroundColor: "#6c63ff", color: "white", border: "none", borderRadius: "8px", fontSize: "16px", cursor: "pointer", width: "100%", marginTop: "10px" }}>
        Save Profile Picture
      </button>

      <button style={{ padding: "12px 40px", backgroundColor: "white", color: "#6c63ff", border: "2px solid #6c63ff", borderRadius: "8px", fontSize: "16px", cursor: "pointer", width: "100%", marginTop: "10px" }}>
        Skip for Now
      </button>
    </div>
  )
}

export default Profile