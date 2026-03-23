import toast from 'react-hot-toast';

function loadGame() {
  toast.success('Game loading...', {
    style: {
      background: '#1e293b',
      color: '#e2e8f0',
      border: '1px solid rgba(99,102,241,0.3)',
      borderRadius: '10px',
    },
    iconTheme: { primary: '#818cf8', secondary: '#1e293b' },
  });
}

function GameCard(props) {
  return (
    <div
      onClick={loadGame}
      className="group w-full bg-linear-to-b from-slate-800 to-slate-900 border border-white/5 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:border-indigo-500/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5),0_0_0_1px_rgba(99,102,241,0.25)]"
      style={{ fontFamily: "'Rajdhani', sans-serif" }}
    >
      {/* Image */}
      <div className="relative h-32 sm:h-36 overflow-hidden">
        <img
          src={props.src}
          alt={props.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <span className="absolute top-2 left-2 bg-indigo-500/85 backdrop-blur-sm text-white text-[0.6rem] font-bold uppercase tracking-widest px-2 py-0.5 rounded-md">
          {typeof props.genres === 'string' ? props.genres.split(',')[0] : props.genres}
        </span>
      </div>

      {/* Body */}
      <div className="p-3 sm:p-4">
        <h3 className="text-slate-100 font-bold text-sm sm:text-[0.95rem] tracking-wide truncate mb-2 sm:mb-3">
          {props.name}
        </h3>

        <div className="space-y-1 sm:space-y-1.5">
          {[
            { label: 'Version',  value: props.version  },
            { label: 'Language', value: props.language },
            { label: 'Size',     value: `${props.size} GB` },
          ].map(({ label, value }) => (
            <div key={label} className="flex justify-between items-center border-b border-white/[0.04] pb-1 sm:pb-1.5">
              <span className="text-slate-600 text-[0.65rem] uppercase tracking-wider font-semibold">{label}</span>
              <span className="text-slate-400 text-[0.75rem] sm:text-[0.8rem] font-medium truncate max-w-[55%] text-right">{value}</span>
            </div>
          ))}
        </div>

        <button className="mt-3 w-full py-1.5 sm:py-2 bg-linear-to-r from-indigo-500 to-violet-600 hover:opacity-85 text-white text-[0.75rem] sm:text-[0.82rem] font-bold uppercase tracking-widest rounded-lg transition-opacity duration-200">
          Play Now
        </button>
      </div>
    </div>
  );
}

export default GameCard;