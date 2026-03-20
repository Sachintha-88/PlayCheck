import { useState } from 'react';
import GameCard from '../Component/GameCard';
import { Link } from 'react-router-dom';

function Games({ games }) {
  const [currentPage, setCurrentPage] = useState(1);

  const gamesPerPage = 12;
  const totalPages = Math.ceil(games.length / gamesPerPage);
  const startIndex = (currentPage - 1) * gamesPerPage;
  const currentGames = games.slice(startIndex, startIndex + gamesPerPage);

  const goTo = (page) => setCurrentPage(Math.min(Math.max(page, 1), totalPages));

  return (
    <div style={{
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      padding: '2rem 3rem',
      maxWidth: '1400px',
      width: '100%',
      margin: '0 auto',
      boxSizing: 'border-box',
      fontFamily: "'Rajdhani', sans-serif",
    }}>

      {/* Section header */}
      <div style={{ marginBottom: '1.5rem' }}>
        <h2 style={{
          margin: 0,
          fontSize: '1.5rem',
          fontWeight: '700',
          color: '#e2e8f0',
          letterSpacing: '0.03em',
        }}>
          All Games
          <span style={{ marginLeft: '12px', fontSize: '0.85rem', color: '#475569', fontWeight: '500' }}>
            {games.length} titles
          </span>
        </h2>
        <div style={{
          marginTop: '6px', width: '48px', height: '3px',
          borderRadius: '2px', background: 'linear-gradient(90deg, #6366f1, #a78bfa)',
        }} />
      </div>

      {/* Balanced grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(210px, 1fr))',
        gap: '1.25rem',
        flex: 1,
      }}>
        {currentGames.map(game => (
          <Link key={game.id} to={`/singleGame/${game.id}`} style={{ textDecoration: 'none' }}>
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
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '6px', marginTop: '2.5rem' }}>
          <PagBtn onClick={() => goTo(currentPage - 1)} disabled={currentPage === 1}>‹</PagBtn>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
            <PagBtn key={page} onClick={() => goTo(page)} active={currentPage === page}>{page}</PagBtn>
          ))}
          <PagBtn onClick={() => goTo(currentPage + 1)} disabled={currentPage === totalPages}>›</PagBtn>
        </div>
      )}
    </div>
  );
}

function PagBtn({ children, onClick, disabled, active }) {
  return (
    <button onClick={onClick} disabled={disabled} style={{
      minWidth: '36px', height: '36px', padding: '0 10px', borderRadius: '8px',
      border: active ? '1px solid rgba(99,102,241,0.6)' : '1px solid rgba(255,255,255,0.06)',
      background: active ? 'linear-gradient(135deg, #6366f1, #8b5cf6)' : 'rgba(255,255,255,0.03)',
      color: active ? '#fff' : disabled ? '#2d3f55' : '#94a3b8',
      fontFamily: "'Rajdhani', sans-serif", fontSize: '0.95rem',
      fontWeight: active ? '700' : '500', cursor: disabled ? 'default' : 'pointer', transition: 'all 0.2s ease',
    }}
      onMouseEnter={e => { if (!disabled && !active) { e.currentTarget.style.background = 'rgba(99,102,241,0.15)'; e.currentTarget.style.color = '#e2e8f0'; } }}
      onMouseLeave={e => { if (!disabled && !active) { e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; e.currentTarget.style.color = '#94a3b8'; } }}
    >{children}</button>
  );
}

export default Games;