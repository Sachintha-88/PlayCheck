import GameArray from "../Arrays/GameArray";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import { Link } from "react-router-dom";
import GameCard from "../Component/GameCard";

function Trending() {
    
    const games = GameArray();
    const trendingArr = [];

    for (const game of games) {
        if (game.rating == 5) {
            trendingArr.push(game)
        }
    }
    return (
        <div>
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

export default Trending