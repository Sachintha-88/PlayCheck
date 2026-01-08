import { useState } from 'react'
import GameCard from '../Component/GameCard'
import { Link } from 'react-router-dom'

function Games({ games }) {
  const [currentPage, setCurrentPage] = useState(1);

  const gamesPerPage = 12;
  const totalPages = Math.ceil(games.length / gamesPerPage);
  const startIndex = (currentPage - 1) * gamesPerPage;
  const endIndex = startIndex + gamesPerPage;
  const currentGames = games.slice(startIndex, endIndex);

  return (
    <div className="Games flex flex-col grow ml-15">

      <div className="flex flex-wrap mt-8 ml-25 gap-4 grow">
        {currentGames.map(game => (
          <Link key={game.id} to={`/singleGame/${game.id}`}>
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

      <div className="flex justify-center gap-2 mt-6 mb-4"> 
        {totalPages > 1 && (
          <>
            <button
              className="cursor-pointer"
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              &lt;&lt;
            </button>

            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                style={{ fontWeight: currentPage === index + 1 ? 'bold' : 'normal' }}
                className="cursor-pointer"
              >
                {index + 1}
              </button>
            ))}

            <button
              className="cursor-pointer"
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              &gt;&gt;
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Games;
