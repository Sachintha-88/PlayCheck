import { useParams , useNavigate } from "react-router-dom";
import { useState , useEffect } from "react";

import GameArray from "../Arrays/GameArray.js";
import MGameSpecArray from "../Arrays/maxGameSpecArray.js";
import mGameSpecArray from "../Arrays/minGameSpecArray.js";

function SingleGame() {

    const { id } = useParams();
    const navigate = useNavigate();

    //const [game , setGame ] = useState(null);
    //const [loading , setLoading ] = useState(true);

    //const URL = `https://corsproxy.io/?https://www.freetogame.com/api/game?id=${id}`;

    
    // useEffect(() => {
    // fetch(URL)
    // .then(res => res.json())
    // .then(data => {
    //     setGame(data);
    //     setLoading(false)})
    // .catch(err => {
    //     console.error(err);
    //     setLoading(false) })
    // }, [id]);

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
    // if(loading) {
    //     return ( 
    //         <div>loading...</div>
    //     )
    // }
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
        <div className="flex space-x-50 ">
        <div>
            <img src={game.src} alt="game pic" />
        </div>
        <div className="flex flex-col gap-10 mt-20">
                <ul className="leading-8 text-2xl ">
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
                
            <button className="mt-20 bg-green-300 bg-radial rounded outline-2 outline-offset-2"  onClick={() => navigate(-1)}>back to Home</button>
        </div>
        
        </div>
    );

  //    return (
  //   <div className="flex space-x-50">
  //     <div className=" ">
  //       <img src={game.thumbnail} alt={game.title} />
  //     </div>

  //     <div className="flex flex-col gap-10 mt-20">
  //       <ul className="leading-8 text-2xl">
  //         <li className="font-extrabold text-center mb-5 text-6xl">
  //           {game.title}
  //         </li>
  //         <li>Genre: {game.genre}</li>
  //         <li>Platform: {game.platform}</li>
  //         <li>Release Date: {game.release_date}</li>
  //         <li>Developer: {game.developer}</li>
  //       </ul>

  //       {game.minimum_system_requirements && (
  //         <ul className="text-center text-2xl mt-10">
  //           <li className="font-bold">System Requirements</li>
  //           <li>OS: {game.minimum_system_requirements.os}</li>
  //           <li>CPU: {game.minimum_system_requirements.processor}</li>
  //           <li>RAM: {game.minimum_system_requirements.memory}</li>
  //           <li>VGA: {game.minimum_system_requirements.graphics}</li>
  //           <li>Storage: {game.minimum_system_requirements.storage}</li>
  //         </ul>
  //       )}

  //       <a
  //         href={game.game_url}
  //         target="_blank"
  //         rel="noreferrer"
  //         className="mt-10 text-center bg-green-400 rounded p-3 text-xl"
  //       >
  //         ▶ Play Now
  //       </a>

  //       <button
  //         className="mt-5 bg-gray-300 rounded p-2"
  //         onClick={() => navigate(-1)}
  //       >
  //         Back to Home
  //       </button>
  //     </div>
  //   </div>
  // );
}

export default SingleGame