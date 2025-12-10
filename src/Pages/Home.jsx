import Header from '../Component/Header'
import GameCard from '../Component/GameCard'
import acBrotherhood from '../assets/acbrotherhood.jpg'
import fh5 from '../assets/fh5.jpg'
import Footer from '../Component/Footer'

function Home() {
   return (
    <div className="App">
      <Header />
      <div className="flex flex-wrap mt-8"> 
        <GameCard src={acBrotherhood} name="Assasin's Creed BrotherHood" genres="Action, Open world, Stealth, Third-person" version="v1.0.2" language="Rus/Eng/Multi" size={50}/>
        <GameCard src={fh5} name="Forza Horizon 5" genres="Race, Open world, Drive, Multiplayer" version="v12.0.2" language="Rus/Eng/Multi" size={95}/>
        <GameCard src={acBrotherhood} name="Assasin's Creed BrotherHood" genres="Action, Open world, Stealth, Third-person" version="v1.0.2" language="Rus/Eng/Multi" size={50}/>
        <GameCard src={fh5} name="Forza Horizon 5" genres="Race, Open world, Drive, Multiplayer" version="v12.0.2" language="Rus/Eng/Multi" size={95}/>
        <GameCard src={acBrotherhood} name="Assasin's Creed BrotherHood" genres="Action, Open world, Stealth, Third-person" version="v1.0.2" language="Rus/Eng/Multi" size={50}/>
        <GameCard src={fh5} name="Forza Horizon 5" genres="Race, Open world, Drive, Multiplayer" version="v12.0.2" language="Rus/Eng/Multi" size={95}/>
        <GameCard src={acBrotherhood} name="Assasin's Creed BrotherHood" genres="Action, Open world, Stealth, Third-person" version="v1.0.2" language="Rus/Eng/Multi" size={50}/>
        <GameCard src={fh5} name="Forza Horizon 5" genres="Race, Open world, Drive, Multiplayer" version="v12.0.2" language="Rus/Eng/Multi" size={95}/>
        <GameCard src={acBrotherhood} name="Assasin's Creed BrotherHood" genres="Action, Open world, Stealth, Third-person" version="v1.0.2" language="Rus/Eng/Multi" size={50}/>
        <GameCard src={fh5} name="Forza Horizon 5" genres="Race, Open world, Drive, Multiplayer" version="v12.0.2" language="Rus/Eng/Multi" size={95}/>
        <GameCard src={acBrotherhood} name="Assasin's Creed BrotherHood" genres="Action, Open world, Stealth, Third-person" version="v1.0.2" language="Rus/Eng/Multi" size={50}/>
        <GameCard src={fh5} name="Forza Horizon 5" genres="Race, Open world, Drive, Multiplayer" version="v12.0.2" language="Rus/Eng/Multi" size={95}/>
        <GameCard src={acBrotherhood} name="Assasin's Creed BrotherHood" genres="Action, Open world, Stealth, Third-person" version="v1.0.2" language="Rus/Eng/Multi" size={50}/>
        <GameCard src={fh5} name="Forza Horizon 5" genres="Race, Open world, Drive, Multiplayer" version="v12.0.2" language="Rus/Eng/Multi" size={95}/>
    </div>
    <Footer/>
    </div>
   )
   
}

export default Home