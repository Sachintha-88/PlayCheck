import Header from "../Component/Header"
import Footer from "../Component/Footer"
import GameArray from "../Arrays/GameArray"
import { Link } from "react-router-dom";
import GameCard from "../Component/GameCard";

function NewGames() {
    
    const games = GameArray();
    const currentYear = new Date().getFullYear();
    const newGames = [];
    console.log("cye:" + currentYear)
    console.log("1cye:" + (currentYear -1))
    
    for (const game of games) {
        const gameYear = parseInt(game.date.slice(-4));
        console.log("year:" + gameYear)
        if (gameYear >= (currentYear -1)) {
            newGames.push(game)
        }
    }

    return (
        <div className="App">
            <Header/>
            
            <div className="flex flex-wrap mt-8">
                {newGames.map(game =>
                    <Link to={`/singleGame/${game.id}`}><GameCard src={game.src} name={game.name} genres={game.genres} version={game.version} language={game.language} size={game.size}/></Link>
                )}
            </div>

            <Footer/>
        </div>
    )
}

export default NewGames