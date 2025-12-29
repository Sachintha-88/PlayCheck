//game images
import acBrotherhood from '../assets/acbrotherhood.jpg'
import acRev from '../assets/acrev.jpg'
import fh5 from '../assets/fh5.jpg'
import acVlhlla from '../assets/acVlhlla.jpg'
import acBlackflag from '../assets/acBlackflag.jpg'
import acSyndicate from '../assets/acSydicate.jpg'
import farcry3 from '../assets/farcry3.jpg'
import farcry6 from '../assets/farcry6.jpg'
import fh4 from '../assets/fh4.jpg'
import codWWii from '../assets/codWWii.jpg'
import elderRings from '../assets/elderRings.jpg'
import ghostOfTushima from '../assets/ghostOfTushima.jpg'
import ghostOfYotei from '../assets/ghostOfYotei.jpg'
import gow from '../assets/gow.jpg'
import gowRagnok from '../assets/gowRagnok.jpg'
import gta5 from '../assets/gta5.jpg'
import HogwartsLegacy from '../assets/HogwartsLegacy.jpg'
import jCause4 from '../assets/jCause4.jpg'
import lastOfUS2 from '../assets/lastOfUS2.jpg'
import marvelSpidermn from '../assets/marvelSpidermn.jpg'
import mkX from '../assets/mkX.jpg'
import tomraider from '../assets/tomraider.jpg'
import uncharted4 from '../assets/uncharted4.jpg'
import watchDog2 from '../assets/watchDog2.jpg'
import watchDogLegion from '../assets/watchDogLegion.jpg'
import wukong from '../assets/wukong.jpg'

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
        },
        {
          id: 9,
          src: codWWii,
          name: "Call of Duty: WWII",
          genres: "Action, Shooter, War, First-person",
          version: "v1.25",
          language:"Rus/Eng/Multi",
          size: 90,
          date: "03/11/2017",
          rating: 4
        },
        {
          id: 10,
          src: elderRings,
          name: "Elden Ring",
          genres: "Action RPG, Open World, Souls-like",
          version: "v1.10",
          language:"Rus/Eng/Multi",
          size: 60,
          date: "25/02/2022",
          rating: 4
        },
        {
          id: 11,
          src: fh4,
          name: "Forza Horizon 4",
          genres: "Racing, Open World, Simulation",
          version: "v1.465",
          language:"Rus/Eng/Multi",
          size: 80,
          date: "02/10/2018",
          rating: 4
        },
        {
          id: 12,
          src: ghostOfTushima,
          name: "Ghost of Tsushima",
          genres: "Action, Open World, Adventure",
          version: "v2.18",
          language:"Rus/Eng/Multi",
          size: 75,
          date: "17/07/2020",
          rating: 4
        },
        {
          id: 13,
          src: gow,
          name: "God of War",
          genres: "Action, Adventure, Mythology",
          version: "v1.0.12",
          language:"Rus/Eng/Multi",
          size: 70,
          date: "20/04/2018",
          rating: 4
        },
        {
          id: 14,
          src: ghostOfYotei,
          name: "Ghost of Yōtei",
          genres: "Action, Open World, Adventure",
          version: "v1.0",
          language:"Rus/Eng/Multi",
          size: 85,
          date: "25/09/2025",
          rating: 4
        },
        {
          id: 15,
          src: gowRagnok,
          name: "God of War Ragnarök",
          genres: "Action, Adventure, Mythology",
          version: "v1.07",
          language:"Rus/Eng/Multi",
          size: 90,
          date: "09/11/2022",
          rating: 4
        },
        {
          id: 16,
          src: gta5,
          name: "Grand Theft Auto V",
          genres: "Action, Open World, Crime",
          version: "v1.68",
          language:"Rus/Eng/Multi",
          size: 110,
          date: "17/09/2013",
          rating: 5
        },
        {
          id: 17,
          src: HogwartsLegacy,
          name: "Hogwarts Legacy",
          genres: "Action RPG, Open World, Fantasy",
          version: "v1.0.5",
          language:"Rus/Eng/Multi",
          size: 85,
          date: "10/02/2023",
          rating: 2
        },
        {
          id: 18,
          src: jCause4,
          name: "Just Cause 4",
          genres: "Action, Open World, Shooter",
          version: "v1.41",
          language:"Rus/Eng/Multi",
          size: 60,
          date: "04/12/2018",
          rating: 1
        },
        {
          id: 19,
          src: lastOfUS2,
          name: "The Last of Us Part II",
          genres: "Action, Adventure, Survival",
          version: "v1.09",
          language:"Rus/Eng/Multi",
          size: 80,
          date: "19/06/2020",
          rating: 2
        },
        {
          id: 20,
          src: marvelSpidermn,
          name: "Marvel’s Spider-Man",
          genres: "Action, Open World, Superhero",
          version: "v1.6",
          language:"Rus/Eng/Multi",
          size: 65,
          date: "07/09/2018",
          rating: 2
        },
        {
          id: 21,
          src: mkX,
          name: "Mortal Kombat X",
          genres: "Fighting, Action, Multiplayer",
          version: "v1.16",
          language:"Rus/Eng/Multi",
          size: 40,
          date: "14/04/2015",
          rating: 2
        },
        {
          id: 22,
          src: tomraider,
          name: "Shadow of the Tomb Raider",
          genres: "Action, Adventure, Exploration",
          version: "v1.0.458",
          language:"Rus/Eng/Multi",
          size: 45,
          date: "14/09/2018",
          rating: 1
        },
        {
          id: 23,
          src: uncharted4,
          name: "Uncharted 4: A Thief’s End",
          genres: "Action, Adventure, Story-driven",
          version: "v1.33",
          language:"Rus/Eng/Multi",
          size: 55,
          date: "10/05/2016",
          rating: 2
        },
        {
          id: 24,
          src: watchDog2,
          name: "Watch Dogs 2",
          genres: "Action, Open World, Hacking",
          version: "v1.17",
          language:"Rus/Eng/Multi",
          size: 50,
          date: "15/11/2016",
          rating: 3
        },
        {
          id: 25,
          src: watchDogLegion,
          name: "Watch Dogs: Legion",
          genres: "Action, Open World, Hacking",
          version: "v1.5",
          language:"Rus/Eng/Multi",
          size: 65,
          date: "29/10/2020",
          rating: 1
        },
        {
          id: 26,
          src: wukong,
          name: "Black Myth: Wukong",
          genres: "Action RPG, Souls-like, Mythology",
          version: "v1.0",
          language:"Rus/Eng/Multi",
          size: 100,
          date: "20/08/2024",
          rating: 2
        },

        
      ]
      return games;
    }      

    export default GameArray;