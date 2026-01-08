import Header from '../Component/Header'
import Footer from '../Component/Footer'
import Games from '../Component/Games.jsx'
import bubbleSort from '../DS/bubbleSort.js'
import GameArray from '../Arrays/GameArray.js'

function Home() {

  const games = GameArray()

  return (
    <div className="App min-h-screen flex flex-col">
      <Header />
      
      <Games games={games}/>

      <Footer />
    </div>
  )
}

export default Home
