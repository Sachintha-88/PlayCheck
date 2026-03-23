import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div
      className="min-h-screen bg-slate-950 flex flex-col items-center justify-center text-center px-6 sm:px-8"
      style={{
        backgroundImage: `radial-gradient(ellipse at 50% 40%, rgba(99,102,241,0.1) 0%, transparent 60%)`,
        fontFamily: "'Rajdhani', sans-serif",
      }}
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&family=Rajdhani:wght@400;500;600;700&display=swap');`}</style>

      {/* Glitchy 404 */}
      <div
        className="relative select-none leading-none mb-2 text-[7rem] sm:text-[10rem] font-black"
        style={{ fontFamily: "'Orbitron', sans-serif" }}
      >
        <span className="text-slate-800/80">404</span>
        <span
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, #6366f1, #a78bfa)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            clipPath: 'inset(30% 0 50% 0)',
            opacity: 0.75,
          }}
        >
          404
        </span>
      </div>

      <div className="w-14 h-[3px] rounded-full bg-gradient-to-r from-indigo-500 to-violet-400 mb-4 sm:mb-5" />

      <h2 className="text-slate-100 text-xl sm:text-2xl font-bold tracking-wide m-0 mb-2">
        Page Not Found
      </h2>
      <p className="text-slate-600 text-sm sm:text-base max-w-xs leading-relaxed mb-7 sm:mb-8">
        Looks like this level doesn't exist. Head back to the main lobby.
      </p>

      <Link to="/" className="no-underline">
        <button
          className="px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-indigo-500 to-violet-600 hover:opacity-85 hover:-translate-y-0.5 text-white font-bold uppercase tracking-widest text-sm rounded-xl transition-all duration-200 shadow-[0_8px_24px_rgba(99,102,241,0.35)] cursor-pointer"
          style={{ fontFamily: "'Rajdhani', sans-serif" }}
        >
          ← Back to Home
        </button>
      </Link>
    </div>
  );
}

export default NotFoundPage;