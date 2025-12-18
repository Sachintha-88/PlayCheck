function NewGames() {
    return (
        <div className="App">
            <Header/>
            
                <div className="flex flex-wrap mt-8"> 
                    <GameCard src={acBrotherhood} name="Assasin's Creed BrotherHood" genres="Action, Open world, Stealth, Third-person" version="v1.0.2" language="Rus/Eng/Multi" size={50}/>
                    <GameCard src={fh5} name="Forza Horizon 5" genres="Race, Open world, Drive, Multiplayer" version="v12.0.2" language="Rus/Eng/Multi" size={95}/>
                    <GameCard src={acRev} name="Assasin's Creed Revelations" genres="Action, Open world, Stealth, Third-person" version="v1.0.2" language="Rus/Eng/Multi" size={50}/>
                    <GameCard src={acVlhlla} name="Assasin's Creed Valhalla" genres="Action, Open world, Stealth, Third-person" version= "v1.0.2" language="Rus/Eng/Multi" size={95}/>
                    <GameCard src={acBlackflag} name="Assasin's Creed Black Flag" genres="Action, Open world, Stealth, Third-person" version="v1.0.2" language="Rus/Eng/Multi" size={50}/>
                    <GameCard src={acSyndicate} name="Assasin's Creed Syndicate" genres="Action, Open world, Stealth, Third-person" version="v1.0.2" language="Rus/Eng/Multi" size={95}/>
                    <GameCard src={farcry3} name="Far Cry 3" genres="Action, Open world, Stealth, First-person" version="v1.0.2" language="Rus/Eng/Multi" size={50}/>
                    <GameCard src={farcry6} name="Far Cry 6"  genres="Action, Open world, Stealth, First-person" version="v1.0.2" language="Rus/Eng/Multi" size={50}/>
                </div>
            <Footer/>
        </div>
    )
}

export default NewGames