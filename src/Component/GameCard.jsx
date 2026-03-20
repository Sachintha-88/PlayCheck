import PropTypes from 'prop-types';
import toast from 'react-hot-toast';

function loadGame() {
  toast.success('Game loading...', {
    style: {
      background: '#1e293b',
      color: '#e2e8f0',
      border: '1px solid rgba(99,102,241,0.3)',
      borderRadius: '10px',
    },
    iconTheme: { primary: '#818cf8', secondary: '#1e293b' }
  });
}

function GameCard(props) {
  return (
    <div
      onClick={loadGame}
      style={{
        background: 'linear-gradient(145deg, #1e293b, #0f172a)',
        border: '1px solid rgba(255,255,255,0.06)',
        borderRadius: '16px',
        overflow: 'hidden',
        width: '220px',
        cursor: 'pointer',
        transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
        fontFamily: "'Rajdhani', sans-serif",
        position: 'relative',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-6px)';
        e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(99,102,241,0.3)';
        e.currentTarget.style.borderColor = 'rgba(99,102,241,0.3)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
      }}
    >
      {/* Game Image */}
      <div style={{ position: 'relative', overflow: 'hidden', height: '140px' }}>
        <img
          src={props.src}
          alt={props.name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
            transition: 'transform 0.4s ease',
          }}
          onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.08)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
        />
        {/* Genre badge overlay */}
        <div style={{
          position: 'absolute',
          top: '8px', left: '8px',
          background: 'rgba(99,102,241,0.85)',
          borderRadius: '6px',
          padding: '2px 8px',
          fontSize: '0.7rem',
          fontWeight: '700',
          color: '#fff',
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          backdropFilter: 'blur(4px)',
        }}>
          {typeof props.genres === 'string' ? props.genres.split(',')[0] : props.genres}
        </div>
      </div>

      {/* Card Body */}
      <div style={{ padding: '14px 16px' }}>
        <h3 style={{
          margin: '0 0 10px 0',
          fontSize: '1rem',
          fontWeight: '700',
          color: '#e2e8f0',
          letterSpacing: '0.02em',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}>
          {props.name}
        </h3>

        {/* Info rows */}
        {[
          { label: 'Version', value: props.version },
          { label: 'Language', value: props.language },
          { label: 'Size', value: `${props.size} GB` },
        ].map(({ label, value }) => (
          <div key={label} style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '4px 0',
            borderBottom: '1px solid rgba(255,255,255,0.04)',
          }}>
            <span style={{ fontSize: '0.75rem', color: '#475569', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: '600' }}>
              {label}
            </span>
            <span style={{ fontSize: '0.82rem', color: '#94a3b8', fontWeight: '500' }}>
              {value}
            </span>
          </div>
        ))}

        {/* CTA */}
        <button style={{
          marginTop: '12px',
          width: '100%',
          padding: '8px',
          background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
          border: 'none',
          borderRadius: '8px',
          color: '#fff',
          fontFamily: "'Rajdhani', sans-serif",
          fontSize: '0.85rem',
          fontWeight: '700',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          cursor: 'pointer',
          transition: 'opacity 0.2s',
        }}
          onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
          onMouseLeave={e => e.currentTarget.style.opacity = '1'}
        >
          Play Now
        </button>
      </div>
    </div>
  );
}

export default GameCard;