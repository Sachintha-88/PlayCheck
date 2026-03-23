import { Link } from "react-router-dom";
import { useState } from "react";
import GameArray from "../Arrays/GameArray.js";

function Header() {
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const games = GameArray();

  const filterGames = games.filter(game =>
    game.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <header>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&family=Rajdhani:wght@400;500;600;700&display=swap');

        .logo-text {
          font-family: 'Orbitron', sans-serif;
          font-weight: 900;
          background: linear-gradient(135deg, #818cf8, #a78bfa, #c084fc);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: 0.05em;
        }
        .nav-link {
          position: relative;
          padding-bottom: 4px;
          text-decoration: none;
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
        .nav-link:hover::after { width: 100%; }
        .search-dropdown {
          animation: dropDown 0.18s ease;
        }
        @keyframes dropDown {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .search-dropdown::-webkit-scrollbar { width: 4px; }
        .search-dropdown::-webkit-scrollbar-thumb { background: #334155; border-radius: 4px; }
      `}</style>

      {/* Desktop Nav — 3-col grid */}
      <nav className="sticky top-0 z-50 hidden md:grid md:grid-cols-3 items-center h-16 px-6 lg:px-10 bg-slate-950/95 border-b border-white/5 backdrop-blur-md">

        {/* Col 1 — Logo */}
        <div>
          <Link to="/" className="no-underline">
            <span className="logo-text text-xl lg:text-2xl">PlayCheck</span>
          </Link>
        </div>

        {/* Col 2 — Nav links */}
        <div className="flex items-center justify-center gap-6 lg:gap-8">
          {[
            { to: "/",         label: "Home"      },
            { to: "/newGames", label: "New Games" },
            { to: "/trending", label: "Trending"  },
          ].map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="nav-link text-slate-400 hover:text-slate-100 text-xs lg:text-sm font-semibold uppercase tracking-widest transition-colors duration-200"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Col 3 — Search */}
        <div className="flex justify-end">
          <div className="relative">
            <input
              type="text"
              placeholder="Search games..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-48 lg:w-64 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-200 placeholder-slate-600 text-sm font-medium outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-200"
              style={{ fontFamily: "'Rajdhani', sans-serif" }}
            />
            {search && (
              <div className="search-dropdown absolute top-[calc(100%+8px)] left-0 w-full bg-slate-800 border border-white/8 rounded-xl shadow-2xl z-50 max-h-60 overflow-y-auto">
                {filterGames.length > 0 ? (
                  filterGames.map(game => (
                    <Link
                      key={game.id}
                      to={`/singleGame/${game.id}`}
                      onClick={() => setSearch("")}
                      className="block px-4 py-2.5 mx-1 my-0.5 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-indigo-500/15 text-sm font-medium no-underline transition-colors duration-150"
                    >
                      {game.name}
                    </Link>
                  ))
                ) : (
                  <p className="px-4 py-3 text-slate-600 text-sm m-0">No games found</p>
                )}
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Nav */}
      <nav className="sticky top-0 z-50 md:hidden bg-slate-950/95 border-b border-white/5 backdrop-blur-md">
        <div className="flex items-center justify-between h-14 px-4">
          <Link to="/" className="no-underline">
            <span className="logo-text text-lg">PlayCheck</span>
          </Link>
          <button
            onClick={() => setMenuOpen(o => !o)}
            className="text-slate-400 hover:text-slate-100 p-2 transition-colors"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5">
              <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/5 bg-slate-950 px-4 pb-4 flex flex-col gap-1">
            {[
              { to: "/",         label: "Home"      },
              { to: "/newGames", label: "New Games" },
              { to: "/trending", label: "Trending"  },
            ].map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setMenuOpen(false)}
                className="block px-3 py-2.5 text-slate-400 hover:text-slate-100 hover:bg-indigo-500/10 rounded-lg text-sm font-semibold uppercase tracking-widest no-underline transition-colors"
              >
                {label}
              </Link>
            ))}

            {/* Mobile search */}
            <div className="relative mt-2">
              <input
                type="text"
                placeholder="Search games..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-200 placeholder-slate-600 text-sm outline-none focus:border-indigo-500 transition-colors"
                style={{ fontFamily: "'Rajdhani', sans-serif" }}
              />
              {search && (
                <div className="search-dropdown absolute top-[calc(100%+6px)] left-0 w-full bg-slate-800 border border-white/8 rounded-xl shadow-2xl z-50 max-h-48 overflow-y-auto">
                  {filterGames.length > 0 ? (
                    filterGames.map(game => (
                      <Link
                        key={game.id}
                        to={`/singleGame/${game.id}`}
                        onClick={() => { setSearch(""); setMenuOpen(false); }}
                        className="block px-4 py-2.5 mx-1 my-0.5 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-indigo-500/15 text-sm font-medium no-underline transition-colors"
                      >
                        {game.name}
                      </Link>
                    ))
                  ) : (
                    <p className="px-4 py-3 text-slate-600 text-sm m-0">No games found</p>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;