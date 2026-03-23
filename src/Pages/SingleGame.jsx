import { useParams, useNavigate } from "react-router-dom";
import GameArray from "../Arrays/GameArray.js";
import MGameSpecArray from "../Arrays/maxGameSpecArray.js";
import mGameSpecArray from "../Arrays/minGameSpecArray.js";

function SpecRow({ label, value }) {
  return (
    <div className="flex justify-between items-center py-2 border-b border-white/[0.05]">
      <span className="text-slate-600 text-[0.65rem] uppercase tracking-widest font-semibold">{label}</span>
      <span className="text-slate-300 text-xs sm:text-sm font-medium text-right max-w-[55%]">{value}</span>
    </div>
  );
}

function SpecCard({ title, accentClass, borderClass, specs }) {
  return (
    <div className={`flex-1 min-w-[200px] bg-gradient-to-b from-slate-800 to-slate-900 rounded-2xl p-4 sm:p-5 border border-white/5 border-t-2 ${borderClass}`}>
      <h3
        className={`text-[0.7rem] font-bold uppercase tracking-[0.12em] mb-4 m-0 ${accentClass}`}
        style={{ fontFamily: "'Orbitron', sans-serif" }}
      >
        {title}
      </h3>
      {specs.map(({ label, value }) => (
        <SpecRow key={label} label={label} value={value} />
      ))}
    </div>
  );
}

function BackBtn({ onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/25 hover:border-indigo-500/50 text-indigo-400 hover:text-indigo-300 text-xs sm:text-sm font-bold uppercase tracking-widest rounded-xl transition-all duration-200 cursor-pointer ${className}`}
      style={{ fontFamily: "'Rajdhani', sans-serif" }}
    >
      ← Back
    </button>
  );
}

function SingleGame() {
  const { id } = useParams();
  const navigate = useNavigate();

  const games    = GameArray();
  const minSpecs = mGameSpecArray();
  const maxSpecs = MGameSpecArray();

  const game    = games.find(i => i.id === parseInt(id));
  const minSpec = minSpecs.find(i => i.id === parseInt(id));
  const maxSpec = maxSpecs.find(i => i.id === parseInt(id));

  const fonts = `@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&family=Rajdhani:wght@400;500;600;700&display=swap');`;

  const errorPage = (emoji, msg) => (
    <div
      className="min-h-screen bg-slate-950 flex flex-col items-center justify-center gap-4 p-8 text-center"
      style={{ fontFamily: "'Rajdhani', sans-serif" }}
    >
      <style>{fonts}</style>
      <span className="text-5xl sm:text-6xl">{emoji}</span>
      <h2 className="text-slate-200 text-xl sm:text-2xl font-bold m-0">{msg}</h2>
      <BackBtn onClick={() => navigate(-1)} />
    </div>
  );

  if (!game)             return errorPage('🎮', 'Game not found');
  if (!minSpec || !maxSpec) return errorPage('⚙️', 'Specs unavailable');

  return (
    <div
      className="min-h-screen bg-slate-950 flex items-start sm:items-center justify-center p-4 sm:p-8"
      style={{
        backgroundImage: `radial-gradient(ellipse at 20% 20%, rgba(99,102,241,0.08) 0%, transparent 50%),
                          radial-gradient(ellipse at 80% 80%, rgba(167,139,250,0.06) 0%, transparent 50%)`,
        fontFamily: "'Rajdhani', sans-serif",
      }}
    >
      <style>{fonts}</style>

      <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 max-w-[1100px] w-full items-start mt-4 sm:mt-0">

        {/* Image + back btn */}
        <div className="w-full lg:w-[300px] xl:w-[340px] flex-none">
          <div className="rounded-2xl overflow-hidden border border-white/8 shadow-[0_20px_40px_rgba(0,0,0,0.6),0_0_0_1px_rgba(99,102,241,0.2)] relative">
            <img src={game.src} alt={game.name} className="w-full block object-cover max-h-[280px] lg:max-h-none" />
            <span className="absolute top-3 left-3 bg-indigo-500/85 backdrop-blur-sm text-white text-[0.6rem] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md">
              {typeof game.genres === 'string' ? game.genres.split(',')[0] : game.genres}
            </span>
          </div>
          <BackBtn onClick={() => navigate(-1)} className="mt-3 sm:mt-4 w-full justify-center" />
        </div>

        {/* Details */}
        <div className="flex-1 min-w-0">

          {/* Title */}
          <h1
            className="text-2xl sm:text-3xl lg:text-4xl font-black leading-tight mb-1 m-0"
            style={{
              fontFamily: "'Orbitron', sans-serif",
              background: 'linear-gradient(135deg, #e2e8f0, #94a3b8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {game.name}
          </h1>
          <div className="w-14 h-[3px] rounded-full bg-gradient-to-r from-indigo-500 to-violet-400 mb-5 sm:mb-6" />

          {/* Meta pills */}
          <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
            {[
              { label: 'Version',  value: game.version  },
              { label: 'Language', value: game.language },
              { label: 'Genres',   value: game.genres   },
            ].map(({ label, value }) => (
              <div key={label} className="bg-white/5 border border-white/8 rounded-lg px-3 py-1.5">
                <div className="text-[0.58rem] text-slate-600 uppercase tracking-widest font-bold">{label}</div>
                <div className="text-slate-300 text-xs sm:text-sm font-semibold mt-0.5">{value}</div>
              </div>
            ))}
          </div>

          {/* Spec cards */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <SpecCard
              title="Minimum Specs"
              accentClass="text-indigo-400"
              borderClass="border-t-indigo-500"
              specs={[
                { label: 'OS',      value: minSpec.os  },
                { label: 'CPU',     value: minSpec.cpu },
                { label: 'RAM',     value: `${minSpec.ram} GB`  },
                { label: 'GPU',     value: minSpec.vga },
                { label: 'Storage', value: `${minSpec.size} GB` },
              ]}
            />
            <SpecCard
              title="Recommended Specs"
              accentClass="text-violet-400"
              borderClass="border-t-violet-500"
              specs={[
                { label: 'OS',      value: maxSpec.os  },
                { label: 'CPU',     value: maxSpec.cpu },
                { label: 'RAM',     value: `${maxSpec.ram} GB`  },
                { label: 'GPU',     value: maxSpec.vga },
                { label: 'Storage', value: `${maxSpec.size} GB` },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleGame;