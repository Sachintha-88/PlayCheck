import Header from '../Component/Header'
import GameCard from '../Component/GameCard'
import Footer from '../Component/Footer'

import GameArray from '../Arrays/GameArray.js'
import { Link } from 'react-router-dom'
//import { useEffect, useState } from 'react'

//const URL = "https://corsproxy.io/?https://www.freetogame.com/api/games";



function Home() {

  const games = GameArray();
  // const [games , setGames] = useState([]);

  // useEffect(() => {
  //   fetch(URL)
  //    .then(res => res.json())
  //    .then(data => setGames(data))
  //    .catch(err => console.error(err))
  // }, [])

  

   return (
    <div className="App">
      <Header/>
      
      {/* <div className='flex flex-wrap mt-8'>
        {games.map(game => 
          <Link to={`/singleGame/${game.id}`}><GameCard src={game.thumbnail} name={game.title} genres={game.genre} version={game.release_date} language={game.platform} size="Online"/></Link>
        )}
      </div> */}
        
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