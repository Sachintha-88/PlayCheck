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
        <div className="flex space-x-50">
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
                
            <button className="mt-20 bg-gray-300 bg-radial rounded outline-2 outline-offset-1"  onClick={() => navigate(-1)}>back to Home</button>
        </div>
        
        </div>
    );

}

export default SingleGame

// import { useParams , useNavigate } from "react-router-dom";
// import GameArray from "../Arrays/GameArray.js";
// import MGameSpecArray from "../Arrays/maxGameSpecArray.js";
// import mGameSpecArray from "../Arrays/minGameSpecArray.js";

// function SingleGame() {

//     const { id } = useParams();
//     const navigate = useNavigate();

//     const games = GameArray();
//     const minSpecs = mGameSpecArray();
//     const maxSpecs = MGameSpecArray();

//     const game = games.find(i => i.id === parseInt(id));
//     const minSpec = minSpecs.find(i => i.id === parseInt(id));
//     const maxSpec = maxSpecs.find(i => i.id === parseInt(id));

//     if(!game) return <div className="text-center mt-20 text-xl">No game found</div>;
//     if(!minSpec) return <div className="text-center mt-20 text-xl">No minimum specs</div>;
//     if(!maxSpec) return <div className="text-center mt-20 text-xl">No maximum specs</div>;

//     return (
//         <div className="flex flex-col lg:flex-row h-screen">

//             <div className="w-full lg:w-1/2 h-[50vh] lg:h-full flex justify-center items-center bg-gray-200">
//                 <img 
//                     src={game.src} 
//                     alt={game.name} 
//                     className="w-full h-full object-contain"
//                 />
//             </div>

//             <div className="w-full lg:w-1/2 h-full sticky top-0 flex flex-col justify-between p-8 gap-6 overflow-auto">
//                 <div className="flex flex-col gap-10">
//                     <ul className="text-xl leading-8">
//                         <li className="font-extrabold text-5xl text-center mb-10">{game.name}</li>
//                         <li><span className="font-semibold mt-10">Genres:</span> {game.genres}</li>
//                         <li><span className="font-semibold">Version:</span> {game.version}</li>
//                         <li><span className="font-semibold">Language:</span> {game.language}</li>
//                     </ul>

//                     <div className="flex flex-col md:flex-row gap-10 text-lg">
//                         <ul className="text-center bg-gray-100 p-4 rounded shadow-md w-full md:w-1/2">
//                             <li className="font-bold mb-2">Minimum Specifications</li>
//                             <li><span className="font-semibold">OS:</span> {minSpec.os}</li>
//                             <li><span className="font-semibold">CPU:</span> {minSpec.cpu}</li>
//                             <li><span className="font-semibold">RAM:</span> {minSpec.ram} GB</li>
//                             <li><span className="font-semibold">VGA:</span> {minSpec.vga}</li>
//                             <li><span className="font-semibold">File Size:</span> {minSpec.size} GB</li>
//                         </ul>

//                         <ul className="text-center bg-gray-100 p-4 rounded shadow-md w-full md:w-1/2">
//                             <li className="font-bold mb-2">Maximum Specifications</li>
//                             <li><span className="font-semibold">OS:</span> {maxSpec.os}</li>
//                             <li><span className="font-semibold">CPU:</span> {maxSpec.cpu}</li> 
//                             <li><span className="font-semibold">RAM:</span> {maxSpec.ram} GB</li>
//                             <li><span className="font-semibold">VGA:</span> {maxSpec.vga}</li>
//                             <li><span className="font-semibold">File Size:</span> {maxSpec.size} GB</li>  
//                         </ul>
//                     </div>
//                 </div>

//                 <button 
//                     className="mt-6 ml-150 self-start px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 text-sm"
//                     onClick={() => navigate(-1)}
//                 >
//                     Back to Home
//                 </button>
//             </div>
//         </div>
//     );
// }

// export default SingleGame;
