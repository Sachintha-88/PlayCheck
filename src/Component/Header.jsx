

function Header() {
  return (
    <header>
      <nav className="flex items-center justify-between px-6 py-4 bg-white shadow">
        

        <h1 className="text-3xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          PlayCheck
        </h1>


        <div className="flex gap-8 text-gray-700 font-medium">
          <label href="/Home" className="cursor-pointer hover:text-blue-500">Home</label>
          <label href="/NewGames" className="cursor-pointer hover:text-blue-500">New Games</label>
          <label href="/Trending" className="cursor-pointer hover:text-blue-500">Trending</label>
        </div>


        <div className="relative w-96">
          <input
            type="text"
            placeholder="Search games..."
            className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-blue-400"
          />
          <span className="absolute right-38 top-2.5 text-gray-500 cursor-pointer">
            🔍
          </span>
        </div>

      </nav>
    </header>
  );
}

export default Header;
