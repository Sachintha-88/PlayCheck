//game images
import acBrotherhood from '../assets/acbrotherhood.jpg'
import acRev from '../assets/acrev.jpg'
import fh5 from '../assets/fh5.jpg'
import acVlhlla from '../assets/acVlhlla.jpg'
import acBlackflag from '../assets/acBlackflag.jpg'
import acSyndicate from '../assets/acSydicate.jpg'
import farcry3 from '../assets/farcry3.jpg'
import farcry6 from '../assets/farcry6.jpg'

function GameArray() {
    const games = [
        {
          id: 1,
          src: acBrotherhood,
          name: "Assasin's Creed BrotherHood",
          genres: "Action, Open world, Stealth, Third-person",
          version: "v1.0.2",
          language:"Rus/Eng/Multi",
          size: 50,
          ram: 8,
          vga: "GTX 1650",
          cpu: "Intel i5-4460",
          date: "25/09/2025",
          rating: 5
        },
        {
          id:2,
          src: fh5,
          name: "Forza Horizon 5",
          genres: "Race, Open world, Drive, Multiplayer",
          version: "v12.0.2",
          language:"Rus/Eng/Multi",
          size: 50,
          ram: 8,
          date: "25/09/2025",
          rating: 5
        },
        {
          id:3,
          src: acRev,
          name: "Assasin's Creed Revelations",
          genres: "Action, Open world, Stealth, Third-person",
          language:"Rus/Eng/Multi",
          size: 50,
          ram: 8,
          date: "25/09/2025",
          rating: 4 
        },
        {
          id:4,
          src: acVlhlla,
          name: "Assasin's Creed Valhalla",
          genres: "Action, Open world, Stealth, Third-person",
          version: "v1.0.2" ,
          language:"Rus/Eng/Multi",
          size: 50,
          date: "25/28/2025",
          rating: 1
        },
        {
          id:5,
          src: acBlackflag,
          name: "Assasin's Creed Black Flag",
          genres: "Action, Open world, Stealth, Third-person",
          version: "v1.0.2",
          language:"Rus/Eng/Multi",
          size: 50,
          date: "25/09/2024",
          rating: 5
        },
        {
          id:6,
          src: acSyndicate,
          name: "Assasin's Creed Syndicate",
          genres: "Action, Open world, Stealth, Third-person",
          version: "v1.0.2",
          language:"Rus/Eng/Multi",
          size: 22,
          date: "25/09/2023",
          rating: 3
        },
        {
          id:7,
          src: farcry3,
          name: "Far Cry 3",  
          genres: "Action, Open world, Stealth, First-person",
          version: "v1.0.2",
          language:"Rus/Eng/Multi",
          size: 98,
          date: "25/09/2025",
          rating: 2
        },
        {
          id:8,
          src: farcry6,
          name: "Far Cry 6",  
          genres: "Action, Open world, Stealth, First-person",
          version: "v1.0.2",
          language:"Rus/Eng/Multi",
          size: 40,
          date: "25/09/2022",
          rating: 4  
        }
      ]
      return games;
    }      

    export default GameArray;