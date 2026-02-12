import Header from "../Component/Header";
import Footer from "../Component/Footer";
import Games from "../Component/Games";
import onlyTrending from "../DS/onlyTrending";

function Trending() {
    
    const games = onlyTrending();

    return (
        <div className="trending min-h-screen flex flex-col bg-linear-to-br from-blue-500 to-white-500">
        <Header/>

        <Games games={games}/>

        <Footer/>
        </div>
    )
}

export default Trending