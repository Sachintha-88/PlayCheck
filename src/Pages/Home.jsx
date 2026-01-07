import { useState } from 'react'
import Header from '../Component/Header'
import GameCard from '../Component/GameCard'
import Footer from '../Component/Footer'
import GameArray from '../Arrays/GameArray.js'
import { Link } from 'react-router-dom'

function Home() {

  const games = GameArray()
  const [currentPage, setCurrentPage] = useState(1)

  const gamesPerPage = 15
  const totalPages = Math.ceil(games.length / gamesPerPage)
  const startIndex = (currentPage - 1) * gamesPerPage
  const endIndex = startIndex + gamesPerPage
  const currentGames = games.slice(startIndex, endIndex)

  return (
    <div className="App">
      <Header />

      <div className="flex flex-wrap mt-8 ml-25">
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
    
      <div className="flex justify-center gap-2 mt-6">
        {totalPages > 1 && (
          <>
            <button className='cursor-pointer'
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          &lt;&lt;
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button className='cursor-pointer'
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            style={{
              fontWeight: currentPage === index + 1 ? 'bold' : 'normal'
            }}
          >
            {index + 1}
          </button>
        ))}

        <button className='cursor-pointer'
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          &gt;&gt;
        </button>
          </>
        )}
         
      </div>
    
      

      <Footer />
    </div>
  )
}

export default Home
