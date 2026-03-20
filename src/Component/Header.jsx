import { Link } from "react-router-dom";
import { useState } from "react";
import GameArray from "../Arrays/GameArray.js";

function Header() {
  const [search, setSearch] = useState("");
  const games = GameArray();

  const filterGames = games.filter(game =>
    game.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <header style={{ fontFamily: "'Rajdhani', 'Orbitron', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&family=Rajdhani:wght@400;500;600;700&display=swap');

        .nav-link {
          position: relative;
          color: #94a3b8;
          font-weight: 600;
          font-size: 0.95rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          text-decoration: none;
          padding-bottom: 4px;
          transition: color 0.25s ease;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0;
          width: 0; height: 2px;
          background: linear-gradient(90deg, #6366f1, #a78bfa);
          transition: width 0.3s ease;
          border-radius: 2px;
        }
        .nav-link:hover { color: #e2e8f0; }
        .nav-link:hover::after { width: 100%; }

        .search-input {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 10px;
          color: #e2e8f0;
          padding: 10px 18px;
          width: 280px;
          font-family: 'Rajdhani', sans-serif;
          font-size: 0.95rem;
          outline: none;
          transition: border 0.25s, box-shadow 0.25s;
        }
        .search-input::placeholder { color: #475569; }
        .search-input:focus {
          border-color: #6366f1;
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);
        }

        .search-dropdown {
          position: absolute;
          top: calc(100% + 8px);
          left: 0;
          width: 100%;
          background: #1e293b;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 12px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.5);
          z-index: 50;
          max-height: 240px;
          overflow-y: auto;
          animation: dropDown 0.2s ease;
        }
        @keyframes dropDown {
          from { opacity: 0; transform: translateY(-6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .search-dropdown::-webkit-scrollbar { width: 4px; }
        .search-dropdown::-webkit-scrollbar-track { background: transparent; }
        .search-dropdown::-webkit-scrollbar-thumb { background: #334155; border-radius: 4px; }

        .search-item {
          display: block;
          padding: 10px 16px;
          color: #94a3b8;
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 500;
          transition: background 0.15s, color 0.15s;
          border-radius: 8px;
          margin: 3px;
        }
        .search-item:hover { background: rgba(99,102,241,0.15); color: #e2e8f0; }

        .logo-text {
          font-family: 'Orbitron', sans-serif;
          font-weight: 900;
          font-size: 1.6rem;
          background: linear-gradient(135deg, #818cf8, #a78bfa, #c084fc);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: 0.05em;
        }
      `}</style>

      <nav style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 2rem',
        height: '68px',
        background: 'rgba(15, 23, 42, 0.95)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        backdropFilter: 'blur(12px)',
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}>
        {/* Logo */}
        <Link to="/" style={{ textDecoration: 'none' }}>
          <span className="logo-text">PlayCheck</span>
        </Link>

        {/* Nav Links */}
        <div style={{ display: 'flex', gap: '2.5rem' }}>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/newGames" className="nav-link">New Games</Link>
          <Link to="/trending" className="nav-link">Trending</Link>
        </div>

        {/* Search */}
        <div style={{ position: 'relative' }}>
          <input
            type="text"
            placeholder="Search games..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-input"
          />

          {search && (
            <div className="search-dropdown">
              {filterGames.length > 0 ? (
                filterGames.map(game => (
                  <Link
                    key={game.id}
                    to={`/singleGame/${game.id}`}
                    className="search-item"
                    onClick={() => setSearch("")}
                  >
                    {game.name}
                  </Link>
                ))
              ) : (
                <p style={{ padding: '10px 16px', color: '#475569', fontSize: '0.9rem' }}>
                  No games found
                </p>
              )}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;