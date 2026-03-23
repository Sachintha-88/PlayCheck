import Header from "../Component/Header";
import Footer from "../Component/Footer";
import Games from "../Component/Games";
import onlyTrending from "../DS/onlyTrending";

function Trending() {
  const games = onlyTrending();

  return (
    <div
      className="min-h-screen flex flex-col bg-slate-950"
      style={{
        backgroundImage: `
          radial-gradient(ellipse at 20% 20%, rgba(99,102,241,0.08) 0%, transparent 50%),
          radial-gradient(ellipse at 80% 80%, rgba(167,139,250,0.06) 0%, transparent 50%)
        `,
        fontFamily: "'Rajdhani', sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&family=Rajdhani:wght@400;500;600;700&display=swap');
        *, *::before, *::after { box-sizing: border-box; }
        html { scrollbar-gutter: stable; } body { margin: 0; background: #020617; }
      `}</style>

      <Header />

      {/* Page banner — same max-width + padding as Games grid to stay aligned */}
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
        <div className="flex items-center gap-3">
          <span className="text-xl sm:text-2xl">🔥</span>
          <div>
            <h1
              className="text-base sm:text-xl font-black tracking-widest m-0"
              style={{
                fontFamily: "'Orbitron', sans-serif",
                background: 'linear-gradient(135deg, #f97316, #fb923c)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Trending Now
            </h1>
            <p className="text-slate-600 text-xs sm:text-sm mt-0.5 m-0">The hottest games everyone's playing</p>
          </div>
        </div>
        <div className="mt-2 h-[2px] rounded-full bg-gradient-to-r from-orange-500 to-transparent" />
      </div>

      <main className="flex flex-1">
        <Games games={games} title="Trending" />
      </main>

      <Footer />
    </div>
  );
}

export default Trending;