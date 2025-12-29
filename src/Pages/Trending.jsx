import Header from "../Component/Header";
import Footer from "../Component/Footer";
import { Link } from "react-router-dom";
import GameCard from "../Component/GameCard";
import bubbleSort from "../DS/bubbleSort"
import onlyTrending from "../DS/onlyTrending";

function Trending() {
    
    const games = onlyTrending();

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