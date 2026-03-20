import Header from "../Component/Header";
import Footer from "../Component/Footer";
import GameArray from "../Arrays/GameArray";
import Games from "../Component/Games";

function NewGames() {
  const games = GameArray();
  const currentYear = new Date().getFullYear();

  const newGames = games.filter(game => {
    const gameYear = parseInt(game.date.slice(-4));
    return gameYear >= currentYear - 1;
  });

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      background: '#0a0f1e',
      backgroundImage: `
        radial-gradient(ellipse at 20% 20%, rgba(99,102,241,0.08) 0%, transparent 50%),
        radial-gradient(ellipse at 80% 80%, rgba(167,139,250,0.06) 0%, transparent 50%)
      `,
    }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&family=Rajdhani:wght@400;500;600;700&display=swap'); * { box-sizing: border-box; } body { margin: 0; background: #0a0f1e; }`}</style>

      <Header />

      {/* Page title banner */}
      <div style={{
        maxWidth: '1400px',
        width: '100%',
        margin: '2rem auto 0',
        padding: '0 3rem',
        boxSizing: 'border-box',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span style={{ fontSize: '1.6rem' }}>✨</span>
          <div>
            <h1 style={{
              margin: 0,
              fontFamily: "'Orbitron', sans-serif",
              fontSize: '1.3rem',
              fontWeight: '900',
              background: 'linear-gradient(135deg, #34d399, #6ee7b7)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              letterSpacing: '0.05em',
            }}>
              New Releases
            </h1>
            <p style={{ margin: '3px 0 0', color: '#475569', fontSize: '0.85rem', fontFamily: "'Rajdhani', sans-serif" }}>
              Fresh titles from {currentYear - 1}–{currentYear}
            </p>
          </div>
        </div>
        <div style={{
          marginTop: '10px', height: '2px', borderRadius: '1px',
          background: 'linear-gradient(90deg, #34d399, transparent)',
        }} />
      </div>

      <main style={{ flex: 1 }}>
        <Games games={newGames} />
      </main>

      <Footer />
    </div>
  );
}

export default NewGames;