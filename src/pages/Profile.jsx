import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { supabase } from "../supabase"
import AnimatedBG from "../components/AnimatedBG"

function Profile() {
  const navigate = useNavigate()
  const [image, setImage] = useState(null)
  const [preview, setPreview] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleFile = (e) => {
    const file = e.target.files[0]
    setImage(file)
    setPreview(URL.createObjectURL(file))
  }

  const handleUpload = async () => {
    if (!image) return setError("Please select an image first")
    setLoading(true)
    const { data: { user } } = await supabase.auth.getUser()
    const fileExt = image.name.split(".").pop()
    const fileName = `${user.id}.${fileExt}`
    const { error: uploadError } = await supabase.storage.from("avatars").upload(fileName, image, { upsert: true })
    if (uploadError) { setError(uploadError.message); setLoading(false); return }
    const { data: { publicUrl } } = supabase.storage.from("avatars").getPublicUrl(fileName)
    await supabase.auth.updateUser({ data: { avatar_url: publicUrl } })
    setLoading(false)
    navigate("/dashboard")
  }

  return (
    <AnimatedBG>
      <div style={{ maxWidth: "400px", width: "90%", fontFamily: "Arial", textAlign: "center" }}>
        <h1 style={{ color: "#a066ff" }}>Set Up Your Profile</h1>
        <p style={{ color: "#aaa", marginTop: "10px" }}>Upload a profile picture</p>

        <div style={{ width: "120px", height: "120px", borderRadius: "50%", margin: "20px auto", border: "3px dashed #a066ff", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(255,255,255,0.05)" }}>
          {preview ? <img src={preview} style={{ width: "100%", height: "100%", objectFit: "cover" }} /> : <span style={{ color: "#aaa", fontSize: "14px" }}>No photo</span>}
        </div>

        {error && <p style={{ color: "#ff4444" }}>{error}</p>}

        <input type="file" accept="image/*" onChange={handleFile} style={{ color: "#aaa", margin: "15px 0" }} />

        <button onClick={handleUpload} disabled={loading} style={{ padding: "12px", background: "linear-gradient(135deg, #4466ff, #8833dd)", color: "white", border: "none", borderRadius: "8px", fontSize: "16px", cursor: "pointer", width: "100%", marginTop: "10px", fontWeight: "700" }}>
          {loading ? "Uploading..." : "Save Profile Picture"}
        </button>

        <button onClick={() => navigate("/dashboard")} style={{ padding: "12px", background: "transparent", color: "#a066ff", border: "2px solid #a066ff", borderRadius: "8px", fontSize: "16px", cursor: "pointer", width: "100%", marginTop: "10px", fontWeight: "700" }}>
          Skip for Now
        </button>
      </div>
    </AnimatedBG>
  )
}

export default Profile