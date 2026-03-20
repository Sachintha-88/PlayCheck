import { useParams, useNavigate } from "react-router-dom";
import GameArray from "../Arrays/GameArray.js";
import MGameSpecArray from "../Arrays/maxGameSpecArray.js";
import mGameSpecArray from "../Arrays/minGameSpecArray.js";

const FONTS = `@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&family=Rajdhani:wght@400;500;600;700&display=swap');`;

function SpecRow({ label, value }) {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '9px 0',
      borderBottom: '1px solid rgba(255,255,255,0.05)',
    }}>
      <span style={{ color: '#475569', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: '600' }}>
        {label}
      </span>
      <span style={{ color: '#cbd5e1', fontSize: '0.9rem', fontWeight: '500', textAlign: 'right', maxWidth: '55%' }}>
        {value}
      </span>
    </div>
  );
}

function SpecCard({ title, accent, specs }) {
  return (
    <div style={{
      background: 'linear-gradient(145deg, #1e293b, #0f172a)',
      border: `1px solid ${accent}30`,
      borderTop: `3px solid ${accent}`,
      borderRadius: '14px',
      padding: '1.5rem',
      flex: 1,
      minWidth: '240px',
    }}>
      <h3 style={{
        margin: '0 0 1rem 0',
        fontFamily: "'Orbitron', sans-serif",
        fontSize: '0.8rem',
        fontWeight: '700',
        color: accent,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
      }}>
        {title}
      </h3>
      {specs.map(({ label, value }) => (
        <SpecRow key={label} label={label} value={value} />
      ))}
    </div>
  );
}

function SingleGame() {
  const { id } = useParams();
  const navigate = useNavigate();

  const games = GameArray();
  const minSpecs = mGameSpecArray();
  const maxSpecs = MGameSpecArray();

  const game = games.find(i => i.id === parseInt(id));
  const minSpec = minSpecs.find(i => i.id === parseInt(id));
  const maxSpec = maxSpecs.find(i => i.id === parseInt(id));

  const pageStyle = {
    minHeight: '100vh',
    background: '#0a0f1e',
    backgroundImage: `radial-gradient(ellipse at 20% 20%, rgba(99,102,241,0.08) 0%, transparent 50%),
                       radial-gradient(ellipse at 80% 80%, rgba(167,139,250,0.06) 0%, transparent 50%)`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '3rem 2rem',
    fontFamily: "'Rajdhani', sans-serif",
    boxSizing: 'border-box',
  };

  const errorStyle = {
    ...pageStyle,
    flexDirection: 'column',
    gap: '1rem',
  };

  if (!game) return (
    <div style={errorStyle}>
      <style>{FONTS}</style>
      <span style={{ fontSize: '3rem' }}>🎮</span>
      <h2 style={{ color: '#e2e8f0', margin: 0 }}>Game not found</h2>
      <button onClick={() => navigate(-1)} style={backBtnStyle}>← Go Back</button>
    </div>
  );

  if (!minSpec || !maxSpec) return (
    <div style={errorStyle}>
      <style>{FONTS}</style>
      <span style={{ fontSize: '3rem' }}>⚙️</span>
      <h2 style={{ color: '#e2e8f0', margin: 0 }}>Specs unavailable</h2>
      <button onClick={() => navigate(-1)} style={backBtnStyle}>← Go Back</button>
    </div>
  );

  return (
    <div style={pageStyle}>
      <style>{FONTS}</style>

      <div style={{
        maxWidth: '1100px',
        width: '100%',
        display: 'flex',
        gap: '3rem',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
      }}>

        {/* LEFT: Game image + genre badge */}
        <div style={{ flex: '0 0 340px', maxWidth: '340px' }}>
          <div style={{
            borderRadius: '18px',
            overflow: 'hidden',
            border: '1px solid rgba(255,255,255,0.08)',
            boxShadow: '0 30px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(99,102,241,0.2)',
            position: 'relative',
          }}>
            <img
              src={game.src}
              alt={game.name}
              style={{ width: '100%', display: 'block', objectFit: 'cover' }}
            />
            <div style={{
              position: 'absolute', top: '12px', left: '12px',
              background: 'rgba(99,102,241,0.9)',
              borderRadius: '8px', padding: '4px 12px',
              fontSize: '0.75rem', fontWeight: '700',
              color: '#fff', letterSpacing: '0.08em',
              textTransform: 'uppercase', backdropFilter: 'blur(4px)',
            }}>
              {typeof game.genres === 'string' ? game.genres.split(',')[0] : game.genres}
            </div>
          </div>

          {/* Back button below image */}
          <button onClick={() => navigate(-1)} style={{ ...backBtnStyle, marginTop: '1.25rem', width: '100%' }}>
            ← Back
          </button>
        </div>

        {/* RIGHT: Details */}
        <div style={{ flex: 1, minWidth: '280px' }}>

          {/* Game title */}
          <h1 style={{
            margin: '0 0 0.4rem 0',
            fontFamily: "'Orbitron', sans-serif",
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
            fontWeight: '900',
            background: 'linear-gradient(135deg, #e2e8f0, #94a3b8)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            lineHeight: 1.2,
          }}>
            {game.name}
          </h1>

          {/* Accent bar */}
          <div style={{
            width: '60px', height: '3px', borderRadius: '2px',
            background: 'linear-gradient(90deg, #6366f1, #a78bfa)',
            marginBottom: '1.5rem',
          }} />

          {/* Game meta */}
          <div style={{
            display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '2rem',
          }}>
            {[
              { label: 'Version', value: game.version },
              { label: 'Language', value: game.language },
              { label: 'Genres', value: game.genres },
            ].map(({ label, value }) => (
              <div key={label} style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '8px',
                padding: '6px 14px',
              }}>
                <div style={{ fontSize: '0.65rem', color: '#475569', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: '700' }}>
                  {label}
                </div>
                <div style={{ fontSize: '0.9rem', color: '#cbd5e1', fontWeight: '600', marginTop: '2px' }}>
                  {value}
                </div>
              </div>
            ))}
          </div>

          {/* Spec Cards */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <SpecCard
              title="Minimum Specs"
              accent="#6366f1"
              specs={[
                { label: 'OS', value: minSpec.os },
                { label: 'CPU', value: minSpec.cpu },
                { label: 'RAM', value: `${minSpec.ram} GB` },
                { label: 'GPU', value: minSpec.vga },
                { label: 'Storage', value: `${minSpec.size} GB` },
              ]}
            />
            <SpecCard
              title="Recommended Specs"
              accent="#a78bfa"
              specs={[
                { label: 'OS', value: maxSpec.os },
                { label: 'CPU', value: maxSpec.cpu },
                { label: 'RAM', value: `${maxSpec.ram} GB` },
                { label: 'GPU', value: maxSpec.vga },
                { label: 'Storage', value: `${maxSpec.size} GB` },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const backBtnStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '6px',
  padding: '10px 22px',
  background: 'rgba(99,102,241,0.12)',
  border: '1px solid rgba(99,102,241,0.3)',
  borderRadius: '10px',
  color: '#818cf8',
  fontFamily: "'Rajdhani', sans-serif",
  fontSize: '0.9rem',
  fontWeight: '700',
  letterSpacing: '0.06em',
  textTransform: 'uppercase',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  boxSizing: 'border-box',
};

export default SingleGame;