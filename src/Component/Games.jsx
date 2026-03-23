import { useState } from 'react';
import GameCard from '../Component/GameCard';
import { Link } from 'react-router-dom';

function Games({ games, title = "All Games" }) {
  const [currentPage, setCurrentPage] = useState(1);

  const gamesPerPage = 12;
  const totalPages = Math.ceil(games.length / gamesPerPage);
  const startIndex = (currentPage - 1) * gamesPerPage;
  const currentGames = games.slice(startIndex, startIndex + gamesPerPage);

  const goTo = (page) => setCurrentPage(Math.min(Math.max(page, 1), totalPages));

  return (
    <div
      className="flex flex-col flex-1 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8"
      style={{ fontFamily: "'Rajdhani', sans-serif" }}
    >
      {/* Section heading */}
      <div className="mb-5 sm:mb-6">
        <h2 className="text-slate-100 text-lg sm:text-2xl font-bold tracking-wide m-0">
          {title}
          <span className="ml-3 text-slate-600 text-xs sm:text-sm font-medium">{games.length} titles</span>
        </h2>
        <div className="mt-1.5 w-12 h-[3px] rounded-full bg-gradient-to-r from-indigo-500 to-violet-400" />
      </div>

      {/* Responsive grid — 2 cols on mobile, 3 on sm, 4 on md, 5 on lg, 6 on xl */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 lg:gap-5 flex-1">
        {currentGames.map(game => (
          <Link key={game.id} to={`/singleGame/${game.id}`} className="no-underline">
            <GameCard
              src={game.src}
              name={game.name}
              genres={game.genres}
              version={game.version}
              language={game.language}
              size={game.size}
            />
          </Link>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-1 sm:gap-1.5 mt-8 sm:mt-10 flex-wrap">
          <PagBtn onClick={() => goTo(currentPage - 1)} disabled={currentPage === 1}>‹</PagBtn>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
            <PagBtn key={page} onClick={() => goTo(page)} active={currentPage === page}>
              {page}
            </PagBtn>
          ))}
          <PagBtn onClick={() => goTo(currentPage + 1)} disabled={currentPage === totalPages}>›</PagBtn>
        </div>
      )}
    </div>
  );
}

function PagBtn({ children, onClick, disabled, active }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`min-w-[32px] sm:min-w-[36px] h-8 sm:h-9 px-2 rounded-lg border text-sm font-semibold transition-all duration-200
        ${active
          ? 'bg-gradient-to-r from-indigo-500 to-violet-600 border-indigo-500/60 text-white'
          : disabled
            ? 'bg-white/[0.02] border-white/5 text-slate-700 cursor-default'
            : 'bg-white/[0.03] border-white/5 text-slate-400 hover:bg-indigo-500/15 hover:text-slate-100 cursor-pointer'
        }`}
      style={{ fontFamily: "'Rajdhani', sans-serif" }}
    >
      {children}
    </button>
  );
}

export default Games;