import { useParams , useNavigate } from "react-router-dom";
import GameArray from "../Arrays/GameArray.js";
import MGameSpecArray from "../Arrays/maxGameSpecArray.js";
import mGameSpecArray from "../Arrays/minGameSpecArray.js";

function SingleGame() {

    const { id } = useParams();
    const navigate = useNavigate();

    const games = GameArray();
    const minSpecs = mGameSpecArray();
    const maxSpecs = MGameSpecArray();

    const game = games.find(i => i.id === parseInt(id));
    const minSpec = minSpecs.find(i => i.id === parseInt(id));
    const maxSpec = maxSpecs.find(i => i.id === parseInt(id));

      if(!game) {
        return ( 
            <div>no game</div>
        )
    }

      if(!minSpec) {
        return ( 
            <div>no min spec</div>
        )
    }
      if(!maxSpec) {
        return ( 
            <div>no max spec</div>
        )
      }
    return (
        <div className="flex space-x-50 bg-linear-to-br from-blue-500 to-white-500 min-h-screen">
        <div>
            <img src={game.src} alt="game pic" />
        </div>
        <div className="flex flex-col gap-10 mt-20">
                <ul className="leading-8 text-2xl">
                    <li className="font-extrabold text-center mb-5 text-6xl">{game.name}</li>
                    <li>Genres: {game.genres}</li>
                    <li>Version: {game.version}</li>
                    <li>Lanuguage: {game.language}</li>
                </ul>
                <div className="flex gap-20 mt-20 text-2xl">
                    <ul className="text-center">
                    <li className="font-bold">Minimum Specifications:</li>
                    <li>OS: {minSpec.os}</li>
                    <li>CPU: {minSpec.cpu}</li>
                    <li>RAM: {minSpec.ram} GB</li>
                    <li>VGA: {minSpec.vga}</li>
                    <li>File Size: {minSpec.size} GB</li>
                </ul>
                <ul className="text-center">
                    <li className="font-bold">Maximum Specifications:</li>
                    <li>OS: {maxSpec.os}</li>
                    <li>CPU: {maxSpec.cpu}</li> 
                    <li>RAM: {maxSpec.ram} GB</li>
                    <li>VGA: {maxSpec.vga}</li>
                    <li>File Size: {maxSpec.size} GB</li>  
                </ul>
                </div>
                
            <button className="w-fit px-5 py-2 mt-20 bg-blue-500 hover:bg-blue-600 bg-radial rounded outline-2 outline-offset-1"  onClick={() => navigate(-1)}>back to Home</button>
        </div>
        
        </div>
    );

}

export default SingleGame
