import PropTypes from 'prop-types';
import toast from 'react-hot-toast';

function loadGame() {
    toast.success('Game loading...');
}

function GameCard(props) {
    return (
        <div className="border rounded-2xl shadow-lg p-6 m-6 max-w-xs bg-white hover:shadow-2xl transition duration-300" onClick={loadGame}>
  
  <img 
    src={props.src} 
    alt="game pic" 
    className="w-full h-40 object-cover rounded-xl mb-4"
  />

  <p className="font-semibold text-lg mb-2">Name: {props.name}</p>

  <p className="text-gray-700">
    <span className="font-medium">Genres:</span> {props.genres}
  </p>

  <p className="text-gray-700">
    <span className="font-medium">Version:</span> {props.version}
  </p>

  <p className="text-gray-700">
    <span className="font-medium">Language:</span> {props.language}
  </p>

  <p className="text-gray-700">
    <span className="font-medium">File Size:</span> {props.size}GB
  </p>

</div>

    );
}

export default GameCard;