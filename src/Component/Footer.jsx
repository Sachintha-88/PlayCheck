function Footer() {
  return (
    <footer
      className="bg-slate-950/95 border-t border-white/5 px-4 sm:px-8 py-6 sm:py-8 mt-auto"
      style={{ fontFamily: "'Rajdhani', sans-serif" }}
    >
      <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row flex-wrap justify-between items-center gap-4 sm:gap-6 text-center sm:text-left">

        {/* Brand */}
        <div>
          <span style={{
            fontFamily: "'Orbitron', sans-serif",
            fontWeight: 900,
            fontSize: '1.2rem',
            background: 'linear-gradient(135deg, #818cf8, #a78bfa, #c084fc)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            letterSpacing: '0.05em',
          }}>
            PlayCheck
          </span>
          <p className="text-slate-600 text-xs mt-1 tracking-wider m-0">Your ultimate game tracker</p>
        </div>

        {/* Contact */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
          {[
            { icon: '✉', text: 'sachinthanirmal658@gmail.com' },
            { icon: '📞', text: '+94 70 260 8006' },
          ].map(({ icon, text }) => (
            <div key={text} className="flex items-center justify-center sm:justify-start gap-2 text-slate-500 text-xs sm:text-sm font-medium">
              <span>{icon}</span>
              <span>{text}</span>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-slate-800 text-xs tracking-wider m-0">
          © {new Date().getFullYear()} PlayCheck
        </p>
      </div>
    </footer>
  );
}

export default Footer;