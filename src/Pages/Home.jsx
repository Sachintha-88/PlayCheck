import Header from '../Component/Header'
import Footer from '../Component/Footer'
import GameArray from '../Arrays/GameArray.js'
import Games from '../Component/Games.jsx'

function Home() {

  const games = GameArray()

  return (
    <div className="App min-h-screen flex flex-col">
      <Header />
      
      <main className='grow flex flex-col'>
        <Games games={games}/>
      </main>

      <Footer />
    </div>
  )
}

export default Home
