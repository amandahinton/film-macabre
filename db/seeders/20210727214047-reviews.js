'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Reviews',
      [{
        body: 'I loved it, it was more funny than scary in my opinion',
        rating: 4,
        userId: 1,
        movieId: 1
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 1,
        movieId: 2
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 1,
        movieId: 3
      } ,
      {
        body: 'Props for a scary monster/villian. Everything else was terribly executed.',
        rating: 2,
        userId: 1,
        movieId: 4
      } ,
      {
        body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
        rating: 4,
        userId: 1,
        movieId: 5
      } ,
      {
        body: 'This was alright! The main character was just annoying.',
        rating: 3,
        userId: 1,
        movieId: 6
      } ,
      { body: 'Loved it !', rating: 4, userId: 1, movieId: 7 } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 1,
        movieId: 8
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 1,
        movieId: 9
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 1,
        movieId: 10
      } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 1,
        movieId: 11
      } ,
      {
        body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
        rating: 4,
        userId: 1,
        movieId: 12
      } ,
      {
        body: "I originally gave this movie 4 stars but I can't get the shocking scenes out of my head, you get 2 stars!",
        rating: 2,
        userId: 1,
        movieId: 13
      } ,
      {
        body: "This movie scared me to death, don't watch it !!!",
        rating: 3,
        userId: 1,
        movieId: 14
      } ,
      {
        body: "This movie scared me to death, don't watch it !!!",
        rating: 3,
        userId: 1,
        movieId: 15
      } ,
      {
        body: 'This was alright! The main character was just annoying.',
        rating: 3,
        userId: 1,
        movieId: 16
      } ,
      {
        body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
        rating: 4,
        userId: 1,
        movieId: 17
      } ,
      { body: 'Loved it !', rating: 4, userId: 1, movieId: 18 } ,
      {
        body: 'Excellent film, although I thought that it ended a little too suddenly.',
        rating: 4,
        userId: 1,
        movieId: 19
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 1,
        movieId: 20
      } ,
      {
        body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
        rating: 2,
        userId: 1,
        movieId: 21
      } ,
      {
        body: "I originally gave this movie 4 stars but I can't get the shocking scenes out of my head, you get 2 stars!",
        rating: 2,
        userId: 1,
        movieId: 22
      } ,
      {
        body: 'Excellent film, although I thought that it ended a little too suddenly.',
        rating: 4,
        userId: 1,
        movieId: 23
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 1,
        movieId: 24
      } ,
      {
        body: "I originally gave this movie 4 stars but I can't get the shocking scenes out of my head, you get 2 stars!",
        rating: 2,
        userId: 1,
        movieId: 25
      } ,
      {
        body: 'This was alright! The main character was just annoying.',
        rating: 3,
        userId: 1,
        movieId: 26
      } ,
      {
        body: 'I would like to see some new ideas in these horror movies, it was literally a replica of Scream',
        rating: 1,
        userId: 1,
        movieId: 27
      } ,
      {
        body: "This movie scared me to death, don't watch it !!!",
        rating: 3,
        userId: 1,
        movieId: 28
      } ,
      {
        body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
        rating: 2,
        userId: 1,
        movieId: 29
      } ,
      {
        body: 'Excellent film, although I thought that it ended a little too suddenly.',
        rating: 4,
        userId: 1,
        movieId: 30
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 1,
        movieId: 31
      } ,
      {
        body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
        rating: 2,
        userId: 1,
        movieId: 32
      } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 1,
        movieId: 33
      } ,
      {
        body: 'Prepare to be absolutely terrified! What an experieence',
        rating: 5,
        userId: 1,
        movieId: 34
      } ,
      {
        body: 'Excellent film, although I thought that it ended a little too suddenly.',
        rating: 4,
        userId: 1,
        movieId: 35
      } ,
      {
        body: 'Awful experience. The plot did not even make sense',
        rating: 1,
        userId: 1,
        movieId: 36
      } ,
      {
        body: 'The premise and idea was good, but what the heck was that ending?!',
        rating: 3,
        userId: 1,
        movieId: 37
      } ,
      {
        body: "This movie scared me to death, don't watch it !!!",
        rating: 3,
        userId: 1,
        movieId: 38
      } ,
      {
        body: 'Prepare to be absolutely terrified! What an experieence',
        rating: 5,
        userId: 1,
        movieId: 39
      } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 1,
        movieId: 40
      } ,
      {
        body: "I loved it but my wife didn't, I'm in trouble.",
        rating: 4,
        userId: 1,
        movieId: 41
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 1,
        movieId: 42
      } ,
      {
        body: 'The movie was confusing at times, but the dry humor made it all better',
        rating: 4,
        userId: 1,
        movieId: 43
      } ,
      { body: 'Loved it !', rating: 4, userId: 1, movieId: 44 } ,
      {
        body: 'Prepare to be absolutely terrified! What an experieence',
        rating: 5,
        userId: 1,
        movieId: 45
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 1,
        movieId: 46
      } ,
      {
        body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
        rating: 2,
        userId: 1,
        movieId: 47
      } ,
      {
        body: 'The premise and idea was good, but what the heck was that ending?!',
        rating: 3,
        userId: 1,
        movieId: 48
      } ,
      {
        body: "This movie scared me to death, don't watch it !!!",
        rating: 3,
        userId: 1,
        movieId: 49
      } ,
      {
        body: 'Decent. I went into this with higher expectations than I should have',
        rating: 3,
        userId: 1,
        movieId: 50
      } ,
      {
        body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
        rating: 4,
        userId: 1,
        movieId: 51
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 1,
        movieId: 52
      } ,
      {
        body: 'Excellent film, although I thought that it ended a little too suddenly.',
        rating: 4,
        userId: 1,
        movieId: 53
      } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 1,
        movieId: 54
      } ,
      {
        body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
        rating: 2,
        userId: 1,
        movieId: 55
      } ,
      {
        body: "I loved it but my wife didn't, I'm in trouble.",
        rating: 4,
        userId: 1,
        movieId: 56
      } ,
      {
        body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
        rating: 2,
        userId: 1,
        movieId: 57
      } ,
      {
        body: 'This should only be shown in the morning, I was so scared to leave the theater',
        rating: 2,
        userId: 1,
        movieId: 58
      } ,
      {
        body: "This was a waste of time, the movie ended and I still didn't understand what happened !",
        rating: 2,
        userId: 1,
        movieId: 59
      } ,
      {
        body: 'Prepare to be absolutely terrified! What an experieence',
        rating: 5,
        userId: 1,
        movieId: 60
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 1,
        movieId: 61
      } ,
      {
        body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
        rating: 1,
        userId: 1,
        movieId: 62
      } ,
      {
        body: "This movie scared me to death, don't watch it !!!",
        rating: 3,
        userId: 1,
        movieId: 63
      } ,
      {
        body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
        rating: 5,
        userId: 1,
        movieId: 64
      } ,
      {
        body: "I loved it but my wife didn't, I'm in trouble.",
        rating: 4,
        userId: 1,
        movieId: 65
      } ,
      {
        body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
        rating: 4,
        userId: 1,
        movieId: 66
      } ,
      {
        body: 'This was alright! The main character was just annoying.',
        rating: 3,
        userId: 1,
        movieId: 67
      } ,
      {
        body: 'This was alright! The main character was just annoying.',
        rating: 3,
        userId: 1,
        movieId: 68
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 1,
        movieId: 69
      } ,
      {
        body: 'This should only be shown in the morning, I was so scared to leave the theater',
        rating: 2,
        userId: 1,
        movieId: 70
      } ,
      {
        body: "This movie scared me to death, don't watch it !!!",
        rating: 3,
        userId: 1,
        movieId: 71
      } ,
      {
        body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
        rating: 1,
        userId: 1,
        movieId: 72
      } ,
      {
        body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
        rating: 5,
        userId: 1,
        movieId: 73
      } ,
      {
        body: 'Decent. I went into this with higher expectations than I should have',
        rating: 3,
        userId: 1,
        movieId: 74
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 1,
        movieId: 75
      } ,
      {
        body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
        rating: 4,
        userId: 1,
        movieId: 76
      } ,
      {
        body: "I loved it but my wife didn't, I'm in trouble.",
        rating: 4,
        userId: 1,
        movieId: 77
      } ,
      {
        body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
        rating: 1,
        userId: 1,
        movieId: 78
      } ,
      {
        body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
        rating: 4,
        userId: 1,
        movieId: 79
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 1,
        movieId: 80
      } ,
      {
        body: "I originally gave this movie 4 stars but I can't get the shocking scenes out of my head, you get 2 stars!",
        rating: 2,
        userId: 1,
        movieId: 81
      } ,
      {
        body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
        rating: 5,
        userId: 1,
        movieId: 82
      } ,
      {
        body: 'The movie was confusing at times, but the dry humor made it all better',
        rating: 4,
        userId: 1,
        movieId: 83
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 1,
        movieId: 84
      } ,
      {
        body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
        rating: 5,
        userId: 1,
        movieId: 85
      } ,
      {
        body: 'This was alright! The main character was just annoying.',
        rating: 3,
        userId: 1,
        movieId: 86
      } ,
      {
        body: 'The movie was confusing at times, but the dry humor made it all better',
        rating: 4,
        userId: 1,
        movieId: 87
      } ,
      { body: 'Loved it !', rating: 4, userId: 1, movieId: 88 } ,
      {
        body: "This was a waste of time, the movie ended and I still didn't understand what happened !",
        rating: 2,
        userId: 1,
        movieId: 89
      } ,
      {
        body: "This was a waste of time, the movie ended and I still didn't understand what happened !",
        rating: 2,
        userId: 1,
        movieId: 90
      } ,
      { body: 'Loved it !', rating: 4, userId: 1, movieId: 91 } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 1,
        movieId: 92
      } ,
      {
        body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
        rating: 1,
        userId: 1,
        movieId: 93
      } ,
      {
        body: "This movie scared me to death, don't watch it !!!",
        rating: 3,
        userId: 1,
        movieId: 94
      } ,
      {
        body: 'Awful experience. The plot did not even make sense',
        rating: 1,
        userId: 1,
        movieId: 95
      } ,
      {
        body: 'Excellent film, although I thought that it ended a little too suddenly.',
        rating: 4,
        userId: 1,
        movieId: 96
      } ,
      {
        body: 'This was alright! The main character was just annoying.',
        rating: 3,
        userId: 1,
        movieId: 97
      } ,
      { body: 'Loved it !', rating: 4, userId: 1, movieId: 98 } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 1,
        movieId: 99
      } ,
      { body: 'Loved it !', rating: 4, userId: 1, movieId: 100 } ,
      {
        body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
        rating: 4,
        userId: 1,
        movieId: 101
      } ,
      {
        body: 'Props for a scary monster/villian. Everything else was terribly executed.',
        rating: 2,
        userId: 1,
        movieId: 102
      } ,
      {
        body: "This was a waste of time, the movie ended and I still didn't understand what happened !",
        rating: 2,
        userId: 1,
        movieId: 103
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 1,
        movieId: 104
      } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 1,
        movieId: 105
      } ,
      {
        body: 'This was alright! The main character was just annoying.',
        rating: 3,
        userId: 1,
        movieId: 106
      } ,
      {
        body: 'Props for a scary monster/villian. Everything else was terribly executed.',
        rating: 2,
        userId: 1,
        movieId: 107
      } ,
      { body: 'Loved it !', rating: 4, userId: 1, movieId: 108 } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 1,
        movieId: 109
      } ,
      {
        body: 'Excellent film, although I thought that it ended a little too suddenly.',
        rating: 4,
        userId: 1,
        movieId: 110
      } ,{ body: 'Loved it !', rating: 4, userId: 1, movieId: 44 } ,
      {
        body: 'Prepare to be absolutely terrified! What an experieence',
        rating: 5,
        userId: 1,
        movieId: 45
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 1,
        movieId: 46
      } ,
      {
        body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
        rating: 2,
        userId: 1,
        movieId: 47
      } ,
      {
        body: 'The premise and idea was good, but what the heck was that ending?!',
        rating: 3,
        userId: 1,
        movieId: 48
      } ,
      {
        body: "This movie scared me to death, don't watch it !!!",
        rating: 3,
        userId: 1,
        movieId: 49
      } ,
      {
        body: 'Decent. I went into this with higher expectations than I should have',
        rating: 3,
        userId: 1,
        movieId: 50
      } ,
      {
        body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
        rating: 4,
        userId: 1,
        movieId: 51
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 1,
        movieId: 52
      } ,
      {
        body: 'Excellent film, although I thought that it ended a little too suddenly.',
        rating: 4,
        userId: 1,
        movieId: 53
      } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 1,
        movieId: 54
      } ,
      {
        body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
        rating: 2,
        userId: 1,
        movieId: 55
      } ,
      {
        body: "I loved it but my wife didn't, I'm in trouble.",
        rating: 4,
        userId: 1,
        movieId: 56
      } ,
      {
        body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
        rating: 2,
        userId: 1,
        movieId: 57
      } ,
      {
        body: 'This should only be shown in the morning, I was so scared to leave the theater',
        rating: 2,
        userId: 1,
        movieId: 58
      } ,
      {
        body: "This was a waste of time, the movie ended and I still didn't understand what happened !",
        rating: 2,
        userId: 1,
        movieId: 59
      } ,
      {
        body: 'Prepare to be absolutely terrified! What an experieence',
        rating: 5,
        userId: 1,
        movieId: 60
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 1,
        movieId: 61
      } ,
      {
        body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
        rating: 1,
        userId: 1,
        movieId: 62
      } ,
      {
        body: "This movie scared me to death, don't watch it !!!",
        rating: 3,
        userId: 1,
        movieId: 63
      } ,
      {
        body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
        rating: 5,
        userId: 1,
        movieId: 64
      } ,
      {
        body: "I loved it but my wife didn't, I'm in trouble.",
        rating: 4,
        userId: 1,
        movieId: 65
      } ,
      {
        body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
        rating: 4,
        userId: 1,
        movieId: 66
      } ,
      {
        body: 'This was alright! The main character was just annoying.',
        rating: 3,
        userId: 1,
        movieId: 67
      } ,
      {
        body: 'This was alright! The main character was just annoying.',
        rating: 3,
        userId: 1,
        movieId: 68
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 1,
        movieId: 69
      } ,
      {
        body: 'This should only be shown in the morning, I was so scared to leave the theater',
        rating: 2,
        userId: 1,
        movieId: 70
      } ,
      {
        body: "This movie scared me to death, don't watch it !!!",
        rating: 3,
        userId: 1,
        movieId: 71
      } ,
      {
        body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
        rating: 1,
        userId: 1,
        movieId: 72
      } ,
      {
        body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
        rating: 5,
        userId: 1,
        movieId: 73
      } ,
      {
        body: 'Decent. I went into this with higher expectations than I should have',
        rating: 3,
        userId: 1,
        movieId: 74
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 1,
        movieId: 75
      } ,
      {
        body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
        rating: 4,
        userId: 1,
        movieId: 76
      } ,
      {
        body: "I loved it but my wife didn't, I'm in trouble.",
        rating: 4,
        userId: 1,
        movieId: 77
      } ,
      {
        body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
        rating: 1,
        userId: 1,
        movieId: 78
      } ,
      {
        body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
        rating: 4,
        userId: 1,
        movieId: 79
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 1,
        movieId: 80
      } ,
      {
        body: "I originally gave this movie 4 stars but I can't get the shocking scenes out of my head, you get 2 stars!",
        rating: 2,
        userId: 1,
        movieId: 81
      } ,
      {
        body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
        rating: 5,
        userId: 1,
        movieId: 82
      } ,
      {
        body: 'The movie was confusing at times, but the dry humor made it all better',
        rating: 4,
        userId: 1,
        movieId: 83
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 1,
        movieId: 84
      } ,
      {
        body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
        rating: 5,
        userId: 1,
        movieId: 85
      } ,
      {
        body: 'This was alright! The main character was just annoying.',
        rating: 3,
        userId: 1,
        movieId: 86
      } ,
      {
        body: 'The movie was confusing at times, but the dry humor made it all better',
        rating: 4,
        userId: 1,
        movieId: 87
      } ,
      { body: 'Loved it !', rating: 4, userId: 1, movieId: 88 } ,
      {
        body: "This was a waste of time, the movie ended and I still didn't understand what happened !",
        rating: 2,
        userId: 1,
        movieId: 89
      } ,
      {
        body: "This was a waste of time, the movie ended and I still didn't understand what happened !",
        rating: 2,
        userId: 1,
        movieId: 90
      } ,
      { body: 'Loved it !', rating: 4, userId: 1, movieId: 91 } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 1,
        movieId: 92
      } ,
      {
        body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
        rating: 1,
        userId: 1,
        movieId: 93
      } ,
      {
        body: "This movie scared me to death, don't watch it !!!",
        rating: 3,
        userId: 1,
        movieId: 94
      } ,
      {
        body: 'Awful experience. The plot did not even make sense',
        rating: 1,
        userId: 1,
        movieId: 95
      } ,
      {
        body: 'Excellent film, although I thought that it ended a little too suddenly.',
        rating: 4,
        userId: 1,
        movieId: 96
      } ,
      {
        body: 'This was alright! The main character was just annoying.',
        rating: 3,
        userId: 1,
        movieId: 97
      } ,
      { body: 'Loved it !', rating: 4, userId: 1, movieId: 98 } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 1,
        movieId: 99
      } ,
      { body: 'Loved it !', rating: 4, userId: 1, movieId: 100 } ,
      {
        body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
        rating: 4,
        userId: 1,
        movieId: 101
      } ,
      {
        body: 'Props for a scary monster/villian. Everything else was terribly executed.',
        rating: 2,
        userId: 1,
        movieId: 102
      } ,
      {
        body: "This was a waste of time, the movie ended and I still didn't understand what happened !",
        rating: 2,
        userId: 1,
        movieId: 103
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 1,
        movieId: 104
      } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 1,
        movieId: 105
      } ,
      {
        body: 'This was alright! The main character was just annoying.',
        rating: 3,
        userId: 1,
        movieId: 106
      } ,
      {
        body: 'Props for a scary monster/villian. Everything else was terribly executed.',
        rating: 2,
        userId: 1,
        movieId: 107
      } ,
      { body: 'Loved it !', rating: 4, userId: 1, movieId: 108 } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 1,
        movieId: 109
      } ,
      {
        body: 'Excellent film, although I thought that it ended a little too suddenly.',
        rating: 4,
        userId: 1,
        movieId: 110
      } ,
      {
        body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
        rating: 5,
        userId: 2,
        movieId: 1
      } ,
      {
        body: "I loved it but my wife didn't, I'm in trouble.",
        rating: 4,
        userId: 2,
        movieId: 2
      } ,
      {
        body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
        rating: 1,
        userId: 2,
        movieId: 3
      } ,
      { body: 'Loved it !', rating: 4, userId: 2, movieId: 4 } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 2,
        movieId: 5
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 2,
        movieId: 6
      } ,
      {
        body: "I loved it but my wife didn't, I'm in trouble.",
        rating: 4,
        userId: 2,
        movieId: 7
      } ,
      {
        body: 'Awful experience. The plot did not even make sense',
        rating: 1,
        userId: 2,
        movieId: 8
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 2,
        movieId: 9
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 2,
        movieId: 10
      } ,
      {
        body: 'I would like to see some new ideas in these horror movies, it was literally a replica of Scream',
        rating: 1,
        userId: 2,
        movieId: 11
      } ,
      {
        body: 'Awful experience. The plot did not even make sense',
        rating: 1,
        userId: 2,
        movieId: 12
      } ,
      {
        body: 'Awful experience. The plot did not even make sense',
        rating: 1,
        userId: 2,
        movieId: 13
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 2,
        movieId: 14
      } ,
      { body: 'Loved it !', rating: 4, userId: 2, movieId: 15 } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 16
      } ,
      {
        body: 'Props for a scary monster/villian. Everything else was terribly executed.',
        rating: 2,
        userId: 2,
        movieId: 17
      } ,
      {
        body: 'This was alright! The main character was just annoying.',
        rating: 3,
        userId: 2,
        movieId: 18
      } ,
      {
        body: "I loved it but my wife didn't, I'm in trouble.",
        rating: 4,
        userId: 2,
        movieId: 19
      } ,
      {
        body: 'This should only be shown in the morning, I was so scared to leave the theater',
        rating: 2,
        userId: 2,
        movieId: 20
      } ,
      {
        body: 'Props for a scary monster/villian. Everything else was terribly executed.',
        rating: 2,
        userId: 2,
        movieId: 21
      } ,
      {
        body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
        rating: 2,
        userId: 2,
        movieId: 22
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 23
      } ,
      {
        body: 'I loved it, it was more funny than scary in my opinion',
        rating: 4,
        userId: 2,
        movieId: 24
      } ,
      {
        body: 'Decent. I went into this with higher expectations than I should have',
        rating: 3,
        userId: 2,
        movieId: 25
      } ,
      {
        body: 'I would like to see some new ideas in these horror movies, it was literally a replica of Scream',
        rating: 1,
        userId: 2,
        movieId: 26
      } ,
      {
        body: 'Prepare to be absolutely terrified! What an experieence',
        rating: 5,
        userId: 2,
        movieId: 27
      } ,
      {
        body: 'Decent. I went into this with higher expectations than I should have',
        rating: 3,
        userId: 2,
        movieId: 28
      } ,
      {
        body: 'This was alright! The main character was just annoying.',
        rating: 3,
        userId: 2,
        movieId: 29
      } ,
      {
        body: 'The movie was confusing at times, but the dry humor made it all better',
        rating: 4,
        userId: 2,
        movieId: 30
      } ,
      {
        body: 'Props for a scary monster/villian. Everything else was terribly executed.',
        rating: 2,
        userId: 2,
        movieId: 31
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 32
      } ,
      {
        body: 'I would like to see some new ideas in these horror movies, it was literally a replica of Scream',
        rating: 1,
        userId: 2,
        movieId: 33
      } ,
      {
        body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
        rating: 5,
        userId: 2,
        movieId: 34
      } ,
      {
        body: 'The movie was confusing at times, but the dry humor made it all better',
        rating: 4,
        userId: 2,
        movieId: 35
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 2,
        movieId: 36
      } ,
      {
        body: 'I would like to see some new ideas in these horror movies, it was literally a replica of Scream',
        rating: 1,
        userId: 2,
        movieId: 37
      } ,
      {
        body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
        rating: 2,
        userId: 2,
        movieId: 38
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 2,
        movieId: 39
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 2,
        movieId: 40
      } ,
      {
        body: 'Decent. I went into this with higher expectations than I should have',
        rating: 3,
        userId: 2,
        movieId: 41
      } ,
      {
        body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
        rating: 5,
        userId: 2,
        movieId: 42
      } ,
      {
        body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
        rating: 5,
        userId: 2,
        movieId: 43
      } ,
      {
        body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
        rating: 5,
        userId: 2,
        movieId: 44
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 45
      } ,
      {
        body: 'Decent. I went into this with higher expectations than I should have',
        rating: 3,
        userId: 2,
        movieId: 46
      } ,
      {
        body: "I loved it but my wife didn't, I'm in trouble.",
        rating: 4,
        userId: 2,
        movieId: 47
      } ,
      {
        body: 'Decent. I went into this with higher expectations than I should have',
        rating: 3,
        userId: 2,
        movieId: 48
      } ,
      {
        body: "I loved it but my wife didn't, I'm in trouble.",
        rating: 4,
        userId: 2,
        movieId: 49
      } ,
      {
        body: 'This was alright! The main character was just annoying.',
        rating: 3,
        userId: 2,
        movieId: 50
      } ,
      {
        body: 'I loved it, it was more funny than scary in my opinion',
        rating: 4,
        userId: 2,
        movieId: 51
      } ,
      {
        body: 'The premise and idea was good, but what the heck was that ending?!',
        rating: 3,
        userId: 2,
        movieId: 52
      } ,
      {
        body: 'Decent. I went into this with higher expectations than I should have',
        rating: 3,
        userId: 2,
        movieId: 53
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 54
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 55
      } ,
      {
        body: 'I loved it, it was more funny than scary in my opinion',
        rating: 4,
        userId: 2,
        movieId: 56
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 2,
        movieId: 57
      } ,
      {
        body: "This was a waste of time, the movie ended and I still didn't understand what happened !",
        rating: 2,
        userId: 2,
        movieId: 58
      } ,
      {
        body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
        rating: 1,
        userId: 2,
        movieId: 59
      } ,
      {
        body: 'The premise and idea was good, but what the heck was that ending?!',
        rating: 3,
        userId: 2,
        movieId: 60
      } ,
      {
        body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
        rating: 2,
        userId: 2,
        movieId: 61
      } ,
      {
        body: "I loved it but my wife didn't, I'm in trouble.",
        rating: 4,
        userId: 2,
        movieId: 62
      } ,
      {
        body: "This was a waste of time, the movie ended and I still didn't understand what happened !",
        rating: 2,
        userId: 2,
        movieId: 63
      } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 2,
        movieId: 64
      } ,
      {
        body: 'Prepare to be absolutely terrified! What an experieence',
        rating: 5,
        userId: 2,
        movieId: 65
      } ,
      {
        body: "This movie scared me to death, don't watch it !!!",
        rating: 3,
        userId: 2,
        movieId: 66
      } ,
      {
        body: 'I loved it, it was more funny than scary in my opinion',
        rating: 4,
        userId: 2,
        movieId: 67
      } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 2,
        movieId: 68
      } ,
      {
        body: 'Props for a scary monster/villian. Everything else was terribly executed.',
        rating: 2,
        userId: 2,
        movieId: 69
      } ,
      {
        body: 'Awful experience. The plot did not even make sense',
        rating: 1,
        userId: 2,
        movieId: 70
      } ,
      {
        body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
        rating: 5,
        userId: 2,
        movieId: 71
      } ,
      {
        body: "This was a waste of time, the movie ended and I still didn't understand what happened !",
        rating: 2,
        userId: 2,
        movieId: 72
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 73
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 2,
        movieId: 74
      } ,
      {
        body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
        rating: 5,
        userId: 2,
        movieId: 75
      } ,
      {
        body: 'I would like to see some new ideas in these horror movies, it was literally a replica of Scream',
        rating: 1,
        userId: 2,
        movieId: 76
      } ,
      {
        body: 'The movie was confusing at times, but the dry humor made it all better',
        rating: 4,
        userId: 2,
        movieId: 77
      } ,
      {
        body: "This was a waste of time, the movie ended and I still didn't understand what happened !",
        rating: 2,
        userId: 2,
        movieId: 78
      } ,
      { body: 'Loved it !', rating: 4, userId: 2, movieId: 79 } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 2,
        movieId: 80
      } ,
      {
        body: 'This should only be shown in the morning, I was so scared to leave the theater',
        rating: 2,
        userId: 2,
        movieId: 81
      } ,
      {
        body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
        rating: 4,
        userId: 2,
        movieId: 82
      } ,
      {
        body: 'This should only be shown in the morning, I was so scared to leave the theater',
        rating: 2,
        userId: 2,
        movieId: 83
      } ,
      {
        body: 'I loved it, it was more funny than scary in my opinion',
        rating: 4,
        userId: 2,
        movieId: 84
      } ,
      {
        body: 'Prepare to be absolutely terrified! What an experieence',
        rating: 5,
        userId: 2,
        movieId: 85
      } ,
      {
        body: "This was a waste of time, the movie ended and I still didn't understand what happened !",
        rating: 2,
        userId: 2,
        movieId: 86
      } ,
      {
        body: 'This should only be shown in the morning, I was so scared to leave the theater',
        rating: 2,
        userId: 2,
        movieId: 87
      } ,
      {
        body: "I originally gave this movie 4 stars but I can't get the shocking scenes out of my head, you get 2 stars!",
        rating: 2,
        userId: 2,
        movieId: 88
      } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 2,
        movieId: 89
      } ,
      {
        body: 'The premise and idea was good, but what the heck was that ending?!',
        rating: 3,
        userId: 2,
        movieId: 90
      } ,
      {
        body: 'The premise and idea was good, but what the heck was that ending?!',
        rating: 3,
        userId: 2,
        movieId: 91
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 2,
        movieId: 92
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 93
      } ,
      {
        body: "This was a waste of time, the movie ended and I still didn't understand what happened !",
        rating: 2,
        userId: 2,
        movieId: 94
      } ,
      {
        body: 'Awful experience. The plot did not even make sense',
        rating: 1,
        userId: 2,
        movieId: 95
      } ,
      {
        body: "This was a waste of time, the movie ended and I still didn't understand what happened !",
        rating: 2,
        userId: 2,
        movieId: 96
      } ,
      {
        body: 'Decent. I went into this with higher expectations than I should have',
        rating: 3,
        userId: 2,
        movieId: 97
      } ,
      {
        body: 'Awful experience. The plot did not even make sense',
        rating: 1,
        userId: 2,
        movieId: 98
      } ,
      {
        body: 'Awful experience. The plot did not even make sense',
        rating: 1,
        userId: 2,
        movieId: 99
      } ,
      {
        body: 'This should only be shown in the morning, I was so scared to leave the theater',
        rating: 2,
        userId: 2,
        movieId: 100
      } ,
      {
        body: 'Props for a scary monster/villian. Everything else was terribly executed.',
        rating: 2,
        userId: 2,
        movieId: 101
      } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 2,
        movieId: 102
      } ,
      {
        body: 'I loved it, it was more funny than scary in my opinion',
        rating: 4,
        userId: 2,
        movieId: 103
      } ,
      {
        body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
        rating: 1,
        userId: 2,
        movieId: 104
      } ,
      {
        body: 'I would like to see some new ideas in these horror movies, it was literally a replica of Scream',
        rating: 1,
        userId: 2,
        movieId: 105
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 2,
        movieId: 106
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 2,
        movieId: 107
      } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 2,
        movieId: 108
      } ,
      {
        body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
        rating: 1,
        userId: 2,
        movieId: 109
      } ,
      {
        body: 'The premise and idea was good, but what the heck was that ending?!',
        rating: 3,
        userId: 2,
        movieId: 110
      } ,{
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 1
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 2
      } ,
      {
        body: 'The premise and idea was good, but what the heck was that ending?!',
        rating: 3,
        userId: 3,
        movieId: 3
      } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 3,
        movieId: 4
      } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 3,
        movieId: 5
      } ,
      {
        body: 'I loved it, it was more funny than scary in my opinion',
        rating: 4,
        userId: 3,
        movieId: 6
      } ,
      {
        body: 'This should only be shown in the morning, I was so scared to leave the theater',
        rating: 2,
        userId: 3,
        movieId: 7
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 3,
        movieId: 8
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 3,
        movieId: 9
      } ,
      {
        body: 'The movie was confusing at times, but the dry humor made it all better',
        rating: 4,
        userId: 3,
        movieId: 10
      } ,
      {
        body: 'Awful experience. The plot did not even make sense',
        rating: 1,
        userId: 3,
        movieId: 11
      } ,
      {
        body: 'This should only be shown in the morning, I was so scared to leave the theater',
        rating: 2,
        userId: 3,
        movieId: 12
      } ,
      {
        body: 'I loved it, it was more funny than scary in my opinion',
        rating: 4,
        userId: 3,
        movieId: 13
      } ,
      {
        body: 'This should only be shown in the morning, I was so scared to leave the theater',
        rating: 2,
        userId: 3,
        movieId: 14
      } ,
      {
        body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
        rating: 2,
        userId: 3,
        movieId: 15
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 3,
        movieId: 16
      } ,
      {
        body: "I originally gave this movie 4 stars but I can't get the shocking scenes out of my head, you get 2 stars!",
        rating: 2,
        userId: 3,
        movieId: 17
      } ,
      {
        body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
        rating: 2,
        userId: 3,
        movieId: 18
      } ,
      {
        body: 'This should only be shown in the morning, I was so scared to leave the theater',
        rating: 2,
        userId: 3,
        movieId: 19
      } ,
      {
        body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
        rating: 1,
        userId: 3,
        movieId: 20
      } ,
      { body: 'Loved it !', rating: 4, userId: 3, movieId: 21 } ,
      {
        body: 'Prepare to be absolutely terrified! What an experieence',
        rating: 5,
        userId: 3,
        movieId: 22
      } ,
      {
        body: "This was a waste of time, the movie ended and I still didn't understand what happened !",
        rating: 2,
        userId: 3,
        movieId: 23
      } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 3,
        movieId: 24
      } ,
      {
        body: 'Props for a scary monster/villian. Everything else was terribly executed.',
        rating: 2,
        userId: 3,
        movieId: 25
      } ,
      {
        body: 'The premise and idea was good, but what the heck was that ending?!',
        rating: 3,
        userId: 3,
        movieId: 26
      } ,
      {
        body: 'Decent. I went into this with higher expectations than I should have',
        rating: 3,
        userId: 3,
        movieId: 27
      } ,
      {
        body: "This was a waste of time, the movie ended and I still didn't understand what happened !",
        rating: 2,
        userId: 3,
        movieId: 28
      } ,
      {
        body: 'Excellent film, although I thought that it ended a little too suddenly.',
        rating: 4,
        userId: 3,
        movieId: 29
      } ,
      {
        body: "This was a waste of time, the movie ended and I still didn't understand what happened !",
        rating: 2,
        userId: 3,
        movieId: 30
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 31
      } ,
      {
        body: "I originally gave this movie 4 stars but I can't get the shocking scenes out of my head, you get 2 stars!",
        rating: 2,
        userId: 3,
        movieId: 32
      } ,
      {
        body: 'Decent. I went into this with higher expectations than I should have',
        rating: 3,
        userId: 3,
        movieId: 33
      } ,
      {
        body: 'Excellent film, although I thought that it ended a little too suddenly.',
        rating: 4,
        userId: 3,
        movieId: 34
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 3,
        movieId: 35
      } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 3,
        movieId: 36
      } ,
      {
        body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
        rating: 4,
        userId: 3,
        movieId: 37
      } ,
      {
        body: 'Awful experience. The plot did not even make sense',
        rating: 1,
        userId: 3,
        movieId: 38
      } ,
      {
        body: 'Excellent film, although I thought that it ended a little too suddenly.',
        rating: 4,
        userId: 3,
        movieId: 39
      } ,
      {
        body: 'Props for a scary monster/villian. Everything else was terribly executed.',
        rating: 2,
        userId: 3,
        movieId: 40
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 41
      } ,
      {
        body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
        rating: 5,
        userId: 3,
        movieId: 42
      } ,
      {
        body: 'Props for a scary monster/villian. Everything else was terribly executed.',
        rating: 2,
        userId: 3,
        movieId: 43
      } ,
      {
        body: "I originally gave this movie 4 stars but I can't get the shocking scenes out of my head, you get 2 stars!",
        rating: 2,
        userId: 3,
        movieId: 44
      } ,
      {
        body: 'Awful experience. The plot did not even make sense',
        rating: 1,
        userId: 3,
        movieId: 45
      } ,
      {
        body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
        rating: 4,
        userId: 3,
        movieId: 46
      } ,
      {
        body: "This was a waste of time, the movie ended and I still didn't understand what happened !",
        rating: 2,
        userId: 3,
        movieId: 47
      } ,
      {
        body: "This was a waste of time, the movie ended and I still didn't understand what happened !",
        rating: 2,
        userId: 3,
        movieId: 48
      } ,
      {
        body: 'I loved it, it was more funny than scary in my opinion',
        rating: 4,
        userId: 3,
        movieId: 49
      } ,
      {
        body: "This was a waste of time, the movie ended and I still didn't understand what happened !",
        rating: 2,
        userId: 3,
        movieId: 50
      } ,
      {
        body: 'The movie was confusing at times, but the dry humor made it all better',
        rating: 4,
        userId: 3,
        movieId: 51
      } ,
      {
        body: "I originally gave this movie 4 stars but I can't get the shocking scenes out of my head, you get 2 stars!",
        rating: 2,
        userId: 3,
        movieId: 52
      } ,
      {
        body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
        rating: 2,
        userId: 3,
        movieId: 53
      } ,
      {
        body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
        rating: 5,
        userId: 3,
        movieId: 54
      } ,
      {
        body: 'Props for a scary monster/villian. Everything else was terribly executed.',
        rating: 2,
        userId: 3,
        movieId: 55
      } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 3,
        movieId: 56
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 3,
        movieId: 57
      } ,
      {
        body: 'Props for a scary monster/villian. Everything else was terribly executed.',
        rating: 2,
        userId: 3,
        movieId: 58
      } ,
      {
        body: 'Prepare to be absolutely terrified! What an experieence',
        rating: 5,
        userId: 3,
        movieId: 59
      } ,
      {
        body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
        rating: 4,
        userId: 3,
        movieId: 60
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 3,
        movieId: 61
      } ,
      {
        body: "This movie scared me to death, don't watch it !!!",
        rating: 3,
        userId: 3,
        movieId: 62
      } ,
      {
        body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
        rating: 1,
        userId: 3,
        movieId: 63
      } ,
      {
        body: "This was a waste of time, the movie ended and I still didn't understand what happened !",
        rating: 2,
        userId: 3,
        movieId: 64
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 3,
        movieId: 65
      } ,
      {
        body: 'Props for a scary monster/villian. Everything else was terribly executed.',
        rating: 2,
        userId: 3,
        movieId: 66
      } ,
      {
        body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
        rating: 1,
        userId: 3,
        movieId: 67
      } ,
      {
        body: 'This should only be shown in the morning, I was so scared to leave the theater',
        rating: 2,
        userId: 3,
        movieId: 68
      } ,
      {
        body: 'The movie was confusing at times, but the dry humor made it all better',
        rating: 4,
        userId: 3,
        movieId: 69
      } ,
      {
        body: 'This was alright! The main character was just annoying.',
        rating: 3,
        userId: 3,
        movieId: 70
      } ,
      {
        body: "This was a waste of time, the movie ended and I still didn't understand what happened !",
        rating: 2,
        userId: 3,
        movieId: 71
      } ,
      {
        body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
        rating: 4,
        userId: 3,
        movieId: 72
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 3,
        movieId: 73
      } ,
      {
        body: 'Excellent film, although I thought that it ended a little too suddenly.',
        rating: 4,
        userId: 3,
        movieId: 74
      } ,
      { body: 'Loved it !', rating: 4, userId: 3, movieId: 75 } ,
      { body: 'Loved it !', rating: 4, userId: 3, movieId: 76 } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 3,
        movieId: 77
      } ,
      {
        body: 'I loved it, it was more funny than scary in my opinion',
        rating: 4,
        userId: 3,
        movieId: 78
      } ,
      {
        body: 'Props for a scary monster/villian. Everything else was terribly executed.',
        rating: 2,
        userId: 3,
        movieId: 79
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 3,
        movieId: 80
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 3,
        movieId: 81
      } ,
      {
        body: 'Props for a scary monster/villian. Everything else was terribly executed.',
        rating: 2,
        userId: 3,
        movieId: 82
      } ,
      {
        body: 'Excellent film, although I thought that it ended a little too suddenly.',
        rating: 4,
        userId: 3,
        movieId: 83
      } ,
      {
        body: 'Prepare to be absolutely terrified! What an experieence',
        rating: 5,
        userId: 3,
        movieId: 84
      } ,
      {
        body: 'This was alright! The main character was just annoying.',
        rating: 3,
        userId: 3,
        movieId: 85
      } ,
      {
        body: 'I would like to see some new ideas in these horror movies, it was literally a replica of Scream',
        rating: 1,
        userId: 3,
        movieId: 86
      } ,
      {
        body: "I loved it but my wife didn't, I'm in trouble.",
        rating: 4,
        userId: 3,
        movieId: 87
      } ,
      {
        body: "I originally gave this movie 4 stars but I can't get the shocking scenes out of my head, you get 2 stars!",
        rating: 2,
        userId: 3,
        movieId: 88
      } ,
      {
        body: "This was a waste of time, the movie ended and I still didn't understand what happened !",
        rating: 2,
        userId: 3,
        movieId: 89
      } ,
      {
        body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
        rating: 5,
        userId: 3,
        movieId: 90
      } ,
      {
        body: 'The premise and idea was good, but what the heck was that ending?!',
        rating: 3,
        userId: 3,
        movieId: 91
      } ,
      {
        body: 'I loved it, it was more funny than scary in my opinion',
        rating: 4,
        userId: 3,
        movieId: 92
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 3,
        movieId: 93
      } ,
      {
        body: 'Prepare to be absolutely terrified! What an experieence',
        rating: 5,
        userId: 3,
        movieId: 94
      } ,
      {
        body: 'This should only be shown in the morning, I was so scared to leave the theater',
        rating: 2,
        userId: 3,
        movieId: 95
      } ,
      {
        body: 'Decent. I went into this with higher expectations than I should have',
        rating: 3,
        userId: 3,
        movieId: 96
      } ,
      {
        body: "This was a waste of time, the movie ended and I still didn't understand what happened !",
        rating: 2,
        userId: 3,
        movieId: 97
      } ,
      { body: 'Loved it !', rating: 4, userId: 3, movieId: 98 } ,
      {
        body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
        rating: 2,
        userId: 3,
        movieId: 99
      } ,
      {
        body: 'Decent. I went into this with higher expectations than I should have',
        rating: 3,
        userId: 3,
        movieId: 100
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 3,
        movieId: 101
      } ,
      {
        body: 'The movie was confusing at times, but the dry humor made it all better',
        rating: 4,
        userId: 3,
        movieId: 102
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 103
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 3,
        movieId: 104
      } ,
      {
        body: 'Decent. I went into this with higher expectations than I should have',
        rating: 3,
        userId: 3,
        movieId: 105
      } ,
      {
        body: 'This was alright! The main character was just annoying.',
        rating: 3,
        userId: 3,
        movieId: 106
      } ,
      {
        body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
        rating: 5,
        userId: 3,
        movieId: 107
      } ,
      {
        body: 'Excellent film, although I thought that it ended a little too suddenly.',
        rating: 4,
        userId: 3,
        movieId: 108
      } ,
      {
        body: 'Props for a scary monster/villian. Everything else was terribly executed.',
        rating: 2,
        userId: 3,
        movieId: 109
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 3,
        movieId: 110
      }])
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Movies', null, {
      truncate: true,
      cascade: true,
      restartIdentity: true,
    });
  }
};
