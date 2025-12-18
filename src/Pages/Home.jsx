import Header from '../Component/Header'
import GameCard from '../Component/GameCard'
import Footer from '../Component/Footer'

import GameArray from '../Arrays/GameArray.js'

import { Link } from 'react-router-dom'

function Home() {

  const games = GameArray();

   return (
    <div className="App">
      <Header/>
      
      <div className="flex flex-wrap mt-8">
        {games.map(game =>
          <Link to={`/singleGame/${game.id}`}><GameCard src={game.src} name={game.name} genres={game.genres} version={game.version} language={game.language} size={game.size}/></Link>
        )}
      </div>
    
    <Footer/>
    </div>
   )
   
}

export default Home