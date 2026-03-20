function Footer() {
  return (
    <footer style={{
      background: 'rgba(15, 23, 42, 0.95)',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      padding: '2.5rem 2.5rem',
      fontFamily: "'Rajdhani', sans-serif",
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1.5rem',
      }}>

        {/* Brand */}
        <div>
          <span style={{
            fontFamily: "'Orbitron', sans-serif",
            fontWeight: '900',
            fontSize: '1.4rem',
            background: 'linear-gradient(135deg, #818cf8, #a78bfa, #c084fc)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            letterSpacing: '0.05em',
          }}>
            PlayCheck
          </span>
          <p style={{
            margin: '6px 0 0 0',
            fontSize: '0.8rem',
            color: '#334155',
            letterSpacing: '0.04em',
          }}>
            Your ultimate game tracker
          </p>
        </div>

        {/* Contact */}
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
          {[
            { icon: '✉', text: 'sachinthanirmal658@gmail.com' },
            { icon: '📞', text: '+94 70 260 8006' },
          ].map(({ icon, text }) => (
            <div key={text} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: '#475569',
              fontSize: '0.875rem',
              fontWeight: '500',
            }}>
              <span style={{ fontSize: '0.9rem' }}>{icon}</span>
              <span>{text}</span>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <p style={{
          margin: 0,
          fontSize: '0.78rem',
          color: '#1e3a5f',
          letterSpacing: '0.04em',
        }}>
          © {new Date().getFullYear()} PlayCheck
        </p>
      </div>
    </footer>
  );
}

export default Footer;