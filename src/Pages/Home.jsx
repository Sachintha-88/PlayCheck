import { useState } from 'react'
import Header from '../Component/Header'
import GameCard from '../Component/GameCard'

//game images
import acBrotherhood from '../assets/acbrotherhood.jpg'
import acRev from '../assets/acrev.jpg'
import fh5 from '../assets/fh5.jpg'
import acVlhlla from '../assets/acVlhlla.jpg'
import acBlackflag from '../assets/acBlackflag.jpg'
import acSyndicate from '../assets/acSydicate.jpg'
import farcry3 from '../assets/farcry3.jpg'
import farcry6 from '../assets/farcry6.jpg'

import Footer from '../Component/Footer'
import { Link } from 'react-router-dom'

function Home() {

  const games = [
    {
      id: 1,
      src: acBrotherhood,
      name: "Assasin's Creed BrotherHood",
      genres: "Action, Open world, Stealth, Third-person",
      version: "v1.0.2",
      language:"Rus/Eng/Multi",
      size: 50,
      date: "25/09/2025"
    },
    {
      id:2,
      src: fh5,
      name: "Forza Horizon 5",
      genres: "Race, Open world, Drive, Multiplayer",
      version: "v12.0.2",
      language:"Rus/Eng/Multi",
      size: 50,
      date: "25/09/2025"
    },
    {
      id:3,
      src: acRev,
      name: "Assasin's Creed Revelations",
      genres: "Action, Open world, Stealth, Third-person",
      language:"Rus/Eng/Multi",
      size: 50,
      date: "25/09/2025" 
    },
    {
      id:4,
      src: acVlhlla,
      name: "Assasin's Creed Valhalla",
      genres: "Action, Open world, Stealth, Third-person",
      version: "v1.0.2" ,
      language:"Rus/Eng/Multi",
      size: 50,
      date: "25/28/2025"
    },
    {
      id:5,
      src: acBlackflag,
      name: "Assasin's Creed Black Flag",
      genres: "Action, Open world, Stealth, Third-person",
      version: "v1.0.2",
      language:"Rus/Eng/Multi",
      size: 50,
      date: "25/09/2024"
    },
    {
      id:6,
      src: acSyndicate,
      name: "Assasin's Creed Syndicate",
      genres: "Action, Open world, Stealth, Third-person",
      version: "v1.0.2",
      language:"Rus/Eng/Multi",
      size: 22,
      date: "25/09/2023"
    },
    {
      id:7,
      src: farcry3,
      name: "Far Cry 3",  
      genres: "Action, Open world, Stealth, First-person",
      version: "v1.0.2",
      language:"Rus/Eng/Multi",
      size: 98,
      date: "25/09/2025"
    },
    {
      id:8,
      src: farcry6,
      name: "Far Cry 6",  
      genres: "Action, Open world, Stealth, First-person",
      version: "v1.0.2",
      language:"Rus/Eng/Multi",
      size: 40,
      date: "25/09/2022"  
    }
  ]

   return (
    <div className="App">
      <Header/>
      
      <div className="flex flex-wrap mt-8">
        {games.map(game =>
          <Link to={`/singleGame/${game.name}`}><GameCard src={game.src} name={game.name} genres={game.genres} version={game.version} language={game.language} size={game.size}/></Link>
        )}
      </div>

      {/* <div className="flex flex-wrap mt-8"> 
        <GameCard src={acBrotherhood} name="Assasin's Creed BrotherHood" genres="Action, Open world, Stealth, Third-person" version="v1.0.2" language="Rus/Eng/Multi" size={50}/>
        <GameCard src={fh5} name="Forza Horizon 5" genres="Race, Open world, Drive, Multiplayer" version="v12.0.2" language="Rus/Eng/Multi" size={95}/>
        <GameCard src={acRev} name="Assasin's Creed Revelations" genres="Action, Open world, Stealth, Third-person" version="v1.0.2" language="Rus/Eng/Multi" size={50}/>
        <GameCard src={acVlhlla} name="Assasin's Creed Valhalla" genres="Action, Open world, Stealth, Third-person" version= "v1.0.2" language="Rus/Eng/Multi" size={95}/>
        <GameCard src={acBlackflag} name="Assasin's Creed Black Flag" genres="Action, Open world, Stealth, Third-person" version="v1.0.2" language="Rus/Eng/Multi" size={50}/>
        <GameCard src={acSyndicate} name="Assasin's Creed Syndicate" genres="Action, Open world, Stealth, Third-person" version="v1.0.2" language="Rus/Eng/Multi" size={95}/>
        <GameCard src={farcry3} name="Far Cry 3" genres="Action, Open world, Stealth, First-person" version="v1.0.2" language="Rus/Eng/Multi" size={50}/>
        <GameCard src={farcry6} name="Far Cry 6"  genres="Action, Open world, Stealth, First-person" version="v1.0.2" language="Rus/Eng/Multi" size={50}/>
    </div> */}

    
    <Footer/>
    </div>
   )
   
}

export default Home