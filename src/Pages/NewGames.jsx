import Header from "../Component/Header"
import Footer from "../Component/Footer"
import GameArray from "../Arrays/GameArray"
import Games from "../Component/Games";

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
        <div className="newGame min-h-screen flex flex-col">
            <Header/>

            <Games games={newGames}/>

            <Footer/>
        </div>
    )
}

export default NewGames