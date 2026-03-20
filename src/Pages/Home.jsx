import Header from '../Component/Header';
import Footer from '../Component/Footer';
import Games from '../Component/Games.jsx';
import GameArray from '../Arrays/GameArray.js';

function Home() {
  const games = GameArray();

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      background: '#0a0f1e',
      backgroundImage: `
        radial-gradient(ellipse at 20% 20%, rgba(99, 102, 241, 0.08) 0%, transparent 50%),
        radial-gradient(ellipse at 80% 80%, rgba(167, 139, 250, 0.06) 0%, transparent 50%)
      `,
    }}>

      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&family=Rajdhani:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; }
        body { margin: 0; background: #0a0f1e; }
      `}</style>

      <Header />

      <main style={{ flex: 1 }}>
        <Games games={games} />
      </main>

      <Footer />
    </div>
  );
}

export default Home;