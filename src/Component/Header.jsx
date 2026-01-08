import { Link } from "react-router-dom";
import { useState } from "react";
import GameArray from "../Arrays/GameArray.js";

function Header() {

  const [search , setSearch] = useState("")
  const games = GameArray();

  const filterGames = games.filter(game => game.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <header>
      <nav className="flex items-center justify-between px-6 py-4 bg-white shadow">
        

        <h1 className="text-3xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          PlayCheck
        </h1>


        <div className="flex gap-8 text-gray-700 font-medium">
          <Link to="/"><label className="cursor-pointer hover:text-blue-500">Home</label></Link>
          <Link to="/newGames"><label className="cursor-pointer hover:text-blue-500">New Games</label></Link>
          <Link to="/trending"><label className="cursor-pointer hover:text-blue-500">Trending</label></Link>
        </div>


        <div className="relative w-96">
          <input
            type="text"
            placeholder="Search games..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-4 pr-10 py-2 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-blue-400"
            // className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-blue-400"
          />

          {search && (
            <div className="absolute top-12 left-0 w-full bg-white border rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto"> 
              {filterGames.length > 0 ? (
                filterGames.map(game => (
                  <Link
                    key={game.id}
                    to={`/singleGame/${game.id}`}
                    className="block px-4 py-2 hover:bg-blue-100"
                    onClick={() => setSearch("")} >

                    {game.name}
                    </Link>
                ))
              ) : (
                <p className="px-4 py-2 text-grey-500">
                  No games Found
                </p>
              )}
            </div>
          )}
          {/* <span className="absolute right-38 top-2.5 text-gray-500 cursor-pointer">
            🔍
          </span> */}
          </div>

      </nav>
    </header>
  );
}

export default Header;
