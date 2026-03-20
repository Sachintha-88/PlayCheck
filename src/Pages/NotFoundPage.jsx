import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#0a0f1e',
      backgroundImage: `radial-gradient(ellipse at 50% 40%, rgba(99,102,241,0.1) 0%, transparent 60%)`,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: "'Rajdhani', sans-serif",
      textAlign: 'center',
      padding: '2rem',
    }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&family=Rajdhani:wght@400;500;600;700&display=swap');`}</style>

      {/* Glitchy 404 */}
      <div style={{
        fontFamily: "'Orbitron', sans-serif",
        fontSize: 'clamp(6rem, 20vw, 10rem)',
        fontWeight: '900',
        background: 'linear-gradient(135deg, #1e293b, #334155)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        lineHeight: 1,
        position: 'relative',
        userSelect: 'none',
      }}>
        404
        <span style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, #6366f1, #a78bfa)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          clipPath: 'inset(30% 0 50% 0)',
          opacity: 0.7,
        }}>
          404
        </span>
      </div>

      <div style={{
        width: '60px', height: '3px', borderRadius: '2px',
        background: 'linear-gradient(90deg, #6366f1, #a78bfa)',
        margin: '1rem auto',
      }} />

      <h2 style={{
        margin: '0 0 0.5rem',
        fontSize: '1.5rem',
        fontWeight: '700',
        color: '#e2e8f0',
        letterSpacing: '0.03em',
      }}>
        Page Not Found
      </h2>

      <p style={{
        margin: '0 0 2.5rem',
        color: '#475569',
        fontSize: '1rem',
        maxWidth: '320px',
        lineHeight: 1.6,
      }}>
        Looks like this level doesn't exist. Head back to the main lobby.
      </p>

      <Link to="/" style={{ textDecoration: 'none' }}>
        <button style={{
          padding: '12px 32px',
          background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
          border: 'none',
          borderRadius: '12px',
          color: '#fff',
          fontFamily: "'Rajdhani', sans-serif",
          fontSize: '1rem',
          fontWeight: '700',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          cursor: 'pointer',
          transition: 'opacity 0.2s, transform 0.2s',
          boxShadow: '0 8px 24px rgba(99,102,241,0.35)',
        }}
          onMouseEnter={e => { e.currentTarget.style.opacity = '0.85'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
          onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)'; }}
        >
          ← Back to Home
        </button>
      </Link>
    </div>
  );
}

export default NotFoundPage;