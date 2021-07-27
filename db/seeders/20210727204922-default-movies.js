'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Movies',
      [
        {
          title: 'The Shining',
          year: 1980,
          description: 'A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future.',
          director: 'Stanley Kubrick',
          cover: 'https://m.media-amazon.com/images/M/MV5BZWFlYmY2MGEtZjVkYS00YzU4LTg0YjQtYzY1ZGE3NTA5NGQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'
        },
        {
          title: 'It Follows',
          year: 2014,
          description: 'A young woman is followed by an unknown supernatural force after a sexual encounter.',
          director: 'David Robert Mitchell',
          cover: 'https://m.media-amazon.com/images/M/MV5BMmU0MjBlYzYtZWY0MC00MjliLWI3ZmUtMzhlZDVjMWVmYWY4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'
        },
        {
          title: 'The Conjuring',
          year: 2013,
          description: 'Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse.',
          director: 'James Wan',
          cover: 'https://m.media-amazon.com/images/M/MV5BMTM3NjA1NDMyMV5BMl5BanBnXkFtZTcwMDQzNDMzOQ@@._V1_SX300.jpg'
        },
        {
          title: 'The Exorcist',
          year: 1973,
          description: 'When a 12-year-old girl is possessed by a mysterious entity, her mother seeks the help of two priests to save her.',
          director: 'William Friedkin',
          cover: 'https://m.media-amazon.com/images/M/MV5BYjhmMGMxZDYtMTkyNy00YWVmLTgyYmUtYTU3ZjcwNTBjN2I1XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg'
        },
        {
          title: 'Get Out',
          year: 2017,
          description: "A young African-American visits his white girlfriend's parents for the weekend, where his simmering uneasiness about their reception of him eventually reaches a boiling point.",
          director: 'Jordan Peele',
          cover: 'https://m.media-amazon.com/images/M/MV5BMjUxMDQwNjcyNl5BMl5BanBnXkFtZTgwNzcwMzc0MTI@._V1_SX300.jpg'
        },
        {
          title: 'Psycho',
          year: 1960,
          description: "A Phoenix secretary embezzles $40,000 from her employer's client, goes on the run, and checks into a remote motel run by a young man under the domination of his mother.",
          director: 'Alfred Hitchcock',
          cover: 'https://m.media-amazon.com/images/M/MV5BNTQwNDM1YzItNDAxZC00NWY2LTk0M2UtNDIwNWI5OGUyNWUxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg'
        },
        {
          title: 'The Babadook',
          year: 2014,
          description: `A single mother and her child fall into a deep well of paranoia when an eerie children's book titled "Mister Babadook" manifests in their home.`,
          director: 'Jennifer Kent',
          cover: 'https://m.media-amazon.com/images/M/MV5BMTk0NzMzODc2NF5BMl5BanBnXkFtZTgwOTYzNTM1MzE@._V1_SX300.jpg'
        },
        {
          title: 'Night of the Living Dead',
          year: 1968,
          description: 'A ragtag group of Pennsylvanians barricade themselves in an old farmhouse to remain safe from a horde of flesh-eating ghouls that are ravaging the East Coast of the United States.',
          director: 'George A. Romero',
          cover: 'https://m.media-amazon.com/images/M/MV5BMzRmN2E1ZDUtZDc2ZC00ZmI3LTkwOTctNzE2ZDIzMGJiMTYzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'
        },
        {
          title: 'The Witch',
          year: 1906,
          description: 'A penniless troubadour consults the Fairy Carabosse about his future but offends her by paying with a bag of sand.',
          director: 'Georges Méliès',
          cover: 'https://m.media-amazon.com/images/M/MV5BYzc4MTg4OTEtOTA5OC00YWQ2LThmYTYtYzVlMWNkMzY2NjExXkEyXkFqcGdeQXVyNDE5MTU2MDE@._V1_SX300.jpg'
        },
        {
          title: 'The Birds',
          year: 1963,
          description: 'A wealthy San Francisco socialite pursues a potential boyfriend to a small Northern California town that slowly takes a turn for the bizarre when birds of all kinds suddenly begin to attack people.',
          director: 'Alfred Hitchcock',
          cover: 'https://m.media-amazon.com/images/M/MV5BMTAxNDA1ODc5MDleQTJeQWpwZ15BbWU4MDg2MDA4OTEx._V1_SX300.jpg'
        },
        {
          title: 'The Cabin in the Woods',
          year: 2011,
          description: 'Five friends go for a break at a remote cabin, where they get more than they bargained for, discovering the truth behind the cabin in the woods.',
          director: 'Drew Goddard',
          cover: 'https://m.media-amazon.com/images/M/MV5BNTUxNzYyMjg2N15BMl5BanBnXkFtZTcwMTExNzExNw@@._V1_SX300.jpg'
        },
        {
          title: 'The Thing',
          year: 1982,
          description: 'A research team in Antarctica is hunted by a shape-shifting alien that assumes the appearance of its victims.',
          director: 'John Carpenter',
          cover: 'https://m.media-amazon.com/images/M/MV5BNGViZWZmM2EtNGYzZi00ZDAyLTk3ODMtNzIyZTBjN2Y1NmM1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg'
        },
        {
          title: 'Dracula',
          year: 1992,
          description: "The centuries old vampire Count Dracula comes to England to seduce his barrister Jonathan Harker's fiancée Mina Murray and inflict havoc in the foreign land.",
          director: 'Francis Ford Coppola',
          cover: 'https://m.media-amazon.com/images/M/MV5BNjcyMDZlMTktYTIxOC00ZWFhLWJkYzgtNWNiYjAwYTFkNjIyXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg'
        },
        {
          title: 'Carrie',
          year: 1976,
          description: 'Carrie White, a shy, friendless teenage girl who is sheltered by her domineering, religious mother, unleashes her telekinetic powers after being humiliated by her classmates at her senior prom.',
          director: 'Brian De Palma',
          cover: 'https://m.media-amazon.com/images/M/MV5BMTlhNmVkZGUtNjdjOC00YWY3LTljZWQtMTY1YWFhNGYwNDQwXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg'
        },
        {
          title: 'Midsommar',
          year: 2019,
          description: "A couple travels to Scandinavia to visit a rural hometown's fabled Swedish mid-summer festival. What begins as an idyllic retreat quickly devolves into an increasingly violent and bizarre competition at the hands of a pagan cult.",
          director: 'Ari Aster',
          cover: 'https://m.media-amazon.com/images/M/MV5BMzQxNzQzOTQwM15BMl5BanBnXkFtZTgwMDQ2NTcwODM@._V1_SX300.jpg'
        },
        {
          title: 'The Evil Dead',
          year: 1981,
          description: 'Five friends travel to a cabin in the woods, where they unknowingly release flesh-possessing demons.',
          director: 'Sam Raimi',
          cover: 'https://m.media-amazon.com/images/M/MV5BODc2MmVjZmUtNjAzMS00MDNiLWIyM2YtOGEzMjg0YjRhMzRmXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'
        },
        {
          title: 'Suspiria',
          year: 1977,
          description: 'An American newcomer to a prestigious German ballet academy comes to realize that the school is a front for something sinister amid a series of grisly murders.',
          director: 'Dario Argento',
          cover: 'https://m.media-amazon.com/images/M/MV5BMjRiYTNjODctNGU1Ni00NDg3LTk0NGUtMWU0NjgyZTAyYmNjXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'
        },
        {
          title: 'Halloween',
          year: 1978,
          description: 'Fifteen years after murdering his sister on Halloween night 1963, Michael Myers escapes from a mental hospital and returns to the small town of Haddonfield, Illinois to kill again.',
          director: 'John Carpenter',
          cover: 'https://m.media-amazon.com/images/M/MV5BNzk1OGU2NmMtNTdhZC00NjdlLWE5YTMtZTQ0MGExZTQzOGQyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'
        },
        {
          title: 'Misery',
          year: 1990,
          description: 'After a famous author is rescued from a car crash by a fan of his novels, he comes to realize that the care he is receiving is only the beginning of a nightmare of captivity and abuse.',
          director: 'Rob Reiner',
          cover: 'https://m.media-amazon.com/images/M/MV5BNzY0ODQ3MTMxN15BMl5BanBnXkFtZTgwMDkwNTg4NjE@._V1_SX300.jpg'
        },
        {
          title: '28 Days Later...',
          year: 2002,
          description: 'Four weeks after a mysterious, incurable virus spreads throughout the UK, a handful of survivors try to find sanctuary.',
          director: 'Danny Boyle',
          cover: 'https://m.media-amazon.com/images/M/MV5BYTFkM2ViMmQtZmI5NS00MjQ2LWEyN2EtMTI1ZmNlZDU3MTZjXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg'
        },
        {
          title: 'A Quiet Place',
          year: 2018,
          description: 'In a post-apocalyptic world, a family is forced to live in silence while hiding from monsters with ultra-sensitive hearing.',
          director: 'John Krasinski',
          cover: 'https://m.media-amazon.com/images/M/MV5BMjI0MDMzNTQ0M15BMl5BanBnXkFtZTgwMTM5NzM3NDM@._V1_SX300.jpg'
        },
        {
          title: 'Prince of Darkness',
          year: 1987,
          description: 'A group of graduate students and scientists uncover an ancient canister in an abandoned church, but when they open the container, they inadvertently unleash a strange liquid and an evil force on all humanity.',
          director: 'John Carpenter',
          cover: 'https://m.media-amazon.com/images/M/MV5BZmI1ODg4MjYtY2U4NS00NTRlLWJlMDEtYjY2YzJkNWVhMDdiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'
        },
        {
          title: 'Poltergeist',
          year: 1982,
          description: "A family's home is haunted by a host of demonic ghosts.",
          director: 'Tobe Hooper',
          cover: 'https://m.media-amazon.com/images/M/MV5BNzliZmRlYTctYmNkYS00NzE5LWI1OWQtMTRiODY5MDMwMTVkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'
        },
        {
          title: "Child's Play",
          year: 1988,
          description: 'A single mother gives her son a much sought-after doll for his birthday, only to discover that it is possessed by the soul of a serial killer.',
          director: 'Tom Holland',
          cover: 'https://m.media-amazon.com/images/M/MV5BZGU1MjNiYWYtNGQ5MS00MTgzLTlkYjItZDhhNTdlMTkxZGVlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg'
        },
        {
          title: 'Puppet Master',
          year: 1989,
          description: 'Psychics find themselves plotted against by a former colleague, who committed suicide after discovering animated, murderous puppets.',
          director: 'David Schmoeller',
          cover: 'https://m.media-amazon.com/images/M/MV5BMTUxMTBlNjQtMTlmOC00NDljLWI0YjItMjJhNzg3MzFhY2MxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'
        },
        {
          title: 'Gremlins',
          year: 1984,
          description: 'A young man inadvertently breaks three important rules concerning his new pet and unleashes a horde of malevolently mischievous monsters on a small town.',
          director: 'Joe Dante',
          cover: 'https://m.media-amazon.com/images/M/MV5BZDVjN2FkYTQtNTBlOC00MjM5LTgzMWEtZWRlNGUyYmNiOTFiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'
        },
        {
          title: 'Creepshow',
          year: 1982,
          description: 'An anthology which tells five terrifying tales inspired by the E.C. horror comic books of the 1950s.',
          director: 'George A. Romero',
          cover: 'https://m.media-amazon.com/images/M/MV5BOTU3NGIyZTctOWEyMS00MGIyLWFkZWMtMTg0ODE2MjExNGZlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'
        },
        {
          title: 'Friday the 13th',
          year: 1980,
          description: "A group of camp counselors are stalked and murdered by an unknown assailant while trying to reopen a summer camp which was the site of a child's drowning and a grisly double murder years before.",
          director: 'Sean S. Cunningham',
          cover: 'https://m.media-amazon.com/images/M/MV5BNWMxYTYzYWQtNGZmNy00MTg5LTk1N2MtNzQ5NjQxYjQ5NTJhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'
        },
        {
          title: 'A Nightmare on Elm Street',
          year: 1984,
          description: 'The monstrous spirit of a slain child murderer seeks revenge by invading the dreams of teenagers whose parents were responsible for his untimely death.',
          director: 'Wes Craven',
          cover: 'https://m.media-amazon.com/images/M/MV5BNzFjZmM1ODgtMDBkMS00NWFlLTg2YmUtZjc3ZTgxMjE1OTI2L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg'
        },
        {
          title: 'Critters',
          year: 1986,
          description: 'A group of small but vicious alien creatures called Crites escape from an alien prison transport vessel and land near a small farm town on earth, pursued by two shape-shifting bounty hunters.',
          director: 'Stephen Herek',
          cover: 'https://m.media-amazon.com/images/M/MV5BMDE3ZWEwMGUtMmMwNC00YjE0LWFhZDUtNjJjMWFiNTI5NTY5L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNzc5MjA3OA@@._V1_SX300.jpg'
        },
        {
          title: 'Jaws',
          year: 1975,
          description: "When a killer shark unleashes chaos on a beach community, it's up to a local sheriff, a marine biologist, and an old seafarer to hunt the beast down.",
          director: 'Steven Spielberg',
          cover: 'https://m.media-amazon.com/images/M/MV5BMmVmODY1MzEtYTMwZC00MzNhLWFkNDMtZjAwM2EwODUxZTA5XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg'
        },
        {
          title: 'The Texas Chain Saw Massacre',
          year: 1974,
          description: "Two siblings and three of their friends en route to visit their grandfather's grave in Texas fall victim to a family of cannibalistic psychopaths.",
          director: 'Tobe Hooper',
          cover: 'https://m.media-amazon.com/images/M/MV5BZDI3OWE0ZWMtNGJjOS00N2E4LWFiOTAtZjQ4OTNiNzIwN2NkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'
        },
        {
          title: 'American Psycho',
          year: 2000,
          description: 'A wealthy New York City investment banking executive, Patrick Bateman, hides his alternate psychopathic ego from his co-workers and friends as he delves deeper into his violent, hedonistic fantasies.',
          director: 'Mary Harron',
          cover: 'https://m.media-amazon.com/images/M/MV5BZTM2ZGJmNjQtN2UyOS00NjcxLWFjMDktMDE2NzMyNTZlZTBiXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg'
        },
        {
          title: 'The Ring',
          year: 2002,
          description: 'A journalist must investigate a mysterious videotape which seems to cause the death of anyone one week to the day after they view it.',
          director: 'Gore Verbinski',
          cover: 'https://m.media-amazon.com/images/M/MV5BNDA2NTg2NjE4Ml5BMl5BanBnXkFtZTYwMjYxMDg5._V1_SX300.jpg'
        },
        {
          title: 'The Grudge',
          year: 2004,
          description: 'An American nurse living and working in Tokyo is exposed to a mysterious supernatural curse, one that locks a person in a powerful rage before claiming their life and spreading to another victim.',
          director: 'Takashi Shimizu',
          cover: 'https://m.media-amazon.com/images/M/MV5BMjIxODg1Nzc3NF5BMl5BanBnXkFtZTcwMjM0MjEzMw@@._V1_SX300.jpg'
        },
        {
          title: 'The Mist',
          year: 2007,
          description: 'A freak storm unleashes a species of bloodthirsty creatures on a small town, where a small band of citizens hole up in a supermarket and fight for their lives.',
          director: 'Frank Darabont',
          cover: 'https://m.media-amazon.com/images/M/MV5BMTU2NjQyNDY1Ml5BMl5BanBnXkFtZTcwMTk1MDU1MQ@@._V1_SX300.jpg'
        },
        {
          title: 'Hellraiser',
          year: 1987,
          description: 'A woman discovers the newly resurrected, partially formed, body of her brother-in-law. She starts killing for him to revitalize his body so he can escape the demonic beings that are pursuing him after he escaped their sadistic underw',
          director: 'Clive Barker',
          cover: 'https://m.media-amazon.com/images/M/MV5BOGRlZTdhOGYtODc5NS00YmJkLTkzN2UtZDMyYmRhZWM1NTQwXkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg'
        },
        {
          title: 'Basket Case',
          year: 1982,
          description: 'A young man carrying a big basket that contains his extremely deformed, formerly conjoined twin brother seeks vengeance on the doctors who separated them against their will.',
          director: 'Frank Henenlotter',
          cover: 'https://m.media-amazon.com/images/M/MV5BMzgwMjJiZmItYmU4MS00ODc5LWI2MmEtZjJhNWM1MjFkMzdjXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'
        },
        {
          title: 'Candyman',
          year: 1992,
          description: "The Candyman, a murderous soul with a hook for a hand, is accidentally summoned to reality by a skeptic grad student researching the monster's myth.",
          director: 'Bernard Rose',
          cover: 'https://m.media-amazon.com/images/M/MV5BYjVjYjhlNTQtN2UxOC00Njk5LWFjNDctODNjZTI1ZGM0ZDZkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'
        },
        {
          title: 'The Lost Boys',
          year: 1987,
          description: 'After moving to a new town, two brothers discover that the area is a haven for vampires.',
          director: 'Joel Schumacher',
          cover: 'https://m.media-amazon.com/images/M/MV5BMWEzNmUxZTMtZjY0My00OGNmLWIyNDctODM2YzZjM2YwZWEwXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'
        },
        {
          title: 'Scream',
          year: 1996,
          description: 'A year after the murder of her mother, a teenage girl is terrorized by a new killer, who targets the girl and her friends by using horror films as part of a deadly game.',
          director: 'Wes Craven',
          cover: 'https://m.media-amazon.com/images/M/MV5BMjA2NjU5MTg5OF5BMl5BanBnXkFtZTgwOTkyMzQxMDE@._V1_SX300.jpg'
        },
        {
          title: "Trick 'r Treat",
          year: 2007,
          description: 'Five interwoven stories that occur on Halloween: An everyday high school principal has a secret life as a serial killer; a college virgin might have just met the guy for her; a group of teenagers pull a mean prank; a woman who loathe',
          director: 'Michael Dougherty',
          cover: 'https://m.media-amazon.com/images/M/MV5BYmIyY2E5YjMtZDA3NC00MmIzLWFkZmItNzVlODllZWNlZmRkXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg'
        },
        {
          title: 'The Descent',
          year: 2005,
          description: 'A caving expedition goes horribly wrong, as the explorers become trapped and ultimately pursued by a strange breed of predators.',
          director: 'Neil Marshall',
          cover: 'https://m.media-amazon.com/images/M/MV5BMjA5NzQ1NTgwNV5BMl5BanBnXkFtZTcwNjUxMzUzMw@@._V1_SX300.jpg'
        },
        {
          title: 'Audition',
          year: 1997,
          description: 'Very much a Korean version of "Tootsie"....Park Jin-Wu, is a handsome young Korean playboy/womanizer who dreams of becoming a model/actor. However, his role is behind the scenes...working ...',
          director: 'Gyeong-min Lee',
          cover: 'https://upload.wikimedia.org/wikipedia/en/3/32/Audition-1999-poster.jpg'
        },
        {
          title: 'Scary Stories to Tell in the Dark',
          year: 2019,
          description: 'On Halloween 1968, Stella and her two friends meet a mysterious drifter, Ramón, and uncover a sinister notebook of stories.',
          director: 'André Øvredal',
          cover: 'https://m.media-amazon.com/images/M/MV5BMmI1MGE0ODMtYWRlZC00ZDUxLWIyNGItYjgyNzhhMTRlOTI2XkEyXkFqcGdeQXVyOTQ5MTIwMjM@._V1_SX300.jpg'
        },
        {
          title: 'The Others',
          year: 2001,
          description: 'A woman who lives in her darkened old family house with her two photosensitive children becomes convinced that the home is haunted.',
          director: 'Alejandro Amenábar',
          cover: 'https://m.media-amazon.com/images/M/MV5BMTAxMDE4Mzc3ODNeQTJeQWpwZ15BbWU4MDY2Mjg4MDcx._V1_SX300.jpg'
        },
        {
          title: 'Tremors',
          year: 1990,
          description: 'Natives of a small isolated town defend themselves against strange underground creatures which are killing them one by one.',
          director: 'Ron Underwood',
          cover: 'https://m.media-amazon.com/images/M/MV5BMTEzNjkwMzIyMjZeQTJeQWpwZ15BbWU4MDI2NTU5ODYx._V1_SX300.jpg'
        },
        {
          title: 'Carnival of Souls',
          year: 1962,
          description: 'After a traumatic accident, a woman becomes drawn to a mysterious abandoned carnival.',
          director: 'Herk Harvey',
          cover: 'https://m.media-amazon.com/images/M/MV5BYjgxYjI1ODktNWYyNy00N2EyLWFhOWEtMmI1ZmU3ZmU5ZWFjXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg'
        },
        {
          title: 'Paranormal Activity',
          year: 2007,
          description: 'After moving into a suburban home, a couple becomes increasingly disturbed by a nightly demonic presence.',
          director: 'Oren Peli',
          cover: 'https://m.media-amazon.com/images/M/MV5BMjY1NjcxODQ4MV5BMl5BanBnXkFtZTcwMzUxNjM4Mg@@._V1_SX300.jpg'
        },
        {
          title: 'The Blair Witch Project',
          year: 1999,
          description: 'Three film students vanish after traveling into a Maryland forest to film a documentary on the local Blair Witch legend, leaving only their footage behind.',
          director: 'Daniel Myrick, Eduardo Sánchez',
          cover: 'https://m.media-amazon.com/images/M/MV5BNzQ1NDBlNDItMDAyYS00YTI2LTgwMmYtMzAwMzg4NDFlM2ZmXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'
        },
        {
          title: 'House on Haunted Hill',
          year: 1999,
          description: 'An amusement park mogul offers a group of diverse people $1,000,000 to spend the night in a haunted house with a horrifying past.',
          director: 'William Malone',
          cover: 'https://m.media-amazon.com/images/M/MV5BNzUwYWQzZDQtMDQ0Mi00NjFlLTgzNjAtNTFhZmZhNWY4NGEzL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg'
        },
        {
          title: 'Slither',
          year: 2006,
          description: 'A small town is taken over by an alien plague, turning residents into zombies and all forms of mutant monsters.',
          director: 'James Gunn',
          cover: 'https://m.media-amazon.com/images/M/MV5BYjI0MDVlOGUtMjNjNS00ZGI1LTgxMzQtNWIyM2QyN2RkYjRhXkEyXkFqcGdeQXVyMjQwMjk0NjI@._V1_SX300.jpg'
        },
        {
          title: 'The Dead Alive',
          year: 1916,
          description: 'Old Jim loses his money in the gambling house of "Doc" Ardini, an international crook. Feeling sorry for the old man, Ardini gives him a job. He will not write his motherless twin daughters...',
          director: 'Henry J. Vernot',
          cover: 'https://m.media-amazon.com/images/M/MV5BNGI4OTVkOWMtYzRiNS00NzhhLWJjMzYtNzJhMGI5NjA2Y2U4XkEyXkFqcGdeQXVyNjA5MTAzODY@._V1_SX300.jpg'
        },
        {
          title: 'It',
          year: 2017,
          description: 'In the summer of 1989, a group of bullied kids band together to destroy a shape-shifting monster, which disguises itself as a clown and preys on the children of Derry, their small Maine town.',
          director: 'Andy Muschietti',
          cover: 'https://m.media-amazon.com/images/M/MV5BZDVkZmI0YzAtNzdjYi00ZjhhLWE1ODEtMWMzMWMzNDA0NmQ4XkEyXkFqcGdeQXVyNzYzODM3Mzg@._V1_SX300.jpg'
        },
        {
          title: 'Let the Right One In',
          year: 2017,
          description: 'A bullied young boy befriends with a peculiar young girl who just moved in to his small hometown with her mysterious caretaker. Meanwhile, a series of strange murders occur which draws the attention of law enforcement.',
          director: 'Tomas Alfredson',
          cover: 'https://upload.wikimedia.org/wikipedia/en/c/c9/Let_the_Right_One_In_%28Swedish%29.jpg'
        },
        {
          title: 'An American Werewolf in London',
          year: 1981,
          description: 'Two American college students on a walking tour of Britain are attacked by a werewolf that none of the locals will admit exists.',
          director: 'John Landis',
          cover: 'https://m.media-amazon.com/images/M/MV5BZGNmYWQzMGEtNDlhMS00NzEwLTkzMDItMDQ4MjkyMzRkNjFiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'
        },
        {
          title: 'The Omen',
          year: 1976,
          description: "Mysterious deaths surround an American ambassador. Could the child that he is raising actually be the Antichrist? The Devil's own son?",
          director: 'Richard Donner',
          cover: 'https://m.media-amazon.com/images/M/MV5BZmNjZDcwNTMtMjQxMy00ZTY5LTg4M2YtYjA5NDliNjNhYzQ3XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg'
        },
        {
          title: 'Ginger Snaps',
          year: 2000,
          description: 'Two death-obsessed sisters, outcasts in their suburban neighborhood, must deal with the tragic consequences when one of them is bitten by a deadly werewolf.',
          director: 'John Fawcett',
          cover: 'https://m.media-amazon.com/images/M/MV5BMjY4OWNjYWQtODM2NC00MDk3LTgzMDgtM2QzZWFmYTNlNDk2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'
        },
        {
          title: 'Crawl',
          year: 2019,
          description: 'A young woman, while attempting to save her father during a category 5 hurricane, finds herself trapped in a flooding house and must fight for her life against alligators.',
          director: 'Alexandre Aja',
          cover: 'https://m.media-amazon.com/images/M/MV5BNTk4MTliYzgtOGI2Ni00N2I5LTg4MjktZTkzZTE0MWVjNGEyXkEyXkFqcGdeQXVyMTA3MTA4Mzgw._V1_SX300.jpg'
        },
        {
          title: 'Duel',
          year: 1971,
          description: 'A business commuter is pursued and terrorized by the malevolent driver of a massive tractor-trailer.',
          director: 'Steven Spielberg',
          cover: 'https://m.media-amazon.com/images/M/MV5BNzRkNjE4NjQtZTQ2NC00YTg1LThiZTMtNmRhYmQzODBlMDc2XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg'
        },
        {
          title: 'Bone Tomahawk',
          year: 2015,
          description: "In the dying days of the old west, an elderly sheriff and his posse set out to rescue their town's doctor from cannibalistic cave dwellers.",
          director: 'S. Craig Zahler',
          cover: 'https://m.media-amazon.com/images/M/MV5BMzQ0MzE4OTUzMF5BMl5BanBnXkFtZTgwODAyNzI3NjE@._V1_SX300.jpg'
        },
        {
          title: 'Fright Night',
          year: 2011,
          description: 'When a nice new neighbor moves in next door, Charley discovers that he is an ancient vampire who preys on the community. Can he save his neighborhood from the creature with the help of the famous "vampire killer", Peter Vincent?',
          director: 'Craig Gillespie',
          cover: 'https://m.media-amazon.com/images/M/MV5BMTU2MDc0NDY0M15BMl5BanBnXkFtZTcwOTgzMTYyNQ@@._V1_SX300.jpg'
        },
        {
          title: 'Let Me In',
          year: 2010,
          description: 'A bullied young boy befriends a young female vampire who lives in secrecy with her guardian.',
          director: 'Matt Reeves',
          cover: 'https://m.media-amazon.com/images/M/MV5BNDQ4MjQ4OTMwMF5BMl5BanBnXkFtZTcwOTYzNDc4Mw@@._V1_SX300.jpg'
        },
        {
          title: 'The Mummy',
          year: 1999,
          description: 'At an archaeological dig in the ancient city of Hamunaptra, an American serving in the French Foreign Legion accidentally awakens a mummy who begins to wreak havoc as he searches for the reincarnation of his long-lost love.',
          director: 'Stephen Sommers',
          cover: 'https://m.media-amazon.com/images/M/MV5BOTJiYjBhZDgtMjhiOC00MTIzLThlNGMtMmI1NjIwM2M3YTI5XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'
        },
        {
          title: 'Attack the Block',
          year: 2011,
          description: 'A teen gang in South London defend their block from an alien invasion.',
          director: 'Joe Cornish',
          cover: 'https://m.media-amazon.com/images/M/MV5BMjAzNjc1MjgzOF5BMl5BanBnXkFtZTcwMzE3Njk5NQ@@._V1_SX300.jpg'
        },
        {
          title: "The Devil's Backbone",
          year: 1970,
          description: 'Army deserter Capt. Viktor Kaleb is offered a pardon and reinstatement in the cavalry if he agrees to lead a special forces group in a raid against an Apache stronghold into Mexico.',
          director: 'Burt Kennedy, Niksa Fulgosi',
          cover: 'https://m.media-amazon.com/images/M/MV5BOTMyZmNkZDYtODlmMi00ODcxLTkzMjUtZDYyMTljNWJkODY3XkEyXkFqcGdeQXVyNzc5MjA3OA@@._V1_SX300.jpg'
        },
        {
          title: 'We Are Still Here',
          year: 2015,
          description: 'In the cold, wintery fields of New England, a lonely old house wakes up every thirty years - and demands a sacrifice.',
          director: 'Ted Geoghegan',
          cover: 'https://m.media-amazon.com/images/M/MV5BMjQwMzgzMjczOV5BMl5BanBnXkFtZTgwNDk2MTUxNTE@._V1_SX300.jpg'
        },
        {
          title: 'Housebound',
          year: 2014,
          description: 'A young woman is forced to return to her childhood home after being placed under house arrest, where she suspects that something evil may be lurking.',
          director: 'Gerard Johnstone',
          cover: 'https://m.media-amazon.com/images/M/MV5BMTUxNTA5NTAzM15BMl5BanBnXkFtZTgwODE2NDkyMjE@._V1_SX300.jpg'
        },
        {
          title: 'Eraserhead',
          year: 1977,
          description: 'Henry Spencer tries to survive his industrial environment, his angry girlfriend, and the unbearable screams of his newly born mutant child.',
          director: 'David Lynch',
          cover: 'https://m.media-amazon.com/images/M/MV5BMDExYzg5YjQtMzE0Yy00OWJjLThiZTctMWI5MzhjM2RmNjA4L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg'
        },
        {
          title: 'The Wolf Man',
          year: 1941,
          description: "Larry Talbot returns to his father's castle in Wales and meets a beautiful woman. One fateful night, Talbot escorts her to a local carnival where they meet a mysterious gypsy fortune teller.",
          director: 'George Waggner',
          cover: 'https://m.media-amazon.com/images/M/MV5BODRmMDBjMTYtZmJiZi00Mzk3LWFhZDAtMDExNDFhMWQzNzEyXkEyXkFqcGdeQXVyNDY2MTk1ODk@._V1_SX300.jpg'
        },
        {
          title: 'Phantom of the Opera',
          year: 1943,
          description: "An acid-scarred composer rises from the Paris sewers to boost his favorite opera understudy's career.",
          director: 'Arthur Lubin',
          cover: 'https://m.media-amazon.com/images/M/MV5BZjFmZTI0YzgtMDFjNi00YTJmLWI4NzgtYzVlYjVmMzAzMDliXkEyXkFqcGdeQXVyMDI2NDg0NQ@@._V1_SX300.jpg'
        },
        {
          title: "Don't Breathe",
          year: 2016,
          description: "Hoping to walk away with a massive fortune, a trio of thieves break into the house of a blind man who isn't as helpless as he seems.",
          director: 'Fede Alvarez',
          cover: 'https://m.media-amazon.com/images/M/MV5BZGI5ZTU2M2YtZWY4MC00ZDFhLTliYTItZTk1NjdlN2NkMzg2XkEyXkFqcGdeQXVyMjY5ODI4NDk@._V1_SX300.jpg'
        },
        {
          title: 'Re-Animator',
          year: 1985,
          description: 'After an odd new medical student arrives on campus, a dedicated local and his girlfriend become involved in bizarre experiments centering around the re-animation of dead tissue.',
          director: 'Stuart Gordon',
          cover: 'https://m.media-amazon.com/images/M/MV5BNDRjNjRlNmYtZGVkOS00ODA1LWFmMTEtZmY1MWY5ZGM5OWUxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'
        },
        {
          title: 'Zombieland',
          year: 2009,
          description: 'A shy student trying to reach his family in Ohio, a gun-toting bruiser in search or the last Twinkie and a pair of sisters striving to get to an amusement park join forces in a trek across a zombie-filled America.',
          director: 'Ruben Fleischer',
          cover: 'https://m.media-amazon.com/images/M/MV5BMTU5MDg0NTQ1N15BMl5BanBnXkFtZTcwMjA4Mjg3Mg@@._V1_SX300.jpg'
        },
        {
          title: 'It Comes at Night',
          year: 2017,
          description: 'Secure within a desolate home as an unnatural threat terrorizes the world, a man has established a tenuous domestic order with his wife and son. Then a desperate young family arrives seeking refuge.',
          director: 'Trey Edward Shults',
          cover: 'https://m.media-amazon.com/images/M/MV5BMjQ3MDA0ODA2N15BMl5BanBnXkFtZTgwNzg0NzgwMjI@._V1_SX300.jpg'
        },
        {
          title: 'Dawn of the Dead',
          year: 2004,
          description: 'A nurse, a policeman, a young married couple, a salesman and other survivors of a worldwide plague that is producing aggressive, flesh-eating zombies, take refuge in a mega Midwestern shopping mall.',
          director: 'Zack Snyder',
          cover: 'https://m.media-amazon.com/images/M/MV5BN2M2ZmU2OGQtNmU5Yi00MTIyLTgwNWMtYjljMzZlYTdiNjBhXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg'
        },
        {
          title: 'The Fly',
          year: 1986,
          description: 'A brilliant but eccentric scientist begins to transform into a giant man/fly hybrid after one of his experiments goes horribly wrong.',
          director: 'David Cronenberg',
          cover: 'https://m.media-amazon.com/images/M/MV5BODcxMGMwOGEtMDUxMi00MzE5LTg4YTYtYjk1YjA4MzQxNTNlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg'
        },
        {
          title: 'The Host',
          year: 2013,
          description: 'When an unseen enemy threatens mankind by taking over their bodies and erasing their memories, Melanie Stryder risks everything to protect the people she cares about.',
          director: 'Andrew Niccol',
          cover: 'https://m.media-amazon.com/images/M/MV5BMjMwNDg1MTAzNV5BMl5BanBnXkFtZTcwNTk5ODI3OA@@._V1_SX300.jpg'
        },
        {
          title: 'Shaun of the Dead',
          year: 2004,
          description: "A man's uneventful life is disrupted by the zombie apocalypse.",
          director: 'Edgar Wright',
          cover: 'https://m.media-amazon.com/images/M/MV5BMTg5Mjk2NDMtZTk0Ny00YTQ0LWIzYWEtMWI5MGQ0Mjg1OTNkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg'
        },
        {
          title: 'Invasion of the Body Snatchers',
          year: 1978,
          description: 'When strange seeds drift to earth from space, mysterious pods begin to grow and invade San Francisco, California, where they replicate the residents into emotionless automatons one body at a time.',
          director: 'Philip Kaufman',
          cover: 'https://m.media-amazon.com/images/M/MV5BMTkzY2Y3ZTMtYTg4Yy00OTNjLTlkNjctMGVlZDMwZWIxMzA0XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg'
        },
        {
          title: 'Dead of Night',
          year: 1945,
          description: 'Architect Walter Craig senses impending doom as his half-remembered recurring dream turns into reality. The guests at the country house encourage him to stay as they take turns telling supernatural tales.',
          director: 'Alberto Cavalcanti, Charles Crichton, Basil Dearden',
          cover: 'https://m.media-amazon.com/images/M/MV5BYTY2OTJjZjgtMzExMy00MWJlLTg2N2ItM2NhMDQxNTNkNjFhXkEyXkFqcGdeQXVyMjI4MjA5MzA@._V1_SX300.jpg'
        },
        {
          title: 'Mandy',
          year: 2018,
          description: 'The enchanted lives of a couple in a secluded forest are brutally shattered by a nightmarish hippie cult and their demon-biker henchmen, propelling a man into a spiraling, surreal rampage of vengeance.',
          director: 'Panos Cosmatos',
          cover: 'https://m.media-amazon.com/images/M/MV5BMjk1MjhmZWQtNzU3OC00NDE4LThlODQtNTdhZGM4M2E3MWZkXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg'
        },
        {
          title: 'A Girl Walks Home Alone at Night',
          year: 2014,
          description: 'In the Iranian ghost-town Bad City, a place that reeks of death and loneliness, the townspeople are unaware they are being stalked by a lonesome vampire.',
          director: 'Ana Lily Amirpour',
          cover: 'https://m.media-amazon.com/images/M/MV5BMjMzNjMyMjU2M15BMl5BanBnXkFtZTgwMzA3NjQ0MzE@._V1_SX300.jpg'
        },
        {
          title: 'Drag Me to Hell',
          year: 2009,
          description: 'A loan officer who evicts an old woman from her home finds herself the recipient of a supernatural curse. Desperate, she turns to a seer to try and save her soul, while evil forces work to push her to a breaking point.',
          director: 'Sam Raimi',
          cover: 'https://m.media-amazon.com/images/M/MV5BMTQwNTMyNjc5Ml5BMl5BanBnXkFtZTcwOTI2MTQ0Mg@@._V1_SX300.jpg'
        },
        {
          title: 'Ready or Not',
          year: 2019,
          description: "A bride's wedding night takes a sinister turn when her eccentric new in-laws force her to take part in a terrifying game.",
          director: 'Matt Bettinelli-Olpin, Tyler Gillett',
          cover: 'https://m.media-amazon.com/images/M/MV5BYzBkMzAyMDUtZTFkZS00OWUyLTgwM2ItNGI3MTQ5NzA3NTVkXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg'
        },
        {
          title: 'The Invisible Man',
          year: 2020,
          description: "When Cecilia's abusive ex takes his own life and leaves her his fortune, she suspects his death was a hoax. As a series of coincidences turn lethal, Cecilia works to prove that she is being hunted by someone nobody can see.",
          director: 'Leigh Whannell',
          cover: 'https://m.media-amazon.com/images/M/MV5BZjFhM2I4ZDYtZWMwNC00NTYzLWE3MDgtNjgxYmM3ZWMxYmVmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg'
        },
        {
          title: "Rosemary's Baby",
          year: 1968,
          description: 'A young couple trying for a baby move into a fancy apartment surrounded by peculiar neighbors.',
          director: 'Roman Polanski',
          cover: 'https://m.media-amazon.com/images/M/MV5BZmEwZGU2NzctYzlmNi00MGJkLWE3N2MtYjBlN2ZhMGJkZTZiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'
        },
        {
          title: 'Aliens',
          year: 1986,
          description: 'Fifty-seven years after surviving an apocalyptic attack aboard her space vessel by merciless space creatures, Officer Ripley awakens from hyper-sleep and tries to warn anyone who will listen about the predators.',
          director: 'James Cameron',
          cover: 'https://m.media-amazon.com/images/M/MV5BZGU2OGY5ZTYtMWNhYy00NjZiLWI0NjUtZmNhY2JhNDRmODU3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg'
        },
        {
          title: 'The Silence of the Lambs',
          year: 1991,
          description: 'A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.',
          director: 'Jonathan Demme',
          cover: 'https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg'
        },
        {
          title: 'The Night of the Hunter',
          year: 1955,
          description: "A religious fanatic marries a gullible widow whose young children are reluctant to tell him where their real daddy hid the $10,000 he'd stolen in a robbery.",
          director: 'Charles Laughton',
          cover: 'https://m.media-amazon.com/images/M/MV5BYTNjN2M2MzYtZGEwMi00Mzc5LWEwYTMtODM1ZmRiZjFiNTU0L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg'
        },
        {
          title: 'Hereditary',
          year: 2018,
          description: 'A grieving family is haunted by tragic and disturbing occurrences.',
          director: 'Ari Aster',
          cover: 'https://m.media-amazon.com/images/M/MV5BOTU5MDg3OGItZWQ1Ny00ZGVmLTg2YTUtMzBkYzQ1YWIwZjlhXkEyXkFqcGdeQXVyNTAzMTY4MDA@._V1_SX300.jpg'
        },
        {
          title: 'Frankenstein',
          year: 1931,
          description: 'Dr. Frankenstein dares to tamper with life and death by creating a human monster out of lifeless body parts.',
          director: 'James Whale',
          cover: 'https://m.media-amazon.com/images/M/MV5BMTQ0Njc1MjM0OF5BMl5BanBnXkFtZTgwNTY2NTUyMjE@._V1_SX300.jpg'
        },
        {
          title: 'The Lighthouse',
          year: 2019,
          description: 'Two lighthouse keepers try to maintain their sanity while living on a remote and mysterious New England island in the 1890s.',
          director: 'Robert Eggers',
          cover: 'https://m.media-amazon.com/images/M/MV5BZmE0MGJhNmYtOWNjYi00Njc5LWE2YjEtMWMxZTVmODUwMmMxXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg'
        },
        {
          title: 'Us',
          year: 2019,
          description: "A family's serene beach vacation turns to chaos when their doppelgängers appear and begin to terrorize them.",
          director: 'Jordan Peele',
          cover: 'https://m.media-amazon.com/images/M/MV5BZTliNWJhM2YtNDc1MC00YTk1LWE2MGYtZmE4M2Y5ODdlNzQzXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_SX300.jpg'
        },
        {
          title: 'King Kong',
          year: 2005,
          description: 'A greedy film producer assembles a team of moviemakers and sets out for the infamous Skull Island, where they find more than just cannibalistic natives.',
          director: 'Peter Jackson',
          cover: 'https://m.media-amazon.com/images/M/MV5BMjYxYmRlZWYtMzAwNC00MDA1LWJjNTItOTBjMzlhNGMzYzk3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'
        },
        {
          title: 'Hostel',
          year: 2005,
          description: 'Three backpackers head to a Slovak city that promises to meet their hedonistic expectations, with no idea of the hell that awaits them.',
          director: 'Eli Roth',
          cover: 'https://m.media-amazon.com/images/M/MV5BMTY1NDA3ODM1OV5BMl5BanBnXkFtZTcwMDM5NzEzMQ@@._V1_SX300.jpg'
        },
        {
          title: 'Saw',
          year: 2004,
          description: "Two strangers awaken in a room with no recollection of how they got there, and soon discover they're pawns in a deadly game perpetrated by a notorious serial killer.",
          director: 'James Wan',
          cover: 'https://m.media-amazon.com/images/M/MV5BMzQ2ZTBhNmEtZDBmYi00ODU0LTgzZmQtNmMxM2M4NzM1ZjE4XkEyXkFqcGdeQXVyNjE5MjUyOTM@._V1_SX300.jpg'
        },
        {
          title: 'The Purge',
          year: 2013,
          description: 'A wealthy family is held hostage for harboring the target of a murderous syndicate during the Purge, a 12-hour period in which any and all crime is legal.',
          director: 'James DeMonaco',
          cover: 'https://m.media-amazon.com/images/M/MV5BMTQzNTcwODEyM15BMl5BanBnXkFtZTcwMjM1MDI0OQ@@._V1_SX300.jpg'
        },
        {
          title: 'Death Proof',
          year: 2007,
          description: 'Two separate sets of voluptuous women are stalked at different times by a scarred stuntman who uses his "death proof" cars to execute his murderous plans.',
          director: 'Quentin Tarantino',
          cover: 'https://m.media-amazon.com/images/M/MV5BYTdmZmY3Y2QtNjU5NC00OGUxLTg3MWQtMmE2ODM5Mzg3MzcyL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg'
        },
        {
          title: 'Planet Terror',
          year: 2007,
          description: "After an experimental bio-weapon is released, turning thousands into zombie-like creatures, it's up to a rag-tag group of survivors to stop the infected and those behind its release.",
          director: 'Robert Rodriguez',
          cover: 'https://m.media-amazon.com/images/M/MV5BODdmNmM2ZTgtODM1MS00ZGMxLTk3MTMtMGQ1ODZhMTQ1NWEwL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg'
        },
        {
          title: 'Snakes on a Plane',
          year: 2006,
          description: 'An FBI agent takes on a plane full of deadly venomous snakes, deliberately released to kill a witness being flown from Honolulu to Los Angeles to testify against a mob boss.',
          director: 'David R. Ellis',
          cover: 'https://m.media-amazon.com/images/M/MV5BZDY3ODM2YTgtYTU5NC00MTE4LTkzNjktMzNhZWZmMzJjMWRjXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'
        },
        {
          title: 'Fido',
          year: 2006,
          description: "Space radiation turns the dead into Zombies. Zomcon fights zombies and finds ways to pacify and use them. On pre-teen Timmy's (Kesun Loder's) 1950s suburban street, they all have a zombie doing menial chores. Timmy's zombie becomes h",
          director: 'Andrew Currie',
          cover: 'https://m.media-amazon.com/images/M/MV5BNzQwMzYyMDQtZTc1Yi00YzU4LThlM2ItYTM5Mjc5NGViNjRjXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'
        },
        {
          title: 'Cloverfield',
          year: 2008,
          description: 'A group of friends venture deep into the streets of New York on a rescue mission during a rampaging monster attack.',
          director: 'Matt Reeves',
          cover: 'https://m.media-amazon.com/images/M/MV5BZDNhNDJlNDktZDI4OC00OTE3LWI2M2UtOThkNTFkNjBjYzRmXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg'
        },
        {
          title: 'Pontypool',
          year: 2008,
          description: 'A radio host interprets the possible outbreak of a deadly virus which infects the small Ontario town he is stationed in.',
          director: 'Bruce McDonald',
          cover: 'https://m.media-amazon.com/images/M/MV5BNWZkMmNmNGItM2MwNC00YTY2LTk0ZDYtMGM0YjM5Nzk0MjVjXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'
        },
        {
          title: 'Requiem',
          year: 2018,
          description: "When her mother commits suicide, a cellist's life is turned upside down by mysterious questions raised about her past.",
          director: 'Mahalia Belo',
          cover: 'https://m.media-amazon.com/images/M/MV5BMzQyOTA0NWEtZmNiNC00YjdkLThlZmQtMmJlY2E3NjYyZjc0XkEyXkFqcGdeQXVyNzQ2NTg4NzI@._V1_SX300.jpg'
        },
        {
          title: 'Shadow of the Vampire',
          year: 2000,
          description: 'The filming of Nosferatu, eine Symphonie des Grauens (1922) is hampered by the fact that its star Max Schreck is taking the role of a vampire far more seriously than seems humanly possible.',
          director: 'E. Elias Merhige',
          cover: 'https://m.media-amazon.com/images/M/MV5BMGYxZDEzMDMtMDIzNy00OTQ5LTkzYmItYzdkYTgxMGRkOWVmXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'
        },
        {
          title: 'The Orphanage',
          year: 2012,
          description: 'An investigative journalist visits an orphanage where a number of children are alleged to have disappeared. He wants to find out the real story, but pays for this with his life.',
          director: 'Mohammed Al Otaiba',
          cover: 'https://m.media-amazon.com/images/M/MV5BMTQ1NTE4NDMwN15BMl5BanBnXkFtZTcwMjk0ODU1OA@@._V1_SX300.jpg'
        },
        {
          title: 'Zodiac',
          year: 2007,
          description: 'In the late 1960s/early 1970s, a San Francisco cartoonist becomes an amateur detective obsessed with tracking down the Zodiac Killer, an unidentified individual who terrorizes Northern California with a killing spree.',
          director: 'David Fincher',
          cover: 'https://m.media-amazon.com/images/M/MV5BN2UwNDc5NmEtNjVjZS00OTI5LWE5YjctMWM3ZjBiZGYwMGI2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg'
        },
        {
          title: 'Se7en',
          year: 1995,
          description: 'Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.',
          director: 'David Fincher',
          cover: 'https://m.media-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg'
        },
        {
          title: 'Army of Darkness',
          year: 1992,
          description: 'A sardonic hardware store clerk is accidentally transported to 1300 A.D., where he must retrieve the Necronomicon and battle an army of the dead so he can return home.',
          director: 'Sam Raimi',
          cover: 'https://m.media-amazon.com/images/M/MV5BODcyYzM4YTAtNGM5MS00NjU4LTk2Y2ItZjI5NjkzZTk0MmQ1XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg'
        }
      ]
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Movies', null, {
      truncate: true,
      cascade: true,
      restartIdentity: true,
    });
  },
};
