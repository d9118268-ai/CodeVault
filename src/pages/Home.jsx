import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function Home() {
  const navigate = useNavigate()

  useEffect(() => {
    buildTracks()
    buildParticles()
  }, [])

  return (
    <>
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { background: #000; font-family: 'Segoe UI', sans-serif; overflow: hidden; height: 100vh; width: 100vw; }
        .bg { position: fixed; inset: 0; background: radial-gradient(ellipse at 20% 50%, #0a0a1a 0%, #000 60%); animation: bgPulse 8s ease-in-out infinite alternate; z-index: 0; }
        @keyframes bgPulse {
          0% { background: radial-gradient(ellipse at 20% 50%, #0a0a1a 0%, #000 60%); }
          50% { background: radial-gradient(ellipse at 80% 30%, #050510 0%, #000 60%); }
          100% { background: radial-gradient(ellipse at 50% 80%, #0a0010 0%, #000 60%); }
        }
        .wave-canvas { position: fixed; inset: 0; z-index: 1; opacity: 0.18; }
        .logo-track { position: fixed; z-index: 2; display: flex; align-items: center; gap: 60px; white-space: nowrap; animation: slideLeft 28s linear infinite; pointer-events: none; }
        .logo-track.row1 { top: 12%; }
        .logo-track.row2 { top: 30%; animation-duration: 22s; animation-direction: reverse; }
        .logo-track.row3 { top: 55%; animation-duration: 32s; }
        .logo-track.row4 { top: 75%; animation-duration: 19s; animation-direction: reverse; }
        @keyframes slideLeft { 0% { transform: translateX(100vw); } 100% { transform: translateX(-200%); } }
        .lang-logo { display: flex; flex-direction: column; align-items: center; gap: 6px; opacity: 0.75; filter: drop-shadow(0 0 8px currentColor); }
        .lang-logo svg { width: 48px; height: 48px; }
        .lang-logo span { font-size: 11px; font-weight: 700; letter-spacing: 1px; opacity: 0.8; }
        .center { position: fixed; inset: 0; z-index: 10; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; gap: 28px; }
        .brand-tag { font-size: 11px; letter-spacing: 4px; color: #8855ff; text-transform: uppercase; }
        .hero-title { font-size: clamp(2.8rem, 6vw, 5.5rem); font-weight: 900; line-height: 1.05; background: linear-gradient(135deg, #fff 30%, #a066ff 70%, #4488ff 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; letter-spacing: -1px; }
        .hero-sub { font-size: 1.1rem; color: rgba(255,255,255,0.45); max-width: 420px; line-height: 1.6; }
        .btn-row { display: flex; gap: 16px; align-items: center; margin-top: 8px; }
        .btn-signup { padding: 14px 36px; font-size: 1rem; font-weight: 700; border: none; border-radius: 40px; background: linear-gradient(135deg, #4466ff 0%, #8833dd 100%); color: #fff; cursor: pointer; box-shadow: 0 0 28px rgba(100,80,255,0.55); transition: transform 0.2s, box-shadow 0.2s; }
        .btn-signup:hover { transform: translateY(-2px); box-shadow: 0 0 42px rgba(120,80,255,0.75); }
        .btn-signin { padding: 14px 36px; font-size: 1rem; font-weight: 600; border-radius: 40px; background: rgba(255,255,255,0.06); color: #fff; cursor: pointer; border: 1.5px solid rgba(255,255,255,0.2); transition: background 0.2s, transform 0.2s; }
        .btn-signin:hover { background: rgba(255,255,255,0.12); transform: translateY(-2px); }
        .particles { position: fixed; inset: 0; z-index: 1; pointer-events: none; }
        .dot { position: absolute; border-radius: 50%; animation: floatDot linear infinite; opacity: 0; }
        @keyframes floatDot { 0% { opacity: 0; transform: translateY(0) scale(0.5); } 10% { opacity: 0.6; } 90% { opacity: 0.3; } 100% { opacity: 0; transform: translateY(-80vh) scale(1.2); } }
        .scanline { position: fixed; inset: 0; z-index: 3; background: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.012) 2px, rgba(255,255,255,0.012) 4px); pointer-events: none; }
      `}</style>

      <div className="bg"></div>
      <div className="scanline"></div>

      <svg className="wave-canvas" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="wg1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{stopColor:"#4455ff",stopOpacity:1}}/>
            <stop offset="100%" style={{stopColor:"#aa33ff",stopOpacity:1}}/>
          </linearGradient>
          <linearGradient id="wg2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{stopColor:"#3388ff",stopOpacity:1}}/>
            <stop offset="100%" style={{stopColor:"#6611cc",stopOpacity:1}}/>
          </linearGradient>
        </defs>
        <path fill="none" stroke="url(#wg1)" strokeWidth="1.5" opacity="0.7">
          <animate attributeName="d" dur="9s" repeatCount="indefinite"
            values="M0 450 C200 350,400 550,600 450 S900 300,1100 450 S1350 550,1440 450;M0 420 C250 520,450 320,650 420 S950 570,1150 420 S1380 300,1440 420;M0 450 C200 350,400 550,600 450 S900 300,1100 450 S1350 550,1440 450"/>
        </path>
        <path fill="none" stroke="url(#wg2)" strokeWidth="1" opacity="0.5">
          <animate attributeName="d" dur="12s" repeatCount="indefinite"
            values="M0 500 C300 400,500 600,720 500 S1050 350,1250 500 S1420 600,1440 500;M0 480 C280 580,480 380,700 480 S1030 630,1230 480 S1410 380,1440 480;M0 500 C300 400,500 600,720 500 S1050 350,1250 500 S1420 600,1440 500"/>
        </path>
      </svg>

      <div className="particles" id="particles"></div>
      <div className="logo-track row1" id="row1"></div>
      <div className="logo-track row2" id="row2"></div>
      <div className="logo-track row3" id="row3"></div>
      <div className="logo-track row4" id="row4"></div>

      <div className="center">
        <div className="brand-tag">✦ CodeVault ✦</div>
        <h1 className="hero-title">Master Coding.<br/>Build Your Future with CodeVault.</h1>
        <p className="hero-sub">The premium platform to learn real-world coding skills, earn certificates, and launch your tech career.</p>
        <div className="btn-row">
          <button className="btn-signup" onClick={() => navigate('/signup')}>Get Started Free</button>
          <button className="btn-signin" onClick={() => navigate('/login')}>Sign In</button>
        </div>
      </div>
    </>
  )
}

function buildTracks() {
  const langs = [
    { name:'Python', color:'#3776AB', html:`<svg viewBox="0 0 128 128"><path d="M63.7 2C34 2 36 14.9 36 14.9l.1 12.4h28.2v3.7H24.6S5 28.8 5 58.9s16.7 29 16.7 29h9.9v-14s-.5-16.7 16.4-16.7h28.3s15.9.3 15.9-15.3V17.8C92.2 17.8 93.4 2 63.7 2zm-15.8 9a5.4 5.4 0 110 10.8 5.4 5.4 0 010-10.8z" fill="#366994"/><path d="M64.3 126c29.7 0 27.7-12.9 27.7-12.9l-.1-12.4H63.7v-3.7h39.7s19.6 2.2 19.6-27.9S106.3 40.1 106.3 40.1h-9.9v14s.5 16.7-16.4 16.7H51.7s-15.9-.3-15.9 15.3v25.9c0 0-1.2 15.8 28.5 15.8zm15.8-9a5.4 5.4 0 110-10.8 5.4 5.4 0 010 10.8z" fill="#ffc331"/></svg>` },
    { name:'JavaScript', color:'#F7DF1E', html:`<svg viewBox="0 0 128 128"><rect width="128" height="128" fill="#F7DF1E"/><path d="M2 2h124v124H2z" fill="#F7DF1E"/><path d="M116 18H12v92h104V18zm-31.6 74.4c0 9.7-5.7 14.1-14 14.1-7.5 0-11.8-3.9-14-8.6l7.6-4.6c1.5 2.6 2.8 4.8 6 4.8 3.1 0 5-1.2 5-5.9V55.1h9.4v37.3zm-30.9.6c0 11.3-6.6 16.4-16.2 16.4-8.7 0-13.7-4.5-16.3-9.9l7.6-4.7c1.9 3.3 4.4 5.8 8.8 5.8 3.7 0 6.1-1.8 6.1-6.1V55.1h10v37.9z" fill="#323330"/></svg>` },
    { name:'HTML5', color:'#E34F26', html:`<svg viewBox="0 0 128 128"><path d="M9.5 115.9L24.3 128l14.8-12.1V6.6H9.5v109.3z" fill="#E44D26"/><path d="M64 103.5l25.3-7 3.5-39.2H64V40.8h32.5l1-11H64V19H98l3.5-13H64v98z" fill="#F16529"/><path d="M64 57.3v11.5h20.8l-2 22-18.8 5.1V96l25.3-7.1 3.5-38.6H64z" fill="#EBEBEB"/><path d="M64 29.8H35.5l1 11H64V29.8z" fill="#EBEBEB"/></svg>` },
    { name:'CSS3', color:'#1572B6', html:`<svg viewBox="0 0 128 128"><path d="M8.8 128l-6.7-75h123.8l-6.7 75-51.1 14.2L8.8 128z" fill="#1572B6"/><path d="M64 116.6l41.3-11.4 5.7-64.1H64v75.5z" fill="#33A9DC"/><path d="M64 54.3H43.4l1.4 16H64V54.3z" fill="#fff"/><path d="M64 26.1H22.5l1.4 16H64V26.1z" fill="#fff"/></svg>` },
    { name:'React', color:'#61DAFB', html:`<svg viewBox="0 0 128 128"><ellipse cx="64" cy="64" rx="18" ry="48" fill="none" stroke="#61DAFB" stroke-width="7"/><ellipse cx="64" cy="64" rx="48" ry="18" fill="none" stroke="#61DAFB" stroke-width="7" transform="rotate(60 64 64)"/><ellipse cx="64" cy="64" rx="48" ry="18" fill="none" stroke="#61DAFB" stroke-width="7" transform="rotate(120 64 64)"/><circle cx="64" cy="64" r="8" fill="#61DAFB"/></svg>` },
    { name:'TypeScript', color:'#3178C6', html:`<svg viewBox="0 0 128 128"><rect width="128" height="128" rx="6" fill="#3178C6"/><path d="M22 63.3h38.6v10H49.3v45.6H37.3V73.3H22V63.3zm77.5-.2c3.3 0 6.4.5 9.2 1.6l-2.8 10a21 21 0 00-6.9-1.3c-3.6 0-5.9 1.7-5.9 4.2 0 7.4 16.5 4.8 16.5 19.4 0 10-7.2 15.4-18.3 15.4-4.2 0-8.3-.9-11.4-2.3l2.8-10.3c2.8 1.5 6.3 2.4 9.3 2.4 4.1 0 6.2-1.7 6.2-4.5 0-7.9-16.5-5.2-16.5-19.1 0-9.5 7-15.5 17.8-15.5z" fill="white"/></svg>` },
    { name:'Node.js', color:'#339933', html:`<svg viewBox="0 0 128 128"><path d="M112.8 33.4L68.1 8.4a8.5 8.5 0 00-8.2 0L15.2 33.4A8.3 8.3 0 0011 40.6v50a8.3 8.3 0 004.2 7.2l44.7 25a8.5 8.5 0 008.2 0l44.7-25a8.3 8.3 0 004.2-7.2v-50a8.3 8.3 0 00-4.2-7.2z" fill="#3C873A"/><text x="64" y="72" text-anchor="middle" font-family="monospace" font-size="24" font-weight="bold" fill="white">JS</text></svg>` },
    { name:'Go', color:'#00ADD8', html:`<svg viewBox="0 0 128 128"><circle cx="64" cy="64" r="58" fill="#00ADD8"/><text x="64" y="80" text-anchor="middle" font-family="monospace" font-size="42" font-weight="900" fill="white">Go</text></svg>` },
    { name:'PHP', color:'#777BB4', html:`<svg viewBox="0 0 128 128"><ellipse cx="64" cy="64" rx="62" ry="38" fill="#777BB4"/><text x="64" y="72" text-anchor="middle" font-family="monospace" font-size="28" font-weight="900" fill="white">PHP</text></svg>` },
    { name:'Rust', color:'#CE422B', html:`<svg viewBox="0 0 128 128"><circle cx="64" cy="64" r="58" fill="#CE422B"/><text x="64" y="80" text-anchor="middle" font-family="Georgia,serif" font-size="52" font-weight="900" fill="white">R</text></svg>` },
    { name:'C++', color:'#00599C', html:`<svg viewBox="0 0 128 128"><circle cx="64" cy="64" r="58" fill="#00599C"/><text x="64" y="78" text-anchor="middle" font-family="monospace" font-size="38" font-weight="900" fill="white">C++</text></svg>` },
    { name:'Swift', color:'#FA7343', html:`<svg viewBox="0 0 128 128"><rect width="128" height="128" rx="26" fill="#FA7343"/><text x="64" y="78" text-anchor="middle" font-family="monospace" font-size="38" font-weight="900" fill="white">S</text></svg>` },
  ]

  const rows = [
    langs.slice(0,4),
    langs.slice(4,8),
    langs.slice(8,12),
    [langs[0],langs[2],langs[5],langs[9],langs[1],langs[7]],
  ]

  rows.forEach((row, i) => {
    const track = document.getElementById(`row${i+1}`)
    if (!track) return
    for (let r = 0; r < 3; r++) {
      row.forEach(l => {
        const el = document.createElement('div')
        el.className = 'lang-logo'
        el.innerHTML = `${l.html}<span style="color:${l.color}">${l.name}</span>`
        track.appendChild(el)
      })
    }
  })
}

function buildParticles() {
  const container = document.getElementById('particles')
  if (!container) return
  const colors = ['#4455ff','#8833dd','#3388ff','#aa33ff','#ffffff']
  for (let i = 0; i < 40; i++) {
    const dot = document.createElement('div')
    dot.className = 'dot'
    const size = Math.random() * 4 + 1.5
    const color = colors[Math.floor(Math.random() * colors.length)]
    dot.style.cssText = `width:${size}px;height:${size}px;left:${Math.random()*100}%;bottom:${Math.random()*20}%;background:${color};box-shadow:0 0 ${size*3}px ${color};animation-duration:${6+Math.random()*10}s;animation-delay:${Math.random()*10}s;`
    container.appendChild(dot)
  }
}