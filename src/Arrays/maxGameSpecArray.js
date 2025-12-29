function MGameSpecArray() {
    
    const maxGameSpecs = [
        {
                  id: 1,
                  name: "Assasin's Creed BrotherHood",
                  size: 50,
                  ram: 16,
                  vga: "GTX 1650",
                  cpu: "Intel i5-4460",
                  os: "Windows 11"
                },
                {
                  id:2,
                  name: "Forza Horizon 5",
                  size: 50,
                  ram: 16,
                  vga: "GTX 1650",
                  cpu: "Intel i5-4460",
                  os: "Windows 10"
                },
                {
                  id:3,
                  name: "Assasin's Creed Revelations",
                  size: 50,
                  ram: 16,
                  vga: "GTX 1650",
                  cpu: "Intel i5-4460",
                  os: "Windows 10"
                },
                {
                  id:4,
                  name: "Assasin's Creed Valhalla",
                  size: 50,
                  ram: 16,
                  vga: "GTX 1650",
                  cpu: "Intel i5-4460",
                  os: "Windows 10"                  
                },
                {
                  id:5,
                  name: "Assasin's Creed Black Flag",
                  size: 50,
                  ram: 16,
                  vga: "GTX 1650",
                  cpu:"Intel i5-4460", 
                   os:"Windows 10"                  
                },
                {
                   id :6, 
                   name:"Assasin's Creed Syndicate", 
                   size :22, 
                   ram :16, 
                   vga :"GTX 1650", 
                   cpu :"Intel i5-4460", 
                   os :"Windows 10"                 
                },
                {
                   id :7, 
                   name:"Far Cry 3",  
                   size :98, 
                   ram :16, 
                   vga :"GTX 1650", 
                   cpu :"Intel i5-4460", 
                   os :"Windows 10"
                },
                {
                    id :8, 
                    name:"Far Cry 6",  
                    size :40, 
                    ram :16, 
                    vga :"GTX 1650", 
                    cpu :"Intel i5-4460", 
                    os :"Windows 10"                  
                 },
                 {
                    id: 9,
                    name: "Call of Duty: WWII",
                    size: 90,
                    ram: 16,
                    vga: "GTX 1060",
                    cpu: "Intel i7-4770",
                    os: "Windows 10"
                  },
                  {
                    id: 10,
                    name: "Elden Ring",
                    size: 60,
                    ram: 16,
                    vga: "RTX 3070",
                    cpu: "Intel i7-8700K",
                    os: "Windows 10"
                  },
                  {
                    id: 11,
                    name: "Forza Horizon 4",
                    size: 80,
                    ram: 16,
                    vga: "RTX 2060",
                    cpu: "Intel i7-8700K",
                    os: "Windows 10"
                  },
                  {
                    id: 12,
                    name: "Ghost of Tsushima",
                    size: 75,
                    ram: 16,
                    vga: "RTX 3060",
                    cpu: "Intel i7-9700K",
                    os: "Windows 10"
                  },
                  {
                    id: 13,
                    name: "God of War",
                    size: 70,
                    ram: 16,
                    vga: "RTX 2060",
                    cpu: "Intel i7-8700K",
                    os: "Windows 10"
                  },
                  {
                    id: 14,
                    name: "Ghost of Yōtei",
                    size: 85,
                    ram: 32,
                    vga: "RTX 4070",
                    cpu: "Intel i7-12700K",
                    os: "Windows 11"
                  },
                  {
                    id: 15,
                    name: "God of War Ragnarök",
                    size: 90,
                    ram: 16,
                    vga: "RTX 3070",
                    cpu: "Intel i7-9700K",
                    os: "Windows 10"
                  },
                  {
                    id: 16,
                    name: "GTA V",
                    size: 110,
                    ram: 16,
                    vga: "RTX 2060",
                    cpu: "Intel i7-4790K",
                    os: "Windows 10"
                  },
                  {
                    id: 17,
                    name: "Hogwarts Legacy",
                    size: 85,
                    ram: 32,
                    vga: "RTX 3080",
                    cpu: "Intel i7-10700K",
                    os: "Windows 10"
                  },
                  {
                    id: 18,
                    name: "Just Cause 4",
                    size: 60,
                    ram: 16,
                    vga: "RTX 2060",
                    cpu: "Intel i7-7700K",
                    os: "Windows 10"
                  },
                  {
                    id: 19,
                    name: "The Last of Us Part II",
                    size: 80,
                    ram: 32,
                    vga: "RTX 3080",
                    cpu: "Intel i7-10700K",
                    os: "Windows 10"
                  },
                  {
                    id: 20,
                    name: "Marvel’s Spider-Man",
                    size: 65,
                    ram: 16,
                    vga: "RTX 3070",
                    cpu: "Intel i7-8700K",
                    os: "Windows 10"
                  },
                  {
                    id: 21,
                    name: "Mortal Kombat X",
                    size: 40,
                    ram: 16,
                    vga: "GTX 1060",
                    cpu: "Intel i7-4770",
                    os: "Windows 10"
                  },
                  {
                    id: 22,
                    name: "Shadow of the Tomb Raider",
                    size: 45,
                    ram: 16,
                    vga: "RTX 2070",
                    cpu: "Intel i7-8700K",
                    os: "Windows 10"
                  },
                  {
                    id: 23,
                    name: "Uncharted 4",
                    size: 55,
                    ram: 16,
                    vga: "RTX 2060",
                    cpu: "Intel i7-8700K",
                    os: "Windows 10"
                  },
                  {
                    id: 24,
                    name: "Watch Dogs 2",
                    size: 50,
                    ram: 16,
                    vga: "RTX 2060",
                    cpu: "Intel i7-7700K",
                    os: "Windows 10"
                  },
                  {
                    id: 25,
                    name: "Watch Dogs Legion",
                    size: 65,
                    ram: 16,
                    vga: "RTX 3070",
                    cpu: "Intel i7-9700K",
                    os: "Windows 10"
                  },
                  {
                    id: 26,
                    name: "Black Myth: Wukong",
                    size: 100,
                    ram: 32,
                    vga: "RTX 4080",
                    cpu: "Intel i9-12900K",
                    os: "Windows 11"
                  }
    ]

    return maxGameSpecs;
}

export default MGameSpecArray;