import Header from '../Component/Header';
import Footer from '../Component/Footer';
import Games from '../Component/Games.jsx';
import GameArray from '../Arrays/GameArray.js';

function Home() {
  const games = GameArray();

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
      <main className="flex flex-1">
        <Games games={games} title="All Games" />
      </main>
      <Footer />
    </div>
  );
}

export default Home;