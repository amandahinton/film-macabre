'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Reviews',
      [{
        body: 'Excellent film, although I thought that it ended a little too suddenly.',
        rating: 4,
        userId: 5,
        movieId: 1
      } ,
      {
        body: 'Props for a scary monster/villian. Everything else was terribly executed.',
        rating: 2,
        userId: 4,
        movieId: 2
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 3
      } ,
      {
        body: 'Prepare to be absolutely terrified! What an experieence',
        rating: 5,
        userId: 2,
        movieId: 4
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 5
      } ,
      {
        body: 'Prepare to be absolutely terrified! What an experieence',
        rating: 5,
        userId: 2,
        movieId: 6
      } ,
      {
        body: 'Prepare to be absolutely terrified! What an experieence',
        rating: 5,
        userId: 2,
        movieId: 7
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 5,
        movieId: 8
      } ,
      {
        body: 'The premise and idea was good, but what the heck was that ending?!',
        rating: 3,
        userId: 4,
        movieId: 9
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 5,
        movieId: 10
      } ,
      {
        body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
        rating: 2,
        userId: 4,
        movieId: 11
      } ,
      {
        body: 'Awful experience. The plot did not even make sense',
        rating: 1,
        userId: 2,
        movieId: 12
      } ,
      {
        body: 'Prepare to be absolutely terrified! What an experieence',
        rating: 5,
        userId: 2,
        movieId: 13
      } ,
      {
        body: 'Props for a scary monster/villian. Everything else was terribly executed.',
        rating: 2,
        userId: 4,
        movieId: 14
      } ,
      {
        body: 'Prepare to be absolutely terrified! What an experieence',
        rating: 5,
        userId: 2,
        movieId: 15
      } ,
      {
        body: 'The premise and idea was good, but what the heck was that ending?!',
        rating: 3,
        userId: 4,
        movieId: 16
      } ,
      {
        body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
        rating: 4,
        userId: 4,
        movieId: 17
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 5,
        movieId: 18
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 5,
        movieId: 19
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 20
      } ,
      {
        body: 'Excellent film, although I thought that it ended a little too suddenly.',
        rating: 4,
        userId: 5,
        movieId: 21
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 5,
        movieId: 22
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 5,
        movieId: 23
      } ,
      {
        body: 'Decent. I went into this with higher expectations than I should have',
        rating: 3,
        userId: 3,
        movieId: 24
      } ,
      {
        body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
        rating: 1,
        userId: 5,
        movieId: 25
      } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 2,
        movieId: 26
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 27
      } ,
      {
        body: 'Prepare to be absolutely terrified! What an experieence',
        rating: 5,
        userId: 2,
        movieId: 28
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 5,
        movieId: 29
      } ,
      {
        body: 'Prepare to be absolutely terrified! What an experieence',
        rating: 5,
        userId: 2,
        movieId: 30
      } ,
      {
        body: 'Awful experience. The plot did not even make sense',
        rating: 1,
        userId: 2,
        movieId: 31
      } ,
      {
        body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
        rating: 2,
        userId: 4,
        movieId: 32
      } ,
      {
        body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
        rating: 4,
        userId: 1,
        movieId: 33
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 34
      } ,
      {
        body: 'Awful experience. The plot did not even make sense',
        rating: 1,
        userId: 2,
        movieId: 35
      } ,
      {
        body: 'Decent. I went into this with higher expectations than I should have',
        rating: 3,
        userId: 3,
        movieId: 36
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 5,
        movieId: 37
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 38
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 39
      } ,
      {
        body: 'Prepare to be absolutely terrified! What an experieence',
        rating: 5,
        userId: 2,
        movieId: 40
      } ,
      {
        body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
        rating: 5,
        userId: 3,
        movieId: 41
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 42
      } ,
      {
        body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
        rating: 5,
        userId: 3,
        movieId: 43
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 44
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 5,
        movieId: 45
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 46
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 47
      } ,
      {
        body: 'Excellent film, although I thought that it ended a little too suddenly.',
        rating: 4,
        userId: 5,
        movieId: 48
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 49
      } ,
      {
        body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
        rating: 4,
        userId: 4,
        movieId: 50
      } ,
      {
        body: 'Excellent film, although I thought that it ended a little too suddenly.',
        rating: 4,
        userId: 5,
        movieId: 51
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 52
      } ,
      {
        body: 'Decent. I went into this with higher expectations than I should have',
        rating: 3,
        userId: 3,
        movieId: 53
      } ,
      {
        body: 'Awful experience. The plot did not even make sense',
        rating: 1,
        userId: 2,
        movieId: 54
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 5,
        movieId: 55
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 56
      } ,
      {
        body: 'Excellent film, although I thought that it ended a little too suddenly.',
        rating: 4,
        userId: 5,
        movieId: 57
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 5,
        movieId: 58
      } ,
      {
        body: 'Decent. I went into this with higher expectations than I should have',
        rating: 3,
        userId: 3,
        movieId: 59
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 60
      } ,
      {
        body: 'The premise and idea was good, but what the heck was that ending?!',
        rating: 3,
        userId: 4,
        movieId: 61
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 62
      } ,
      {
        body: 'Excellent film, although I thought that it ended a little too suddenly.',
        rating: 4,
        userId: 5,
        movieId: 63
      } ,
      {
        body: 'Excellent film, although I thought that it ended a little too suddenly.',
        rating: 4,
        userId: 5,
        movieId: 64
      } ,
      {
        body: 'Excellent film, although I thought that it ended a little too suddenly.',
        rating: 4,
        userId: 5,
        movieId: 65
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 66
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 67
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 5,
        movieId: 68
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 69
      } ,
      {
        body: 'The premise and idea was good, but what the heck was that ending?!',
        rating: 3,
        userId: 4,
        movieId: 70
      } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 2,
        movieId: 71
      } ,
      {
        body: 'Decent. I went into this with higher expectations than I should have',
        rating: 3,
        userId: 3,
        movieId: 72
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 73
      } ,
      {
        body: 'Decent. I went into this with higher expectations than I should have',
        rating: 3,
        userId: 3,
        movieId: 74
      } ,
      {
        body: 'Awful experience. The plot did not even make sense',
        rating: 1,
        userId: 2,
        movieId: 75
      } ,
      {
        body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
        rating: 5,
        userId: 3,
        movieId: 76
      } ,
      {
        body: 'Decent. I went into this with higher expectations than I should have',
        rating: 3,
        userId: 3,
        movieId: 77
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 78
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 5,
        movieId: 79
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 5,
        movieId: 80
      } ,
      {
        body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
        rating: 4,
        userId: 1,
        movieId: 81
      } ,
      {
        body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
        rating: 2,
        userId: 4,
        movieId: 82
      } ,
      {
        body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
        rating: 2,
        userId: 4,
        movieId: 83
      } ,
      {
        body: 'The premise and idea was good, but what the heck was that ending?!',
        rating: 3,
        userId: 4,
        movieId: 84
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 85
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 86
      } ,
      {
        body: 'Prepare to be absolutely terrified! What an experieence',
        rating: 5,
        userId: 2,
        movieId: 87
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 88
      } ,
      {
        body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
        rating: 4,
        userId: 4,
        movieId: 89
      } ,
      {
        body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
        rating: 2,
        userId: 4,
        movieId: 90
      } ,
      {
        body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
        rating: 5,
        userId: 3,
        movieId: 91
      } ,
      {
        body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
        rating: 4,
        userId: 4,
        movieId: 92
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 93
      } ,
      {
        body: 'Awful experience. The plot did not even make sense',
        rating: 1,
        userId: 2,
        movieId: 94
      } ,
      {
        body: 'Excellent film, although I thought that it ended a little too suddenly.',
        rating: 4,
        userId: 5,
        movieId: 95
      } ,
      {
        body: 'Excellent film, although I thought that it ended a little too suddenly.',
        rating: 4,
        userId: 5,
        movieId: 96
      } ,
      {
        body: 'Props for a scary monster/villian. Everything else was terribly executed.',
        rating: 2,
        userId: 4,
        movieId: 97
      } ,
      {
        body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
        rating: 1,
        userId: 5,
        movieId: 98
      } ,
      {
        body: 'Prepare to be absolutely terrified! What an experieence',
        rating: 5,
        userId: 2,
        movieId: 99
      } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 2,
        movieId: 100
      } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 2,
        movieId: 101
      } ,
      {
        body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
        rating: 1,
        userId: 5,
        movieId: 102
      } ,
      {
        body: 'Prepare to be absolutely terrified! What an experieence',
        rating: 5,
        userId: 2,
        movieId: 103
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 104
      } ,
      {
        body: 'The premise and idea was good, but what the heck was that ending?!',
        rating: 3,
        userId: 4,
        movieId: 105
      } ,
      {
        body: 'Excellent film, although I thought that it ended a little too suddenly.',
        rating: 4,
        userId: 5,
        movieId: 106
      } ,
      {
        body: 'Awful experience. The plot did not even make sense',
        rating: 1,
        userId: 2,
        movieId: 107
      } ,
      {
        body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
        rating: 2,
        userId: 4,
        movieId: 108
      } ,
      {
        body: 'Props for a scary monster/villian. Everything else was terribly executed.',
        rating: 2,
        userId: 4,
        movieId: 109
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 110
      } ,
      {
        body: 'Excellent film, although I thought that it ended a little too suddenly.',
        rating: 4,
        userId: 5,
        movieId: 1
      } ,
      {
        body: 'Awful experience. The plot did not even make sense',
        rating: 1,
        userId: 2,
        movieId: 2
      } ,
      {
        body: 'The premise and idea was good, but what the heck was that ending?!',
        rating: 3,
        userId: 4,
        movieId: 3
      } ,
      {
        body: 'Prepare to be absolutely terrified! What an experieence',
        rating: 5,
        userId: 2,
        movieId: 4
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 5
      } ,
      {
        body: 'Decent. I went into this with higher expectations than I should have',
        rating: 3,
        userId: 3,
        movieId: 6
      } ,
      {
        body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
        rating: 2,
        userId: 4,
        movieId: 7
      } ,
      {
        body: 'Excellent film, although I thought that it ended a little too suddenly.',
        rating: 4,
        userId: 5,
        movieId: 8
      } ,
      {
        body: 'Awful experience. The plot did not even make sense',
        rating: 1,
        userId: 2,
        movieId: 9
      } ,
      {
        body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
        rating: 4,
        userId: 1,
        movieId: 10
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
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
        body: 'Decent. I went into this with higher expectations than I should have',
        rating: 3,
        userId: 3,
        movieId: 13
      } ,
      {
        body: 'Awful experience. The plot did not even make sense',
        rating: 1,
        userId: 2,
        movieId: 14
      } ,
      {
        body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
        rating: 4,
        userId: 4,
        movieId: 15
      } ,
      {
        body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
        rating: 1,
        userId: 5,
        movieId: 16
      } ,
      {
        body: 'The premise and idea was good, but what the heck was that ending?!',
        rating: 3,
        userId: 4,
        movieId: 17
      } ,
      {
        body: 'Prepare to be absolutely terrified! What an experieence',
        rating: 5,
        userId: 2,
        movieId: 18
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 5,
        movieId: 19
      } ,
      {
        body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
        rating: 5,
        userId: 3,
        movieId: 20
      } ,
      {
        body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
        rating: 1,
        userId: 5,
        movieId: 21
      } ,
      {
        body: 'Awful experience. The plot did not even make sense',
        rating: 1,
        userId: 2,
        movieId: 22
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 23
      } ,
      {
        body: 'Props for a scary monster/villian. Everything else was terribly executed.',
        rating: 2,
        userId: 4,
        movieId: 24
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 25
      } ,
      {
        body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
        rating: 4,
        userId: 1,
        movieId: 26
      } ,
      {
        body: 'Excellent film, although I thought that it ended a little too suddenly.',
        rating: 4,
        userId: 5,
        movieId: 27
      } ,
      {
        body: 'The premise and idea was good, but what the heck was that ending?!',
        rating: 3,
        userId: 4,
        movieId: 28
      } ,
      {
        body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
        rating: 2,
        userId: 4,
        movieId: 29
      } ,
      {
        body: 'Prepare to be absolutely terrified! What an experieence',
        rating: 5,
        userId: 2,
        movieId: 30
      } ,
      {
        body: 'Prepare to be absolutely terrified! What an experieence',
        rating: 5,
        userId: 2,
        movieId: 31
      } ,
      {
        body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
        rating: 5,
        userId: 3,
        movieId: 32
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 33
      } ,
      {
        body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
        rating: 4,
        userId: 4,
        movieId: 34
      } ,
      {
        body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
        rating: 4,
        userId: 4,
        movieId: 35
      } ,
      {
        body: 'Excellent film, although I thought that it ended a little too suddenly.',
        rating: 4,
        userId: 5,
        movieId: 36
      } ,
      {
        body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
        rating: 4,
        userId: 4,
        movieId: 37
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 38
      } ,
      {
        body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
        rating: 4,
        userId: 1,
        movieId: 39
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 40
      } ,
      {
        body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
        rating: 2,
        userId: 4,
        movieId: 41
      } ,
      {
        body: 'The premise and idea was good, but what the heck was that ending?!',
        rating: 3,
        userId: 4,
        movieId: 42
      } ,
      {
        body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
        rating: 2,
        userId: 4,
        movieId: 43
      } ,
      {
        body: 'Props for a scary monster/villian. Everything else was terribly executed.',
        rating: 2,
        userId: 4,
        movieId: 44
      } ,
      {
        body: 'Awful experience. The plot did not even make sense',
        rating: 1,
        userId: 2,
        movieId: 45
      } ,
      {
        body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
        rating: 4,
        userId: 4,
        movieId: 46
      } ,
      {
        body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
        rating: 4,
        userId: 1,
        movieId: 47
      } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 2,
        movieId: 48
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 49
      } ,
      {
        body: 'Props for a scary monster/villian. Everything else was terribly executed.',
        rating: 2,
        userId: 4,
        movieId: 50
      } ,
      {
        body: 'Decent. I went into this with higher expectations than I should have',
        rating: 3,
        userId: 3,
        movieId: 51
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 52
      } ,
      {
        body: 'Props for a scary monster/villian. Everything else was terribly executed.',
        rating: 2,
        userId: 4,
        movieId: 53
      } ,
      {
        body: 'Prepare to be absolutely terrified! What an experieence',
        rating: 5,
        userId: 2,
        movieId: 54
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 5,
        movieId: 55
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 56
      } ,
      {
        body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
        rating: 1,
        userId: 5,
        movieId: 57
      } ,
      {
        body: 'Props for a scary monster/villian. Everything else was terribly executed.',
        rating: 2,
        userId: 4,
        movieId: 58
      } ,
      {
        body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
        rating: 4,
        userId: 4,
        movieId: 59
      } ,
      {
        body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
        rating: 2,
        userId: 4,
        movieId: 60
      } ,
      {
        body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
        rating: 5,
        userId: 3,
        movieId: 61
      } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 2,
        movieId: 62
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 63
      } ,
      {
        body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
        rating: 2,
        userId: 4,
        movieId: 64
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 5,
        movieId: 65
      } ,
      {
        body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
        rating: 2,
        userId: 4,
        movieId: 66
      } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 2,
        movieId: 67
      } ,
      {
        body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
        rating: 1,
        userId: 5,
        movieId: 68
      } ,
      {
        body: 'Prepare to be absolutely terrified! What an experieence',
        rating: 5,
        userId: 2,
        movieId: 69
      } ,
      {
        body: 'Props for a scary monster/villian. Everything else was terribly executed.',
        rating: 2,
        userId: 4,
        movieId: 70
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 71
      } ,
      {
        body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
        rating: 4,
        userId: 4,
        movieId: 72
      } ,
      {
        body: 'Decent. I went into this with higher expectations than I should have',
        rating: 3,
        userId: 3,
        movieId: 73
      } ,
      {
        body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
        rating: 5,
        userId: 3,
        movieId: 74
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 75
      } ,
      {
        body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
        rating: 1,
        userId: 5,
        movieId: 76
      } ,
      {
        body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
        rating: 1,
        userId: 5,
        movieId: 77
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 78
      } ,
      {
        body: 'Props for a scary monster/villian. Everything else was terribly executed.',
        rating: 2,
        userId: 4,
        movieId: 79
      } ,
      {
        body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
        rating: 4,
        userId: 4,
        movieId: 80
      } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 2,
        movieId: 81
      } ,
      {
        body: 'Prepare to be absolutely terrified! What an experieence',
        rating: 5,
        userId: 2,
        movieId: 82
      } ,
      {
        body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
        rating: 1,
        userId: 5,
        movieId: 83
      } ,
      {
        body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
        rating: 5,
        userId: 3,
        movieId: 84
      } ,
      {
        body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
        rating: 4,
        userId: 4,
        movieId: 85
      } ,
      {
        body: 'Excellent film, although I thought that it ended a little too suddenly.',
        rating: 4,
        userId: 5,
        movieId: 86
      } ,
      {
        body: 'Props for a scary monster/villian. Everything else was terribly executed.',
        rating: 2,
        userId: 4,
        movieId: 87
      } ,
      {
        body: 'Excellent film, although I thought that it ended a little too suddenly.',
        rating: 4,
        userId: 5,
        movieId: 88
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 89
      } ,
      {
        body: 'Decent. I went into this with higher expectations than I should have',
        rating: 3,
        userId: 3,
        movieId: 90
      } ,
      {
        body: 'Props for a scary monster/villian. Everything else was terribly executed.',
        rating: 2,
        userId: 4,
        movieId: 91
      } ,
      {
        body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
        rating: 4,
        userId: 4,
        movieId: 92
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 93
      } ,
      {
        body: 'The premise and idea was good, but what the heck was that ending?!',
        rating: 3,
        userId: 4,
        movieId: 94
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 5,
        movieId: 95
      } ,
      {
        body: 'Props for a scary monster/villian. Everything else was terribly executed.',
        rating: 2,
        userId: 4,
        movieId: 96
      } ,
      {
        body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
        rating: 1,
        userId: 5,
        movieId: 97
      } ,
      {
        body: 'Prepare to be absolutely terrified! What an experieence',
        rating: 5,
        userId: 2,
        movieId: 98
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 5,
        movieId: 99
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 100
      } ,
      {
        body: 'Decent. I went into this with higher expectations than I should have',
        rating: 3,
        userId: 3,
        movieId: 101
      } ,
      {
        body: 'Prepare to be absolutely terrified! What an experieence',
        rating: 5,
        userId: 2,
        movieId: 102
      } ,
      {
        body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
        rating: 2,
        userId: 4,
        movieId: 103
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 104
      } ,
      {
        body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
        rating: 2,
        userId: 4,
        movieId: 105
      } ,
      {
        body: 'The premise and idea was good, but what the heck was that ending?!',
        rating: 3,
        userId: 4,
        movieId: 106
      } ,
      {
        body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
        rating: 4,
        userId: 1,
        movieId: 107
      } ,
      {
        body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
        rating: 4,
        userId: 4,
        movieId: 108
      } ,
      {
        body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
        rating: 1,
        userId: 5,
        movieId: 109
      } ,
      {
        body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
        rating: 1,
        userId: 5,
        movieId: 110
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 1
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 2
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 3
      } ,
      {
        body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
        rating: 2,
        userId: 4,
        movieId: 4
      } ,
      {
        body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
        rating: 4,
        userId: 4,
        movieId: 5
      } ,
      {
        body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
        rating: 5,
        userId: 3,
        movieId: 6
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 5,
        movieId: 7
      } ,
      {
        body: 'Awful experience. The plot did not even make sense',
        rating: 1,
        userId: 2,
        movieId: 8
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 9
      } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 2,
        movieId: 10
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 5,
        movieId: 11
      } ,
      {
        body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
        rating: 1,
        userId: 5,
        movieId: 12
      } ,
      {
        body: 'Awful experience. The plot did not even make sense',
        rating: 1,
        userId: 2,
        movieId: 13
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 14
      } ,
      {
        body: 'The premise and idea was good, but what the heck was that ending?!',
        rating: 3,
        userId: 4,
        movieId: 15
      } ,
      {
        body: 'Excellent film, although I thought that it ended a little too suddenly.',
        rating: 4,
        userId: 5,
        movieId: 16
      } ,
      {
        body: 'Awful experience. The plot did not even make sense',
        rating: 1,
        userId: 2,
        movieId: 17
      } ,
      {
        body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
        rating: 1,
        userId: 5,
        movieId: 18
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 19
      } ,
      {
        body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
        rating: 4,
        userId: 4,
        movieId: 20
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 21
      } ,
      {
        body: 'Prepare to be absolutely terrified! What an experieence',
        rating: 5,
        userId: 2,
        movieId: 22
      } ,
      {
        body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
        rating: 4,
        userId: 4,
        movieId: 23
      } ,
      {
        body: 'Awful experience. The plot did not even make sense',
        rating: 1,
        userId: 2,
        movieId: 24
      } ,
      {
        body: 'The premise and idea was good, but what the heck was that ending?!',
        rating: 3,
        userId: 4,
        movieId: 25
      } ,
      {
        body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
        rating: 5,
        userId: 3,
        movieId: 26
      } ,
      {
        body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
        rating: 5,
        userId: 3,
        movieId: 27
      } ,
      {
        body: 'Decent. I went into this with higher expectations than I should have',
        rating: 3,
        userId: 3,
        movieId: 28
      } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 2,
        movieId: 29
      } ,
      {
        body: 'Props for a scary monster/villian. Everything else was terribly executed.',
        rating: 2,
        userId: 4,
        movieId: 30
      } ,
      {
        body: 'The premise and idea was good, but what the heck was that ending?!',
        rating: 3,
        userId: 4,
        movieId: 31
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 32
      } ,
      {
        body: 'Awful experience. The plot did not even make sense',
        rating: 1,
        userId: 2,
        movieId: 33
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 5,
        movieId: 34
      } ,
      {
        body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
        rating: 4,
        userId: 4,
        movieId: 35
      } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 2,
        movieId: 36
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 37
      } ,
      {
        body: 'Props for a scary monster/villian. Everything else was terribly executed.',
        rating: 2,
        userId: 4,
        movieId: 38
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 39
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 40
      } ,
      {
        body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
        rating: 2,
        userId: 4,
        movieId: 41
      } ,
      {
        body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
        rating: 4,
        userId: 1,
        movieId: 42
      } ,
      {
        body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
        rating: 1,
        userId: 5,
        movieId: 43
      } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 2,
        movieId: 44
      } ,
      {
        body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
        rating: 5,
        userId: 3,
        movieId: 45
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 46
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 47
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 48
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 49
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 50
      } ,
      {
        body: 'Props for a scary monster/villian. Everything else was terribly executed.',
        rating: 2,
        userId: 4,
        movieId: 51
      } ,
      {
        body: 'Props for a scary monster/villian. Everything else was terribly executed.',
        rating: 2,
        userId: 4,
        movieId: 52
      } ,
      {
        body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
        rating: 4,
        userId: 4,
        movieId: 53
      } ,
      {
        body: 'Excellent film, although I thought that it ended a little too suddenly.',
        rating: 4,
        userId: 5,
        movieId: 54
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 55
      } ,
      {
        body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
        rating: 4,
        userId: 1,
        movieId: 56
      } ,
      {
        body: 'The premise and idea was good, but what the heck was that ending?!',
        rating: 3,
        userId: 4,
        movieId: 57
      } ,
      {
        body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
        rating: 4,
        userId: 1,
        movieId: 58
      } ,
      {
        body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
        rating: 2,
        userId: 4,
        movieId: 59
      } ,
      {
        body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
        rating: 1,
        userId: 5,
        movieId: 60
      } ,
      {
        body: 'Awful experience. The plot did not even make sense',
        rating: 1,
        userId: 2,
        movieId: 61
      } ,
      {
        body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
        rating: 4,
        userId: 1,
        movieId: 62
      } ,
      {
        body: 'Decent. I went into this with higher expectations than I should have',
        rating: 3,
        userId: 3,
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
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 66
      } ,
      {
        body: 'Props for a scary monster/villian. Everything else was terribly executed.',
        rating: 2,
        userId: 4,
        movieId: 67
      } ,
      {
        body: 'Excellent film, although I thought that it ended a little too suddenly.',
        rating: 4,
        userId: 5,
        movieId: 68
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 69
      } ,
      {
        body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
        rating: 4,
        userId: 4,
        movieId: 70
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 71
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 72
      } ,
      {
        body: 'Decent. I went into this with higher expectations than I should have',
        rating: 3,
        userId: 3,
        movieId: 73
      } ,
      {
        body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
        rating: 4,
        userId: 4,
        movieId: 74
      } ,
      {
        body: 'Decent. I went into this with higher expectations than I should have',
        rating: 3,
        userId: 3,
        movieId: 75
      } ,
      {
        body: 'Props for a scary monster/villian. Everything else was terribly executed.',
        rating: 2,
        userId: 4,
        movieId: 76
      } ,
      {
        body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
        rating: 2,
        userId: 4,
        movieId: 77
      } ,
      {
        body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
        rating: 4,
        userId: 4,
        movieId: 78
      } ,
      {
        body: 'Props for a scary monster/villian. Everything else was terribly executed.',
        rating: 2,
        userId: 4,
        movieId: 79
      } ,
      {
        body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
        rating: 2,
        userId: 4,
        movieId: 80
      } ,
      {
        body: 'Decent. I went into this with higher expectations than I should have',
        rating: 3,
        userId: 3,
        movieId: 81
      } ,
      {
        body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
        rating: 1,
        userId: 5,
        movieId: 82
      } ,
      {
        body: 'Awful experience. The plot did not even make sense',
        rating: 1,
        userId: 2,
        movieId: 83
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 84
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 85
      } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 2,
        movieId: 86
      } ,
      {
        body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
        rating: 1,
        userId: 5,
        movieId: 87
      } ,
      {
        body: 'Decent. I went into this with higher expectations than I should have',
        rating: 3,
        userId: 3,
        movieId: 88
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 89
      } ,
      {
        body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
        rating: 5,
        userId: 3,
        movieId: 90
      } ,
      {
        body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
        rating: 1,
        userId: 5,
        movieId: 91
      } ,
      {
        body: 'Decent. I went into this with higher expectations than I should have',
        rating: 3,
        userId: 3,
        movieId: 92
      } ,
      {
        body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
        rating: 2,
        userId: 4,
        movieId: 93
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 94
      } ,
      {
        body: 'Prepare to be absolutely terrified! What an experieence',
        rating: 5,
        userId: 2,
        movieId: 95
      } ,
      {
        body: 'The premise and idea was good, but what the heck was that ending?!',
        rating: 3,
        userId: 4,
        movieId: 96
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
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
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 99
      } ,
      {
        body: 'Prepare to be absolutely terrified! What an experieence',
        rating: 5,
        userId: 2,
        movieId: 100
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 5,
        movieId: 101
      } ,
      {
        body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
        rating: 4,
        userId: 1,
        movieId: 102
      } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 2,
        movieId: 103
      } ,
      {
        body: 'Prepare to be absolutely terrified! What an experieence',
        rating: 5,
        userId: 2,
        movieId: 104
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 5,
        movieId: 105
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 5,
        movieId: 106
      } ,
      {
        body: 'Awful experience. The plot did not even make sense',
        rating: 1,
        userId: 2,
        movieId: 107
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 5,
        movieId: 108
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 5,
        movieId: 109
      } ,
      {
        body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
        rating: 4,
        userId: 1,
        movieId: 110
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 1
      } ,
      {
        body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
        rating: 1,
        userId: 5,
        movieId: 2
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 3
      } ,
      {
        body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
        rating: 4,
        userId: 4,
        movieId: 4
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 5
      } ,
      {
        body: 'Prepare to be absolutely terrified! What an experieence',
        rating: 5,
        userId: 2,
        movieId: 6
      } ,
      {
        body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
        rating: 2,
        userId: 4,
        movieId: 7
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 8
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 9
      } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 2,
        movieId: 10
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 5,
        movieId: 11
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 5,
        movieId: 12
      } ,
      {
        body: 'The premise and idea was good, but what the heck was that ending?!',
        rating: 3,
        userId: 4,
        movieId: 13
      } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 2,
        movieId: 14
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 15
      } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 2,
        movieId: 16
      } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 2,
        movieId: 17
      } ,
      {
        body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
        rating: 1,
        userId: 5,
        movieId: 18
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 5,
        movieId: 19
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 5,
        movieId: 20
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 5,
        movieId: 21
      } ,
      {
        body: 'The premise and idea was good, but what the heck was that ending?!',
        rating: 3,
        userId: 4,
        movieId: 22
      } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 2,
        movieId: 23
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 24
      } ,
      {
        body: 'Awful experience. The plot did not even make sense',
        rating: 1,
        userId: 2,
        movieId: 25
      } ,
      {
        body: 'Excellent film, although I thought that it ended a little too suddenly.',
        rating: 4,
        userId: 5,
        movieId: 26
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 5,
        movieId: 27
      } ,
      {
        body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
        rating: 5,
        userId: 3,
        movieId: 28
      } ,
      {
        body: 'Awful experience. The plot did not even make sense',
        rating: 1,
        userId: 2,
        movieId: 29
      } ,
      {
        body: 'Decent. I went into this with higher expectations than I should have',
        rating: 3,
        userId: 3,
        movieId: 30
      } ,
      {
        body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
        rating: 5,
        userId: 3,
        movieId: 31
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 32
      } ,
      {
        body: 'Prepare to be absolutely terrified! What an experieence',
        rating: 5,
        userId: 2,
        movieId: 33
      } ,
      {
        body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
        rating: 4,
        userId: 4,
        movieId: 34
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 35
      } ,
      {
        body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
        rating: 5,
        userId: 3,
        movieId: 36
      } ,
      {
        body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
        rating: 4,
        userId: 1,
        movieId: 37
      } ,
      {
        body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
        rating: 1,
        userId: 5,
        movieId: 38
      } ,
      {
        body: 'Excellent film, although I thought that it ended a little too suddenly.',
        rating: 4,
        userId: 5,
        movieId: 39
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 40
      } ,
      {
        body: 'The premise and idea was good, but what the heck was that ending?!',
        rating: 3,
        userId: 4,
        movieId: 41
      } ,
      {
        body: 'Prepare to be absolutely terrified! What an experieence',
        rating: 5,
        userId: 2,
        movieId: 42
      } ,
      {
        body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
        rating: 1,
        userId: 5,
        movieId: 43
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 44
      } ,
      {
        body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
        rating: 1,
        userId: 5,
        movieId: 45
      } ,
      {
        body: 'The premise and idea was good, but what the heck was that ending?!',
        rating: 3,
        userId: 4,
        movieId: 46
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 47
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 48
      } ,
      {
        body: 'Awful experience. The plot did not even make sense',
        rating: 1,
        userId: 2,
        movieId: 49
      } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 2,
        movieId: 50
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 5,
        movieId: 51
      } ,
      {
        body: 'Awful experience. The plot did not even make sense',
        rating: 1,
        userId: 2,
        movieId: 52
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 5,
        movieId: 53
      } ,
      {
        body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
        rating: 4,
        userId: 4,
        movieId: 54
      } ,
      {
        body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
        rating: 4,
        userId: 4,
        movieId: 55
      } ,
      {
        body: 'Awful experience. The plot did not even make sense',
        rating: 1,
        userId: 2,
        movieId: 56
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 57
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 58
      } ,
      {
        body: 'Excellent film, although I thought that it ended a little too suddenly.',
        rating: 4,
        userId: 5,
        movieId: 59
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 60
      } ,
      {
        body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
        rating: 4,
        userId: 1,
        movieId: 61
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 62
      } ,
      {
        body: 'Awful experience. The plot did not even make sense',
        rating: 1,
        userId: 2,
        movieId: 63
      } ,
      {
        body: 'Props for a scary monster/villian. Everything else was terribly executed.',
        rating: 2,
        userId: 4,
        movieId: 64
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 65
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 5,
        movieId: 66
      } ,
      {
        body: 'Decent. I went into this with higher expectations than I should have',
        rating: 3,
        userId: 3,
        movieId: 67
      } ,
      {
        body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
        rating: 4,
        userId: 1,
        movieId: 68
      } ,
      {
        body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
        rating: 1,
        userId: 5,
        movieId: 69
      } ,
      {
        body: 'Awful experience. The plot did not even make sense',
        rating: 1,
        userId: 2,
        movieId: 70
      } ,
      {
        body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
        rating: 2,
        userId: 4,
        movieId: 71
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 5,
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
        userId: 5,
        movieId: 74
      } ,
      {
        body: 'Decent. I went into this with higher expectations than I should have',
        rating: 3,
        userId: 3,
        movieId: 75
      } ,
      {
        body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
        rating: 4,
        userId: 4,
        movieId: 76
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 77
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 78
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 79
      } ,
      {
        body: 'Props for a scary monster/villian. Everything else was terribly executed.',
        rating: 2,
        userId: 4,
        movieId: 80
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 5,
        movieId: 81
      } ,
      {
        body: 'Props for a scary monster/villian. Everything else was terribly executed.',
        rating: 2,
        userId: 4,
        movieId: 82
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 83
      } ,
      {
        body: 'The premise and idea was good, but what the heck was that ending?!',
        rating: 3,
        userId: 4,
        movieId: 84
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 5,
        movieId: 85
      } ,
      {
        body: 'Decent. I went into this with higher expectations than I should have',
        rating: 3,
        userId: 3,
        movieId: 86
      } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 2,
        movieId: 87
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 88
      } ,
      {
        body: 'The premise and idea was good, but what the heck was that ending?!',
        rating: 3,
        userId: 4,
        movieId: 89
      } ,
      {
        body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
        rating: 5,
        userId: 3,
        movieId: 90
      } ,
      {
        body: 'Awful experience. The plot did not even make sense',
        rating: 1,
        userId: 2,
        movieId: 91
      } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 2,
        movieId: 92
      } ,
      {
        body: 'The premise and idea was good, but what the heck was that ending?!',
        rating: 3,
        userId: 4,
        movieId: 93
      } ,
      {
        body: 'Prepare to be absolutely terrified! What an experieence',
        rating: 5,
        userId: 2,
        movieId: 94
      } ,
      {
        body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
        rating: 4,
        userId: 4,
        movieId: 95
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 96
      } ,
      {
        body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
        rating: 5,
        userId: 3,
        movieId: 97
      } ,
      {
        body: 'Prepare to be absolutely terrified! What an experieence',
        rating: 5,
        userId: 2,
        movieId: 98
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 99
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 100
      } ,
      {
        body: 'Decent. I went into this with higher expectations than I should have',
        rating: 3,
        userId: 3,
        movieId: 101
      } ,
      {
        body: 'Decent. I went into this with higher expectations than I should have',
        rating: 3,
        userId: 3,
        movieId: 102
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 5,
        movieId: 103
      } ,
      {
        body: 'Props for a scary monster/villian. Everything else was terribly executed.',
        rating: 2,
        userId: 4,
        movieId: 104
      } ,
      {
        body: 'Awful experience. The plot did not even make sense',
        rating: 1,
        userId: 2,
        movieId: 105
      } ,
      {
        body: 'Excellent film, although I thought that it ended a little too suddenly.',
        rating: 4,
        userId: 5,
        movieId: 106
      } ,
      {
        body: 'The premise and idea was good, but what the heck was that ending?!',
        rating: 3,
        userId: 4,
        movieId: 107
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 5,
        movieId: 108
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 109
      } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 2,
        movieId: 110
      } ,
      {
        body: 'Props for a scary monster/villian. Everything else was terribly executed.',
        rating: 2,
        userId: 4,
        movieId: 1
      } ,
      {
        body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
        rating: 5,
        userId: 3,
        movieId: 2
      } ,
      {
        body: 'The premise and idea was good, but what the heck was that ending?!',
        rating: 3,
        userId: 4,
        movieId: 3
      } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 2,
        movieId: 4
      } ,
      {
        body: 'Decent. I went into this with higher expectations than I should have',
        rating: 3,
        userId: 3,
        movieId: 5
      } ,
      {
        body: 'Awful experience. The plot did not even make sense',
        rating: 1,
        userId: 2,
        movieId: 6
      } ,
      {
        body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
        rating: 1,
        userId: 5,
        movieId: 7
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 8
      } ,
      {
        body: 'Decent. I went into this with higher expectations than I should have',
        rating: 3,
        userId: 3,
        movieId: 9
      } ,
      {
        body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
        rating: 4,
        userId: 1,
        movieId: 10
      } ,
      {
        body: 'Props for a scary monster/villian. Everything else was terribly executed.',
        rating: 2,
        userId: 4,
        movieId: 11
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 12
      } ,
      {
        body: 'Decent. I went into this with higher expectations than I should have',
        rating: 3,
        userId: 3,
        movieId: 13
      } ,
      {
        body: 'Excellent film, although I thought that it ended a little too suddenly.',
        rating: 4,
        userId: 5,
        movieId: 14
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 15
      } ,
      {
        body: 'Prepare to be absolutely terrified! What an experieence',
        rating: 5,
        userId: 2,
        movieId: 16
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 17
      } ,
      {
        body: 'Excellent film, although I thought that it ended a little too suddenly.',
        rating: 4,
        userId: 5,
        movieId: 18
      } ,
      {
        body: 'The premise and idea was good, but what the heck was that ending?!',
        rating: 3,
        userId: 4,
        movieId: 19
      } ,
      {
        body: 'The premise and idea was good, but what the heck was that ending?!',
        rating: 3,
        userId: 4,
        movieId: 20
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 21
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 5,
        movieId: 22
      } ,
      {
        body: 'Excellent film, although I thought that it ended a little too suddenly.',
        rating: 4,
        userId: 5,
        movieId: 23
      } ,
      {
        body: 'Prepare to be absolutely terrified! What an experieence',
        rating: 5,
        userId: 2,
        movieId: 24
      } ,
      {
        body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
        rating: 5,
        userId: 3,
        movieId: 25
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 26
      } ,
      {
        body: 'Props for a scary monster/villian. Everything else was terribly executed.',
        rating: 2,
        userId: 4,
        movieId: 27
      } ,
      {
        body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
        rating: 4,
        userId: 1,
        movieId: 28
      } ,
      {
        body: 'Excellent film, although I thought that it ended a little too suddenly.',
        rating: 4,
        userId: 5,
        movieId: 29
      } ,
      {
        body: 'Awful experience. The plot did not even make sense',
        rating: 1,
        userId: 2,
        movieId: 30
      } ,
      {
        body: 'Prepare to be absolutely terrified! What an experieence',
        rating: 5,
        userId: 2,
        movieId: 31
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 32
      } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 2,
        movieId: 33
      } ,
      {
        body: 'Awful experience. The plot did not even make sense',
        rating: 1,
        userId: 2,
        movieId: 34
      } ,
      {
        body: 'The premise and idea was good, but what the heck was that ending?!',
        rating: 3,
        userId: 4,
        movieId: 35
      } ,
      {
        body: 'Prepare to be absolutely terrified! What an experieence',
        rating: 5,
        userId: 2,
        movieId: 36
      } ,
      {
        body: 'Props for a scary monster/villian. Everything else was terribly executed.',
        rating: 2,
        userId: 4,
        movieId: 37
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 38
      } ,
      {
        body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
        rating: 5,
        userId: 3,
        movieId: 39
      } ,
      {
        body: 'Props for a scary monster/villian. Everything else was terribly executed.',
        rating: 2,
        userId: 4,
        movieId: 40
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 41
      } ,
      {
        body: 'The premise and idea was good, but what the heck was that ending?!',
        rating: 3,
        userId: 4,
        movieId: 42
      } ,
      {
        body: 'Excellent film, although I thought that it ended a little too suddenly.',
        rating: 4,
        userId: 5,
        movieId: 43
      } ,
      {
        body: 'The premise and idea was good, but what the heck was that ending?!',
        rating: 3,
        userId: 4,
        movieId: 44
      } ,
      {
        body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
        rating: 5,
        userId: 3,
        movieId: 45
      } ,
      {
        body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
        rating: 4,
        userId: 1,
        movieId: 46
      } ,
      {
        body: 'Prepare to be absolutely terrified! What an experieence',
        rating: 5,
        userId: 2,
        movieId: 47
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 48
      } ,
      {
        body: 'Prepare to be absolutely terrified! What an experieence',
        rating: 5,
        userId: 2,
        movieId: 49
      } ,
      {
        body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
        rating: 5,
        userId: 3,
        movieId: 50
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 51
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 52
      } ,
      {
        body: 'Excellent film, although I thought that it ended a little too suddenly.',
        rating: 4,
        userId: 5,
        movieId: 53
      } ,
      {
        body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
        rating: 4,
        userId: 1,
        movieId: 54
      } ,
      {
        body: 'Decent. I went into this with higher expectations than I should have',
        rating: 3,
        userId: 3,
        movieId: 55
      } ,
      {
        body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
        rating: 5,
        userId: 3,
        movieId: 56
      } ,
      {
        body: 'Decent. I went into this with higher expectations than I should have',
        rating: 3,
        userId: 3,
        movieId: 57
      } ,
      {
        body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
        rating: 2,
        userId: 4,
        movieId: 58
      } ,
      {
        body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
        rating: 1,
        userId: 5,
        movieId: 59
      } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 2,
        movieId: 60
      } ,
      {
        body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
        rating: 1,
        userId: 5,
        movieId: 61
      } ,
      {
        body: 'Awful experience. The plot did not even make sense',
        rating: 1,
        userId: 2,
        movieId: 62
      } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 2,
        movieId: 63
      } ,
      {
        body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
        rating: 1,
        userId: 5,
        movieId: 64
      } ,
      {
        body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
        rating: 4,
        userId: 4,
        movieId: 65
      } ,
      {
        body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
        rating: 1,
        userId: 5,
        movieId: 66
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 5,
        movieId: 67
      } ,
      {
        body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
        rating: 4,
        userId: 4,
        movieId: 68
      } ,
      {
        body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
        rating: 2,
        userId: 4,
        movieId: 69
      } ,
      {
        body: 'Decent. I went into this with higher expectations than I should have',
        rating: 3,
        userId: 3,
        movieId: 70
      } ,
      {
        body: 'Decent. I went into this with higher expectations than I should have',
        rating: 3,
        userId: 3,
        movieId: 71
      } ,
      {
        body: 'Decent. I went into this with higher expectations than I should have',
        rating: 3,
        userId: 3,
        movieId: 72
      } ,
      {
        body: 'Decent. I went into this with higher expectations than I should have',
        rating: 3,
        userId: 3,
        movieId: 73
      } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 2,
        movieId: 74
      } ,
      {
        body: 'Props for a scary monster/villian. Everything else was terribly executed.',
        rating: 2,
        userId: 4,
        movieId: 75
      } ,
      {
        body: 'Prepare to be absolutely terrified! What an experieence',
        rating: 5,
        userId: 2,
        movieId: 76
      } ,
      {
        body: 'Props for a scary monster/villian. Everything else was terribly executed.',
        rating: 2,
        userId: 4,
        movieId: 77
      } ,
      {
        body: 'Props for a scary monster/villian. Everything else was terribly executed.',
        rating: 2,
        userId: 4,
        movieId: 78
      } ,
      {
        body: 'Awful experience. The plot did not even make sense',
        rating: 1,
        userId: 2,
        movieId: 79
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 80
      } ,
      {
        body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
        rating: 5,
        userId: 3,
        movieId: 81
      } ,
      {
        body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
        rating: 5,
        userId: 3,
        movieId: 82
      } ,
      {
        body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
        rating: 2,
        userId: 4,
        movieId: 83
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 84
      } ,
      {
        body: 'Excellent film, although I thought that it ended a little too suddenly.',
        rating: 4,
        userId: 5,
        movieId: 85
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 86
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 87
      } ,
      {
        body: 'The premise and idea was good, but what the heck was that ending?!',
        rating: 3,
        userId: 4,
        movieId: 88
      } ,
      {
        body: 'Excellent film, although I thought that it ended a little too suddenly.',
        rating: 4,
        userId: 5,
        movieId: 89
      } ,
      {
        body: 'Prepare to be absolutely terrified! What an experieence',
        rating: 5,
        userId: 2,
        movieId: 90
      } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 2,
        movieId: 91
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 5,
        movieId: 92
      } ,
      {
        body: 'Decent. I went into this with higher expectations than I should have',
        rating: 3,
        userId: 3,
        movieId: 93
      } ,
      {
        body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
        rating: 4,
        userId: 4,
        movieId: 94
      } ,
      {
        body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
        rating: 4,
        userId: 4,
        movieId: 95
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 5,
        movieId: 96
      } ,
      {
        body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
        rating: 4,
        userId: 4,
        movieId: 97
      } ,
      {
        body: 'The premise and idea was good, but what the heck was that ending?!',
        rating: 3,
        userId: 4,
        movieId: 98
      } ,
      {
        body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
        rating: 4,
        userId: 4,
        movieId: 99
      } ,
      {
        body: 'Excellent film, although I thought that it ended a little too suddenly.',
        rating: 4,
        userId: 5,
        movieId: 100
      } ,
      {
        body: 'Excellent film, although I thought that it ended a little too suddenly.',
        rating: 4,
        userId: 5,
        movieId: 101
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 102
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 103
      } ,
      {
        body: 'Awful experience. The plot did not even make sense',
        rating: 1,
        userId: 2,
        movieId: 104
      } ,
      {
        body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
        rating: 1,
        userId: 5,
        movieId: 105
      } ,
      {
        body: 'Awful experience. The plot did not even make sense',
        rating: 1,
        userId: 2,
        movieId: 106
      } ,
      {
        body: 'Excellent film, although I thought that it ended a little too suddenly.',
        rating: 4,
        userId: 5,
        movieId: 107
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 108
      } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 2,
        movieId: 109
      } ,
      {
        body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
        rating: 5,
        userId: 3,
        movieId: 110
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 5,
        movieId: 1
      } ,
      {
        body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
        rating: 4,
        userId: 4,
        movieId: 2
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 3
      } ,
      {
        body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
        rating: 4,
        userId: 1,
        movieId: 4
      } ,
      {
        body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
        rating: 2,
        userId: 4,
        movieId: 5
      } ,
      {
        body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
        rating: 1,
        userId: 5,
        movieId: 6
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 7
      } ,
      {
        body: 'Prepare to be absolutely terrified! What an experieence',
        rating: 5,
        userId: 2,
        movieId: 8
      } ,
      {
        body: 'Excellent film, although I thought that it ended a little too suddenly.',
        rating: 4,
        userId: 5,
        movieId: 9
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 10
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 5,
        movieId: 11
      } ,
      {
        body: 'The premise and idea was good, but what the heck was that ending?!',
        rating: 3,
        userId: 4,
        movieId: 12
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 13
      } ,
      {
        body: 'Awful experience. The plot did not even make sense',
        rating: 1,
        userId: 2,
        movieId: 14
      } ,
      {
        body: 'Props for a scary monster/villian. Everything else was terribly executed.',
        rating: 2,
        userId: 4,
        movieId: 15
      } ,
      {
        body: 'Prepare to be absolutely terrified! What an experieence',
        rating: 5,
        userId: 2,
        movieId: 16
      } ,
      {
        body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
        rating: 1,
        userId: 5,
        movieId: 17
      } ,
      {
        body: 'Awful experience. The plot did not even make sense',
        rating: 1,
        userId: 2,
        movieId: 18
      } ,
      {
        body: 'Decent. I went into this with higher expectations than I should have',
        rating: 3,
        userId: 3,
        movieId: 19
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 5,
        movieId: 20
      } ,
      {
        body: 'Prepare to be absolutely terrified! What an experieence',
        rating: 5,
        userId: 2,
        movieId: 21
      } ,
      {
        body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
        rating: 5,
        userId: 3,
        movieId: 22
      } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 2,
        movieId: 23
      } ,
      {
        body: 'Prepare to be absolutely terrified! What an experieence',
        rating: 5,
        userId: 2,
        movieId: 24
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 5,
        movieId: 25
      } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 2,
        movieId: 26
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 27
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 28
      } ,
      {
        body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
        rating: 2,
        userId: 4,
        movieId: 29
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 5,
        movieId: 30
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 31
      } ,
      {
        body: 'Prepare to be absolutely terrified! What an experieence',
        rating: 5,
        userId: 2,
        movieId: 32
      } ,
      {
        body: 'Decent. I went into this with higher expectations than I should have',
        rating: 3,
        userId: 3,
        movieId: 33
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 34
      } ,
      {
        body: 'Excellent film, although I thought that it ended a little too suddenly.',
        rating: 4,
        userId: 5,
        movieId: 35
      } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 2,
        movieId: 36
      } ,
      {
        body: 'Props for a scary monster/villian. Everything else was terribly executed.',
        rating: 2,
        userId: 4,
        movieId: 37
      } ,
      {
        body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
        rating: 4,
        userId: 4,
        movieId: 38
      } ,
      {
        body: 'Decent. I went into this with higher expectations than I should have',
        rating: 3,
        userId: 3,
        movieId: 39
      } ,
      {
        body: 'Excellent film, although I thought that it ended a little too suddenly.',
        rating: 4,
        userId: 5,
        movieId: 40
      } ,
      {
        body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
        rating: 2,
        userId: 4,
        movieId: 41
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 5,
        movieId: 42
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 5,
        movieId: 43
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 44
      } ,
      {
        body: 'Props for a scary monster/villian. Everything else was terribly executed.',
        rating: 2,
        userId: 4,
        movieId: 45
      } ,
      {
        body: 'The premise and idea was good, but what the heck was that ending?!',
        rating: 3,
        userId: 4,
        movieId: 46
      } ,
      {
        body: 'Prepare to be absolutely terrified! What an experieence',
        rating: 5,
        userId: 2,
        movieId: 47
      } ,
      {
        body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
        rating: 2,
        userId: 4,
        movieId: 48
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 49
      } ,
      {
        body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
        rating: 2,
        userId: 4,
        movieId: 50
      } ,
      {
        body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
        rating: 1,
        userId: 5,
        movieId: 51
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 52
      } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 2,
        movieId: 53
      } ,
      {
        body: 'The premise and idea was good, but what the heck was that ending?!',
        rating: 3,
        userId: 4,
        movieId: 54
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 55
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 56
      } ,
      {
        body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
        rating: 4,
        userId: 4,
        movieId: 57
      } ,
      {
        body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
        rating: 5,
        userId: 3,
        movieId: 58
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 59
      } ,
      {
        body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
        rating: 4,
        userId: 1,
        movieId: 60
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 61
      } ,
      {
        body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
        rating: 2,
        userId: 4,
        movieId: 62
      } ,
      {
        body: 'The premise and idea was good, but what the heck was that ending?!',
        rating: 3,
        userId: 4,
        movieId: 63
      } ,
      {
        body: 'Awful experience. The plot did not even make sense',
        rating: 1,
        userId: 2,
        movieId: 64
      } ,
      {
        body: 'Decent. I went into this with higher expectations than I should have',
        rating: 3,
        userId: 3,
        movieId: 65
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 66
      } ,
      {
        body: 'Excellent film, although I thought that it ended a little too suddenly.',
        rating: 4,
        userId: 5,
        movieId: 67
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 68
      } ,
      {
        body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
        rating: 5,
        userId: 3,
        movieId: 69
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 70
      } ,
      {
        body: 'Prepare to be absolutely terrified! What an experieence',
        rating: 5,
        userId: 2,
        movieId: 71
      } ,
      {
        body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
        rating: 2,
        userId: 4,
        movieId: 72
      } ,
      {
        body: 'Prepare to be absolutely terrified! What an experieence',
        rating: 5,
        userId: 2,
        movieId: 73
      } ,
      {
        body: 'Props for a scary monster/villian. Everything else was terribly executed.',
        rating: 2,
        userId: 4,
        movieId: 74
      } ,
      {
        body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
        rating: 5,
        userId: 3,
        movieId: 75
      } ,
      {
        body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
        rating: 2,
        userId: 4,
        movieId: 76
      } ,
      {
        body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
        rating: 4,
        userId: 4,
        movieId: 77
      } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 2,
        movieId: 78
      } ,
      {
        body: 'Prepare to be absolutely terrified! What an experieence',
        rating: 5,
        userId: 2,
        movieId: 79
      } ,
      {
        body: 'Excellent film, although I thought that it ended a little too suddenly.',
        rating: 4,
        userId: 5,
        movieId: 80
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 81
      } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 2,
        movieId: 82
      } ,
      {
        body: 'The premise and idea was good, but what the heck was that ending?!',
        rating: 3,
        userId: 4,
        movieId: 83
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 5,
        movieId: 84
      } ,
      {
        body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
        rating: 2,
        userId: 4,
        movieId: 85
      } ,
      {
        body: 'The premise and idea was good, but what the heck was that ending?!',
        rating: 3,
        userId: 4,
        movieId: 86
      } ,
      {
        body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
        rating: 5,
        userId: 3,
        movieId: 87
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 88
      } ,
      {
        body: 'Excellent film, although I thought that it ended a little too suddenly.',
        rating: 4,
        userId: 5,
        movieId: 89
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 90
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 91
      } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 2,
        movieId: 92
      } ,
      {
        body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
        rating: 4,
        userId: 4,
        movieId: 93
      } ,
      {
        body: 'Props for a scary monster/villian. Everything else was terribly executed.',
        rating: 2,
        userId: 4,
        movieId: 94
      } ,
      {
        body: 'Awful experience. The plot did not even make sense',
        rating: 1,
        userId: 2,
        movieId: 95
      } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 2,
        movieId: 96
      } ,
      {
        body: 'Awful experience. The plot did not even make sense',
        rating: 1,
        userId: 2,
        movieId: 97
      } ,
      {
        body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
        rating: 1,
        userId: 5,
        movieId: 98
      } ,
      {
        body: 'Props for a scary monster/villian. Everything else was terribly executed.',
        rating: 2,
        userId: 4,
        movieId: 99
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 5,
        movieId: 100
      } ,
      {
        body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
        rating: 4,
        userId: 4,
        movieId: 101
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 5,
        movieId: 102
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 103
      } ,
      {
        body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
        rating: 4,
        userId: 4,
        movieId: 104
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 105
      } ,
      {
        body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
        rating: 4,
        userId: 1,
        movieId: 106
      } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 2,
        movieId: 107
      } ,
      {
        body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
        rating: 5,
        userId: 3,
        movieId: 108
      } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 2,
        movieId: 109
      } ,
      {
        body: 'The premise and idea was good, but what the heck was that ending?!',
        rating: 3,
        userId: 4,
        movieId: 110
      } ,
      {
        body: 'Props for a scary monster/villian. Everything else was terribly executed.',
        rating: 2,
        userId: 4,
        movieId: 1
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 2
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 3
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 5,
        movieId: 4
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 5
      } ,
      {
        body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
        rating: 1,
        userId: 5,
        movieId: 6
      } ,
      {
        body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
        rating: 5,
        userId: 3,
        movieId: 7
      } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 2,
        movieId: 8
      } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 2,
        movieId: 9
      } ,
      {
        body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
        rating: 5,
        userId: 3,
        movieId: 10
      } ,
      {
        body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
        rating: 5,
        userId: 3,
        movieId: 11
      } ,
      {
        body: 'Awful experience. The plot did not even make sense',
        rating: 1,
        userId: 2,
        movieId: 12
      } ,
      {
        body: 'Prepare to be absolutely terrified! What an experieence',
        rating: 5,
        userId: 2,
        movieId: 13
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 14
      } ,
      {
        body: 'The premise and idea was good, but what the heck was that ending?!',
        rating: 3,
        userId: 4,
        movieId: 15
      } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 2,
        movieId: 16
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 17
      } ,
      {
        body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
        rating: 4,
        userId: 4,
        movieId: 18
      } ,
      {
        body: 'Excellent film, although I thought that it ended a little too suddenly.',
        rating: 4,
        userId: 5,
        movieId: 19
      } ,
      {
        body: 'Awful experience. The plot did not even make sense',
        rating: 1,
        userId: 2,
        movieId: 20
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 21
      } ,
      {
        body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
        rating: 2,
        userId: 4,
        movieId: 22
      } ,
      {
        body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
        rating: 5,
        userId: 3,
        movieId: 23
      } ,
      {
        body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
        rating: 4,
        userId: 1,
        movieId: 24
      } ,
      {
        body: 'Prepare to be absolutely terrified! What an experieence',
        rating: 5,
        userId: 2,
        movieId: 25
      } ,
      {
        body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
        rating: 4,
        userId: 1,
        movieId: 26
      } ,
      {
        body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
        rating: 4,
        userId: 4,
        movieId: 27
      } ,
      {
        body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
        rating: 2,
        userId: 4,
        movieId: 28
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 29
      } ,
      {
        body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
        rating: 2,
        userId: 4,
        movieId: 30
      } ,
      {
        body: 'Excellent film, although I thought that it ended a little too suddenly.',
        rating: 4,
        userId: 5,
        movieId: 31
      } ,
      {
        body: 'The premise and idea was good, but what the heck was that ending?!',
        rating: 3,
        userId: 4,
        movieId: 32
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 33
      } ,
      {
        body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
        rating: 4,
        userId: 4,
        movieId: 34
      } ,
      {
        body: 'Excellent film, although I thought that it ended a little too suddenly.',
        rating: 4,
        userId: 5,
        movieId: 35
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 36
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 37
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 38
      } ,
      {
        body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
        rating: 2,
        userId: 4,
        movieId: 39
      } ,
      {
        body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
        rating: 1,
        userId: 5,
        movieId: 40
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 41
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 5,
        movieId: 42
      } ,
      {
        body: 'Excellent film, although I thought that it ended a little too suddenly.',
        rating: 4,
        userId: 5,
        movieId: 43
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
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
        body: 'Props for a scary monster/villian. Everything else was terribly executed.',
        rating: 2,
        userId: 4,
        movieId: 46
      } ,
      {
        body: 'Excellent film, although I thought that it ended a little too suddenly.',
        rating: 4,
        userId: 5,
        movieId: 47
      } ,
      {
        body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
        rating: 4,
        userId: 4,
        movieId: 48
      } ,
      {
        body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
        rating: 4,
        userId: 4,
        movieId: 49
      } ,
      {
        body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
        rating: 4,
        userId: 1,
        movieId: 50
      } ,
      {
        body: 'Props for a scary monster/villian. Everything else was terribly executed.',
        rating: 2,
        userId: 4,
        movieId: 51
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 52
      } ,
      {
        body: 'Awful experience. The plot did not even make sense',
        rating: 1,
        userId: 2,
        movieId: 53
      } ,
      {
        body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
        rating: 4,
        userId: 1,
        movieId: 54
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 55
      } ,
      {
        body: 'Decent. I went into this with higher expectations than I should have',
        rating: 3,
        userId: 3,
        movieId: 56
      } ,
      {
        body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
        rating: 5,
        userId: 3,
        movieId: 57
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 58
      } ,
      {
        body: 'Excellent film, although I thought that it ended a little too suddenly.',
        rating: 4,
        userId: 5,
        movieId: 59
      } ,
      {
        body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
        rating: 4,
        userId: 4,
        movieId: 60
      } ,
      {
        body: 'Excellent film, although I thought that it ended a little too suddenly.',
        rating: 4,
        userId: 5,
        movieId: 61
      } ,
      {
        body: 'The premise and idea was good, but what the heck was that ending?!',
        rating: 3,
        userId: 4,
        movieId: 62
      } ,
      {
        body: 'The premise and idea was good, but what the heck was that ending?!',
        rating: 3,
        userId: 4,
        movieId: 63
      } ,
      {
        body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
        rating: 2,
        userId: 4,
        movieId: 64
      } ,
      {
        body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
        rating: 4,
        userId: 4,
        movieId: 65
      } ,
      {
        body: 'Prepare to be absolutely terrified! What an experieence',
        rating: 5,
        userId: 2,
        movieId: 66
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 67
      } ,
      {
        body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
        rating: 2,
        userId: 4,
        movieId: 68
      } ,
      {
        body: 'Awful experience. The plot did not even make sense',
        rating: 1,
        userId: 2,
        movieId: 69
      } ,
      {
        body: 'Prepare to be absolutely terrified! What an experieence',
        rating: 5,
        userId: 2,
        movieId: 70
      } ,
      {
        body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
        rating: 5,
        userId: 3,
        movieId: 71
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 72
      } ,
      {
        body: 'Props for a scary monster/villian. Everything else was terribly executed.',
        rating: 2,
        userId: 4,
        movieId: 73
      } ,
      {
        body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
        rating: 4,
        userId: 4,
        movieId: 74
      } ,
      {
        body: 'Decent. I went into this with higher expectations than I should have',
        rating: 3,
        userId: 3,
        movieId: 75
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 76
      } ,
      {
        body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
        rating: 4,
        userId: 4,
        movieId: 77
      } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 2,
        movieId: 78
      } ,
      {
        body: 'Props for a scary monster/villian. Everything else was terribly executed.',
        rating: 2,
        userId: 4,
        movieId: 79
      } ,
      {
        body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
        rating: 4,
        userId: 1,
        movieId: 80
      } ,
      {
        body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
        rating: 4,
        userId: 1,
        movieId: 81
      } ,
      {
        body: 'Prepare to be absolutely terrified! What an experieence',
        rating: 5,
        userId: 2,
        movieId: 82
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 83
      } ,
      {
        body: 'Awful experience. The plot did not even make sense',
        rating: 1,
        userId: 2,
        movieId: 84
      } ,
      {
        body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
        rating: 4,
        userId: 4,
        movieId: 85
      } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 2,
        movieId: 86
      } ,
      {
        body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
        rating: 4,
        userId: 1,
        movieId: 87
      } ,
      {
        body: 'Excellent film, although I thought that it ended a little too suddenly.',
        rating: 4,
        userId: 5,
        movieId: 88
      } ,
      {
        body: 'The premise and idea was good, but what the heck was that ending?!',
        rating: 3,
        userId: 4,
        movieId: 89
      } ,
      {
        body: 'Props for a scary monster/villian. Everything else was terribly executed.',
        rating: 2,
        userId: 4,
        movieId: 90
      } ,
      {
        body: 'The premise and idea was good, but what the heck was that ending?!',
        rating: 3,
        userId: 4,
        movieId: 91
      } ,
      {
        body: 'Excellent film, although I thought that it ended a little too suddenly.',
        rating: 4,
        userId: 5,
        movieId: 92
      } ,
      {
        body: 'Decent. I went into this with higher expectations than I should have',
        rating: 3,
        userId: 3,
        movieId: 93
      } ,
      {
        body: 'Decent. I went into this with higher expectations than I should have',
        rating: 3,
        userId: 3,
        movieId: 94
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 5,
        movieId: 95
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 5,
        movieId: 96
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 97
      } ,
      {
        body: 'Prepare to be absolutely terrified! What an experieence',
        rating: 5,
        userId: 2,
        movieId: 98
      } ,
      {
        body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
        rating: 5,
        userId: 3,
        movieId: 99
      } ,
      {
        body: 'Excellent film, although I thought that it ended a little too suddenly.',
        rating: 4,
        userId: 5,
        movieId: 100
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 101
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 5,
        movieId: 102
      } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 2,
        movieId: 103
      } ,
      {
        body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
        rating: 4,
        userId: 1,
        movieId: 104
      } ,
      {
        body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
        rating: 1,
        userId: 5,
        movieId: 105
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 106
      } ,
      {
        body: 'Awful experience. The plot did not even make sense',
        rating: 1,
        userId: 2,
        movieId: 107
      } ,
      {
        body: 'Excellent film, although I thought that it ended a little too suddenly.',
        rating: 4,
        userId: 5,
        movieId: 108
      } ,
      {
        body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
        rating: 1,
        userId: 5,
        movieId: 109
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 5,
        movieId: 110
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 1
      } ,
      {
        body: 'Props for a scary monster/villian. Everything else was terribly executed.',
        rating: 2,
        userId: 4,
        movieId: 2
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 3
      } ,
      {
        body: 'Awful experience. The plot did not even make sense',
        rating: 1,
        userId: 2,
        movieId: 4
      } ,
      {
        body: 'The premise and idea was good, but what the heck was that ending?!',
        rating: 3,
        userId: 4,
        movieId: 5
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 5,
        movieId: 6
      } ,
      {
        body: 'Excellent film, although I thought that it ended a little too suddenly.',
        rating: 4,
        userId: 5,
        movieId: 7
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 8
      } ,
      {
        body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
        rating: 1,
        userId: 5,
        movieId: 9
      } ,
      {
        body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
        rating: 4,
        userId: 4,
        movieId: 10
      } ,
      {
        body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
        rating: 2,
        userId: 4,
        movieId: 11
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 5,
        movieId: 12
      } ,
      {
        body: 'Awful experience. The plot did not even make sense',
        rating: 1,
        userId: 2,
        movieId: 13
      } ,
      {
        body: 'Excellent film, although I thought that it ended a little too suddenly.',
        rating: 4,
        userId: 5,
        movieId: 14
      } ,
      {
        body: 'Props for a scary monster/villian. Everything else was terribly executed.',
        rating: 2,
        userId: 4,
        movieId: 15
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 16
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 17
      } ,
      {
        body: 'The premise and idea was good, but what the heck was that ending?!',
        rating: 3,
        userId: 4,
        movieId: 18
      } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 2,
        movieId: 19
      } ,
      {
        body: 'Props for a scary monster/villian. Everything else was terribly executed.',
        rating: 2,
        userId: 4,
        movieId: 20
      } ,
      {
        body: 'Awful experience. The plot did not even make sense',
        rating: 1,
        userId: 2,
        movieId: 21
      } ,
      {
        body: 'The premise and idea was good, but what the heck was that ending?!',
        rating: 3,
        userId: 4,
        movieId: 22
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 5,
        movieId: 23
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 24
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 25
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 26
      } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 2,
        movieId: 27
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 28
      } ,
      {
        body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
        rating: 1,
        userId: 5,
        movieId: 29
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 30
      } ,
      {
        body: 'The premise and idea was good, but what the heck was that ending?!',
        rating: 3,
        userId: 4,
        movieId: 31
      } ,
      {
        body: 'Prepare to be absolutely terrified! What an experieence',
        rating: 5,
        userId: 2,
        movieId: 32
      } ,
      {
        body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
        rating: 1,
        userId: 5,
        movieId: 33
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 34
      } ,
      {
        body: 'Props for a scary monster/villian. Everything else was terribly executed.',
        rating: 2,
        userId: 4,
        movieId: 35
      } ,
      {
        body: 'Awful experience. The plot did not even make sense',
        rating: 1,
        userId: 2,
        movieId: 36
      } ,
      {
        body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
        rating: 5,
        userId: 3,
        movieId: 37
      } ,
      {
        body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
        rating: 4,
        userId: 1,
        movieId: 38
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 39
      } ,
      {
        body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
        rating: 2,
        userId: 4,
        movieId: 40
      } ,
      {
        body: 'Excellent film, although I thought that it ended a little too suddenly.',
        rating: 4,
        userId: 5,
        movieId: 41
      } ,
      {
        body: 'Props for a scary monster/villian. Everything else was terribly executed.',
        rating: 2,
        userId: 4,
        movieId: 42
      } ,
      {
        body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
        rating: 2,
        userId: 4,
        movieId: 43
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 44
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 45
      } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 2,
        movieId: 46
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 47
      } ,
      {
        body: 'Props for a scary monster/villian. Everything else was terribly executed.',
        rating: 2,
        userId: 4,
        movieId: 48
      } ,
      {
        body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
        rating: 4,
        userId: 4,
        movieId: 49
      } ,
      {
        body: 'Awful experience. The plot did not even make sense',
        rating: 1,
        userId: 2,
        movieId: 50
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 51
      } ,
      {
        body: 'Prepare to be absolutely terrified! What an experieence',
        rating: 5,
        userId: 2,
        movieId: 52
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 53
      } ,
      {
        body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
        rating: 4,
        userId: 1,
        movieId: 54
      } ,
      {
        body: 'Awful experience. The plot did not even make sense',
        rating: 1,
        userId: 2,
        movieId: 55
      } ,
      {
        body: 'The premise and idea was good, but what the heck was that ending?!',
        rating: 3,
        userId: 4,
        movieId: 56
      } ,
      {
        body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
        rating: 5,
        userId: 3,
        movieId: 57
      } ,
      {
        body: 'Awful experience. The plot did not even make sense',
        rating: 1,
        userId: 2,
        movieId: 58
      } ,
      {
        body: 'Prepare to be absolutely terrified! What an experieence',
        rating: 5,
        userId: 2,
        movieId: 59
      } ,
      {
        body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
        rating: 4,
        userId: 4,
        movieId: 60
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 61
      } ,
      {
        body: 'Props for a scary monster/villian. Everything else was terribly executed.',
        rating: 2,
        userId: 4,
        movieId: 62
      } ,
      {
        body: 'Awful experience. The plot did not even make sense',
        rating: 1,
        userId: 2,
        movieId: 63
      } ,
      {
        body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
        rating: 4,
        userId: 4,
        movieId: 64
      } ,
      {
        body: 'Decent. I went into this with higher expectations than I should have',
        rating: 3,
        userId: 3,
        movieId: 65
      } ,
      {
        body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
        rating: 1,
        userId: 5,
        movieId: 66
      } ,
      {
        body: 'Awful experience. The plot did not even make sense',
        rating: 1,
        userId: 2,
        movieId: 67
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 68
      } ,
      {
        body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
        rating: 5,
        userId: 3,
        movieId: 69
      } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 2,
        movieId: 70
      } ,
      {
        body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
        rating: 5,
        userId: 3,
        movieId: 71
      } ,
      {
        body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
        rating: 1,
        userId: 5,
        movieId: 72
      } ,
      {
        body: 'Excellent film, although I thought that it ended a little too suddenly.',
        rating: 4,
        userId: 5,
        movieId: 73
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 74
      } ,
      {
        body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
        rating: 2,
        userId: 4,
        movieId: 75
      } ,
      {
        body: 'Prepare to be absolutely terrified! What an experieence',
        rating: 5,
        userId: 2,
        movieId: 76
      } ,
      {
        body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
        rating: 4,
        userId: 4,
        movieId: 77
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 78
      } ,
      {
        body: 'Awful experience. The plot did not even make sense',
        rating: 1,
        userId: 2,
        movieId: 79
      } ,
      {
        body: 'Decent. I went into this with higher expectations than I should have',
        rating: 3,
        userId: 3,
        movieId: 80
      } ,
      {
        body: 'Decent. I went into this with higher expectations than I should have',
        rating: 3,
        userId: 3,
        movieId: 81
      } ,
      {
        body: 'Awful experience. The plot did not even make sense',
        rating: 1,
        userId: 2,
        movieId: 82
      } ,
      {
        body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
        rating: 4,
        userId: 1,
        movieId: 83
      } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 2,
        movieId: 84
      } ,
      {
        body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
        rating: 1,
        userId: 5,
        movieId: 85
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 86
      } ,
      {
        body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
        rating: 5,
        userId: 3,
        movieId: 87
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 5,
        movieId: 88
      } ,
      {
        body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
        rating: 5,
        userId: 3,
        movieId: 89
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 90
      } ,
      {
        body: 'Props for a scary monster/villian. Everything else was terribly executed.',
        rating: 2,
        userId: 4,
        movieId: 91
      } ,
      {
        body: 'Decent. I went into this with higher expectations than I should have',
        rating: 3,
        userId: 3,
        movieId: 92
      } ,
      {
        body: 'Props for a scary monster/villian. Everything else was terribly executed.',
        rating: 2,
        userId: 4,
        movieId: 93
      } ,
      {
        body: 'Excellent film, although I thought that it ended a little too suddenly.',
        rating: 4,
        userId: 5,
        movieId: 94
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 5,
        movieId: 95
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 96
      } ,
      {
        body: 'Prepare to be absolutely terrified! What an experieence',
        rating: 5,
        userId: 2,
        movieId: 97
      } ,
      {
        body: 'Props for a scary monster/villian. Everything else was terribly executed.',
        rating: 2,
        userId: 4,
        movieId: 98
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 5,
        movieId: 99
      } ,
      {
        body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
        rating: 4,
        userId: 4,
        movieId: 100
      } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 2,
        movieId: 101
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 102
      } ,
      {
        body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
        rating: 5,
        userId: 3,
        movieId: 103
      } ,
      {
        body: 'Decent. I went into this with higher expectations than I should have',
        rating: 3,
        userId: 3,
        movieId: 104
      } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 2,
        movieId: 105
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 106
      } ,
      {
        body: 'Excellent film, although I thought that it ended a little too suddenly.',
        rating: 4,
        userId: 5,
        movieId: 107
      } ,
      {
        body: 'The premise and idea was good, but what the heck was that ending?!',
        rating: 3,
        userId: 4,
        movieId: 108
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 109
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 110
      } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 2,
        movieId: 1
      } ,
      {
        body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
        rating: 1,
        userId: 5,
        movieId: 2
      } ,
      {
        body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
        rating: 4,
        userId: 1,
        movieId: 3
      } ,
      {
        body: 'Awful experience. The plot did not even make sense',
        rating: 1,
        userId: 2,
        movieId: 4
      } ,
      {
        body: 'The premise and idea was good, but what the heck was that ending?!',
        rating: 3,
        userId: 4,
        movieId: 5
      } ,
      {
        body: 'The premise and idea was good, but what the heck was that ending?!',
        rating: 3,
        userId: 4,
        movieId: 6
      } ,
      {
        body: 'Prepare to be absolutely terrified! What an experieence',
        rating: 5,
        userId: 2,
        movieId: 7
      } ,
      {
        body: 'Props for a scary monster/villian. Everything else was terribly executed.',
        rating: 2,
        userId: 4,
        movieId: 8
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 9
      } ,
      {
        body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
        rating: 4,
        userId: 4,
        movieId: 10
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 11
      } ,
      {
        body: 'Awful experience. The plot did not even make sense',
        rating: 1,
        userId: 2,
        movieId: 12
      } ,
      {
        body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
        rating: 4,
        userId: 4,
        movieId: 13
      } ,
      {
        body: 'Props for a scary monster/villian. Everything else was terribly executed.',
        rating: 2,
        userId: 4,
        movieId: 14
      } ,
      {
        body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
        rating: 2,
        userId: 4,
        movieId: 15
      } ,
      {
        body: 'Prepare to be absolutely terrified! What an experieence',
        rating: 5,
        userId: 2,
        movieId: 16
      } ,
      {
        body: 'Excellent film, although I thought that it ended a little too suddenly.',
        rating: 4,
        userId: 5,
        movieId: 17
      } ,
      {
        body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
        rating: 4,
        userId: 4,
        movieId: 18
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 19
      } ,
      {
        body: 'Excellent film, although I thought that it ended a little too suddenly.',
        rating: 4,
        userId: 5,
        movieId: 20
      } ,
      {
        body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
        rating: 5,
        userId: 3,
        movieId: 21
      } ,
      {
        body: 'Props for a scary monster/villian. Everything else was terribly executed.',
        rating: 2,
        userId: 4,
        movieId: 22
      } ,
      {
        body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
        rating: 1,
        userId: 5,
        movieId: 23
      } ,
      {
        body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
        rating: 2,
        userId: 4,
        movieId: 24
      } ,
      {
        body: 'Prepare to be absolutely terrified! What an experieence',
        rating: 5,
        userId: 2,
        movieId: 25
      } ,
      {
        body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
        rating: 4,
        userId: 4,
        movieId: 26
      } ,
      {
        body: 'Awful experience. The plot did not even make sense',
        rating: 1,
        userId: 2,
        movieId: 27
      } ,
      {
        body: 'Prepare to be absolutely terrified! What an experieence',
        rating: 5,
        userId: 2,
        movieId: 28
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 29
      } ,
      {
        body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
        rating: 4,
        userId: 1,
        movieId: 30
      } ,
      {
        body: 'Decent. I went into this with higher expectations than I should have',
        rating: 3,
        userId: 3,
        movieId: 31
      } ,
      {
        body: 'Props for a scary monster/villian. Everything else was terribly executed.',
        rating: 2,
        userId: 4,
        movieId: 32
      } ,
      {
        body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
        rating: 2,
        userId: 4,
        movieId: 33
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 34
      } ,
      {
        body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
        rating: 2,
        userId: 4,
        movieId: 35
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 5,
        movieId: 36
      } ,
      {
        body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
        rating: 5,
        userId: 3,
        movieId: 37
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 38
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 39
      } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 2,
        movieId: 40
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 5,
        movieId: 41
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 42
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 43
      } ,
      {
        body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
        rating: 4,
        userId: 1,
        movieId: 44
      } ,
      {
        body: 'Excellent film, although I thought that it ended a little too suddenly.',
        rating: 4,
        userId: 5,
        movieId: 45
      } ,
      {
        body: 'Excellent film, although I thought that it ended a little too suddenly.',
        rating: 4,
        userId: 5,
        movieId: 46
      } ,
      {
        body: 'The premise and idea was good, but what the heck was that ending?!',
        rating: 3,
        userId: 4,
        movieId: 47
      } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 2,
        movieId: 48
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 5,
        movieId: 49
      } ,
      {
        body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
        rating: 4,
        userId: 1,
        movieId: 50
      } ,
      {
        body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
        rating: 1,
        userId: 5,
        movieId: 51
      } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 2,
        movieId: 52
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 5,
        movieId: 53
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 5,
        movieId: 54
      } ,
      {
        body: 'The premise and idea was good, but what the heck was that ending?!',
        rating: 3,
        userId: 4,
        movieId: 55
      } ,
      {
        body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
        rating: 4,
        userId: 1,
        movieId: 56
      } ,
      {
        body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
        rating: 4,
        userId: 4,
        movieId: 57
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 58
      } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 2,
        movieId: 59
      } ,
      {
        body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
        rating: 4,
        userId: 4,
        movieId: 60
      } ,
      {
        body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
        rating: 4,
        userId: 4,
        movieId: 61
      } ,
      {
        body: 'Excellent film, although I thought that it ended a little too suddenly.',
        rating: 4,
        userId: 5,
        movieId: 62
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 63
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 64
      } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 2,
        movieId: 65
      } ,
      {
        body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
        rating: 5,
        userId: 3,
        movieId: 66
      } ,
      {
        body: 'Excellent film, although I thought that it ended a little too suddenly.',
        rating: 4,
        userId: 5,
        movieId: 67
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 68
      } ,
      {
        body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
        rating: 5,
        userId: 3,
        movieId: 69
      } ,
      {
        body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
        rating: 4,
        userId: 1,
        movieId: 70
      } ,
      {
        body: 'Decent. I went into this with higher expectations than I should have',
        rating: 3,
        userId: 3,
        movieId: 71
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 72
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 5,
        movieId: 73
      } ,
      {
        body: 'Prepare to be absolutely terrified! What an experieence',
        rating: 5,
        userId: 2,
        movieId: 74
      } ,
      {
        body: 'Props for a scary monster/villian. Everything else was terribly executed.',
        rating: 2,
        userId: 4,
        movieId: 75
      } ,
      {
        body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
        rating: 5,
        userId: 3,
        movieId: 76
      } ,
      {
        body: 'Awful experience. The plot did not even make sense',
        rating: 1,
        userId: 2,
        movieId: 77
      } ,
      {
        body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
        rating: 4,
        userId: 4,
        movieId: 78
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 79
      } ,
      {
        body: 'Props for a scary monster/villian. Everything else was terribly executed.',
        rating: 2,
        userId: 4,
        movieId: 80
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 5,
        movieId: 81
      } ,
      {
        body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
        rating: 5,
        userId: 3,
        movieId: 82
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 5,
        movieId: 83
      } ,
      {
        body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
        rating: 4,
        userId: 1,
        movieId: 84
      } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 2,
        movieId: 85
      } ,
      {
        body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
        rating: 2,
        userId: 4,
        movieId: 86
      } ,
      {
        body: 'The premise and idea was good, but what the heck was that ending?!',
        rating: 3,
        userId: 4,
        movieId: 87
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 88
      } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 2,
        movieId: 89
      } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 2,
        movieId: 90
      } ,
      {
        body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
        rating: 2,
        userId: 4,
        movieId: 91
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 92
      } ,
      {
        body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
        rating: 1,
        userId: 5,
        movieId: 93
      } ,
      {
        body: 'The premise and idea was good, but what the heck was that ending?!',
        rating: 3,
        userId: 4,
        movieId: 94
      } ,
      {
        body: 'The premise and idea was good, but what the heck was that ending?!',
        rating: 3,
        userId: 4,
        movieId: 95
      } ,
      {
        body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
        rating: 4,
        userId: 4,
        movieId: 96
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 97
      } ,
      {
        body: 'Decent. I went into this with higher expectations than I should have',
        rating: 3,
        userId: 3,
        movieId: 98
      } ,
      {
        body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
        rating: 1,
        userId: 5,
        movieId: 99
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 100
      } ,
      {
        body: 'Prepare to be absolutely terrified! What an experieence',
        rating: 5,
        userId: 2,
        movieId: 101
      } ,
      {
        body: 'Props for a scary monster/villian. Everything else was terribly executed.',
        rating: 2,
        userId: 4,
        movieId: 102
      } ,
      {
        body: 'Excellent film, although I thought that it ended a little too suddenly.',
        rating: 4,
        userId: 5,
        movieId: 103
      } ,
      {
        body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
        rating: 4,
        userId: 1,
        movieId: 104
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 105
      } ,
      {
        body: 'Excellent film, although I thought that it ended a little too suddenly.',
        rating: 4,
        userId: 5,
        movieId: 106
      } ,
      {
        body: 'Awful experience. The plot did not even make sense',
        rating: 1,
        userId: 2,
        movieId: 107
      } ,
      {
        body: 'Excellent film, although I thought that it ended a little too suddenly.',
        rating: 4,
        userId: 5,
        movieId: 108
      } ,
      {
        body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
        rating: 2,
        userId: 4,
        movieId: 109
      } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 2,
        movieId: 110
      } ,
      {
        body: 'Props for a scary monster/villian. Everything else was terribly executed.',
        rating: 2,
        userId: 4,
        movieId: 1
      } ,
      {
        body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
        rating: 5,
        userId: 3,
        movieId: 2
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 5,
        movieId: 3
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 4
      } ,
      {
        body: 'Excellent film, although I thought that it ended a little too suddenly.',
        rating: 4,
        userId: 5,
        movieId: 5
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 6
      } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 2,
        movieId: 7
      } ,
      {
        body: 'Excellent film, although I thought that it ended a little too suddenly.',
        rating: 4,
        userId: 5,
        movieId: 8
      } ,
      {
        body: 'The premise and idea was good, but what the heck was that ending?!',
        rating: 3,
        userId: 4,
        movieId: 9
      } ,
      {
        body: 'Props for a scary monster/villian. Everything else was terribly executed.',
        rating: 2,
        userId: 4,
        movieId: 10
      } ,
      {
        body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
        rating: 4,
        userId: 1,
        movieId: 11
      } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 2,
        movieId: 12
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 13
      } ,
      {
        body: 'The premise and idea was good, but what the heck was that ending?!',
        rating: 3,
        userId: 4,
        movieId: 14
      } ,
      {
        body: 'The premise and idea was good, but what the heck was that ending?!',
        rating: 3,
        userId: 4,
        movieId: 15
      } ,
      {
        body: 'The premise and idea was good, but what the heck was that ending?!',
        rating: 3,
        userId: 4,
        movieId: 16
      } ,
      {
        body: 'Awful experience. The plot did not even make sense',
        rating: 1,
        userId: 2,
        movieId: 17
      } ,
      {
        body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
        rating: 5,
        userId: 3,
        movieId: 18
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 19
      } ,
      {
        body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
        rating: 4,
        userId: 1,
        movieId: 20
      } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 2,
        movieId: 21
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 22
      } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 2,
        movieId: 23
      } ,
      {
        body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
        rating: 4,
        userId: 1,
        movieId: 24
      } ,
      {
        body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
        rating: 4,
        userId: 4,
        movieId: 25
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 5,
        movieId: 26
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 27
      } ,
      {
        body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
        rating: 4,
        userId: 4,
        movieId: 28
      } ,
      {
        body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
        rating: 4,
        userId: 4,
        movieId: 29
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 30
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 31
      } ,
      {
        body: 'Prepare to be absolutely terrified! What an experieence',
        rating: 5,
        userId: 2,
        movieId: 32
      } ,
      {
        body: 'Awful experience. The plot did not even make sense',
        rating: 1,
        userId: 2,
        movieId: 33
      } ,
      {
        body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
        rating: 5,
        userId: 3,
        movieId: 34
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 5,
        movieId: 35
      } ,
      {
        body: 'Prepare to be absolutely terrified! What an experieence',
        rating: 5,
        userId: 2,
        movieId: 36
      } ,
      {
        body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
        rating: 4,
        userId: 4,
        movieId: 37
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 38
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 5,
        movieId: 39
      } ,
      {
        body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
        rating: 1,
        userId: 5,
        movieId: 40
      } ,
      {
        body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
        rating: 2,
        userId: 4,
        movieId: 41
      } ,
      {
        body: 'Excellent film, although I thought that it ended a little too suddenly.',
        rating: 4,
        userId: 5,
        movieId: 42
      } ,
      {
        body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
        rating: 1,
        userId: 5,
        movieId: 43
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 44
      } ,
      {
        body: 'Prepare to be absolutely terrified! What an experieence',
        rating: 5,
        userId: 2,
        movieId: 45
      } ,
      {
        body: 'Props for a scary monster/villian. Everything else was terribly executed.',
        rating: 2,
        userId: 4,
        movieId: 46
      } ,
      {
        body: 'Props for a scary monster/villian. Everything else was terribly executed.',
        rating: 2,
        userId: 4,
        movieId: 47
      } ,
      {
        body: 'Props for a scary monster/villian. Everything else was terribly executed.',
        rating: 2,
        userId: 4,
        movieId: 48
      } ,
      {
        body: 'Props for a scary monster/villian. Everything else was terribly executed.',
        rating: 2,
        userId: 4,
        movieId: 49
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 50
      } ,
      {
        body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
        rating: 4,
        userId: 4,
        movieId: 51
      } ,
      {
        body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
        rating: 4,
        userId: 4,
        movieId: 52
      } ,
      {
        body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
        rating: 5,
        userId: 3,
        movieId: 53
      } ,
      {
        body: 'Decent. I went into this with higher expectations than I should have',
        rating: 3,
        userId: 3,
        movieId: 54
      } ,
      {
        body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
        rating: 1,
        userId: 5,
        movieId: 55
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 56
      } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 2,
        movieId: 57
      } ,
      {
        body: 'Excellent film, although I thought that it ended a little too suddenly.',
        rating: 4,
        userId: 5,
        movieId: 58
      } ,
      {
        body: 'Excellent film, although I thought that it ended a little too suddenly.',
        rating: 4,
        userId: 5,
        movieId: 59
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 60
      } ,
      {
        body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
        rating: 1,
        userId: 5,
        movieId: 61
      } ,
      {
        body: 'Awful experience. The plot did not even make sense',
        rating: 1,
        userId: 2,
        movieId: 62
      } ,
      {
        body: 'Awful experience. The plot did not even make sense',
        rating: 1,
        userId: 2,
        movieId: 63
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 64
      } ,
      {
        body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
        rating: 1,
        userId: 5,
        movieId: 65
      } ,
      {
        body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
        rating: 5,
        userId: 3,
        movieId: 66
      } ,
      {
        body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
        rating: 4,
        userId: 4,
        movieId: 67
      } ,
      {
        body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
        rating: 1,
        userId: 5,
        movieId: 68
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 69
      } ,
      {
        body: 'Awful experience. The plot did not even make sense',
        rating: 1,
        userId: 2,
        movieId: 70
      } ,
      {
        body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
        rating: 1,
        userId: 5,
        movieId: 71
      } ,
      {
        body: 'The premise and idea was good, but what the heck was that ending?!',
        rating: 3,
        userId: 4,
        movieId: 72
      } ,
      {
        body: 'Excellent film, although I thought that it ended a little too suddenly.',
        rating: 4,
        userId: 5,
        movieId: 73
      } ,
      {
        body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
        rating: 1,
        userId: 5,
        movieId: 74
      } ,
      {
        body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
        rating: 4,
        userId: 4,
        movieId: 75
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 76
      } ,
      {
        body: 'Prepare to be absolutely terrified! What an experieence',
        rating: 5,
        userId: 2,
        movieId: 77
      } ,
      {
        body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
        rating: 1,
        userId: 5,
        movieId: 78
      } ,
      {
        body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
        rating: 4,
        userId: 1,
        movieId: 79
      } ,
      {
        body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
        rating: 4,
        userId: 4,
        movieId: 80
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 81
      } ,
      {
        body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
        rating: 1,
        userId: 5,
        movieId: 82
      } ,
      {
        body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
        rating: 2,
        userId: 4,
        movieId: 83
      } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 2,
        movieId: 84
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 85
      } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 2,
        movieId: 86
      } ,
      {
        body: 'Excellent film, although I thought that it ended a little too suddenly.',
        rating: 4,
        userId: 5,
        movieId: 87
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 88
      } ,
      {
        body: 'Excellent film, although I thought that it ended a little too suddenly.',
        rating: 4,
        userId: 5,
        movieId: 89
      } ,
      {
        body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
        rating: 4,
        userId: 4,
        movieId: 90
      } ,
      {
        body: 'Prepare to be absolutely terrified! What an experieence',
        rating: 5,
        userId: 2,
        movieId: 91
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 5,
        movieId: 92
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 5,
        movieId: 93
      } ,
      {
        body: 'Awful experience. The plot did not even make sense',
        rating: 1,
        userId: 2,
        movieId: 94
      } ,
      {
        body: 'Prepare to be absolutely terrified! What an experieence',
        rating: 5,
        userId: 2,
        movieId: 95
      } ,
      {
        body: 'Props for a scary monster/villian. Everything else was terribly executed.',
        rating: 2,
        userId: 4,
        movieId: 96
      } ,
      {
        body: 'Decent. I went into this with higher expectations than I should have',
        rating: 3,
        userId: 3,
        movieId: 97
      } ,
      {
        body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
        rating: 2,
        userId: 4,
        movieId: 98
      } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 2,
        movieId: 99
      } ,
      {
        body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
        rating: 5,
        userId: 3,
        movieId: 100
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
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
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 103
      } ,
      {
        body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
        rating: 5,
        userId: 3,
        movieId: 104
      } ,
      {
        body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
        rating: 4,
        userId: 4,
        movieId: 105
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 106
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 5,
        movieId: 107
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 108
      } ,
      {
        body: 'Props for a scary monster/villian. Everything else was terribly executed.',
        rating: 2,
        userId: 4,
        movieId: 109
      } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 2,
        movieId: 110
      } ,
      {
        body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
        rating: 5,
        userId: 3,
        movieId: 1
      } ,
      {
        body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
        rating: 5,
        userId: 3,
        movieId: 2
      } ,
      {
        body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
        rating: 2,
        userId: 4,
        movieId: 3
      } ,
      {
        body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
        rating: 5,
        userId: 3,
        movieId: 4
      } ,
      {
        body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
        rating: 1,
        userId: 5,
        movieId: 5
      } ,
      {
        body: 'Decent. I went into this with higher expectations than I should have',
        rating: 3,
        userId: 3,
        movieId: 6
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 7
      } ,
      {
        body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
        rating: 5,
        userId: 3,
        movieId: 8
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 5,
        movieId: 9
      } ,
      {
        body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
        rating: 1,
        userId: 5,
        movieId: 10
      } ,
      {
        body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
        rating: 4,
        userId: 1,
        movieId: 11
      } ,
      {
        body: 'Prepare to be absolutely terrified! What an experieence',
        rating: 5,
        userId: 2,
        movieId: 12
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 13
      } ,
      {
        body: 'The premise and idea was good, but what the heck was that ending?!',
        rating: 3,
        userId: 4,
        movieId: 14
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 5,
        movieId: 15
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 5,
        movieId: 16
      } ,
      {
        body: 'Decent. I went into this with higher expectations than I should have',
        rating: 3,
        userId: 3,
        movieId: 17
      } ,
      {
        body: 'Prepare to be absolutely terrified! What an experieence',
        rating: 5,
        userId: 2,
        movieId: 18
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 19
      } ,
      {
        body: 'Props for a scary monster/villian. Everything else was terribly executed.',
        rating: 2,
        userId: 4,
        movieId: 20
      } ,
      {
        body: 'Awful experience. The plot did not even make sense',
        rating: 1,
        userId: 2,
        movieId: 21
      } ,
      {
        body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
        rating: 4,
        userId: 1,
        movieId: 22
      } ,
      {
        body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
        rating: 2,
        userId: 4,
        movieId: 23
      } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 2,
        movieId: 24
      } ,
      {
        body: 'Prepare to be absolutely terrified! What an experieence',
        rating: 5,
        userId: 2,
        movieId: 25
      } ,
      {
        body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
        rating: 5,
        userId: 3,
        movieId: 26
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 5,
        movieId: 27
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 28
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 5,
        movieId: 29
      } ,
      {
        body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
        rating: 2,
        userId: 4,
        movieId: 30
      } ,
      {
        body: 'Decent. I went into this with higher expectations than I should have',
        rating: 3,
        userId: 3,
        movieId: 31
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 32
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 33
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 34
      } ,
      {
        body: 'The premise and idea was good, but what the heck was that ending?!',
        rating: 3,
        userId: 4,
        movieId: 35
      } ,
      {
        body: 'Excellent film, although I thought that it ended a little too suddenly.',
        rating: 4,
        userId: 5,
        movieId: 36
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 37
      } ,
      {
        body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
        rating: 2,
        userId: 4,
        movieId: 38
      } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 2,
        movieId: 39
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 40
      } ,
      {
        body: 'The premise and idea was good, but what the heck was that ending?!',
        rating: 3,
        userId: 4,
        movieId: 41
      } ,
      {
        body: 'Awful experience. The plot did not even make sense',
        rating: 1,
        userId: 2,
        movieId: 42
      } ,
      {
        body: 'Prepare to be absolutely terrified! What an experieence',
        rating: 5,
        userId: 2,
        movieId: 43
      } ,
      {
        body: 'Decent. I went into this with higher expectations than I should have',
        rating: 3,
        userId: 3,
        movieId: 44
      } ,
      {
        body: 'The premise and idea was good, but what the heck was that ending?!',
        rating: 3,
        userId: 4,
        movieId: 45
      } ,
      {
        body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
        rating: 4,
        userId: 4,
        movieId: 46
      } ,
      {
        body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
        rating: 2,
        userId: 4,
        movieId: 47
      } ,
      {
        body: 'Excellent film, although I thought that it ended a little too suddenly.',
        rating: 4,
        userId: 5,
        movieId: 48
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 49
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 5,
        movieId: 50
      } ,
      {
        body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
        rating: 4,
        userId: 1,
        movieId: 51
      } ,
      {
        body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
        rating: 2,
        userId: 4,
        movieId: 52
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 53
      } ,
      {
        body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
        rating: 4,
        userId: 4,
        movieId: 54
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 55
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 5,
        movieId: 56
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 57
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 58
      } ,
      {
        body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
        rating: 1,
        userId: 5,
        movieId: 59
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 60
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 61
      } ,
      {
        body: 'Decent. I went into this with higher expectations than I should have',
        rating: 3,
        userId: 3,
        movieId: 62
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 5,
        movieId: 63
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 5,
        movieId: 64
      } ,
      {
        body: 'Awful experience. The plot did not even make sense',
        rating: 1,
        userId: 2,
        movieId: 65
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 5,
        movieId: 66
      } ,
      {
        body: 'Awful experience. The plot did not even make sense',
        rating: 1,
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
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 69
      } ,
      {
        body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
        rating: 4,
        userId: 1,
        movieId: 70
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 71
      } ,
      {
        body: 'Prepare to be absolutely terrified! What an experieence',
        rating: 5,
        userId: 2,
        movieId: 72
      } ,
      {
        body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
        rating: 4,
        userId: 1,
        movieId: 73
      } ,
      {
        body: 'Props for a scary monster/villian. Everything else was terribly executed.',
        rating: 2,
        userId: 4,
        movieId: 74
      } ,
      {
        body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
        rating: 5,
        userId: 3,
        movieId: 75
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 5,
        movieId: 76
      } ,
      {
        body: 'Props for a scary monster/villian. Everything else was terribly executed.',
        rating: 2,
        userId: 4,
        movieId: 77
      } ,
      {
        body: 'The premise and idea was good, but what the heck was that ending?!',
        rating: 3,
        userId: 4,
        movieId: 78
      } ,
      {
        body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
        rating: 4,
        userId: 1,
        movieId: 79
      } ,
      {
        body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
        rating: 1,
        userId: 5,
        movieId: 80
      } ,
      {
        body: 'Excellent film, although I thought that it ended a little too suddenly.',
        rating: 4,
        userId: 5,
        movieId: 81
      } ,
      {
        body: 'Awful experience. The plot did not even make sense',
        rating: 1,
        userId: 2,
        movieId: 82
      } ,
      {
        body: 'Props for a scary monster/villian. Everything else was terribly executed.',
        rating: 2,
        userId: 4,
        movieId: 83
      } ,
      {
        body: 'Props for a scary monster/villian. Everything else was terribly executed.',
        rating: 2,
        userId: 4,
        movieId: 84
      } ,
      {
        body: 'Prepare to be absolutely terrified! What an experieence',
        rating: 5,
        userId: 2,
        movieId: 85
      } ,
      {
        body: 'Props for a scary monster/villian. Everything else was terribly executed.',
        rating: 2,
        userId: 4,
        movieId: 86
      } ,
      {
        body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
        rating: 4,
        userId: 1,
        movieId: 87
      } ,
      {
        body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
        rating: 1,
        userId: 5,
        movieId: 88
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 89
      } ,
      {
        body: 'Prepare to be absolutely terrified! What an experieence',
        rating: 5,
        userId: 2,
        movieId: 90
      } ,
      {
        body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
        rating: 4,
        userId: 4,
        movieId: 91
      } ,
      {
        body: 'Awful experience. The plot did not even make sense',
        rating: 1,
        userId: 2,
        movieId: 92
      } ,
      {
        body: 'The premise and idea was good, but what the heck was that ending?!',
        rating: 3,
        userId: 4,
        movieId: 93
      } ,
      {
        body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
        rating: 2,
        userId: 4,
        movieId: 94
      } ,
      {
        body: 'The premise and idea was good, but what the heck was that ending?!',
        rating: 3,
        userId: 4,
        movieId: 95
      } ,
      {
        body: 'Prepare to be absolutely terrified! What an experieence',
        rating: 5,
        userId: 2,
        movieId: 96
      } ,
      {
        body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
        rating: 1,
        userId: 5,
        movieId: 97
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 98
      } ,
      {
        body: 'Prepare to be absolutely terrified! What an experieence',
        rating: 5,
        userId: 2,
        movieId: 99
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 5,
        movieId: 100
      } ,
      {
        body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
        rating: 4,
        userId: 4,
        movieId: 101
      } ,
      {
        body: 'Prepare to be absolutely terrified! What an experieence',
        rating: 5,
        userId: 2,
        movieId: 102
      } ,
      {
        body: 'Prepare to be absolutely terrified! What an experieence',
        rating: 5,
        userId: 2,
        movieId: 103
      } ,
      {
        body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
        rating: 2,
        userId: 4,
        movieId: 104
      } ,
      {
        body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
        rating: 4,
        userId: 1,
        movieId: 105
      } ,
      {
        body: 'The premise and idea was good, but what the heck was that ending?!',
        rating: 3,
        userId: 4,
        movieId: 106
      } ,
      {
        body: 'Props for a scary monster/villian. Everything else was terribly executed.',
        rating: 2,
        userId: 4,
        movieId: 107
      } ,
      {
        body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
        rating: 2,
        userId: 4,
        movieId: 108
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 109
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 5,
        movieId: 110
      } ,
      {
        body: 'Decent. I went into this with higher expectations than I should have',
        rating: 3,
        userId: 3,
        movieId: 1
      } ,
      {
        body: 'Prepare to be absolutely terrified! What an experieence',
        rating: 5,
        userId: 2,
        movieId: 2
      } ,
      {
        body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
        rating: 5,
        userId: 3,
        movieId: 3
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 4
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 5
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 6
      } ,
      {
        body: 'Awful experience. The plot did not even make sense',
        rating: 1,
        userId: 2,
        movieId: 7
      } ,
      {
        body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
        rating: 1,
        userId: 5,
        movieId: 8
      } ,
      {
        body: 'The premise and idea was good, but what the heck was that ending?!',
        rating: 3,
        userId: 4,
        movieId: 9
      } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 2,
        movieId: 10
      } ,
      {
        body: 'The premise and idea was good, but what the heck was that ending?!',
        rating: 3,
        userId: 4,
        movieId: 11
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 12
      } ,
      {
        body: 'The premise and idea was good, but what the heck was that ending?!',
        rating: 3,
        userId: 4,
        movieId: 13
      } ,
      {
        body: 'Prepare to be absolutely terrified! What an experieence',
        rating: 5,
        userId: 2,
        movieId: 14
      } ,
      {
        body: 'The premise and idea was good, but what the heck was that ending?!',
        rating: 3,
        userId: 4,
        movieId: 15
      } ,
      {
        body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
        rating: 4,
        userId: 4,
        movieId: 16
      } ,
      {
        body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
        rating: 2,
        userId: 4,
        movieId: 17
      } ,
      {
        body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
        rating: 2,
        userId: 4,
        movieId: 18
      } ,
      {
        body: 'Awful experience. The plot did not even make sense',
        rating: 1,
        userId: 2,
        movieId: 19
      } ,
      {
        body: 'Excellent film, although I thought that it ended a little too suddenly.',
        rating: 4,
        userId: 5,
        movieId: 20
      } ,
      {
        body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
        rating: 1,
        userId: 5,
        movieId: 21
      } ,
      {
        body: 'Excellent film, although I thought that it ended a little too suddenly.',
        rating: 4,
        userId: 5,
        movieId: 22
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 23
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 24
      } ,
      {
        body: 'Excellent film, although I thought that it ended a little too suddenly.',
        rating: 4,
        userId: 5,
        movieId: 25
      } ,
      {
        body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
        rating: 5,
        userId: 3,
        movieId: 26
      } ,
      {
        body: 'Excellent film, although I thought that it ended a little too suddenly.',
        rating: 4,
        userId: 5,
        movieId: 27
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 28
      } ,
      {
        body: 'Excellent film, although I thought that it ended a little too suddenly.',
        rating: 4,
        userId: 5,
        movieId: 29
      } ,
      {
        body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
        rating: 5,
        userId: 3,
        movieId: 30
      } ,
      {
        body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
        rating: 1,
        userId: 5,
        movieId: 31
      } ,
      {
        body: 'Prepare to be absolutely terrified! What an experieence',
        rating: 5,
        userId: 2,
        movieId: 32
      } ,
      {
        body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
        rating: 4,
        userId: 1,
        movieId: 33
      } ,
      {
        body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
        rating: 5,
        userId: 3,
        movieId: 34
      } ,
      {
        body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
        rating: 4,
        userId: 4,
        movieId: 35
      } ,
      {
        body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
        rating: 5,
        userId: 3,
        movieId: 36
      } ,
      {
        body: 'The premise and idea was good, but what the heck was that ending?!',
        rating: 3,
        userId: 4,
        movieId: 37
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 38
      } ,
      {
        body: 'The premise and idea was good, but what the heck was that ending?!',
        rating: 3,
        userId: 4,
        movieId: 39
      } ,
      {
        body: 'The premise and idea was good, but what the heck was that ending?!',
        rating: 3,
        userId: 4,
        movieId: 40
      } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 2,
        movieId: 41
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 42
      } ,
      {
        body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
        rating: 4,
        userId: 4,
        movieId: 43
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 44
      } ,
      {
        body: 'Excellent film, although I thought that it ended a little too suddenly.',
        rating: 4,
        userId: 5,
        movieId: 45
      } ,
      {
        body: 'Awful experience. The plot did not even make sense',
        rating: 1,
        userId: 2,
        movieId: 46
      } ,
      {
        body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
        rating: 1,
        userId: 5,
        movieId: 47
      } ,
      {
        body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
        rating: 1,
        userId: 5,
        movieId: 48
      } ,
      {
        body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
        rating: 5,
        userId: 3,
        movieId: 49
      } ,
      {
        body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
        rating: 4,
        userId: 4,
        movieId: 50
      } ,
      {
        body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
        rating: 4,
        userId: 1,
        movieId: 51
      } ,
      {
        body: 'Prepare to be absolutely terrified! What an experieence',
        rating: 5,
        userId: 2,
        movieId: 52
      } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 2,
        movieId: 53
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 54
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 5,
        movieId: 55
      } ,
      {
        body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
        rating: 5,
        userId: 3,
        movieId: 56
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 57
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 58
      } ,
      {
        body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
        rating: 5,
        userId: 3,
        movieId: 59
      } ,
      {
        body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
        rating: 4,
        userId: 4,
        movieId: 60
      } ,
      {
        body: 'The premise and idea was good, but what the heck was that ending?!',
        rating: 3,
        userId: 4,
        movieId: 61
      } ,
      {
        body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
        rating: 4,
        userId: 1,
        movieId: 62
      } ,
      {
        body: 'Prepare to be absolutely terrified! What an experieence',
        rating: 5,
        userId: 2,
        movieId: 63
      } ,
      {
        body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
        rating: 4,
        userId: 4,
        movieId: 64
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 65
      } ,
      {
        body: 'The premise and idea was good, but what the heck was that ending?!',
        rating: 3,
        userId: 4,
        movieId: 66
      } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 2,
        movieId: 67
      } ,
      {
        body: 'Prepare to be absolutely terrified! What an experieence',
        rating: 5,
        userId: 2,
        movieId: 68
      } ,
      {
        body: 'Decent. I went into this with higher expectations than I should have',
        rating: 3,
        userId: 3,
        movieId: 69
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 70
      } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 2,
        movieId: 71
      } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 2,
        movieId: 72
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 73
      } ,
      {
        body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
        rating: 4,
        userId: 1,
        movieId: 74
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 5,
        movieId: 75
      } ,
      {
        body: 'The premise and idea was good, but what the heck was that ending?!',
        rating: 3,
        userId: 4,
        movieId: 76
      } ,
      {
        body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
        rating: 4,
        userId: 4,
        movieId: 77
      } ,
      {
        body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
        rating: 5,
        userId: 3,
        movieId: 78
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 79
      } ,
      {
        body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
        rating: 4,
        userId: 1,
        movieId: 80
      } ,
      {
        body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
        rating: 1,
        userId: 5,
        movieId: 81
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 82
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 83
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 5,
        movieId: 84
      } ,
      {
        body: 'The premise and idea was good, but what the heck was that ending?!',
        rating: 3,
        userId: 4,
        movieId: 85
      } ,
      {
        body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
        rating: 4,
        userId: 1,
        movieId: 86
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 87
      } ,
      {
        body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
        rating: 4,
        userId: 1,
        movieId: 88
      } ,
      {
        body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
        rating: 2,
        userId: 4,
        movieId: 89
      } ,
      {
        body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
        rating: 4,
        userId: 1,
        movieId: 90
      } ,
      {
        body: 'Awful experience. The plot did not even make sense',
        rating: 1,
        userId: 2,
        movieId: 91
      } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 2,
        movieId: 92
      } ,
      {
        body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
        rating: 4,
        userId: 1,
        movieId: 93
      } ,
      {
        body: 'Excellent film, although I thought that it ended a little too suddenly.',
        rating: 4,
        userId: 5,
        movieId: 94
      } ,
      {
        body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
        rating: 2,
        userId: 4,
        movieId: 95
      } ,
      {
        body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
        rating: 4,
        userId: 1,
        movieId: 96
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 97
      } ,
      {
        body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
        rating: 4,
        userId: 4,
        movieId: 98
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 5,
        movieId: 99
      } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 2,
        movieId: 100
      } ,
      {
        body: 'Props for a scary monster/villian. Everything else was terribly executed.',
        rating: 2,
        userId: 4,
        movieId: 101
      } ,
      {
        body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
        rating: 4,
        userId: 4,
        movieId: 102
      } ,
      {
        body: 'Decent. I went into this with higher expectations than I should have',
        rating: 3,
        userId: 3,
        movieId: 103
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 104
      } ,
      {
        body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
        rating: 4,
        userId: 1,
        movieId: 105
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 106
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 5,
        movieId: 107
      } ,
      {
        body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
        rating: 4,
        userId: 1,
        movieId: 108
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 109
      } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 2,
        movieId: 110
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 5,
        movieId: 1
      } ,
      {
        body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
        rating: 4,
        userId: 4,
        movieId: 2
      } ,
      {
        body: 'Awful experience. The plot did not even make sense',
        rating: 1,
        userId: 2,
        movieId: 3
      } ,
      {
        body: 'Prepare to be absolutely terrified! What an experieence',
        rating: 5,
        userId: 2,
        movieId: 4
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 5
      } ,
      {
        body: 'Props for a scary monster/villian. Everything else was terribly executed.',
        rating: 2,
        userId: 4,
        movieId: 6
      } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 2,
        movieId: 7
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 8
      } ,
      {
        body: 'Excellent film, although I thought that it ended a little too suddenly.',
        rating: 4,
        userId: 5,
        movieId: 9
      } ,
      {
        body: 'Decent. I went into this with higher expectations than I should have',
        rating: 3,
        userId: 3,
        movieId: 10
      } ,
      {
        body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
        rating: 4,
        userId: 4,
        movieId: 11
      } ,
      {
        body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
        rating: 1,
        userId: 5,
        movieId: 12
      } ,
      {
        body: 'Excellent film, although I thought that it ended a little too suddenly.',
        rating: 4,
        userId: 5,
        movieId: 13
      } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 2,
        movieId: 14
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 15
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 5,
        movieId: 16
      } ,
      {
        body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
        rating: 2,
        userId: 4,
        movieId: 17
      } ,
      {
        body: 'Excellent film, although I thought that it ended a little too suddenly.',
        rating: 4,
        userId: 5,
        movieId: 18
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 19
      } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 2,
        movieId: 20
      } ,
      {
        body: 'Prepare to be absolutely terrified! What an experieence',
        rating: 5,
        userId: 2,
        movieId: 21
      } ,
      {
        body: 'Awful experience. The plot did not even make sense',
        rating: 1,
        userId: 2,
        movieId: 22
      } ,
      {
        body: 'Prepare to be absolutely terrified! What an experieence',
        rating: 5,
        userId: 2,
        movieId: 23
      } ,
      {
        body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
        rating: 4,
        userId: 1,
        movieId: 24
      } ,
      {
        body: 'Awful experience. The plot did not even make sense',
        rating: 1,
        userId: 2,
        movieId: 25
      } ,
      {
        body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
        rating: 4,
        userId: 1,
        movieId: 26
      } ,
      {
        body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
        rating: 4,
        userId: 4,
        movieId: 27
      } ,
      {
        body: 'Awful experience. The plot did not even make sense',
        rating: 1,
        userId: 2,
        movieId: 28
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 29
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 30
      } ,
      {
        body: 'Props for a scary monster/villian. Everything else was terribly executed.',
        rating: 2,
        userId: 4,
        movieId: 31
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 32
      } ,
      {
        body: 'The premise and idea was good, but what the heck was that ending?!',
        rating: 3,
        userId: 4,
        movieId: 33
      } ,
      {
        body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
        rating: 4,
        userId: 1,
        movieId: 34
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 35
      } ,
      {
        body: 'Prepare to be absolutely terrified! What an experieence',
        rating: 5,
        userId: 2,
        movieId: 36
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 5,
        movieId: 37
      } ,
      {
        body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
        rating: 1,
        userId: 5,
        movieId: 38
      } ,
      {
        body: 'Props for a scary monster/villian. Everything else was terribly executed.',
        rating: 2,
        userId: 4,
        movieId: 39
      } ,
      {
        body: 'The premise and idea was good, but what the heck was that ending?!',
        rating: 3,
        userId: 4,
        movieId: 40
      } ,
      {
        body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
        rating: 2,
        userId: 4,
        movieId: 41
      } ,
      {
        body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
        rating: 1,
        userId: 5,
        movieId: 42
      } ,
      {
        body: 'Awful experience. The plot did not even make sense',
        rating: 1,
        userId: 2,
        movieId: 43
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 5,
        movieId: 44
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 45
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 5,
        movieId: 46
      } ,
      {
        body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
        rating: 4,
        userId: 4,
        movieId: 47
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 48
      } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 2,
        movieId: 49
      } ,
      {
        body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
        rating: 5,
        userId: 3,
        movieId: 50
      } ,
      {
        body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
        rating: 5,
        userId: 3,
        movieId: 51
      } ,
      {
        body: 'Props for a scary monster/villian. Everything else was terribly executed.',
        rating: 2,
        userId: 4,
        movieId: 52
      } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 2,
        movieId: 53
      } ,
      {
        body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
        rating: 2,
        userId: 4,
        movieId: 54
      } ,
      {
        body: 'Prepare to be absolutely terrified! What an experieence',
        rating: 5,
        userId: 2,
        movieId: 55
      } ,
      {
        body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
        rating: 5,
        userId: 3,
        movieId: 56
      } ,
      {
        body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
        rating: 4,
        userId: 4,
        movieId: 57
      } ,
      {
        body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
        rating: 1,
        userId: 5,
        movieId: 58
      } ,
      {
        body: 'Awful experience. The plot did not even make sense',
        rating: 1,
        userId: 2,
        movieId: 59
      } ,
      {
        body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
        rating: 4,
        userId: 4,
        movieId: 60
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 61
      } ,
      {
        body: 'Excellent film, although I thought that it ended a little too suddenly.',
        rating: 4,
        userId: 5,
        movieId: 62
      } ,
      {
        body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
        rating: 5,
        userId: 3,
        movieId: 63
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 5,
        movieId: 64
      } ,
      {
        body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
        rating: 1,
        userId: 5,
        movieId: 65
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 66
      } ,
      {
        body: 'Decent. I went into this with higher expectations than I should have',
        rating: 3,
        userId: 3,
        movieId: 67
      } ,
      {
        body: 'The premise and idea was good, but what the heck was that ending?!',
        rating: 3,
        userId: 4,
        movieId: 68
      } ,
      {
        body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
        rating: 5,
        userId: 3,
        movieId: 69
      } ,
      {
        body: 'Awful experience. The plot did not even make sense',
        rating: 1,
        userId: 2,
        movieId: 70
      } ,
      {
        body: 'Excellent film, although I thought that it ended a little too suddenly.',
        rating: 4,
        userId: 5,
        movieId: 71
      } ,
      {
        body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
        rating: 5,
        userId: 3,
        movieId: 72
      } ,
      {
        body: 'Awful experience. The plot did not even make sense',
        rating: 1,
        userId: 2,
        movieId: 73
      } ,
      {
        body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
        rating: 4,
        userId: 4,
        movieId: 74
      } ,
      {
        body: 'Decent. I went into this with higher expectations than I should have',
        rating: 3,
        userId: 3,
        movieId: 75
      } ,
      {
        body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
        rating: 2,
        userId: 4,
        movieId: 76
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 77
      } ,
      {
        body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
        rating: 4,
        userId: 1,
        movieId: 78
      } ,
      {
        body: 'Decent. I went into this with higher expectations than I should have',
        rating: 3,
        userId: 3,
        movieId: 79
      } ,
      {
        body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
        rating: 4,
        userId: 4,
        movieId: 80
      } ,
      {
        body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
        rating: 5,
        userId: 3,
        movieId: 81
      } ,
      {
        body: 'Awful experience. The plot did not even make sense',
        rating: 1,
        userId: 2,
        movieId: 82
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 83
      } ,
      {
        body: 'Decent. I went into this with higher expectations than I should have',
        rating: 3,
        userId: 3,
        movieId: 84
      } ,
      {
        body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
        rating: 5,
        userId: 3,
        movieId: 85
      } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 2,
        movieId: 86
      } ,
      {
        body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
        rating: 1,
        userId: 5,
        movieId: 87
      } ,
      {
        body: 'Decent. I went into this with higher expectations than I should have',
        rating: 3,
        userId: 3,
        movieId: 88
      } ,
      {
        body: 'Decent. I went into this with higher expectations than I should have',
        rating: 3,
        userId: 3,
        movieId: 89
      } ,
      {
        body: 'Awful experience. The plot did not even make sense',
        rating: 1,
        userId: 2,
        movieId: 90
      } ,
      {
        body: 'The premise and idea was good, but what the heck was that ending?!',
        rating: 3,
        userId: 4,
        movieId: 91
      } ,
      {
        body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
        rating: 5,
        userId: 3,
        movieId: 92
      } ,
      {
        body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
        rating: 1,
        userId: 5,
        movieId: 93
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 94
      } ,
      {
        body: 'Excellent film, although I thought that it ended a little too suddenly.',
        rating: 4,
        userId: 5,
        movieId: 95
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 96
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 97
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 98
      } ,
      {
        body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
        rating: 1,
        userId: 5,
        movieId: 99
      } ,
      {
        body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
        rating: 4,
        userId: 1,
        movieId: 100
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 101
      } ,
      {
        body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
        rating: 2,
        userId: 4,
        movieId: 102
      } ,
      {
        body: 'The premise and idea was good, but what the heck was that ending?!',
        rating: 3,
        userId: 4,
        movieId: 103
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 104
      } ,
      {
        body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
        rating: 2,
        userId: 4,
        movieId: 105
      } ,
      {
        body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
        rating: 2,
        userId: 4,
        movieId: 106
      } ,
      {
        body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
        rating: 4,
        userId: 4,
        movieId: 107
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 108
      } ,
      {
        body: 'Props for a scary monster/villian. Everything else was terribly executed.',
        rating: 2,
        userId: 4,
        movieId: 109
      } ,
      {
        body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
        rating: 2,
        userId: 4,
        movieId: 110
      } ,
      {
        body: 'Decent. I went into this with higher expectations than I should have',
        rating: 3,
        userId: 3,
        movieId: 1
      } ,
      {
        body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
        rating: 4,
        userId: 1,
        movieId: 2
      } ,
      {
        body: 'Prepare to be absolutely terrified! What an experieence',
        rating: 5,
        userId: 2,
        movieId: 3
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 4
      } ,
      {
        body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
        rating: 2,
        userId: 4,
        movieId: 5
      } ,
      {
        body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
        rating: 4,
        userId: 1,
        movieId: 6
      } ,
      {
        body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
        rating: 1,
        userId: 5,
        movieId: 7
      } ,
      {
        body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
        rating: 1,
        userId: 5,
        movieId: 8
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 9
      } ,
      {
        body: 'Props for a scary monster/villian. Everything else was terribly executed.',
        rating: 2,
        userId: 4,
        movieId: 10
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 5,
        movieId: 11
      } ,
      {
        body: 'The premise and idea was good, but what the heck was that ending?!',
        rating: 3,
        userId: 4,
        movieId: 12
      } ,
      {
        body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
        rating: 4,
        userId: 4,
        movieId: 13
      } ,
      {
        body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
        rating: 4,
        userId: 4,
        movieId: 14
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 15
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 5,
        movieId: 16
      } ,
      {
        body: 'Prepare to be absolutely terrified! What an experieence',
        rating: 5,
        userId: 2,
        movieId: 17
      } ,
      {
        body: 'Excellent film, although I thought that it ended a little too suddenly.',
        rating: 4,
        userId: 5,
        movieId: 18
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 19
      } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 2,
        movieId: 20
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 21
      } ,
      {
        body: 'Awful experience. The plot did not even make sense',
        rating: 1,
        userId: 2,
        movieId: 22
      } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 2,
        movieId: 23
      } ,
      {
        body: 'The premise and idea was good, but what the heck was that ending?!',
        rating: 3,
        userId: 4,
        movieId: 24
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 25
      } ,
      {
        body: 'Decent. I went into this with higher expectations than I should have',
        rating: 3,
        userId: 3,
        movieId: 26
      } ,
      {
        body: 'The premise and idea was good, but what the heck was that ending?!',
        rating: 3,
        userId: 4,
        movieId: 27
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 28
      } ,
      {
        body: 'Prepare to be absolutely terrified! What an experieence',
        rating: 5,
        userId: 2,
        movieId: 29
      } ,
      {
        body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
        rating: 2,
        userId: 4,
        movieId: 30
      } ,
      {
        body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
        rating: 1,
        userId: 5,
        movieId: 31
      } ,
      {
        body: 'The premise and idea was good, but what the heck was that ending?!',
        rating: 3,
        userId: 4,
        movieId: 32
      } ,
      {
        body: 'The premise and idea was good, but what the heck was that ending?!',
        rating: 3,
        userId: 4,
        movieId: 33
      } ,
      {
        body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
        rating: 4,
        userId: 4,
        movieId: 34
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 5,
        movieId: 35
      } ,
      {
        body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
        rating: 5,
        userId: 3,
        movieId: 36
      } ,
      {
        body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
        rating: 2,
        userId: 4,
        movieId: 37
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 38
      } ,
      {
        body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
        rating: 5,
        userId: 3,
        movieId: 39
      } ,
      {
        body: 'Props for a scary monster/villian. Everything else was terribly executed.',
        rating: 2,
        userId: 4,
        movieId: 40
      } ,
      {
        body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
        rating: 4,
        userId: 1,
        movieId: 41
      } ,
      {
        body: 'Prepare to be absolutely terrified! What an experieence',
        rating: 5,
        userId: 2,
        movieId: 42
      } ,
      {
        body: 'Awful experience. The plot did not even make sense',
        rating: 1,
        userId: 2,
        movieId: 43
      } ,
      {
        body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
        rating: 5,
        userId: 3,
        movieId: 44
      } ,
      {
        body: 'Decent. I went into this with higher expectations than I should have',
        rating: 3,
        userId: 3,
        movieId: 45
      } ,
      {
        body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
        rating: 1,
        userId: 5,
        movieId: 46
      } ,
      {
        body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
        rating: 4,
        userId: 1,
        movieId: 47
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 5,
        movieId: 48
      } ,
      {
        body: 'Awful experience. The plot did not even make sense',
        rating: 1,
        userId: 2,
        movieId: 49
      } ,
      {
        body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
        rating: 2,
        userId: 4,
        movieId: 50
      } ,
      {
        body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
        rating: 1,
        userId: 5,
        movieId: 51
      } ,
      {
        body: 'Decent. I went into this with higher expectations than I should have',
        rating: 3,
        userId: 3,
        movieId: 52
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 53
      } ,
      {
        body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
        rating: 2,
        userId: 4,
        movieId: 54
      } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 2,
        movieId: 55
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 5,
        movieId: 56
      } ,
      {
        body: 'Props for a scary monster/villian. Everything else was terribly executed.',
        rating: 2,
        userId: 4,
        movieId: 57
      } ,
      {
        body: 'The premise and idea was good, but what the heck was that ending?!',
        rating: 3,
        userId: 4,
        movieId: 58
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 59
      } ,
      {
        body: 'The premise and idea was good, but what the heck was that ending?!',
        rating: 3,
        userId: 4,
        movieId: 60
      } ,
      {
        body: 'Prepare to be absolutely terrified! What an experieence',
        rating: 5,
        userId: 2,
        movieId: 61
      } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 2,
        movieId: 62
      } ,
      {
        body: 'Props for a scary monster/villian. Everything else was terribly executed.',
        rating: 2,
        userId: 4,
        movieId: 63
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 64
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 65
      } ,
      {
        body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
        rating: 2,
        userId: 4,
        movieId: 66
      } ,
      {
        body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
        rating: 2,
        userId: 4,
        movieId: 67
      } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 2,
        movieId: 68
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 69
      } ,
      {
        body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
        rating: 5,
        userId: 3,
        movieId: 70
      } ,
      {
        body: 'Excellent film, although I thought that it ended a little too suddenly.',
        rating: 4,
        userId: 5,
        movieId: 71
      } ,
      {
        body: 'Props for a scary monster/villian. Everything else was terribly executed.',
        rating: 2,
        userId: 4,
        movieId: 72
      } ,
      {
        body: 'Decent. I went into this with higher expectations than I should have',
        rating: 3,
        userId: 3,
        movieId: 73
      } ,
      {
        body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
        rating: 4,
        userId: 1,
        movieId: 74
      } ,
      {
        body: 'Awful experience. The plot did not even make sense',
        rating: 1,
        userId: 2,
        movieId: 75
      } ,
      {
        body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
        rating: 1,
        userId: 5,
        movieId: 76
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 77
      } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 2,
        movieId: 78
      } ,
      {
        body: 'Excellent film, although I thought that it ended a little too suddenly.',
        rating: 4,
        userId: 5,
        movieId: 79
      } ,
      {
        body: 'Props for a scary monster/villian. Everything else was terribly executed.',
        rating: 2,
        userId: 4,
        movieId: 80
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 81
      } ,
      {
        body: 'Decent. I went into this with higher expectations than I should have',
        rating: 3,
        userId: 3,
        movieId: 82
      } ,
      {
        body: 'Prepare to be absolutely terrified! What an experieence',
        rating: 5,
        userId: 2,
        movieId: 83
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 84
      } ,
      {
        body: 'Excellent film, although I thought that it ended a little too suddenly.',
        rating: 4,
        userId: 5,
        movieId: 85
      } ,
      {
        body: 'Excellent film, although I thought that it ended a little too suddenly.',
        rating: 4,
        userId: 5,
        movieId: 86
      } ,
      {
        body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
        rating: 4,
        userId: 4,
        movieId: 87
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 5,
        movieId: 88
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 89
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 5,
        movieId: 90
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 91
      } ,
      {
        body: 'Prepare to be absolutely terrified! What an experieence',
        rating: 5,
        userId: 2,
        movieId: 92
      } ,
      {
        body: 'Prepare to be absolutely terrified! What an experieence',
        rating: 5,
        userId: 2,
        movieId: 93
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 94
      } ,
      {
        body: 'Props for a scary monster/villian. Everything else was terribly executed.',
        rating: 2,
        userId: 4,
        movieId: 95
      } ,
      {
        body: 'Decent. I went into this with higher expectations than I should have',
        rating: 3,
        userId: 3,
        movieId: 96
      } ,
      {
        body: 'Props for a scary monster/villian. Everything else was terribly executed.',
        rating: 2,
        userId: 4,
        movieId: 97
      } ,
      {
        body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
        rating: 1,
        userId: 5,
        movieId: 98
      } ,
      {
        body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
        rating: 2,
        userId: 4,
        movieId: 99
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 100
      } ,
      {
        body: 'Props for a scary monster/villian. Everything else was terribly executed.',
        rating: 2,
        userId: 4,
        movieId: 101
      } ,
      {
        body: 'Decent. I went into this with higher expectations than I should have',
        rating: 3,
        userId: 3,
        movieId: 102
      } ,
      {
        body: 'The premise and idea was good, but what the heck was that ending?!',
        rating: 3,
        userId: 4,
        movieId: 103
      } ,
      {
        body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
        rating: 2,
        userId: 4,
        movieId: 104
      } ,
      {
        body: 'Prepare to be absolutely terrified! What an experieence',
        rating: 5,
        userId: 2,
        movieId: 105
      } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 2,
        movieId: 106
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 107
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 108
      } ,
      {
        body: 'Excellent film, although I thought that it ended a little too suddenly.',
        rating: 4,
        userId: 5,
        movieId: 109
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 110
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 1
      } ,
      {
        body: 'The premise and idea was good, but what the heck was that ending?!',
        rating: 3,
        userId: 4,
        movieId: 2
      } ,
      {
        body: 'Awful experience. The plot did not even make sense',
        rating: 1,
        userId: 2,
        movieId: 3
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 4
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 5
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 6
      } ,
      {
        body: 'The premise and idea was good, but what the heck was that ending?!',
        rating: 3,
        userId: 4,
        movieId: 7
      } ,
      {
        body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
        rating: 1,
        userId: 5,
        movieId: 8
      } ,
      {
        body: 'Decent. I went into this with higher expectations than I should have',
        rating: 3,
        userId: 3,
        movieId: 9
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 10
      } ,
      {
        body: 'Decent. I went into this with higher expectations than I should have',
        rating: 3,
        userId: 3,
        movieId: 11
      } ,
      {
        body: 'The premise and idea was good, but what the heck was that ending?!',
        rating: 3,
        userId: 4,
        movieId: 12
      } ,
      {
        body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
        rating: 1,
        userId: 5,
        movieId: 13
      } ,
      {
        body: 'The premise and idea was good, but what the heck was that ending?!',
        rating: 3,
        userId: 4,
        movieId: 14
      } ,
      {
        body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
        rating: 4,
        userId: 1,
        movieId: 15
      } ,
      {
        body: 'Awful experience. The plot did not even make sense',
        rating: 1,
        userId: 2,
        movieId: 16
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 5,
        movieId: 17
      } ,
      {
        body: 'The premise and idea was good, but what the heck was that ending?!',
        rating: 3,
        userId: 4,
        movieId: 18
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 5,
        movieId: 19
      } ,
      {
        body: 'Prepare to be absolutely terrified! What an experieence',
        rating: 5,
        userId: 2,
        movieId: 20
      } ,
      {
        body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
        rating: 5,
        userId: 3,
        movieId: 21
      } ,
      {
        body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
        rating: 4,
        userId: 4,
        movieId: 22
      } ,
      {
        body: 'Excellent film, although I thought that it ended a little too suddenly.',
        rating: 4,
        userId: 5,
        movieId: 23
      } ,
      {
        body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
        rating: 2,
        userId: 4,
        movieId: 24
      } ,
      {
        body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
        rating: 5,
        userId: 3,
        movieId: 25
      } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 2,
        movieId: 26
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 27
      } ,
      {
        body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
        rating: 5,
        userId: 3,
        movieId: 28
      } ,
      {
        body: 'The premise and idea was good, but what the heck was that ending?!',
        rating: 3,
        userId: 4,
        movieId: 29
      } ,
      {
        body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
        rating: 4,
        userId: 1,
        movieId: 30
      } ,
      {
        body: 'The premise and idea was good, but what the heck was that ending?!',
        rating: 3,
        userId: 4,
        movieId: 31
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 5,
        movieId: 32
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 33
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 34
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 35
      } ,
      {
        body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
        rating: 4,
        userId: 4,
        movieId: 36
      } ,
      {
        body: 'Decent. I went into this with higher expectations than I should have',
        rating: 3,
        userId: 3,
        movieId: 37
      } ,
      {
        body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
        rating: 5,
        userId: 3,
        movieId: 38
      } ,
      {
        body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
        rating: 4,
        userId: 4,
        movieId: 39
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 40
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 41
      } ,
      {
        body: 'The premise and idea was good, but what the heck was that ending?!',
        rating: 3,
        userId: 4,
        movieId: 42
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 43
      } ,
      {
        body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
        rating: 5,
        userId: 3,
        movieId: 44
      } ,
      {
        body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
        rating: 4,
        userId: 1,
        movieId: 45
      } ,
      {
        body: 'Props for a scary monster/villian. Everything else was terribly executed.',
        rating: 2,
        userId: 4,
        movieId: 46
      } ,
      {
        body: 'Decent. I went into this with higher expectations than I should have',
        rating: 3,
        userId: 3,
        movieId: 47
      } ,
      {
        body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
        rating: 4,
        userId: 1,
        movieId: 48
      } ,
      {
        body: 'The premise and idea was good, but what the heck was that ending?!',
        rating: 3,
        userId: 4,
        movieId: 49
      } ,
      {
        body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
        rating: 4,
        userId: 1,
        movieId: 50
      } ,
      {
        body: 'The premise and idea was good, but what the heck was that ending?!',
        rating: 3,
        userId: 4,
        movieId: 51
      } ,
      {
        body: 'Decent. I went into this with higher expectations than I should have',
        rating: 3,
        userId: 3,
        movieId: 52
      } ,
      {
        body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
        rating: 4,
        userId: 1,
        movieId: 53
      } ,
      {
        body: 'Excellent film, although I thought that it ended a little too suddenly.',
        rating: 4,
        userId: 5,
        movieId: 54
      } ,
      {
        body: 'Awful experience. The plot did not even make sense',
        rating: 1,
        userId: 2,
        movieId: 55
      } ,
      {
        body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
        rating: 4,
        userId: 1,
        movieId: 56
      } ,
      {
        body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
        rating: 4,
        userId: 1,
        movieId: 57
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 58
      } ,
      {
        body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
        rating: 4,
        userId: 1,
        movieId: 59
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 60
      } ,
      {
        body: 'Prepare to be absolutely terrified! What an experieence',
        rating: 5,
        userId: 2,
        movieId: 61
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 5,
        movieId: 62
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 63
      } ,
      {
        body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
        rating: 5,
        userId: 3,
        movieId: 64
      } ,
      {
        body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
        rating: 2,
        userId: 4,
        movieId: 65
      } ,
      {
        body: 'Props for a scary monster/villian. Everything else was terribly executed.',
        rating: 2,
        userId: 4,
        movieId: 66
      } ,
      {
        body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
        rating: 5,
        userId: 3,
        movieId: 67
      } ,
      {
        body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
        rating: 5,
        userId: 3,
        movieId: 68
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 69
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 70
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 71
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 72
      } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 2,
        movieId: 73
      } ,
      {
        body: 'Decent. I went into this with higher expectations than I should have',
        rating: 3,
        userId: 3,
        movieId: 74
      } ,
      {
        body: 'Prepare to be absolutely terrified! What an experieence',
        rating: 5,
        userId: 2,
        movieId: 75
      } ,
      {
        body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
        rating: 4,
        userId: 4,
        movieId: 76
      } ,
      {
        body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
        rating: 4,
        userId: 4,
        movieId: 77
      } ,
      {
        body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
        rating: 2,
        userId: 3,
        movieId: 78
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 79
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 80
      } ,
      {
        body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
        rating: 3,
        userId: 5,
        movieId: 81
      } ,
      {
        body: 'Excellent film, although I thought that it ended a little too suddenly.',
        rating: 4,
        userId: 5,
        movieId: 82
      } ,
      {
        body: 'Excellent film, although I thought that it ended a little too suddenly.',
        rating: 4,
        userId: 5,
        movieId: 83
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 84
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 85
      } ,
      {
        body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
        rating: 5,
        userId: 3,
        movieId: 86
      } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 2,
        movieId: 87
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 88
      } ,
      {
        body: 'The premise and idea was good, but what the heck was that ending?!',
        rating: 3,
        userId: 4,
        movieId: 89
      } ,
      {
        body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
        rating: 1,
        userId: 5,
        movieId: 90
      } ,
      {
        body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
        rating: 5,
        userId: 3,
        movieId: 91
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 92
      } ,
      {
        body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
        rating: 2,
        userId: 4,
        movieId: 93
      } ,
      {
        body: 'Props for a scary monster/villian. Everything else was terribly executed.',
        rating: 2,
        userId: 4,
        movieId: 94
      } ,
      {
        body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
        rating: 4,
        userId: 4,
        movieId: 95
      } ,
      {
        body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
        rating: 5,
        userId: 3,
        movieId: 96
      } ,
      {
        body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
        rating: 4,
        userId: 1,
        movieId: 97
      } ,
      {
        body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
        rating: 1,
        userId: 5,
        movieId: 98
      } ,
      {
        body: 'Decent. I went into this with higher expectations than I should have',
        rating: 3,
        userId: 3,
        movieId: 99
      } ,
      {
        body: 'Awful experience. The plot did not even make sense',
        rating: 1,
        userId: 2,
        movieId: 100
      } ,
      {
        body: 'Prepare to be absolutely terrified! What an experieence',
        rating: 5,
        userId: 2,
        movieId: 101
      } ,
      {
        body: 'Excellent film, although I thought that it ended a little too suddenly.',
        rating: 4,
        userId: 5,
        movieId: 102
      } ,
      {
        body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
        rating: 1,
        userId: 5,
        movieId: 103
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 104
      } ,
      {
        body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
        rating: 1,
        userId: 3,
        movieId: 105
      } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 2,
        movieId: 106
      } ,
      {
        body: 'Excellent film, although I thought that it ended a little too suddenly.',
        rating: 4,
        userId: 5,
        movieId: 107
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 108
      } ,
      {
        body: 'This was a great film! Although I would have liked to see a little more originality',
        rating: 4,
        userId: 2,
        movieId: 109
      } ,
      {
        body: 'Excellent movie! One of the best I have seen recently',
        rating: 5,
        userId: 2,
        movieId: 110
      } ,
    {
      body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
      rating: 2,
      userId: 4,
      movieId: 1
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 2
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 3
    } ,
    {
      body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
      rating: 5,
      userId: 3,
      movieId: 4
    } ,
    {
      body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
      rating: 3,
      userId: 5,
      movieId: 5
    } ,
    {
      body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
      rating: 2,
      userId: 4,
      movieId: 6
    } ,
    {
      body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
      rating: 2,
      userId: 4,
      movieId: 7
    } ,
    {
      body: 'The premise and idea was good, but what the heck was that ending?!',
      rating: 3,
      userId: 4,
      movieId: 8
    } ,
    {
      body: 'Excellent film, although I thought that it ended a little too suddenly.',
      rating: 4,
      userId: 5,
      movieId: 9
    } ,
    {
      body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
      rating: 1,
      userId: 5,
      movieId: 10
    } ,
    {
      body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
      rating: 1,
      userId: 5,
      movieId: 11
    } ,
    {
      body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
      rating: 2,
      userId: 4,
      movieId: 12
    } ,
    {
      body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
      rating: 3,
      userId: 5,
      movieId: 13
    } ,
    {
      body: 'Excellent movie! One of the best I have seen recently',
      rating: 5,
      userId: 2,
      movieId: 14
    } ,
    {
      body: 'This was a great film! Although I would have liked to see a little more originality',
      rating: 4,
      userId: 2,
      movieId: 15
    } ,
    {
      body: 'Prepare to be absolutely terrified! What an experieence',
      rating: 5,
      userId: 2,
      movieId: 16
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 17
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 18
    } ,
    {
      body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
      rating: 2,
      userId: 4,
      movieId: 19
    } ,
    {
      body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
      rating: 2,
      userId: 4,
      movieId: 20
    } ,
    {
      body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
      rating: 1,
      userId: 5,
      movieId: 21
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 22
    } ,
    {
      body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
      rating: 1,
      userId: 5,
      movieId: 23
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 24
    } ,
    {
      body: 'The premise and idea was good, but what the heck was that ending?!',
      rating: 3,
      userId: 4,
      movieId: 25
    } ,
    {
      body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
      rating: 2,
      userId: 3,
      movieId: 26
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 27
    } ,
    {
      body: 'Excellent film, although I thought that it ended a little too suddenly.',
      rating: 4,
      userId: 5,
      movieId: 28
    } ,
    {
      body: 'Excellent movie! One of the best I have seen recently',
      rating: 5,
      userId: 2,
      movieId: 29
    } ,
    {
      body: 'Prepare to be absolutely terrified! What an experieence',
      rating: 5,
      userId: 2,
      movieId: 30
    } ,
    {
      body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
      rating: 1,
      userId: 5,
      movieId: 31
    } ,
    {
      body: 'Props for a scary monster/villian. Everything else was terribly executed.',
      rating: 2,
      userId: 4,
      movieId: 32
    } ,
    {
      body: 'The premise and idea was good, but what the heck was that ending?!',
      rating: 3,
      userId: 4,
      movieId: 33
    } ,
    {
      body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
      rating: 5,
      userId: 3,
      movieId: 34
    } ,
    {
      body: 'The premise and idea was good, but what the heck was that ending?!',
      rating: 3,
      userId: 4,
      movieId: 35
    } ,
    {
      body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
      rating: 2,
      userId: 3,
      movieId: 36
    } ,
    {
      body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
      rating: 3,
      userId: 5,
      movieId: 37
    } ,
    {
      body: 'Excellent movie! One of the best I have seen recently',
      rating: 5,
      userId: 2,
      movieId: 38
    } ,
    {
      body: 'Props for a scary monster/villian. Everything else was terribly executed.',
      rating: 2,
      userId: 4,
      movieId: 39
    } ,
    {
      body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
      rating: 5,
      userId: 3,
      movieId: 40
    } ,
    {
      body: 'Excellent film, although I thought that it ended a little too suddenly.',
      rating: 4,
      userId: 5,
      movieId: 41
    } ,
    {
      body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
      rating: 5,
      userId: 3,
      movieId: 42
    } ,
    {
      body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
      rating: 2,
      userId: 4,
      movieId: 43
    } ,
    {
      body: 'The premise and idea was good, but what the heck was that ending?!',
      rating: 3,
      userId: 4,
      movieId: 44
    } ,
    {
      body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
      rating: 2,
      userId: 3,
      movieId: 45
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 46
    } ,
    {
      body: 'This was a great film! Although I would have liked to see a little more originality',
      rating: 4,
      userId: 2,
      movieId: 47
    } ,
    {
      body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
      rating: 3,
      userId: 5,
      movieId: 48
    } ,
    {
      body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
      rating: 1,
      userId: 5,
      movieId: 49
    } ,
    {
      body: 'Props for a scary monster/villian. Everything else was terribly executed.',
      rating: 2,
      userId: 4,
      movieId: 50
    } ,
    {
      body: 'This was a great film! Although I would have liked to see a little more originality',
      rating: 4,
      userId: 2,
      movieId: 51
    } ,
    {
      body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
      rating: 2,
      userId: 4,
      movieId: 52
    } ,
    {
      body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
      rating: 4,
      userId: 1,
      movieId: 53
    } ,
    {
      body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
      rating: 1,
      userId: 3,
      movieId: 54
    } ,
    {
      body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
      rating: 4,
      userId: 1,
      movieId: 55
    } ,
    {
      body: 'Awful experience. The plot did not even make sense',
      rating: 1,
      userId: 2,
      movieId: 56
    } ,
    {
      body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
      rating: 1,
      userId: 5,
      movieId: 57
    } ,
    {
      body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
      rating: 2,
      userId: 4,
      movieId: 58
    } ,
    {
      body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
      rating: 2,
      userId: 4,
      movieId: 59
    } ,
    {
      body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
      rating: 1,
      userId: 3,
      movieId: 60
    } ,
    {
      body: 'Decent. I went into this with higher expectations than I should have',
      rating: 3,
      userId: 3,
      movieId: 61
    } ,
    {
      body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
      rating: 3,
      userId: 5,
      movieId: 62
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 63
    } ,
    {
      body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
      rating: 2,
      userId: 4,
      movieId: 64
    } ,
    {
      body: 'Props for a scary monster/villian. Everything else was terribly executed.',
      rating: 2,
      userId: 4,
      movieId: 65
    } ,
    {
      body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
      rating: 5,
      userId: 3,
      movieId: 66
    } ,
    {
      body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
      rating: 2,
      userId: 3,
      movieId: 67
    } ,
    {
      body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
      rating: 2,
      userId: 4,
      movieId: 68
    } ,
    {
      body: 'Prepare to be absolutely terrified! What an experieence',
      rating: 5,
      userId: 2,
      movieId: 69
    } ,
    {
      body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
      rating: 3,
      userId: 5,
      movieId: 70
    } ,
    {
      body: 'This was a great film! Although I would have liked to see a little more originality',
      rating: 4,
      userId: 2,
      movieId: 71
    } ,
    {
      body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
      rating: 2,
      userId: 3,
      movieId: 72
    } ,
    {
      body: 'Awful experience. The plot did not even make sense',
      rating: 1,
      userId: 2,
      movieId: 73
    } ,
    {
      body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
      rating: 3,
      userId: 5,
      movieId: 74
    } ,
    {
      body: 'Excellent movie! One of the best I have seen recently',
      rating: 5,
      userId: 2,
      movieId: 75
    } ,
    {
      body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
      rating: 1,
      userId: 3,
      movieId: 76
    } ,
    {
      body: 'This was a great film! Although I would have liked to see a little more originality',
      rating: 4,
      userId: 2,
      movieId: 77
    } ,
    {
      body: 'Prepare to be absolutely terrified! What an experieence',
      rating: 5,
      userId: 2,
      movieId: 78
    } ,
    {
      body: 'Decent. I went into this with higher expectations than I should have',
      rating: 3,
      userId: 3,
      movieId: 79
    } ,
    {
      body: 'Props for a scary monster/villian. Everything else was terribly executed.',
      rating: 2,
      userId: 4,
      movieId: 80
    } ,
    {
      body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
      rating: 2,
      userId: 3,
      movieId: 81
    } ,
    {
      body: 'This was a great film! Although I would have liked to see a little more originality',
      rating: 4,
      userId: 2,
      movieId: 82
    } ,
    {
      body: 'Props for a scary monster/villian. Everything else was terribly executed.',
      rating: 2,
      userId: 4,
      movieId: 83
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 84
    } ,
    {
      body: 'Props for a scary monster/villian. Everything else was terribly executed.',
      rating: 2,
      userId: 4,
      movieId: 85
    } ,
    {
      body: 'Decent. I went into this with higher expectations than I should have',
      rating: 3,
      userId: 3,
      movieId: 86
    } ,
    {
      body: 'Decent. I went into this with higher expectations than I should have',
      rating: 3,
      userId: 3,
      movieId: 87
    } ,
    {
      body: 'Props for a scary monster/villian. Everything else was terribly executed.',
      rating: 2,
      userId: 4,
      movieId: 88
    } ,
    {
      body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
      rating: 1,
      userId: 3,
      movieId: 89
    } ,
    {
      body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
      rating: 1,
      userId: 3,
      movieId: 90
    } ,
    {
      body: 'This was a great film! Although I would have liked to see a little more originality',
      rating: 4,
      userId: 2,
      movieId: 91
    } ,
    {
      body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
      rating: 1,
      userId: 5,
      movieId: 92
    } ,
    {
      body: 'Props for a scary monster/villian. Everything else was terribly executed.',
      rating: 2,
      userId: 4,
      movieId: 93
    } ,
    {
      body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
      rating: 5,
      userId: 3,
      movieId: 94
    } ,
    {
      body: 'This was a great film! Although I would have liked to see a little more originality',
      rating: 4,
      userId: 2,
      movieId: 95
    } ,
    {
      body: 'Excellent movie! One of the best I have seen recently',
      rating: 5,
      userId: 2,
      movieId: 96
    } ,
    {
      body: 'Excellent film, although I thought that it ended a little too suddenly.',
      rating: 4,
      userId: 5,
      movieId: 97
    } ,
    {
      body: 'Awful experience. The plot did not even make sense',
      rating: 1,
      userId: 2,
      movieId: 98
    } ,
    {
      body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
      rating: 5,
      userId: 3,
      movieId: 99
    } ,
    {
      body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
      rating: 4,
      userId: 1,
      movieId: 100
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 101
    } ,
    {
      body: 'Props for a scary monster/villian. Everything else was terribly executed.',
      rating: 2,
      userId: 4,
      movieId: 102
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 103
    } ,
    {
      body: 'Awful experience. The plot did not even make sense',
      rating: 1,
      userId: 2,
      movieId: 104
    } ,
    {
      body: 'This was a great film! Although I would have liked to see a little more originality',
      rating: 4,
      userId: 2,
      movieId: 105
    } ,
    {
      body: 'Prepare to be absolutely terrified! What an experieence',
      rating: 5,
      userId: 2,
      movieId: 106
    } ,
    {
      body: 'Excellent film, although I thought that it ended a little too suddenly.',
      rating: 4,
      userId: 5,
      movieId: 107
    } ,
    {
      body: 'This was a great film! Although I would have liked to see a little more originality',
      rating: 4,
      userId: 2,
      movieId: 108
    } ,
    {
      body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
      rating: 2,
      userId: 3,
      movieId: 109
    } ,
    {
      body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
      rating: 1,
      userId: 5,
      movieId: 110
    } ,
    {
      body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
      rating: 4,
      userId: 1,
      movieId: 1
    } ,
    {
      body: 'Awful experience. The plot did not even make sense',
      rating: 1,
      userId: 2,
      movieId: 2
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 3
    } ,
    {
      body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
      rating: 2,
      userId: 3,
      movieId: 4
    } ,
    {
      body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
      rating: 1,
      userId: 3,
      movieId: 5
    } ,
    {
      body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
      rating: 3,
      userId: 5,
      movieId: 6
    } ,
    {
      body: 'This was a great film! Although I would have liked to see a little more originality',
      rating: 4,
      userId: 2,
      movieId: 7
    } ,
    {
      body: 'Excellent movie! One of the best I have seen recently',
      rating: 5,
      userId: 2,
      movieId: 8
    } ,
    {
      body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
      rating: 1,
      userId: 3,
      movieId: 9
    } ,
    {
      body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
      rating: 1,
      userId: 3,
      movieId: 10
    } ,
    {
      body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
      rating: 2,
      userId: 3,
      movieId: 11
    } ,
    {
      body: 'Decent. I went into this with higher expectations than I should have',
      rating: 3,
      userId: 3,
      movieId: 12
    } ,
    {
      body: 'Excellent movie! One of the best I have seen recently',
      rating: 5,
      userId: 2,
      movieId: 13
    } ,
    {
      body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
      rating: 1,
      userId: 3,
      movieId: 14
    } ,
    {
      body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
      rating: 1,
      userId: 5,
      movieId: 15
    } ,
    {
      body: 'This was a great film! Although I would have liked to see a little more originality',
      rating: 4,
      userId: 2,
      movieId: 16
    } ,
    {
      body: 'Decent. I went into this with higher expectations than I should have',
      rating: 3,
      userId: 3,
      movieId: 17
    } ,
    {
      body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
      rating: 5,
      userId: 3,
      movieId: 18
    } ,
    {
      body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
      rating: 3,
      userId: 5,
      movieId: 19
    } ,
    {
      body: 'Excellent film, although I thought that it ended a little too suddenly.',
      rating: 4,
      userId: 5,
      movieId: 20
    } ,
    {
      body: 'Excellent movie! One of the best I have seen recently',
      rating: 5,
      userId: 2,
      movieId: 21
    } ,
    {
      body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
      rating: 3,
      userId: 5,
      movieId: 22
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 23
    } ,
    {
      body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
      rating: 2,
      userId: 4,
      movieId: 24
    } ,
    {
      body: 'Props for a scary monster/villian. Everything else was terribly executed.',
      rating: 2,
      userId: 4,
      movieId: 25
    } ,
    {
      body: 'Prepare to be absolutely terrified! What an experieence',
      rating: 5,
      userId: 2,
      movieId: 26
    } ,
    {
      body: 'Decent. I went into this with higher expectations than I should have',
      rating: 3,
      userId: 3,
      movieId: 27
    } ,
    {
      body: 'Excellent film, although I thought that it ended a little too suddenly.',
      rating: 4,
      userId: 5,
      movieId: 28
    } ,
    {
      body: 'The premise and idea was good, but what the heck was that ending?!',
      rating: 3,
      userId: 4,
      movieId: 29
    } ,
    {
      body: 'Props for a scary monster/villian. Everything else was terribly executed.',
      rating: 2,
      userId: 4,
      movieId: 30
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 31
    } ,
    {
      body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
      rating: 1,
      userId: 3,
      movieId: 32
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 33
    } ,
    {
      body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
      rating: 2,
      userId: 3,
      movieId: 34
    } ,
    {
      body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
      rating: 1,
      userId: 3,
      movieId: 35
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 36
    } ,
    {
      body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
      rating: 2,
      userId: 3,
      movieId: 37
    } ,
    {
      body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
      rating: 4,
      userId: 1,
      movieId: 38
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 39
    } ,
    {
      body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
      rating: 2,
      userId: 3,
      movieId: 40
    } ,
    {
      body: 'Awful experience. The plot did not even make sense',
      rating: 1,
      userId: 2,
      movieId: 41
    } ,
    {
      body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
      rating: 2,
      userId: 3,
      movieId: 42
    } ,
    {
      body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
      rating: 3,
      userId: 5,
      movieId: 43
    } ,
    {
      body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
      rating: 2,
      userId: 4,
      movieId: 44
    } ,
    {
      body: 'Prepare to be absolutely terrified! What an experieence',
      rating: 5,
      userId: 2,
      movieId: 45
    } ,
    {
      body: 'Decent. I went into this with higher expectations than I should have',
      rating: 3,
      userId: 3,
      movieId: 46
    } ,
    {
      body: 'Prepare to be absolutely terrified! What an experieence',
      rating: 5,
      userId: 2,
      movieId: 47
    } ,
    {
      body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
      rating: 2,
      userId: 3,
      movieId: 48
    } ,
    {
      body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
      rating: 1,
      userId: 5,
      movieId: 49
    } ,
    {
      body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
      rating: 5,
      userId: 3,
      movieId: 50
    } ,
    {
      body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
      rating: 1,
      userId: 3,
      movieId: 51
    } ,
    {
      body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
      rating: 2,
      userId: 4,
      movieId: 52
    } ,
    {
      body: 'Props for a scary monster/villian. Everything else was terribly executed.',
      rating: 2,
      userId: 4,
      movieId: 53
    } ,
    {
      body: 'Prepare to be absolutely terrified! What an experieence',
      rating: 5,
      userId: 2,
      movieId: 54
    } ,
    {
      body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
      rating: 1,
      userId: 5,
      movieId: 55
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 56
    } ,
    {
      body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
      rating: 2,
      userId: 4,
      movieId: 57
    } ,
    {
      body: 'Excellent movie! One of the best I have seen recently',
      rating: 5,
      userId: 2,
      movieId: 58
    } ,
    {
      body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
      rating: 1,
      userId: 3,
      movieId: 59
    } ,
    {
      body: 'Excellent movie! One of the best I have seen recently',
      rating: 5,
      userId: 2,
      movieId: 60
    } ,
    {
      body: 'Props for a scary monster/villian. Everything else was terribly executed.',
      rating: 2,
      userId: 4,
      movieId: 61
    } ,
    {
      body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
      rating: 2,
      userId: 3,
      movieId: 62
    } ,
    {
      body: 'This was a great film! Although I would have liked to see a little more originality',
      rating: 4,
      userId: 2,
      movieId: 63
    } ,
    {
      body: 'Decent. I went into this with higher expectations than I should have',
      rating: 3,
      userId: 3,
      movieId: 64
    } ,
    {
      body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
      rating: 1,
      userId: 5,
      movieId: 65
    } ,
    {
      body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
      rating: 2,
      userId: 3,
      movieId: 66
    } ,
    {
      body: 'Decent. I went into this with higher expectations than I should have',
      rating: 3,
      userId: 3,
      movieId: 67
    } ,
    {
      body: 'Excellent film, although I thought that it ended a little too suddenly.',
      rating: 4,
      userId: 5,
      movieId: 68
    } ,
    {
      body: 'Prepare to be absolutely terrified! What an experieence',
      rating: 5,
      userId: 2,
      movieId: 69
    } ,
    {
      body: 'Props for a scary monster/villian. Everything else was terribly executed.',
      rating: 2,
      userId: 4,
      movieId: 70
    } ,
    {
      body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
      rating: 5,
      userId: 3,
      movieId: 71
    } ,
    {
      body: 'Excellent movie! One of the best I have seen recently',
      rating: 5,
      userId: 2,
      movieId: 72
    } ,
    {
      body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
      rating: 5,
      userId: 3,
      movieId: 73
    } ,
    {
      body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
      rating: 5,
      userId: 3,
      movieId: 74
    } ,
    {
      body: 'The premise and idea was good, but what the heck was that ending?!',
      rating: 3,
      userId: 4,
      movieId: 75
    } ,
    {
      body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
      rating: 1,
      userId: 3,
      movieId: 76
    } ,
    {
      body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
      rating: 1,
      userId: 3,
      movieId: 77
    } ,
    {
      body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
      rating: 2,
      userId: 3,
      movieId: 78
    } ,
    {
      body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
      rating: 1,
      userId: 5,
      movieId: 79
    } ,
    {
      body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
      rating: 1,
      userId: 5,
      movieId: 80
    } ,
    {
      body: 'The premise and idea was good, but what the heck was that ending?!',
      rating: 3,
      userId: 4,
      movieId: 81
    } ,
    {
      body: 'Awful experience. The plot did not even make sense',
      rating: 1,
      userId: 2,
      movieId: 82
    } ,
    {
      body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
      rating: 2,
      userId: 3,
      movieId: 83
    } ,
    {
      body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
      rating: 1,
      userId: 5,
      movieId: 84
    } ,
    {
      body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
      rating: 2,
      userId: 3,
      movieId: 85
    } ,
    {
      body: 'Awful experience. The plot did not even make sense',
      rating: 1,
      userId: 2,
      movieId: 86
    } ,
    {
      body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
      rating: 3,
      userId: 5,
      movieId: 87
    } ,
    {
      body: 'Excellent movie! One of the best I have seen recently',
      rating: 5,
      userId: 2,
      movieId: 88
    } ,
    {
      body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
      rating: 4,
      userId: 1,
      movieId: 89
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 90
    } ,
    {
      body: 'The premise and idea was good, but what the heck was that ending?!',
      rating: 3,
      userId: 4,
      movieId: 91
    } ,
    {
      body: 'Excellent movie! One of the best I have seen recently',
      rating: 5,
      userId: 2,
      movieId: 92
    } ,
    {
      body: 'Props for a scary monster/villian. Everything else was terribly executed.',
      rating: 2,
      userId: 4,
      movieId: 93
    } ,
    {
      body: 'Awful experience. The plot did not even make sense',
      rating: 1,
      userId: 2,
      movieId: 94
    } ,
    {
      body: 'Excellent movie! One of the best I have seen recently',
      rating: 5,
      userId: 2,
      movieId: 95
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 96
    } ,
    {
      body: 'Props for a scary monster/villian. Everything else was terribly executed.',
      rating: 2,
      userId: 4,
      movieId: 97
    } ,
    {
      body: 'Decent. I went into this with higher expectations than I should have',
      rating: 3,
      userId: 3,
      movieId: 98
    } ,
    {
      body: 'Awful experience. The plot did not even make sense',
      rating: 1,
      userId: 2,
      movieId: 99
    } ,
    {
      body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
      rating: 2,
      userId: 4,
      movieId: 100
    } ,
    {
      body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
      rating: 2,
      userId: 4,
      movieId: 101
    } ,
    {
      body: 'Prepare to be absolutely terrified! What an experieence',
      rating: 5,
      userId: 2,
      movieId: 102
    } ,
    {
      body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
      rating: 4,
      userId: 1,
      movieId: 103
    } ,
    {
      body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
      rating: 4,
      userId: 1,
      movieId: 104
    } ,
    {
      body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
      rating: 2,
      userId: 4,
      movieId: 105
    } ,
    {
      body: 'This was a great film! Although I would have liked to see a little more originality',
      rating: 4,
      userId: 2,
      movieId: 106
    } ,
    {
      body: 'This was a great film! Although I would have liked to see a little more originality',
      rating: 4,
      userId: 2,
      movieId: 107
    } ,
    {
      body: 'Decent. I went into this with higher expectations than I should have',
      rating: 3,
      userId: 3,
      movieId: 108
    } ,
    {
      body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
      rating: 3,
      userId: 5,
      movieId: 109
    } ,
    {
      body: 'Prepare to be absolutely terrified! What an experieence',
      rating: 5,
      userId: 2,
      movieId: 110
    } ,
    {
      body: 'Prepare to be absolutely terrified! What an experieence',
      rating: 5,
      userId: 2,
      movieId: 1
    } ,
    {
      body: 'Awful experience. The plot did not even make sense',
      rating: 1,
      userId: 2,
      movieId: 2
    } ,
    {
      body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
      rating: 2,
      userId: 4,
      movieId: 3
    } ,
    {
      body: 'Awful experience. The plot did not even make sense',
      rating: 1,
      userId: 2,
      movieId: 4
    } ,
    {
      body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
      rating: 4,
      userId: 1,
      movieId: 5
    } ,
    {
      body: 'The premise and idea was good, but what the heck was that ending?!',
      rating: 3,
      userId: 4,
      movieId: 6
    } ,
    {
      body: 'Decent. I went into this with higher expectations than I should have',
      rating: 3,
      userId: 3,
      movieId: 7
    } ,
    {
      body: 'Prepare to be absolutely terrified! What an experieence',
      rating: 5,
      userId: 2,
      movieId: 8
    } ,
    {
      body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
      rating: 4,
      userId: 1,
      movieId: 9
    } ,
    {
      body: 'The premise and idea was good, but what the heck was that ending?!',
      rating: 3,
      userId: 4,
      movieId: 10
    } ,
    {
      body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
      rating: 3,
      userId: 5,
      movieId: 11
    } ,
    {
      body: 'Decent. I went into this with higher expectations than I should have',
      rating: 3,
      userId: 3,
      movieId: 12
    } ,
    {
      body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
      rating: 5,
      userId: 3,
      movieId: 13
    } ,
    {
      body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
      rating: 1,
      userId: 5,
      movieId: 14
    } ,
    {
      body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
      rating: 1,
      userId: 3,
      movieId: 15
    } ,
    {
      body: 'This was a great film! Although I would have liked to see a little more originality',
      rating: 4,
      userId: 2,
      movieId: 16
    } ,
    {
      body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
      rating: 1,
      userId: 3,
      movieId: 17
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 18
    } ,
    {
      body: 'Decent. I went into this with higher expectations than I should have',
      rating: 3,
      userId: 3,
      movieId: 19
    } ,
    {
      body: 'Awful experience. The plot did not even make sense',
      rating: 1,
      userId: 2,
      movieId: 20
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 21
    } ,
    {
      body: 'Decent. I went into this with higher expectations than I should have',
      rating: 3,
      userId: 3,
      movieId: 22
    } ,
    {
      body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
      rating: 2,
      userId: 4,
      movieId: 23
    } ,
    {
      body: 'Excellent film, although I thought that it ended a little too suddenly.',
      rating: 4,
      userId: 5,
      movieId: 24
    } ,
    {
      body: 'Prepare to be absolutely terrified! What an experieence',
      rating: 5,
      userId: 2,
      movieId: 25
    } ,
    {
      body: 'Excellent movie! One of the best I have seen recently',
      rating: 5,
      userId: 2,
      movieId: 26
    } ,
    {
      body: 'The premise and idea was good, but what the heck was that ending?!',
      rating: 3,
      userId: 4,
      movieId: 27
    } ,
    {
      body: 'Excellent movie! One of the best I have seen recently',
      rating: 5,
      userId: 2,
      movieId: 28
    } ,
    {
      body: 'Props for a scary monster/villian. Everything else was terribly executed.',
      rating: 2,
      userId: 4,
      movieId: 29
    } ,
    {
      body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
      rating: 1,
      userId: 3,
      movieId: 30
    } ,
    {
      body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
      rating: 1,
      userId: 5,
      movieId: 31
    } ,
    {
      body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
      rating: 2,
      userId: 3,
      movieId: 32
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 33
    } ,
    {
      body: 'Props for a scary monster/villian. Everything else was terribly executed.',
      rating: 2,
      userId: 4,
      movieId: 34
    } ,
    {
      body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
      rating: 5,
      userId: 3,
      movieId: 35
    } ,
    {
      body: 'Excellent film, although I thought that it ended a little too suddenly.',
      rating: 4,
      userId: 5,
      movieId: 36
    } ,
    {
      body: 'Decent. I went into this with higher expectations than I should have',
      rating: 3,
      userId: 3,
      movieId: 37
    } ,
    {
      body: 'This was a great film! Although I would have liked to see a little more originality',
      rating: 4,
      userId: 2,
      movieId: 38
    } ,
    {
      body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
      rating: 2,
      userId: 3,
      movieId: 39
    } ,
    {
      body: 'Awful experience. The plot did not even make sense',
      rating: 1,
      userId: 2,
      movieId: 40
    } ,
    {
      body: 'Props for a scary monster/villian. Everything else was terribly executed.',
      rating: 2,
      userId: 4,
      movieId: 41
    } ,
    {
      body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
      rating: 2,
      userId: 3,
      movieId: 42
    } ,
    {
      body: 'Prepare to be absolutely terrified! What an experieence',
      rating: 5,
      userId: 2,
      movieId: 43
    } ,
    {
      body: 'Prepare to be absolutely terrified! What an experieence',
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
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 46
    } ,
    {
      body: 'Excellent film, although I thought that it ended a little too suddenly.',
      rating: 4,
      userId: 5,
      movieId: 47
    } ,
    {
      body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
      rating: 4,
      userId: 1,
      movieId: 48
    } ,
    {
      body: 'Decent. I went into this with higher expectations than I should have',
      rating: 3,
      userId: 3,
      movieId: 49
    } ,
    {
      body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
      rating: 3,
      userId: 5,
      movieId: 50
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 51
    } ,
    {
      body: 'Decent. I went into this with higher expectations than I should have',
      rating: 3,
      userId: 3,
      movieId: 52
    } ,
    {
      body: 'Excellent film, although I thought that it ended a little too suddenly.',
      rating: 4,
      userId: 5,
      movieId: 53
    } ,
    {
      body: 'Decent. I went into this with higher expectations than I should have',
      rating: 3,
      userId: 3,
      movieId: 54
    } ,
    {
      body: 'Prepare to be absolutely terrified! What an experieence',
      rating: 5,
      userId: 2,
      movieId: 55
    } ,
    {
      body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
      rating: 2,
      userId: 4,
      movieId: 56
    } ,
    {
      body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
      rating: 2,
      userId: 4,
      movieId: 57
    } ,
    {
      body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
      rating: 4,
      userId: 1,
      movieId: 58
    } ,
    {
      body: 'The premise and idea was good, but what the heck was that ending?!',
      rating: 3,
      userId: 4,
      movieId: 59
    } ,
    {
      body: 'Props for a scary monster/villian. Everything else was terribly executed.',
      rating: 2,
      userId: 4,
      movieId: 60
    } ,
    {
      body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
      rating: 1,
      userId: 3,
      movieId: 61
    } ,
    {
      body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
      rating: 2,
      userId: 4,
      movieId: 62
    } ,
    {
      body: 'The premise and idea was good, but what the heck was that ending?!',
      rating: 3,
      userId: 4,
      movieId: 63
    } ,
    {
      body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
      rating: 1,
      userId: 3,
      movieId: 64
    } ,
    {
      body: 'The premise and idea was good, but what the heck was that ending?!',
      rating: 3,
      userId: 4,
      movieId: 65
    } ,
    {
      body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
      rating: 3,
      userId: 5,
      movieId: 66
    } ,
    {
      body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
      rating: 4,
      userId: 1,
      movieId: 67
    } ,
    {
      body: 'Excellent movie! One of the best I have seen recently',
      rating: 5,
      userId: 2,
      movieId: 68
    } ,
    {
      body: 'Excellent film, although I thought that it ended a little too suddenly.',
      rating: 4,
      userId: 5,
      movieId: 69
    } ,
    {
      body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
      rating: 3,
      userId: 5,
      movieId: 70
    } ,
    {
      body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
      rating: 1,
      userId: 5,
      movieId: 71
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 72
    } ,
    {
      body: 'Prepare to be absolutely terrified! What an experieence',
      rating: 5,
      userId: 2,
      movieId: 73
    } ,
    {
      body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
      rating: 3,
      userId: 5,
      movieId: 74
    } ,
    {
      body: 'Props for a scary monster/villian. Everything else was terribly executed.',
      rating: 2,
      userId: 4,
      movieId: 75
    } ,
    {
      body: 'This was a great film! Although I would have liked to see a little more originality',
      rating: 4,
      userId: 2,
      movieId: 76
    } ,
    {
      body: 'This was a great film! Although I would have liked to see a little more originality',
      rating: 4,
      userId: 2,
      movieId: 77
    } ,
    {
      body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
      rating: 1,
      userId: 5,
      movieId: 78
    } ,
    {
      body: 'Awful experience. The plot did not even make sense',
      rating: 1,
      userId: 2,
      movieId: 79
    } ,
    {
      body: 'Excellent movie! One of the best I have seen recently',
      rating: 5,
      userId: 2,
      movieId: 80
    } ,
    {
      body: 'The premise and idea was good, but what the heck was that ending?!',
      rating: 3,
      userId: 4,
      movieId: 81
    } ,
    {
      body: 'This was a great film! Although I would have liked to see a little more originality',
      rating: 4,
      userId: 2,
      movieId: 82
    } ,
    {
      body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
      rating: 1,
      userId: 5,
      movieId: 83
    } ,
    {
      body: 'Prepare to be absolutely terrified! What an experieence',
      rating: 5,
      userId: 2,
      movieId: 84
    } ,
    {
      body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
      rating: 3,
      userId: 5,
      movieId: 85
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 86
    } ,
    {
      body: 'Excellent movie! One of the best I have seen recently',
      rating: 5,
      userId: 2,
      movieId: 87
    } ,
    {
      body: 'Excellent film, although I thought that it ended a little too suddenly.',
      rating: 4,
      userId: 5,
      movieId: 88
    } ,
    {
      body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
      rating: 2,
      userId: 3,
      movieId: 89
    } ,
    {
      body: 'Excellent film, although I thought that it ended a little too suddenly.',
      rating: 4,
      userId: 5,
      movieId: 90
    } ,
    {
      body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
      rating: 1,
      userId: 3,
      movieId: 91
    } ,
    {
      body: 'The premise and idea was good, but what the heck was that ending?!',
      rating: 3,
      userId: 4,
      movieId: 92
    } ,
    {
      body: 'Excellent film, although I thought that it ended a little too suddenly.',
      rating: 4,
      userId: 5,
      movieId: 93
    } ,
    {
      body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
      rating: 5,
      userId: 3,
      movieId: 94
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 95
    } ,
    {
      body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
      rating: 4,
      userId: 1,
      movieId: 96
    } ,
    {
      body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
      rating: 2,
      userId: 3,
      movieId: 97
    } ,
    {
      body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
      rating: 2,
      userId: 4,
      movieId: 98
    } ,
    {
      body: 'Awful experience. The plot did not even make sense',
      rating: 1,
      userId: 2,
      movieId: 99
    } ,
    {
      body: 'Awful experience. The plot did not even make sense',
      rating: 1,
      userId: 2,
      movieId: 100
    } ,
    {
      body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
      rating: 2,
      userId: 4,
      movieId: 101
    } ,
    {
      body: 'Prepare to be absolutely terrified! What an experieence',
      rating: 5,
      userId: 2,
      movieId: 102
    } ,
    {
      body: 'Prepare to be absolutely terrified! What an experieence',
      rating: 5,
      userId: 2,
      movieId: 103
    } ,
    {
      body: 'This was a great film! Although I would have liked to see a little more originality',
      rating: 4,
      userId: 2,
      movieId: 104
    } ,
    {
      body: 'Awful experience. The plot did not even make sense',
      rating: 1,
      userId: 2,
      movieId: 105
    } ,
    {
      body: 'Decent. I went into this with higher expectations than I should have',
      rating: 3,
      userId: 3,
      movieId: 106
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 107
    } ,
    {
      body: 'Excellent movie! One of the best I have seen recently',
      rating: 5,
      userId: 2,
      movieId: 108
    } ,
    {
      body: 'This was a great film! Although I would have liked to see a little more originality',
      rating: 4,
      userId: 2,
      movieId: 109
    } ,
    {
      body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
      rating: 5,
      userId: 3,
      movieId: 110
    } ,
    {
      body: 'Prepare to be absolutely terrified! What an experieence',
      rating: 5,
      userId: 2,
      movieId: 1
    } ,
    {
      body: 'The premise and idea was good, but what the heck was that ending?!',
      rating: 3,
      userId: 4,
      movieId: 2
    } ,
    {
      body: 'Excellent movie! One of the best I have seen recently',
      rating: 5,
      userId: 2,
      movieId: 3
    } ,
    {
      body: 'Excellent film, although I thought that it ended a little too suddenly.',
      rating: 4,
      userId: 5,
      movieId: 4
    } ,
    {
      body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
      rating: 1,
      userId: 5,
      movieId: 5
    } ,
    {
      body: 'Props for a scary monster/villian. Everything else was terribly executed.',
      rating: 2,
      userId: 4,
      movieId: 6
    } ,
    {
      body: 'Decent. I went into this with higher expectations than I should have',
      rating: 3,
      userId: 3,
      movieId: 7
    } ,
    {
      body: 'The premise and idea was good, but what the heck was that ending?!',
      rating: 3,
      userId: 4,
      movieId: 8
    } ,
    {
      body: 'Prepare to be absolutely terrified! What an experieence',
      rating: 5,
      userId: 2,
      movieId: 9
    } ,
    {
      body: 'Decent. I went into this with higher expectations than I should have',
      rating: 3,
      userId: 3,
      movieId: 10
    } ,
    {
      body: 'Excellent film, although I thought that it ended a little too suddenly.',
      rating: 4,
      userId: 5,
      movieId: 11
    } ,
    {
      body: 'This was a great film! Although I would have liked to see a little more originality',
      rating: 4,
      userId: 2,
      movieId: 12
    } ,
    {
      body: 'Excellent film, although I thought that it ended a little too suddenly.',
      rating: 4,
      userId: 5,
      movieId: 13
    } ,
    {
      body: 'The premise and idea was good, but what the heck was that ending?!',
      rating: 3,
      userId: 4,
      movieId: 14
    } ,
    {
      body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
      rating: 2,
      userId: 3,
      movieId: 15
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 16
    } ,
    {
      body: 'Prepare to be absolutely terrified! What an experieence',
      rating: 5,
      userId: 2,
      movieId: 17
    } ,
    {
      body: 'The premise and idea was good, but what the heck was that ending?!',
      rating: 3,
      userId: 4,
      movieId: 18
    } ,
    {
      body: 'This was a great film! Although I would have liked to see a little more originality',
      rating: 4,
      userId: 2,
      movieId: 19
    } ,
    {
      body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
      rating: 1,
      userId: 5,
      movieId: 20
    } ,
    {
      body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
      rating: 3,
      userId: 5,
      movieId: 21
    } ,
    {
      body: 'Excellent movie! One of the best I have seen recently',
      rating: 5,
      userId: 2,
      movieId: 22
    } ,
    {
      body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
      rating: 1,
      userId: 3,
      movieId: 23
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 24
    } ,
    {
      body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
      rating: 2,
      userId: 3,
      movieId: 25
    } ,
    {
      body: 'This was a great film! Although I would have liked to see a little more originality',
      rating: 4,
      userId: 2,
      movieId: 26
    } ,
    {
      body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
      rating: 4,
      userId: 1,
      movieId: 27
    } ,
    {
      body: 'Decent. I went into this with higher expectations than I should have',
      rating: 3,
      userId: 3,
      movieId: 28
    } ,
    {
      body: 'Decent. I went into this with higher expectations than I should have',
      rating: 3,
      userId: 3,
      movieId: 29
    } ,
    {
      body: 'The premise and idea was good, but what the heck was that ending?!',
      rating: 3,
      userId: 4,
      movieId: 30
    } ,
    {
      body: 'Decent. I went into this with higher expectations than I should have',
      rating: 3,
      userId: 3,
      movieId: 31
    } ,
    {
      body: 'Awful experience. The plot did not even make sense',
      rating: 1,
      userId: 2,
      movieId: 32
    } ,
    {
      body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
      rating: 1,
      userId: 5,
      movieId: 33
    } ,
    {
      body: 'Decent. I went into this with higher expectations than I should have',
      rating: 3,
      userId: 3,
      movieId: 34
    } ,
    {
      body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
      rating: 1,
      userId: 3,
      movieId: 35
    } ,
    {
      body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
      rating: 2,
      userId: 3,
      movieId: 36
    } ,
    {
      body: 'Excellent movie! One of the best I have seen recently',
      rating: 5,
      userId: 2,
      movieId: 37
    } ,
    {
      body: 'Excellent film, although I thought that it ended a little too suddenly.',
      rating: 4,
      userId: 5,
      movieId: 38
    } ,
    {
      body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
      rating: 1,
      userId: 5,
      movieId: 39
    } ,
    {
      body: 'Awful experience. The plot did not even make sense',
      rating: 1,
      userId: 2,
      movieId: 40
    } ,
    {
      body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
      rating: 1,
      userId: 3,
      movieId: 41
    } ,
    {
      body: 'Decent. I went into this with higher expectations than I should have',
      rating: 3,
      userId: 3,
      movieId: 42
    } ,
    {
      body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
      rating: 1,
      userId: 5,
      movieId: 43
    } ,
    {
      body: 'Props for a scary monster/villian. Everything else was terribly executed.',
      rating: 2,
      userId: 4,
      movieId: 44
    } ,
    {
      body: 'Excellent movie! One of the best I have seen recently',
      rating: 5,
      userId: 2,
      movieId: 45
    } ,
    {
      body: 'Decent. I went into this with higher expectations than I should have',
      rating: 3,
      userId: 3,
      movieId: 46
    } ,
    {
      body: 'The premise and idea was good, but what the heck was that ending?!',
      rating: 3,
      userId: 4,
      movieId: 47
    } ,
    {
      body: 'Props for a scary monster/villian. Everything else was terribly executed.',
      rating: 2,
      userId: 4,
      movieId: 48
    } ,
    {
      body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
      rating: 2,
      userId: 4,
      movieId: 49
    } ,
    {
      body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
      rating: 4,
      userId: 1,
      movieId: 50
    } ,
    {
      body: 'Prepare to be absolutely terrified! What an experieence',
      rating: 5,
      userId: 2,
      movieId: 51
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 52
    } ,
    {
      body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
      rating: 1,
      userId: 5,
      movieId: 53
    } ,
    {
      body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
      rating: 5,
      userId: 3,
      movieId: 54
    } ,
    {
      body: 'Excellent film, although I thought that it ended a little too suddenly.',
      rating: 4,
      userId: 5,
      movieId: 55
    } ,
    {
      body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
      rating: 3,
      userId: 5,
      movieId: 56
    } ,
    {
      body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
      rating: 4,
      userId: 1,
      movieId: 57
    } ,
    {
      body: 'The premise and idea was good, but what the heck was that ending?!',
      rating: 3,
      userId: 4,
      movieId: 58
    } ,
    {
      body: 'Excellent movie! One of the best I have seen recently',
      rating: 5,
      userId: 2,
      movieId: 59
    } ,
    {
      body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
      rating: 2,
      userId: 3,
      movieId: 60
    } ,
    {
      body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
      rating: 2,
      userId: 3,
      movieId: 61
    } ,
    {
      body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
      rating: 1,
      userId: 3,
      movieId: 62
    } ,
    {
      body: 'Excellent movie! One of the best I have seen recently',
      rating: 5,
      userId: 2,
      movieId: 63
    } ,
    {
      body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
      rating: 4,
      userId: 1,
      movieId: 64
    } ,
    {
      body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
      rating: 4,
      userId: 1,
      movieId: 65
    } ,
    {
      body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
      rating: 2,
      userId: 3,
      movieId: 66
    } ,
    {
      body: 'Decent. I went into this with higher expectations than I should have',
      rating: 3,
      userId: 3,
      movieId: 67
    } ,
    {
      body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
      rating: 3,
      userId: 5,
      movieId: 68
    } ,
    {
      body: 'Excellent movie! One of the best I have seen recently',
      rating: 5,
      userId: 2,
      movieId: 69
    } ,
    {
      body: 'Decent. I went into this with higher expectations than I should have',
      rating: 3,
      userId: 3,
      movieId: 70
    } ,
    {
      body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
      rating: 2,
      userId: 3,
      movieId: 71
    } ,
    {
      body: 'This was a great film! Although I would have liked to see a little more originality',
      rating: 4,
      userId: 2,
      movieId: 72
    } ,
    {
      body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
      rating: 1,
      userId: 3,
      movieId: 73
    } ,
    {
      body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
      rating: 2,
      userId: 3,
      movieId: 74
    } ,
    {
      body: 'Props for a scary monster/villian. Everything else was terribly executed.',
      rating: 2,
      userId: 4,
      movieId: 75
    } ,
    {
      body: 'Decent. I went into this with higher expectations than I should have',
      rating: 3,
      userId: 3,
      movieId: 76
    } ,
    {
      body: 'Props for a scary monster/villian. Everything else was terribly executed.',
      rating: 2,
      userId: 4,
      movieId: 77
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 78
    } ,
    {
      body: 'Awful experience. The plot did not even make sense',
      rating: 1,
      userId: 2,
      movieId: 79
    } ,
    {
      body: 'The premise and idea was good, but what the heck was that ending?!',
      rating: 3,
      userId: 4,
      movieId: 80
    } ,
    {
      body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
      rating: 2,
      userId: 4,
      movieId: 81
    } ,
    {
      body: 'This was a great film! Although I would have liked to see a little more originality',
      rating: 4,
      userId: 2,
      movieId: 82
    } ,
    {
      body: 'The premise and idea was good, but what the heck was that ending?!',
      rating: 3,
      userId: 4,
      movieId: 83
    } ,
    {
      body: 'Decent. I went into this with higher expectations than I should have',
      rating: 3,
      userId: 3,
      movieId: 84
    } ,
    {
      body: 'Awful experience. The plot did not even make sense',
      rating: 1,
      userId: 2,
      movieId: 85
    } ,
    {
      body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
      rating: 5,
      userId: 3,
      movieId: 86
    } ,
    {
      body: 'Excellent movie! One of the best I have seen recently',
      rating: 5,
      userId: 2,
      movieId: 87
    } ,
    {
      body: 'Decent. I went into this with higher expectations than I should have',
      rating: 3,
      userId: 3,
      movieId: 88
    } ,
    {
      body: 'Props for a scary monster/villian. Everything else was terribly executed.',
      rating: 2,
      userId: 4,
      movieId: 89
    } ,
    {
      body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
      rating: 2,
      userId: 4,
      movieId: 90
    } ,
    {
      body: 'Props for a scary monster/villian. Everything else was terribly executed.',
      rating: 2,
      userId: 4,
      movieId: 91
    } ,
    {
      body: 'This was a great film! Although I would have liked to see a little more originality',
      rating: 4,
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
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 94
    } ,
    {
      body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
      rating: 2,
      userId: 4,
      movieId: 95
    } ,
    {
      body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
      rating: 1,
      userId: 5,
      movieId: 96
    } ,
    {
      body: 'Excellent movie! One of the best I have seen recently',
      rating: 5,
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
      body: 'This was a great film! Although I would have liked to see a little more originality',
      rating: 4,
      userId: 2,
      movieId: 99
    } ,
    {
      body: 'Prepare to be absolutely terrified! What an experieence',
      rating: 5,
      userId: 2,
      movieId: 100
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 101
    } ,
    {
      body: 'Excellent film, although I thought that it ended a little too suddenly.',
      rating: 4,
      userId: 5,
      movieId: 102
    } ,
    {
      body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
      rating: 3,
      userId: 5,
      movieId: 103
    } ,
    {
      body: 'Prepare to be absolutely terrified! What an experieence',
      rating: 5,
      userId: 2,
      movieId: 104
    } ,
    {
      body: 'Awful experience. The plot did not even make sense',
      rating: 1,
      userId: 2,
      movieId: 105
    } ,
    {
      body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
      rating: 2,
      userId: 3,
      movieId: 106
    } ,
    {
      body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
      rating: 2,
      userId: 4,
      movieId: 107
    } ,
    {
      body: 'Excellent movie! One of the best I have seen recently',
      rating: 5,
      userId: 2,
      movieId: 108
    } ,
    {
      body: 'The premise and idea was good, but what the heck was that ending?!',
      rating: 3,
      userId: 4,
      movieId: 109
    } ,
    {
      body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
      rating: 1,
      userId: 3,
      movieId: 110
    } ,
    {
      body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
      rating: 1,
      userId: 5,
      movieId: 1
    } ,
    {
      body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
      rating: 1,
      userId: 3,
      movieId: 2
    } ,
    {
      body: 'The premise and idea was good, but what the heck was that ending?!',
      rating: 3,
      userId: 4,
      movieId: 3
    } ,
    {
      body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
      rating: 2,
      userId: 4,
      movieId: 4
    } ,
    {
      body: 'Awful experience. The plot did not even make sense',
      rating: 1,
      userId: 2,
      movieId: 5
    } ,
    {
      body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
      rating: 2,
      userId: 3,
      movieId: 6
    } ,
    {
      body: 'Decent. I went into this with higher expectations than I should have',
      rating: 3,
      userId: 3,
      movieId: 7
    } ,
    {
      body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
      rating: 1,
      userId: 3,
      movieId: 8
    } ,
    {
      body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
      rating: 5,
      userId: 3,
      movieId: 9
    } ,
    {
      body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
      rating: 1,
      userId: 3,
      movieId: 10
    } ,
    {
      body: 'Excellent movie! One of the best I have seen recently',
      rating: 5,
      userId: 2,
      movieId: 11
    } ,
    {
      body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
      rating: 1,
      userId: 3,
      movieId: 12
    } ,
    {
      body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
      rating: 2,
      userId: 3,
      movieId: 13
    } ,
    {
      body: 'Excellent film, although I thought that it ended a little too suddenly.',
      rating: 4,
      userId: 5,
      movieId: 14
    } ,
    {
      body: 'This was a great film! Although I would have liked to see a little more originality',
      rating: 4,
      userId: 2,
      movieId: 15
    } ,
    {
      body: 'The premise and idea was good, but what the heck was that ending?!',
      rating: 3,
      userId: 4,
      movieId: 16
    } ,
    {
      body: 'Excellent movie! One of the best I have seen recently',
      rating: 5,
      userId: 2,
      movieId: 17
    } ,
    {
      body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
      rating: 3,
      userId: 5,
      movieId: 18
    } ,
    {
      body: 'This was a great film! Although I would have liked to see a little more originality',
      rating: 4,
      userId: 2,
      movieId: 19
    } ,
    {
      body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
      rating: 2,
      userId: 3,
      movieId: 20
    } ,
    {
      body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
      rating: 1,
      userId: 5,
      movieId: 21
    } ,
    {
      body: 'Excellent film, although I thought that it ended a little too suddenly.',
      rating: 4,
      userId: 5,
      movieId: 22
    } ,
    {
      body: 'Props for a scary monster/villian. Everything else was terribly executed.',
      rating: 2,
      userId: 4,
      movieId: 23
    } ,
    {
      body: 'Excellent film, although I thought that it ended a little too suddenly.',
      rating: 4,
      userId: 5,
      movieId: 24
    } ,
    {
      body: 'Excellent movie! One of the best I have seen recently',
      rating: 5,
      userId: 2,
      movieId: 25
    } ,
    {
      body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
      rating: 4,
      userId: 1,
      movieId: 26
    } ,
    {
      body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
      rating: 4,
      userId: 1,
      movieId: 27
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 28
    } ,
    {
      body: 'Prepare to be absolutely terrified! What an experieence',
      rating: 5,
      userId: 2,
      movieId: 29
    } ,
    {
      body: 'Props for a scary monster/villian. Everything else was terribly executed.',
      rating: 2,
      userId: 4,
      movieId: 30
    } ,
    {
      body: 'Awful experience. The plot did not even make sense',
      rating: 1,
      userId: 2,
      movieId: 31
    } ,
    {
      body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
      rating: 2,
      userId: 4,
      movieId: 32
    } ,
    {
      body: 'This was a great film! Although I would have liked to see a little more originality',
      rating: 4,
      userId: 2,
      movieId: 33
    } ,
    {
      body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
      rating: 4,
      userId: 1,
      movieId: 34
    } ,
    {
      body: 'Excellent movie! One of the best I have seen recently',
      rating: 5,
      userId: 2,
      movieId: 35
    } ,
    {
      body: 'Decent. I went into this with higher expectations than I should have',
      rating: 3,
      userId: 3,
      movieId: 36
    } ,
    {
      body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
      rating: 2,
      userId: 3,
      movieId: 37
    } ,
    {
      body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
      rating: 3,
      userId: 5,
      movieId: 38
    } ,
    {
      body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
      rating: 5,
      userId: 3,
      movieId: 39
    } ,
    {
      body: 'Prepare to be absolutely terrified! What an experieence',
      rating: 5,
      userId: 2,
      movieId: 40
    } ,
    {
      body: 'This was a great film! Although I would have liked to see a little more originality',
      rating: 4,
      userId: 2,
      movieId: 41
    } ,
    {
      body: 'This was a great film! Although I would have liked to see a little more originality',
      rating: 4,
      userId: 2,
      movieId: 42
    } ,
    {
      body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
      rating: 1,
      userId: 3,
      movieId: 43
    } ,
    {
      body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
      rating: 2,
      userId: 4,
      movieId: 44
    } ,
    {
      body: 'The premise and idea was good, but what the heck was that ending?!',
      rating: 3,
      userId: 4,
      movieId: 45
    } ,
    {
      body: 'Excellent movie! One of the best I have seen recently',
      rating: 5,
      userId: 2,
      movieId: 46
    } ,
    {
      body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
      rating: 1,
      userId: 5,
      movieId: 47
    } ,
    {
      body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
      rating: 5,
      userId: 3,
      movieId: 48
    } ,
    {
      body: 'The premise and idea was good, but what the heck was that ending?!',
      rating: 3,
      userId: 4,
      movieId: 49
    } ,
    {
      body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
      rating: 2,
      userId: 4,
      movieId: 50
    } ,
    {
      body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
      rating: 1,
      userId: 3,
      movieId: 51
    } ,
    {
      body: 'Excellent film, although I thought that it ended a little too suddenly.',
      rating: 4,
      userId: 5,
      movieId: 52
    } ,
    {
      body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
      rating: 4,
      userId: 1,
      movieId: 53
    } ,
    {
      body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
      rating: 1,
      userId: 5,
      movieId: 54
    } ,
    {
      body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
      rating: 3,
      userId: 5,
      movieId: 55
    } ,
    {
      body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
      rating: 2,
      userId: 4,
      movieId: 56
    } ,
    {
      body: 'Props for a scary monster/villian. Everything else was terribly executed.',
      rating: 2,
      userId: 4,
      movieId: 57
    } ,
    {
      body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
      rating: 5,
      userId: 3,
      movieId: 58
    } ,
    {
      body: 'Props for a scary monster/villian. Everything else was terribly executed.',
      rating: 2,
      userId: 4,
      movieId: 59
    } ,
    {
      body: 'Prepare to be absolutely terrified! What an experieence',
      rating: 5,
      userId: 2,
      movieId: 60
    } ,
    {
      body: 'Awful experience. The plot did not even make sense',
      rating: 1,
      userId: 2,
      movieId: 61
    } ,
    {
      body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
      rating: 5,
      userId: 3,
      movieId: 62
    } ,
    {
      body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
      rating: 2,
      userId: 4,
      movieId: 63
    } ,
    {
      body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
      rating: 4,
      userId: 1,
      movieId: 64
    } ,
    {
      body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
      rating: 1,
      userId: 3,
      movieId: 65
    } ,
    {
      body: 'The premise and idea was good, but what the heck was that ending?!',
      rating: 3,
      userId: 4,
      movieId: 66
    } ,
    {
      body: 'The premise and idea was good, but what the heck was that ending?!',
      rating: 3,
      userId: 4,
      movieId: 67
    } ,
    {
      body: 'Excellent film, although I thought that it ended a little too suddenly.',
      rating: 4,
      userId: 5,
      movieId: 68
    } ,
    {
      body: 'Decent. I went into this with higher expectations than I should have',
      rating: 3,
      userId: 3,
      movieId: 69
    } ,
    {
      body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
      rating: 4,
      userId: 1,
      movieId: 70
    } ,
    {
      body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
      rating: 2,
      userId: 3,
      movieId: 71
    } ,
    {
      body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
      rating: 3,
      userId: 5,
      movieId: 72
    } ,
    {
      body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
      rating: 1,
      userId: 3,
      movieId: 73
    } ,
    {
      body: 'Awful experience. The plot did not even make sense',
      rating: 1,
      userId: 2,
      movieId: 74
    } ,
    {
      body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
      rating: 4,
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
      body: 'Prepare to be absolutely terrified! What an experieence',
      rating: 5,
      userId: 2,
      movieId: 77
    } ,
    {
      body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
      rating: 3,
      userId: 5,
      movieId: 78
    } ,
    {
      body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
      rating: 1,
      userId: 5,
      movieId: 79
    } ,
    {
      body: 'Excellent movie! One of the best I have seen recently',
      rating: 5,
      userId: 2,
      movieId: 80
    } ,
    {
      body: 'The premise and idea was good, but what the heck was that ending?!',
      rating: 3,
      userId: 4,
      movieId: 81
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 82
    } ,
    {
      body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
      rating: 1,
      userId: 3,
      movieId: 83
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 84
    } ,
    {
      body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
      rating: 2,
      userId: 4,
      movieId: 85
    } ,
    {
      body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
      rating: 2,
      userId: 3,
      movieId: 86
    } ,
    {
      body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
      rating: 4,
      userId: 1,
      movieId: 87
    } ,
    {
      body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
      rating: 1,
      userId: 3,
      movieId: 88
    } ,
    {
      body: 'Awful experience. The plot did not even make sense',
      rating: 1,
      userId: 2,
      movieId: 89
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 90
    } ,
    {
      body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
      rating: 1,
      userId: 3,
      movieId: 91
    } ,
    {
      body: 'This was a great film! Although I would have liked to see a little more originality',
      rating: 4,
      userId: 2,
      movieId: 92
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 93
    } ,
    {
      body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
      rating: 1,
      userId: 3,
      movieId: 94
    } ,
    {
      body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
      rating: 1,
      userId: 5,
      movieId: 95
    } ,
    {
      body: 'The premise and idea was good, but what the heck was that ending?!',
      rating: 3,
      userId: 4,
      movieId: 96
    } ,
    {
      body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
      rating: 2,
      userId: 3,
      movieId: 97
    } ,
    {
      body: 'This was a great film! Although I would have liked to see a little more originality',
      rating: 4,
      userId: 2,
      movieId: 98
    } ,
    {
      body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
      rating: 2,
      userId: 4,
      movieId: 99
    } ,
    {
      body: 'This was a great film! Although I would have liked to see a little more originality',
      rating: 4,
      userId: 2,
      movieId: 100
    } ,
    {
      body: 'Excellent film, although I thought that it ended a little too suddenly.',
      rating: 4,
      userId: 5,
      movieId: 101
    } ,
    {
      body: 'Prepare to be absolutely terrified! What an experieence',
      rating: 5,
      userId: 2,
      movieId: 102
    } ,
    {
      body: 'This was a great film! Although I would have liked to see a little more originality',
      rating: 4,
      userId: 2,
      movieId: 103
    } ,
    {
      body: 'Excellent movie! One of the best I have seen recently',
      rating: 5,
      userId: 2,
      movieId: 104
    } ,
    {
      body: 'Prepare to be absolutely terrified! What an experieence',
      rating: 5,
      userId: 2,
      movieId: 105
    } ,
    {
      body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
      rating: 3,
      userId: 5,
      movieId: 106
    } ,
    {
      body: 'Prepare to be absolutely terrified! What an experieence',
      rating: 5,
      userId: 2,
      movieId: 107
    } ,
    {
      body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
      rating: 5,
      userId: 3,
      movieId: 108
    } ,
    {
      body: 'The premise and idea was good, but what the heck was that ending?!',
      rating: 3,
      userId: 4,
      movieId: 109
    } ,
    {
      body: 'This was a great film! Although I would have liked to see a little more originality',
      rating: 4,
      userId: 2,
      movieId: 110
    } ,
    {
      body: 'Decent. I went into this with higher expectations than I should have',
      rating: 3,
      userId: 3,
      movieId: 1
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 2
    } ,
    {
      body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
      rating: 1,
      userId: 5,
      movieId: 3
    } ,
    {
      body: 'Awful experience. The plot did not even make sense',
      rating: 1,
      userId: 2,
      movieId: 4
    } ,
    {
      body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
      rating: 4,
      userId: 1,
      movieId: 5
    } ,
    {
      body: 'Excellent movie! One of the best I have seen recently',
      rating: 5,
      userId: 2,
      movieId: 6
    } ,
    {
      body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
      rating: 2,
      userId: 4,
      movieId: 7
    } ,
    {
      body: 'The premise and idea was good, but what the heck was that ending?!',
      rating: 3,
      userId: 4,
      movieId: 8
    } ,
    {
      body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
      rating: 2,
      userId: 4,
      movieId: 9
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 10
    } ,
    {
      body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
      rating: 1,
      userId: 5,
      movieId: 11
    } ,
    {
      body: 'Prepare to be absolutely terrified! What an experieence',
      rating: 5,
      userId: 2,
      movieId: 12
    } ,
    {
      body: 'The premise and idea was good, but what the heck was that ending?!',
      rating: 3,
      userId: 4,
      movieId: 13
    } ,
    {
      body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
      rating: 2,
      userId: 3,
      movieId: 14
    } ,
    {
      body: 'Decent. I went into this with higher expectations than I should have',
      rating: 3,
      userId: 3,
      movieId: 15
    } ,
    {
      body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
      rating: 4,
      userId: 1,
      movieId: 16
    } ,
    {
      body: 'Props for a scary monster/villian. Everything else was terribly executed.',
      rating: 2,
      userId: 4,
      movieId: 17
    } ,
    {
      body: 'Excellent movie! One of the best I have seen recently',
      rating: 5,
      userId: 2,
      movieId: 18
    } ,
    {
      body: 'This was a great film! Although I would have liked to see a little more originality',
      rating: 4,
      userId: 2,
      movieId: 19
    } ,
    {
      body: 'Excellent film, although I thought that it ended a little too suddenly.',
      rating: 4,
      userId: 5,
      movieId: 20
    } ,
    {
      body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
      rating: 1,
      userId: 3,
      movieId: 21
    } ,
    {
      body: 'This was a great film! Although I would have liked to see a little more originality',
      rating: 4,
      userId: 2,
      movieId: 22
    } ,
    {
      body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
      rating: 4,
      userId: 1,
      movieId: 23
    } ,
    {
      body: 'The premise and idea was good, but what the heck was that ending?!',
      rating: 3,
      userId: 4,
      movieId: 24
    } ,
    {
      body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
      rating: 2,
      userId: 4,
      movieId: 25
    } ,
    {
      body: 'The premise and idea was good, but what the heck was that ending?!',
      rating: 3,
      userId: 4,
      movieId: 26
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 27
    } ,
    {
      body: 'Excellent movie! One of the best I have seen recently',
      rating: 5,
      userId: 2,
      movieId: 28
    } ,
    {
      body: 'Props for a scary monster/villian. Everything else was terribly executed.',
      rating: 2,
      userId: 4,
      movieId: 29
    } ,
    {
      body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
      rating: 5,
      userId: 3,
      movieId: 30
    } ,
    {
      body: 'The premise and idea was good, but what the heck was that ending?!',
      rating: 3,
      userId: 4,
      movieId: 31
    } ,
    {
      body: 'Decent. I went into this with higher expectations than I should have',
      rating: 3,
      userId: 3,
      movieId: 32
    } ,
    {
      body: 'Excellent movie! One of the best I have seen recently',
      rating: 5,
      userId: 2,
      movieId: 33
    } ,
    {
      body: 'Excellent film, although I thought that it ended a little too suddenly.',
      rating: 4,
      userId: 5,
      movieId: 34
    } ,
    {
      body: 'Prepare to be absolutely terrified! What an experieence',
      rating: 5,
      userId: 2,
      movieId: 35
    } ,
    {
      body: 'This was a great film! Although I would have liked to see a little more originality',
      rating: 4,
      userId: 2,
      movieId: 36
    } ,
    {
      body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
      rating: 2,
      userId: 4,
      movieId: 37
    } ,
    {
      body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
      rating: 4,
      userId: 1,
      movieId: 38
    } ,
    {
      body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
      rating: 5,
      userId: 3,
      movieId: 39
    } ,
    {
      body: 'Awful experience. The plot did not even make sense',
      rating: 1,
      userId: 2,
      movieId: 40
    } ,
    {
      body: 'Awful experience. The plot did not even make sense',
      rating: 1,
      userId: 2,
      movieId: 41
    } ,
    {
      body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
      rating: 2,
      userId: 4,
      movieId: 42
    } ,
    {
      body: 'This was a great film! Although I would have liked to see a little more originality',
      rating: 4,
      userId: 2,
      movieId: 43
    } ,
    {
      body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
      rating: 2,
      userId: 3,
      movieId: 44
    } ,
    {
      body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
      rating: 2,
      userId: 4,
      movieId: 45
    } ,
    {
      body: 'The premise and idea was good, but what the heck was that ending?!',
      rating: 3,
      userId: 4,
      movieId: 46
    } ,
    {
      body: 'The premise and idea was good, but what the heck was that ending?!',
      rating: 3,
      userId: 4,
      movieId: 47
    } ,
    {
      body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
      rating: 1,
      userId: 3,
      movieId: 48
    } ,
    {
      body: 'The premise and idea was good, but what the heck was that ending?!',
      rating: 3,
      userId: 4,
      movieId: 49
    } ,
    {
      body: 'Decent. I went into this with higher expectations than I should have',
      rating: 3,
      userId: 3,
      movieId: 50
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 51
    } ,
    {
      body: 'Awful experience. The plot did not even make sense',
      rating: 1,
      userId: 2,
      movieId: 52
    } ,
    {
      body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
      rating: 1,
      userId: 5,
      movieId: 53
    } ,
    {
      body: 'Excellent film, although I thought that it ended a little too suddenly.',
      rating: 4,
      userId: 5,
      movieId: 54
    } ,
    {
      body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
      rating: 2,
      userId: 3,
      movieId: 55
    } ,
    {
      body: 'Props for a scary monster/villian. Everything else was terribly executed.',
      rating: 2,
      userId: 4,
      movieId: 56
    } ,
    {
      body: 'Decent. I went into this with higher expectations than I should have',
      rating: 3,
      userId: 3,
      movieId: 57
    } ,
    {
      body: 'Decent. I went into this with higher expectations than I should have',
      rating: 3,
      userId: 3,
      movieId: 58
    } ,
    {
      body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
      rating: 3,
      userId: 5,
      movieId: 59
    } ,
    {
      body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
      rating: 4,
      userId: 1,
      movieId: 60
    } ,
    {
      body: 'Props for a scary monster/villian. Everything else was terribly executed.',
      rating: 2,
      userId: 4,
      movieId: 61
    } ,
    {
      body: 'Excellent movie! One of the best I have seen recently',
      rating: 5,
      userId: 2,
      movieId: 62
    } ,
    {
      body: 'The premise and idea was good, but what the heck was that ending?!',
      rating: 3,
      userId: 4,
      movieId: 63
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 64
    } ,
    {
      body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
      rating: 4,
      userId: 1,
      movieId: 65
    } ,
    {
      body: 'The premise and idea was good, but what the heck was that ending?!',
      rating: 3,
      userId: 4,
      movieId: 66
    } ,
    {
      body: 'Excellent film, although I thought that it ended a little too suddenly.',
      rating: 4,
      userId: 5,
      movieId: 67
    } ,
    {
      body: 'Excellent movie! One of the best I have seen recently',
      rating: 5,
      userId: 2,
      movieId: 68
    } ,
    {
      body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
      rating: 5,
      userId: 3,
      movieId: 69
    } ,
    {
      body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
      rating: 5,
      userId: 3,
      movieId: 70
    } ,
    {
      body: 'Props for a scary monster/villian. Everything else was terribly executed.',
      rating: 2,
      userId: 4,
      movieId: 71
    } ,
    {
      body: 'Excellent film, although I thought that it ended a little too suddenly.',
      rating: 4,
      userId: 5,
      movieId: 72
    } ,
    {
      body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
      rating: 3,
      userId: 5,
      movieId: 73
    } ,
    {
      body: 'The premise and idea was good, but what the heck was that ending?!',
      rating: 3,
      userId: 4,
      movieId: 74
    } ,
    {
      body: 'Prepare to be absolutely terrified! What an experieence',
      rating: 5,
      userId: 2,
      movieId: 75
    } ,
    {
      body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
      rating: 2,
      userId: 4,
      movieId: 76
    } ,
    {
      body: 'This was a great film! Although I would have liked to see a little more originality',
      rating: 4,
      userId: 2,
      movieId: 77
    } ,
    {
      body: 'The premise and idea was good, but what the heck was that ending?!',
      rating: 3,
      userId: 4,
      movieId: 78
    } ,
    {
      body: 'Prepare to be absolutely terrified! What an experieence',
      rating: 5,
      userId: 2,
      movieId: 79
    } ,
    {
      body: 'Props for a scary monster/villian. Everything else was terribly executed.',
      rating: 2,
      userId: 4,
      movieId: 80
    } ,
    {
      body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
      rating: 2,
      userId: 3,
      movieId: 81
    } ,
    {
      body: 'Decent. I went into this with higher expectations than I should have',
      rating: 3,
      userId: 3,
      movieId: 82
    } ,
    {
      body: 'Prepare to be absolutely terrified! What an experieence',
      rating: 5,
      userId: 2,
      movieId: 83
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 84
    } ,
    {
      body: 'The premise and idea was good, but what the heck was that ending?!',
      rating: 3,
      userId: 4,
      movieId: 85
    } ,
    {
      body: 'The premise and idea was good, but what the heck was that ending?!',
      rating: 3,
      userId: 4,
      movieId: 86
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 87
    } ,
    {
      body: 'Props for a scary monster/villian. Everything else was terribly executed.',
      rating: 2,
      userId: 4,
      movieId: 88
    } ,
    {
      body: 'Excellent film, although I thought that it ended a little too suddenly.',
      rating: 4,
      userId: 5,
      movieId: 89
    } ,
    {
      body: 'Excellent film, although I thought that it ended a little too suddenly.',
      rating: 4,
      userId: 5,
      movieId: 90
    } ,
    {
      body: 'Excellent film, although I thought that it ended a little too suddenly.',
      rating: 4,
      userId: 5,
      movieId: 91
    } ,
    {
      body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
      rating: 3,
      userId: 5,
      movieId: 92
    } ,
    {
      body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
      rating: 1,
      userId: 5,
      movieId: 93
    } ,
    {
      body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
      rating: 5,
      userId: 3,
      movieId: 94
    } ,
    {
      body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
      rating: 3,
      userId: 5,
      movieId: 95
    } ,
    {
      body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
      rating: 1,
      userId: 5,
      movieId: 96
    } ,
    {
      body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
      rating: 1,
      userId: 5,
      movieId: 97
    } ,
    {
      body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
      rating: 2,
      userId: 3,
      movieId: 98
    } ,
    {
      body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
      rating: 5,
      userId: 3,
      movieId: 99
    } ,
    {
      body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
      rating: 5,
      userId: 3,
      movieId: 100
    } ,
    {
      body: 'Props for a scary monster/villian. Everything else was terribly executed.',
      rating: 2,
      userId: 4,
      movieId: 101
    } ,
    {
      body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
      rating: 5,
      userId: 3,
      movieId: 102
    } ,
    {
      body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
      rating: 5,
      userId: 3,
      movieId: 103
    } ,
    {
      body: 'Excellent film, although I thought that it ended a little too suddenly.',
      rating: 4,
      userId: 5,
      movieId: 104
    } ,
    {
      body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
      rating: 2,
      userId: 4,
      movieId: 105
    } ,
    {
      body: 'Excellent film, although I thought that it ended a little too suddenly.',
      rating: 4,
      userId: 5,
      movieId: 106
    } ,
    {
      body: 'Prepare to be absolutely terrified! What an experieence',
      rating: 5,
      userId: 2,
      movieId: 107
    } ,
    {
      body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
      rating: 1,
      userId: 5,
      movieId: 108
    } ,
    {
      body: 'The premise and idea was good, but what the heck was that ending?!',
      rating: 3,
      userId: 4,
      movieId: 109
    } ,
    {
      body: 'Props for a scary monster/villian. Everything else was terribly executed.',
      rating: 2,
      userId: 4,
      movieId: 110
    } ,
    {
      body: 'The premise and idea was good, but what the heck was that ending?!',
      rating: 3,
      userId: 4,
      movieId: 1
    } ,
    {
      body: 'This was a great film! Although I would have liked to see a little more originality',
      rating: 4,
      userId: 2,
      movieId: 2
    } ,
    {
      body: 'The premise and idea was good, but what the heck was that ending?!',
      rating: 3,
      userId: 4,
      movieId: 3
    } ,
    {
      body: 'The premise and idea was good, but what the heck was that ending?!',
      rating: 3,
      userId: 4,
      movieId: 4
    } ,
    {
      body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
      rating: 5,
      userId: 3,
      movieId: 5
    } ,
    {
      body: 'Decent. I went into this with higher expectations than I should have',
      rating: 3,
      userId: 3,
      movieId: 6
    } ,
    {
      body: 'Awful experience. The plot did not even make sense',
      rating: 1,
      userId: 2,
      movieId: 7
    } ,
    {
      body: 'Excellent movie! One of the best I have seen recently',
      rating: 5,
      userId: 2,
      movieId: 8
    } ,
    {
      body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
      rating: 2,
      userId: 4,
      movieId: 9
    } ,
    {
      body: 'Prepare to be absolutely terrified! What an experieence',
      rating: 5,
      userId: 2,
      movieId: 10
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 11
    } ,
    {
      body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
      rating: 1,
      userId: 5,
      movieId: 12
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 13
    } ,
    {
      body: 'Excellent film, although I thought that it ended a little too suddenly.',
      rating: 4,
      userId: 5,
      movieId: 14
    } ,
    {
      body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
      rating: 2,
      userId: 4,
      movieId: 15
    } ,
    {
      body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
      rating: 4,
      userId: 1,
      movieId: 16
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 17
    } ,
    {
      body: 'Prepare to be absolutely terrified! What an experieence',
      rating: 5,
      userId: 2,
      movieId: 18
    } ,
    {
      body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
      rating: 2,
      userId: 4,
      movieId: 19
    } ,
    {
      body: 'Excellent movie! One of the best I have seen recently',
      rating: 5,
      userId: 2,
      movieId: 20
    } ,
    {
      body: 'The premise and idea was good, but what the heck was that ending?!',
      rating: 3,
      userId: 4,
      movieId: 21
    } ,
    {
      body: 'This was a great film! Although I would have liked to see a little more originality',
      rating: 4,
      userId: 2,
      movieId: 22
    } ,
    {
      body: 'Excellent movie! One of the best I have seen recently',
      rating: 5,
      userId: 2,
      movieId: 23
    } ,
    {
      body: 'Excellent film, although I thought that it ended a little too suddenly.',
      rating: 4,
      userId: 5,
      movieId: 24
    } ,
    {
      body: 'The premise and idea was good, but what the heck was that ending?!',
      rating: 3,
      userId: 4,
      movieId: 25
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 26
    } ,
    {
      body: 'Excellent film, although I thought that it ended a little too suddenly.',
      rating: 4,
      userId: 5,
      movieId: 27
    } ,
    {
      body: 'Excellent film, although I thought that it ended a little too suddenly.',
      rating: 4,
      userId: 5,
      movieId: 28
    } ,
    {
      body: 'Awful experience. The plot did not even make sense',
      rating: 1,
      userId: 2,
      movieId: 29
    } ,
    {
      body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
      rating: 4,
      userId: 1,
      movieId: 30
    } ,
    {
      body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
      rating: 1,
      userId: 3,
      movieId: 31
    } ,
    {
      body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
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
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 34
    } ,
    {
      body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
      rating: 2,
      userId: 4,
      movieId: 35
    } ,
    {
      body: 'Decent. I went into this with higher expectations than I should have',
      rating: 3,
      userId: 3,
      movieId: 36
    } ,
    {
      body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
      rating: 1,
      userId: 3,
      movieId: 37
    } ,
    {
      body: 'Props for a scary monster/villian. Everything else was terribly executed.',
      rating: 2,
      userId: 4,
      movieId: 38
    } ,
    {
      body: 'This was a great film! Although I would have liked to see a little more originality',
      rating: 4,
      userId: 2,
      movieId: 39
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 40
    } ,
    {
      body: 'Prepare to be absolutely terrified! What an experieence',
      rating: 5,
      userId: 2,
      movieId: 41
    } ,
    {
      body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
      rating: 3,
      userId: 5,
      movieId: 42
    } ,
    {
      body: 'Props for a scary monster/villian. Everything else was terribly executed.',
      rating: 2,
      userId: 4,
      movieId: 43
    } ,
    {
      body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
      rating: 3,
      userId: 5,
      movieId: 44
    } ,
    {
      body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
      rating: 2,
      userId: 3,
      movieId: 45
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 46
    } ,
    {
      body: 'Awful experience. The plot did not even make sense',
      rating: 1,
      userId: 2,
      movieId: 47
    } ,
    {
      body: 'Prepare to be absolutely terrified! What an experieence',
      rating: 5,
      userId: 2,
      movieId: 48
    } ,
    {
      body: 'Excellent film, although I thought that it ended a little too suddenly.',
      rating: 4,
      userId: 5,
      movieId: 49
    } ,
    {
      body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
      rating: 1,
      userId: 5,
      movieId: 50
    } ,
    {
      body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
      rating: 2,
      userId: 4,
      movieId: 51
    } ,
    {
      body: 'Props for a scary monster/villian. Everything else was terribly executed.',
      rating: 2,
      userId: 4,
      movieId: 52
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 53
    } ,
    {
      body: 'The premise and idea was good, but what the heck was that ending?!',
      rating: 3,
      userId: 4,
      movieId: 54
    } ,
    {
      body: 'Decent. I went into this with higher expectations than I should have',
      rating: 3,
      userId: 3,
      movieId: 55
    } ,
    {
      body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
      rating: 1,
      userId: 3,
      movieId: 56
    } ,
    {
      body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
      rating: 3,
      userId: 5,
      movieId: 57
    } ,
    {
      body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
      rating: 2,
      userId: 3,
      movieId: 58
    } ,
    {
      body: 'Awful experience. The plot did not even make sense',
      rating: 1,
      userId: 2,
      movieId: 59
    } ,
    {
      body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
      rating: 2,
      userId: 4,
      movieId: 60
    } ,
    {
      body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
      rating: 5,
      userId: 3,
      movieId: 61
    } ,
    {
      body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
      rating: 1,
      userId: 5,
      movieId: 62
    } ,
    {
      body: 'Prepare to be absolutely terrified! What an experieence',
      rating: 5,
      userId: 2,
      movieId: 63
    } ,
    {
      body: 'This was a great film! Although I would have liked to see a little more originality',
      rating: 4,
      userId: 2,
      movieId: 64
    } ,
    {
      body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
      rating: 3,
      userId: 5,
      movieId: 65
    } ,
    {
      body: 'The premise and idea was good, but what the heck was that ending?!',
      rating: 3,
      userId: 4,
      movieId: 66
    } ,
    {
      body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
      rating: 1,
      userId: 5,
      movieId: 67
    } ,
    {
      body: 'Prepare to be absolutely terrified! What an experieence',
      rating: 5,
      userId: 2,
      movieId: 68
    } ,
    {
      body: 'Awful experience. The plot did not even make sense',
      rating: 1,
      userId: 2,
      movieId: 69
    } ,
    {
      body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
      rating: 3,
      userId: 5,
      movieId: 70
    } ,
    {
      body: 'Excellent film, although I thought that it ended a little too suddenly.',
      rating: 4,
      userId: 5,
      movieId: 71
    } ,
    {
      body: 'Excellent film, although I thought that it ended a little too suddenly.',
      rating: 4,
      userId: 5,
      movieId: 72
    } ,
    {
      body: 'Excellent movie! One of the best I have seen recently',
      rating: 5,
      userId: 2,
      movieId: 73
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 74
    } ,
    {
      body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
      rating: 1,
      userId: 3,
      movieId: 75
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 76
    } ,
    {
      body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
      rating: 1,
      userId: 3,
      movieId: 77
    } ,
    {
      body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
      rating: 5,
      userId: 3,
      movieId: 78
    } ,
    {
      body: 'Excellent movie! One of the best I have seen recently',
      rating: 5,
      userId: 2,
      movieId: 79
    } ,
    {
      body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
      rating: 1,
      userId: 5,
      movieId: 80
    } ,
    {
      body: 'Excellent film, although I thought that it ended a little too suddenly.',
      rating: 4,
      userId: 5,
      movieId: 81
    } ,
    {
      body: 'This was a great film! Although I would have liked to see a little more originality',
      rating: 4,
      userId: 2,
      movieId: 82
    } ,
    {
      body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
      rating: 1,
      userId: 3,
      movieId: 83
    } ,
    {
      body: 'This was a great film! Although I would have liked to see a little more originality',
      rating: 4,
      userId: 2,
      movieId: 84
    } ,
    {
      body: 'Awful experience. The plot did not even make sense',
      rating: 1,
      userId: 2,
      movieId: 85
    } ,
    {
      body: 'Excellent film, although I thought that it ended a little too suddenly.',
      rating: 4,
      userId: 5,
      movieId: 86
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 87
    } ,
    {
      body: 'Awful experience. The plot did not even make sense',
      rating: 1,
      userId: 2,
      movieId: 88
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 89
    } ,
    {
      body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
      rating: 5,
      userId: 3,
      movieId: 90
    } ,
    {
      body: 'Excellent movie! One of the best I have seen recently',
      rating: 5,
      userId: 2,
      movieId: 91
    } ,
    {
      body: 'Prepare to be absolutely terrified! What an experieence',
      rating: 5,
      userId: 2,
      movieId: 92
    } ,
    {
      body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
      rating: 1,
      userId: 5,
      movieId: 93
    } ,
    {
      body: 'Excellent film, although I thought that it ended a little too suddenly.',
      rating: 4,
      userId: 5,
      movieId: 94
    } ,
    {
      body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
      rating: 1,
      userId: 3,
      movieId: 95
    } ,
    {
      body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
      rating: 3,
      userId: 5,
      movieId: 96
    } ,
    {
      body: 'Decent. I went into this with higher expectations than I should have',
      rating: 3,
      userId: 3,
      movieId: 97
    } ,
    {
      body: 'Excellent film, although I thought that it ended a little too suddenly.',
      rating: 4,
      userId: 5,
      movieId: 98
    } ,
    {
      body: 'Prepare to be absolutely terrified! What an experieence',
      rating: 5,
      userId: 2,
      movieId: 99
    } ,
    {
      body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
      rating: 3,
      userId: 5,
      movieId: 100
    } ,
    {
      body: 'Props for a scary monster/villian. Everything else was terribly executed.',
      rating: 2,
      userId: 4,
      movieId: 101
    } ,
    {
      body: 'The premise and idea was good, but what the heck was that ending?!',
      rating: 3,
      userId: 4,
      movieId: 102
    } ,
    {
      body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
      rating: 2,
      userId: 3,
      movieId: 103
    } ,
    {
      body: 'Awful experience. The plot did not even make sense',
      rating: 1,
      userId: 2,
      movieId: 104
    } ,
    {
      body: 'Awful experience. The plot did not even make sense',
      rating: 1,
      userId: 2,
      movieId: 105
    } ,
    {
      body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
      rating: 5,
      userId: 3,
      movieId: 106
    } ,
    {
      body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
      rating: 4,
      userId: 1,
      movieId: 107
    } ,
    {
      body: 'Excellent film, although I thought that it ended a little too suddenly.',
      rating: 4,
      userId: 5,
      movieId: 108
    } ,
    {
      body: 'Awful experience. The plot did not even make sense',
      rating: 1,
      userId: 2,
      movieId: 109
    } ,
    {
      body: 'Awful experience. The plot did not even make sense',
      rating: 1,
      userId: 2,
      movieId: 110
    } ,
    {
      body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
      rating: 1,
      userId: 3,
      movieId: 1
    } ,
    {
      body: 'Excellent film, although I thought that it ended a little too suddenly.',
      rating: 4,
      userId: 5,
      movieId: 2
    } ,
    {
      body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
      rating: 1,
      userId: 3,
      movieId: 3
    } ,
    {
      body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
      rating: 2,
      userId: 3,
      movieId: 4
    } ,
    {
      body: 'The premise and idea was good, but what the heck was that ending?!',
      rating: 3,
      userId: 4,
      movieId: 5
    } ,
    {
      body: 'The premise and idea was good, but what the heck was that ending?!',
      rating: 3,
      userId: 4,
      movieId: 6
    } ,
    {
      body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
      rating: 2,
      userId: 4,
      movieId: 7
    } ,
    {
      body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
      rating: 2,
      userId: 3,
      movieId: 8
    } ,
    {
      body: 'Props for a scary monster/villian. Everything else was terribly executed.',
      rating: 2,
      userId: 4,
      movieId: 9
    } ,
    {
      body: 'Excellent movie! One of the best I have seen recently',
      rating: 5,
      userId: 2,
      movieId: 10
    } ,
    {
      body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
      rating: 4,
      userId: 1,
      movieId: 11
    } ,
    {
      body: 'This was a great film! Although I would have liked to see a little more originality',
      rating: 4,
      userId: 2,
      movieId: 12
    } ,
    {
      body: 'Excellent movie! One of the best I have seen recently',
      rating: 5,
      userId: 2,
      movieId: 13
    } ,
    {
      body: 'The premise and idea was good, but what the heck was that ending?!',
      rating: 3,
      userId: 4,
      movieId: 14
    } ,
    {
      body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
      rating: 3,
      userId: 5,
      movieId: 15
    } ,
    {
      body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
      rating: 1,
      userId: 3,
      movieId: 16
    } ,
    {
      body: 'Excellent film, although I thought that it ended a little too suddenly.',
      rating: 4,
      userId: 5,
      movieId: 17
    } ,
    {
      body: 'Excellent film, although I thought that it ended a little too suddenly.',
      rating: 4,
      userId: 5,
      movieId: 18
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 19
    } ,
    {
      body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
      rating: 2,
      userId: 4,
      movieId: 20
    } ,
    {
      body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
      rating: 1,
      userId: 3,
      movieId: 21
    } ,
    {
      body: 'Prepare to be absolutely terrified! What an experieence',
      rating: 5,
      userId: 2,
      movieId: 22
    } ,
    {
      body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
      rating: 2,
      userId: 4,
      movieId: 23
    } ,
    {
      body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
      rating: 2,
      userId: 3,
      movieId: 24
    } ,
    {
      body: 'Prepare to be absolutely terrified! What an experieence',
      rating: 5,
      userId: 2,
      movieId: 25
    } ,
    {
      body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
      rating: 3,
      userId: 5,
      movieId: 26
    } ,
    {
      body: 'This was a great film! Although I would have liked to see a little more originality',
      rating: 4,
      userId: 2,
      movieId: 27
    } ,
    {
      body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
      rating: 1,
      userId: 5,
      movieId: 28
    } ,
    {
      body: 'The premise and idea was good, but what the heck was that ending?!',
      rating: 3,
      userId: 4,
      movieId: 29
    } ,
    {
      body: 'Awful experience. The plot did not even make sense',
      rating: 1,
      userId: 2,
      movieId: 30
    } ,
    {
      body: 'Excellent movie! One of the best I have seen recently',
      rating: 5,
      userId: 2,
      movieId: 31
    } ,
    {
      body: 'Prepare to be absolutely terrified! What an experieence',
      rating: 5,
      userId: 2,
      movieId: 32
    } ,
    {
      body: 'Awful experience. The plot did not even make sense',
      rating: 1,
      userId: 2,
      movieId: 33
    } ,
    {
      body: 'Decent. I went into this with higher expectations than I should have',
      rating: 3,
      userId: 3,
      movieId: 34
    } ,
    {
      body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
      rating: 4,
      userId: 1,
      movieId: 35
    } ,
    {
      body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
      rating: 3,
      userId: 5,
      movieId: 36
    } ,
    {
      body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
      rating: 2,
      userId: 4,
      movieId: 37
    } ,
    {
      body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
      rating: 1,
      userId: 5,
      movieId: 38
    } ,
    {
      body: 'Awful experience. The plot did not even make sense',
      rating: 1,
      userId: 2,
      movieId: 39
    } ,
    {
      body: 'Awful experience. The plot did not even make sense',
      rating: 1,
      userId: 2,
      movieId: 40
    } ,
    {
      body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
      rating: 3,
      userId: 5,
      movieId: 41
    } ,
    {
      body: 'Awful experience. The plot did not even make sense',
      rating: 1,
      userId: 2,
      movieId: 42
    } ,
    {
      body: 'Excellent movie! One of the best I have seen recently',
      rating: 5,
      userId: 2,
      movieId: 43
    } ,
    {
      body: 'Prepare to be absolutely terrified! What an experieence',
      rating: 5,
      userId: 2,
      movieId: 44
    } ,
    {
      body: 'Prepare to be absolutely terrified! What an experieence',
      rating: 5,
      userId: 2,
      movieId: 45
    } ,
    {
      body: 'This was a great film! Although I would have liked to see a little more originality',
      rating: 4,
      userId: 2,
      movieId: 46
    } ,
    {
      body: 'The premise and idea was good, but what the heck was that ending?!',
      rating: 3,
      userId: 4,
      movieId: 47
    } ,
    {
      body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
      rating: 2,
      userId: 4,
      movieId: 48
    } ,
    {
      body: 'Prepare to be absolutely terrified! What an experieence',
      rating: 5,
      userId: 2,
      movieId: 49
    } ,
    {
      body: 'Excellent film, although I thought that it ended a little too suddenly.',
      rating: 4,
      userId: 5,
      movieId: 50
    } ,
    {
      body: 'Props for a scary monster/villian. Everything else was terribly executed.',
      rating: 2,
      userId: 4,
      movieId: 51
    } ,
    {
      body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
      rating: 5,
      userId: 3,
      movieId: 52
    } ,
    {
      body: 'The premise and idea was good, but what the heck was that ending?!',
      rating: 3,
      userId: 4,
      movieId: 53
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 54
    } ,
    {
      body: 'The premise and idea was good, but what the heck was that ending?!',
      rating: 3,
      userId: 4,
      movieId: 55
    } ,
    {
      body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
      rating: 2,
      userId: 4,
      movieId: 56
    } ,
    {
      body: 'Excellent movie! One of the best I have seen recently',
      rating: 5,
      userId: 2,
      movieId: 57
    } ,
    {
      body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
      rating: 2,
      userId: 3,
      movieId: 58
    } ,
    {
      body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
      rating: 5,
      userId: 3,
      movieId: 59
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 60
    } ,
    {
      body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
      rating: 1,
      userId: 3,
      movieId: 61
    } ,
    {
      body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
      rating: 2,
      userId: 3,
      movieId: 62
    } ,
    {
      body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
      rating: 2,
      userId: 4,
      movieId: 63
    } ,
    {
      body: 'Prepare to be absolutely terrified! What an experieence',
      rating: 5,
      userId: 2,
      movieId: 64
    } ,
    {
      body: 'Props for a scary monster/villian. Everything else was terribly executed.',
      rating: 2,
      userId: 4,
      movieId: 65
    } ,
    {
      body: 'Excellent film, although I thought that it ended a little too suddenly.',
      rating: 4,
      userId: 5,
      movieId: 66
    } ,
    {
      body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
      rating: 1,
      userId: 3,
      movieId: 67
    } ,
    {
      body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
      rating: 4,
      userId: 1,
      movieId: 68
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 69
    } ,
    {
      body: 'Excellent movie! One of the best I have seen recently',
      rating: 5,
      userId: 2,
      movieId: 70
    } ,
    {
      body: 'Awful experience. The plot did not even make sense',
      rating: 1,
      userId: 2,
      movieId: 71
    } ,
    {
      body: 'Excellent film, although I thought that it ended a little too suddenly.',
      rating: 4,
      userId: 5,
      movieId: 72
    } ,
    {
      body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
      rating: 4,
      userId: 1,
      movieId: 73
    } ,
    {
      body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
      rating: 1,
      userId: 3,
      movieId: 74
    } ,
    {
      body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
      rating: 2,
      userId: 4,
      movieId: 75
    } ,
    {
      body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
      rating: 2,
      userId: 4,
      movieId: 76
    } ,
    {
      body: 'The premise and idea was good, but what the heck was that ending?!',
      rating: 3,
      userId: 4,
      movieId: 77
    } ,
    {
      body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
      rating: 5,
      userId: 3,
      movieId: 78
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 79
    } ,
    {
      body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
      rating: 3,
      userId: 5,
      movieId: 80
    } ,
    {
      body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
      rating: 1,
      userId: 3,
      movieId: 81
    } ,
    {
      body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
      rating: 3,
      userId: 5,
      movieId: 82
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 83
    } ,
    {
      body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
      rating: 2,
      userId: 4,
      movieId: 84
    } ,
    {
      body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
      rating: 2,
      userId: 4,
      movieId: 85
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 86
    } ,
    {
      body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
      rating: 5,
      userId: 3,
      movieId: 87
    } ,
    {
      body: 'The premise and idea was good, but what the heck was that ending?!',
      rating: 3,
      userId: 4,
      movieId: 88
    } ,
    {
      body: 'Decent. I went into this with higher expectations than I should have',
      rating: 3,
      userId: 3,
      movieId: 89
    } ,
    {
      body: 'This was a great film! Although I would have liked to see a little more originality',
      rating: 4,
      userId: 2,
      movieId: 90
    } ,
    {
      body: 'Awful experience. The plot did not even make sense',
      rating: 1,
      userId: 2,
      movieId: 91
    } ,
    {
      body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
      rating: 2,
      userId: 3,
      movieId: 92
    } ,
    {
      body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
      rating: 1,
      userId: 3,
      movieId: 93
    } ,
    {
      body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
      rating: 1,
      userId: 5,
      movieId: 94
    } ,
    {
      body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
      rating: 4,
      userId: 1,
      movieId: 95
    } ,
    {
      body: 'This was a great film! Although I would have liked to see a little more originality',
      rating: 4,
      userId: 2,
      movieId: 96
    } ,
    {
      body: 'Decent. I went into this with higher expectations than I should have',
      rating: 3,
      userId: 3,
      movieId: 97
    } ,
    {
      body: 'Decent. I went into this with higher expectations than I should have',
      rating: 3,
      userId: 3,
      movieId: 98
    } ,
    {
      body: 'This was a great film! Although I would have liked to see a little more originality',
      rating: 4,
      userId: 2,
      movieId: 99
    } ,
    {
      body: 'Props for a scary monster/villian. Everything else was terribly executed.',
      rating: 2,
      userId: 4,
      movieId: 100
    } ,
    {
      body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
      rating: 3,
      userId: 5,
      movieId: 101
    } ,
    {
      body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
      rating: 4,
      userId: 1,
      movieId: 102
    } ,
    {
      body: 'Props for a scary monster/villian. Everything else was terribly executed.',
      rating: 2,
      userId: 4,
      movieId: 103
    } ,
    {
      body: 'Props for a scary monster/villian. Everything else was terribly executed.',
      rating: 2,
      userId: 4,
      movieId: 104
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 105
    } ,
    {
      body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
      rating: 1,
      userId: 3,
      movieId: 106
    } ,
    {
      body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
      rating: 1,
      userId: 3,
      movieId: 107
    } ,
    {
      body: 'Prepare to be absolutely terrified! What an experieence',
      rating: 5,
      userId: 2,
      movieId: 108
    } ,
    {
      body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
      rating: 2,
      userId: 4,
      movieId: 109
    } ,
    {
      body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
      rating: 1,
      userId: 3,
      movieId: 110
    } ,
    {
      body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
      rating: 2,
      userId: 4,
      movieId: 1
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 2
    } ,
    {
      body: 'Props for a scary monster/villian. Everything else was terribly executed.',
      rating: 2,
      userId: 4,
      movieId: 3
    } ,
    {
      body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
      rating: 1,
      userId: 3,
      movieId: 4
    } ,
    {
      body: 'Excellent movie! One of the best I have seen recently',
      rating: 5,
      userId: 2,
      movieId: 5
    } ,
    {
      body: 'Decent. I went into this with higher expectations than I should have',
      rating: 3,
      userId: 3,
      movieId: 6
    } ,
    {
      body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
      rating: 1,
      userId: 3,
      movieId: 7
    } ,
    {
      body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
      rating: 2,
      userId: 3,
      movieId: 8
    } ,
    {
      body: 'This was a great film! Although I would have liked to see a little more originality',
      rating: 4,
      userId: 2,
      movieId: 9
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 10
    } ,
    {
      body: 'Excellent film, although I thought that it ended a little too suddenly.',
      rating: 4,
      userId: 5,
      movieId: 11
    } ,
    {
      body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
      rating: 3,
      userId: 5,
      movieId: 12
    } ,
    {
      body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
      rating: 3,
      userId: 5,
      movieId: 13
    } ,
    {
      body: 'The premise and idea was good, but what the heck was that ending?!',
      rating: 3,
      userId: 4,
      movieId: 14
    } ,
    {
      body: 'Props for a scary monster/villian. Everything else was terribly executed.',
      rating: 2,
      userId: 4,
      movieId: 15
    } ,
    {
      body: 'Props for a scary monster/villian. Everything else was terribly executed.',
      rating: 2,
      userId: 4,
      movieId: 16
    } ,
    {
      body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
      rating: 2,
      userId: 3,
      movieId: 17
    } ,
    {
      body: 'Excellent film, although I thought that it ended a little too suddenly.',
      rating: 4,
      userId: 5,
      movieId: 18
    } ,
    {
      body: 'Excellent movie! One of the best I have seen recently',
      rating: 5,
      userId: 2,
      movieId: 19
    } ,
    {
      body: 'Decent. I went into this with higher expectations than I should have',
      rating: 3,
      userId: 3,
      movieId: 20
    } ,
    {
      body: 'Prepare to be absolutely terrified! What an experieence',
      rating: 5,
      userId: 2,
      movieId: 21
    } ,
    {
      body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
      rating: 3,
      userId: 5,
      movieId: 22
    } ,
    {
      body: 'The premise and idea was good, but what the heck was that ending?!',
      rating: 3,
      userId: 4,
      movieId: 23
    } ,
    {
      body: 'Prepare to be absolutely terrified! What an experieence',
      rating: 5,
      userId: 2,
      movieId: 24
    } ,
    {
      body: 'This was a great film! Although I would have liked to see a little more originality',
      rating: 4,
      userId: 2,
      movieId: 25
    } ,
    {
      body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
      rating: 2,
      userId: 3,
      movieId: 26
    } ,
    {
      body: 'This was a great film! Although I would have liked to see a little more originality',
      rating: 4,
      userId: 2,
      movieId: 27
    } ,
    {
      body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
      rating: 5,
      userId: 3,
      movieId: 28
    } ,
    {
      body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
      rating: 2,
      userId: 3,
      movieId: 29
    } ,
    {
      body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
      rating: 4,
      userId: 1,
      movieId: 30
    } ,
    {
      body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
      rating: 3,
      userId: 5,
      movieId: 31
    } ,
    {
      body: 'This was a great film! Although I would have liked to see a little more originality',
      rating: 4,
      userId: 2,
      movieId: 32
    } ,
    {
      body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
      rating: 3,
      userId: 5,
      movieId: 33
    } ,
    {
      body: 'This was a great film! Although I would have liked to see a little more originality',
      rating: 4,
      userId: 2,
      movieId: 34
    } ,
    {
      body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
      rating: 4,
      userId: 1,
      movieId: 35
    } ,
    {
      body: 'Awful experience. The plot did not even make sense',
      rating: 1,
      userId: 2,
      movieId: 36
    } ,
    {
      body: 'Excellent film, although I thought that it ended a little too suddenly.',
      rating: 4,
      userId: 5,
      movieId: 37
    } ,
    {
      body: 'This was a great film! Although I would have liked to see a little more originality',
      rating: 4,
      userId: 2,
      movieId: 38
    } ,
    {
      body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
      rating: 5,
      userId: 3,
      movieId: 39
    } ,
    {
      body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
      rating: 4,
      userId: 1,
      movieId: 40
    } ,
    {
      body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
      rating: 1,
      userId: 3,
      movieId: 41
    } ,
    {
      body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
      rating: 1,
      userId: 5,
      movieId: 42
    } ,
    {
      body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
      rating: 5,
      userId: 3,
      movieId: 43
    } ,
    {
      body: 'The premise and idea was good, but what the heck was that ending?!',
      rating: 3,
      userId: 4,
      movieId: 44
    } ,
    {
      body: 'Decent. I went into this with higher expectations than I should have',
      rating: 3,
      userId: 3,
      movieId: 45
    } ,
    {
      body: 'This was a great film! Although I would have liked to see a little more originality',
      rating: 4,
      userId: 2,
      movieId: 46
    } ,
    {
      body: 'The premise and idea was good, but what the heck was that ending?!',
      rating: 3,
      userId: 4,
      movieId: 47
    } ,
    {
      body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
      rating: 3,
      userId: 5,
      movieId: 48
    } ,
    {
      body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
      rating: 1,
      userId: 5,
      movieId: 49
    } ,
    {
      body: 'Prepare to be absolutely terrified! What an experieence',
      rating: 5,
      userId: 2,
      movieId: 50
    } ,
    {
      body: 'Awful experience. The plot did not even make sense',
      rating: 1,
      userId: 2,
      movieId: 51
    } ,
    {
      body: 'This was a great film! Although I would have liked to see a little more originality',
      rating: 4,
      userId: 2,
      movieId: 52
    } ,
    {
      body: 'The premise and idea was good, but what the heck was that ending?!',
      rating: 3,
      userId: 4,
      movieId: 53
    } ,
    {
      body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
      rating: 1,
      userId: 5,
      movieId: 54
    } ,
    {
      body: 'The premise and idea was good, but what the heck was that ending?!',
      rating: 3,
      userId: 4,
      movieId: 55
    } ,
    {
      body: 'Props for a scary monster/villian. Everything else was terribly executed.',
      rating: 2,
      userId: 4,
      movieId: 56
    } ,
    {
      body: 'This was a great film! Although I would have liked to see a little more originality',
      rating: 4,
      userId: 2,
      movieId: 57
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 58
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 59
    } ,
    {
      body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
      rating: 4,
      userId: 1,
      movieId: 60
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 61
    } ,
    {
      body: 'Excellent movie! One of the best I have seen recently',
      rating: 5,
      userId: 2,
      movieId: 62
    } ,
    {
      body: 'Excellent film, although I thought that it ended a little too suddenly.',
      rating: 4,
      userId: 5,
      movieId: 63
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 64
    } ,
    {
      body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
      rating: 2,
      userId: 4,
      movieId: 65
    } ,
    {
      body: 'This was a great film! Although I would have liked to see a little more originality',
      rating: 4,
      userId: 2,
      movieId: 66
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 67
    } ,
    {
      body: 'The premise and idea was good, but what the heck was that ending?!',
      rating: 3,
      userId: 4,
      movieId: 68
    } ,
    {
      body: 'Awful experience. The plot did not even make sense',
      rating: 1,
      userId: 2,
      movieId: 69
    } ,
    {
      body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
      rating: 1,
      userId: 3,
      movieId: 70
    } ,
    {
      body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
      rating: 2,
      userId: 4,
      movieId: 71
    } ,
    {
      body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
      rating: 5,
      userId: 3,
      movieId: 72
    } ,
    {
      body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
      rating: 1,
      userId: 3,
      movieId: 73
    } ,
    {
      body: 'The premise and idea was good, but what the heck was that ending?!',
      rating: 3,
      userId: 4,
      movieId: 74
    } ,
    {
      body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
      rating: 5,
      userId: 3,
      movieId: 75
    } ,
    {
      body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
      rating: 4,
      userId: 1,
      movieId: 76
    } ,
    {
      body: 'Excellent film, although I thought that it ended a little too suddenly.',
      rating: 4,
      userId: 5,
      movieId: 77
    } ,
    {
      body: 'This was a great film! Although I would have liked to see a little more originality',
      rating: 4,
      userId: 2,
      movieId: 78
    } ,
    {
      body: 'Prepare to be absolutely terrified! What an experieence',
      rating: 5,
      userId: 2,
      movieId: 79
    } ,
    {
      body: 'Prepare to be absolutely terrified! What an experieence',
      rating: 5,
      userId: 2,
      movieId: 80
    } ,
    {
      body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
      rating: 5,
      userId: 3,
      movieId: 81
    } ,
    {
      body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
      rating: 2,
      userId: 4,
      movieId: 82
    } ,
    {
      body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
      rating: 2,
      userId: 4,
      movieId: 83
    } ,
    {
      body: 'Awful experience. The plot did not even make sense',
      rating: 1,
      userId: 2,
      movieId: 84
    } ,
    {
      body: 'Excellent movie! One of the best I have seen recently',
      rating: 5,
      userId: 2,
      movieId: 85
    } ,
    {
      body: 'Excellent film, although I thought that it ended a little too suddenly.',
      rating: 4,
      userId: 5,
      movieId: 86
    } ,
    {
      body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
      rating: 1,
      userId: 5,
      movieId: 87
    } ,
    {
      body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
      rating: 1,
      userId: 3,
      movieId: 88
    } ,
    {
      body: 'This was a great film! Although I would have liked to see a little more originality',
      rating: 4,
      userId: 2,
      movieId: 89
    } ,
    {
      body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
      rating: 3,
      userId: 5,
      movieId: 90
    } ,
    {
      body: 'Prepare to be absolutely terrified! What an experieence',
      rating: 5,
      userId: 2,
      movieId: 91
    } ,
    {
      body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
      rating: 5,
      userId: 3,
      movieId: 92
    } ,
    {
      body: 'Awful experience. The plot did not even make sense',
      rating: 1,
      userId: 2,
      movieId: 93
    } ,
    {
      body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
      rating: 2,
      userId: 4,
      movieId: 94
    } ,
    {
      body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
      rating: 2,
      userId: 4,
      movieId: 95
    } ,
    {
      body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
      rating: 2,
      userId: 3,
      movieId: 96
    } ,
    {
      body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
      rating: 1,
      userId: 5,
      movieId: 97
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 98
    } ,
    {
      body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
      rating: 5,
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
      body: 'Props for a scary monster/villian. Everything else was terribly executed.',
      rating: 2,
      userId: 4,
      movieId: 101
    } ,
    {
      body: 'Excellent movie! One of the best I have seen recently',
      rating: 5,
      userId: 2,
      movieId: 102
    } ,
    {
      body: 'Prepare to be absolutely terrified! What an experieence',
      rating: 5,
      userId: 2,
      movieId: 103
    } ,
    {
      body: 'This was a great film! Although I would have liked to see a little more originality',
      rating: 4,
      userId: 2,
      movieId: 104
    } ,
    {
      body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
      rating: 1,
      userId: 3,
      movieId: 105
    } ,
    {
      body: 'Prepare to be absolutely terrified! What an experieence',
      rating: 5,
      userId: 2,
      movieId: 106
    } ,
    {
      body: 'Awful experience. The plot did not even make sense',
      rating: 1,
      userId: 2,
      movieId: 107
    } ,
    {
      body: 'This was a great film! Although I would have liked to see a little more originality',
      rating: 4,
      userId: 2,
      movieId: 108
    } ,
    {
      body: 'Excellent movie! One of the best I have seen recently',
      rating: 5,
      userId: 2,
      movieId: 109
    } ,
    {
      body: 'Prepare to be absolutely terrified! What an experieence',
      rating: 5,
      userId: 2,
      movieId: 110
    } ,
    {
      body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
      rating: 3,
      userId: 5,
      movieId: 1
    } ,
    {
      body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
      rating: 2,
      userId: 4,
      movieId: 2
    } ,
    {
      body: 'Decent. I went into this with higher expectations than I should have',
      rating: 3,
      userId: 3,
      movieId: 3
    } ,
    {
      body: 'Excellent film, although I thought that it ended a little too suddenly.',
      rating: 4,
      userId: 5,
      movieId: 4
    } ,
    {
      body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
      rating: 4,
      userId: 1,
      movieId: 5
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 6
    } ,
    {
      body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
      rating: 3,
      userId: 5,
      movieId: 7
    } ,
    {
      body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
      rating: 2,
      userId: 3,
      movieId: 8
    } ,
    {
      body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
      rating: 2,
      userId: 4,
      movieId: 9
    } ,
    {
      body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
      rating: 2,
      userId: 3,
      movieId: 10
    } ,
    {
      body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
      rating: 2,
      userId: 3,
      movieId: 11
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 12
    } ,
    {
      body: 'Excellent movie! One of the best I have seen recently',
      rating: 5,
      userId: 2,
      movieId: 13
    } ,
    {
      body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
      rating: 3,
      userId: 5,
      movieId: 14
    } ,
    {
      body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
      rating: 3,
      userId: 5,
      movieId: 15
    } ,
    {
      body: 'Prepare to be absolutely terrified! What an experieence',
      rating: 5,
      userId: 2,
      movieId: 16
    } ,
    {
      body: 'Awful experience. The plot did not even make sense',
      rating: 1,
      userId: 2,
      movieId: 17
    } ,
    {
      body: 'Awful experience. The plot did not even make sense',
      rating: 1,
      userId: 2,
      movieId: 18
    } ,
    {
      body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
      rating: 2,
      userId: 4,
      movieId: 19
    } ,
    {
      body: 'Excellent movie! One of the best I have seen recently',
      rating: 5,
      userId: 2,
      movieId: 20
    } ,
    {
      body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
      rating: 2,
      userId: 3,
      movieId: 21
    } ,
    {
      body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
      rating: 2,
      userId: 4,
      movieId: 22
    } ,
    {
      body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
      rating: 1,
      userId: 3,
      movieId: 23
    } ,
    {
      body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
      rating: 2,
      userId: 3,
      movieId: 24
    } ,
    {
      body: 'Excellent movie! One of the best I have seen recently',
      rating: 5,
      userId: 2,
      movieId: 25
    } ,
    {
      body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
      rating: 1,
      userId: 5,
      movieId: 26
    } ,
    {
      body: 'Excellent film, although I thought that it ended a little too suddenly.',
      rating: 4,
      userId: 5,
      movieId: 27
    } ,
    {
      body: 'Excellent movie! One of the best I have seen recently',
      rating: 5,
      userId: 2,
      movieId: 28
    } ,
    {
      body: 'Prepare to be absolutely terrified! What an experieence',
      rating: 5,
      userId: 2,
      movieId: 29
    } ,
    {
      body: 'This was a great film! Although I would have liked to see a little more originality',
      rating: 4,
      userId: 2,
      movieId: 30
    } ,
    {
      body: 'This was a great film! Although I would have liked to see a little more originality',
      rating: 4,
      userId: 2,
      movieId: 31
    } ,
    {
      body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
      rating: 2,
      userId: 3,
      movieId: 32
    } ,
    {
      body: 'Awful experience. The plot did not even make sense',
      rating: 1,
      userId: 2,
      movieId: 33
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 34
    } ,
    {
      body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
      rating: 4,
      userId: 1,
      movieId: 35
    } ,
    {
      body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
      rating: 1,
      userId: 5,
      movieId: 36
    } ,
    {
      body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
      rating: 2,
      userId: 4,
      movieId: 37
    } ,
    {
      body: 'Props for a scary monster/villian. Everything else was terribly executed.',
      rating: 2,
      userId: 4,
      movieId: 38
    } ,
    {
      body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
      rating: 3,
      userId: 5,
      movieId: 39
    } ,
    {
      body: 'The premise and idea was good, but what the heck was that ending?!',
      rating: 3,
      userId: 4,
      movieId: 40
    } ,
    {
      body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
      rating: 1,
      userId: 3,
      movieId: 41
    } ,
    {
      body: 'Excellent film, although I thought that it ended a little too suddenly.',
      rating: 4,
      userId: 5,
      movieId: 42
    } ,
    {
      body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
      rating: 3,
      userId: 5,
      movieId: 43
    } ,
    {
      body: 'Prepare to be absolutely terrified! What an experieence',
      rating: 5,
      userId: 2,
      movieId: 44
    } ,
    {
      body: 'Awful experience. The plot did not even make sense',
      rating: 1,
      userId: 2,
      movieId: 45
    } ,
    {
      body: 'The premise and idea was good, but what the heck was that ending?!',
      rating: 3,
      userId: 4,
      movieId: 46
    } ,
    {
      body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
      rating: 2,
      userId: 4,
      movieId: 47
    } ,
    {
      body: 'This was a great film! Although I would have liked to see a little more originality',
      rating: 4,
      userId: 2,
      movieId: 48
    } ,
    {
      body: 'The premise and idea was good, but what the heck was that ending?!',
      rating: 3,
      userId: 4,
      movieId: 49
    } ,
    {
      body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
      rating: 1,
      userId: 3,
      movieId: 50
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 51
    } ,
    {
      body: 'Prepare to be absolutely terrified! What an experieence',
      rating: 5,
      userId: 2,
      movieId: 52
    } ,
    {
      body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
      rating: 5,
      userId: 3,
      movieId: 53
    } ,
    {
      body: 'Excellent film, although I thought that it ended a little too suddenly.',
      rating: 4,
      userId: 5,
      movieId: 54
    } ,
    {
      body: 'Decent. I went into this with higher expectations than I should have',
      rating: 3,
      userId: 3,
      movieId: 55
    } ,
    {
      body: 'Props for a scary monster/villian. Everything else was terribly executed.',
      rating: 2,
      userId: 4,
      movieId: 56
    } ,
    {
      body: 'Prepare to be absolutely terrified! What an experieence',
      rating: 5,
      userId: 2,
      movieId: 57
    } ,
    {
      body: 'Prepare to be absolutely terrified! What an experieence',
      rating: 5,
      userId: 2,
      movieId: 58
    } ,
    {
      body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
      rating: 2,
      userId: 4,
      movieId: 59
    } ,
    {
      body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
      rating: 5,
      userId: 3,
      movieId: 60
    } ,
    {
      body: 'This was a great film! Although I would have liked to see a little more originality',
      rating: 4,
      userId: 2,
      movieId: 61
    } ,
    {
      body: 'Awful experience. The plot did not even make sense',
      rating: 1,
      userId: 2,
      movieId: 62
    } ,
    {
      body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
      rating: 2,
      userId: 4,
      movieId: 63
    } ,
    {
      body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
      rating: 1,
      userId: 5,
      movieId: 64
    } ,
    {
      body: 'Props for a scary monster/villian. Everything else was terribly executed.',
      rating: 2,
      userId: 4,
      movieId: 65
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 66
    } ,
    {
      body: 'The premise and idea was good, but what the heck was that ending?!',
      rating: 3,
      userId: 4,
      movieId: 67
    } ,
    {
      body: 'Excellent film, although I thought that it ended a little too suddenly.',
      rating: 4,
      userId: 5,
      movieId: 68
    } ,
    {
      body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
      rating: 1,
      userId: 5,
      movieId: 69
    } ,
    {
      body: 'Excellent movie! One of the best I have seen recently',
      rating: 5,
      userId: 2,
      movieId: 70
    } ,
    {
      body: 'Excellent film, although I thought that it ended a little too suddenly.',
      rating: 4,
      userId: 5,
      movieId: 71
    } ,
    {
      body: 'Props for a scary monster/villian. Everything else was terribly executed.',
      rating: 2,
      userId: 4,
      movieId: 72
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 73
    } ,
    {
      body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
      rating: 1,
      userId: 3,
      movieId: 74
    } ,
    {
      body: 'Excellent movie! One of the best I have seen recently',
      rating: 5,
      userId: 2,
      movieId: 75
    } ,
    {
      body: 'Excellent movie! One of the best I have seen recently',
      rating: 5,
      userId: 2,
      movieId: 76
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 77
    } ,
    {
      body: 'Awful experience. The plot did not even make sense',
      rating: 1,
      userId: 2,
      movieId: 78
    } ,
    {
      body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
      rating: 2,
      userId: 3,
      movieId: 79
    } ,
    {
      body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
      rating: 4,
      userId: 1,
      movieId: 80
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 81
    } ,
    {
      body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
      rating: 1,
      userId: 3,
      movieId: 82
    } ,
    {
      body: 'Props for a scary monster/villian. Everything else was terribly executed.',
      rating: 2,
      userId: 4,
      movieId: 83
    } ,
    {
      body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
      rating: 5,
      userId: 3,
      movieId: 84
    } ,
    {
      body: 'This was a great film! Although I would have liked to see a little more originality',
      rating: 4,
      userId: 2,
      movieId: 85
    } ,
    {
      body: 'Awful experience. The plot did not even make sense',
      rating: 1,
      userId: 2,
      movieId: 86
    } ,
    {
      body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
      rating: 2,
      userId: 3,
      movieId: 87
    } ,
    {
      body: 'Excellent movie! One of the best I have seen recently',
      rating: 5,
      userId: 2,
      movieId: 88
    } ,
    {
      body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
      rating: 1,
      userId: 5,
      movieId: 89
    } ,
    {
      body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
      rating: 3,
      userId: 5,
      movieId: 90
    } ,
    {
      body: 'Excellent film, although I thought that it ended a little too suddenly.',
      rating: 4,
      userId: 5,
      movieId: 91
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 92
    } ,
    {
      body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
      rating: 5,
      userId: 3,
      movieId: 93
    } ,
    {
      body: 'Decent. I went into this with higher expectations than I should have',
      rating: 3,
      userId: 3,
      movieId: 94
    } ,
    {
      body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
      rating: 3,
      userId: 5,
      movieId: 95
    } ,
    {
      body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
      rating: 2,
      userId: 4,
      movieId: 96
    } ,
    {
      body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
      rating: 3,
      userId: 5,
      movieId: 97
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 98
    } ,
    {
      body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
      rating: 4,
      userId: 1,
      movieId: 99
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 100
    } ,
    {
      body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
      rating: 5,
      userId: 3,
      movieId: 101
    } ,
    {
      body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
      rating: 4,
      userId: 1,
      movieId: 102
    } ,
    {
      body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
      rating: 2,
      userId: 4,
      movieId: 103
    } ,
    {
      body: 'Excellent movie! One of the best I have seen recently',
      rating: 5,
      userId: 2,
      movieId: 104
    } ,
    {
      body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
      rating: 1,
      userId: 3,
      movieId: 105
    } ,
    {
      body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
      rating: 1,
      userId: 3,
      movieId: 106
    } ,
    {
      body: 'Excellent movie! One of the best I have seen recently',
      rating: 5,
      userId: 2,
      movieId: 107
    } ,
    {
      body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
      rating: 1,
      userId: 3,
      movieId: 108
    } ,
    {
      body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
      rating: 4,
      userId: 1,
      movieId: 109
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 110
    } ,
    {
      body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
      rating: 2,
      userId: 4,
      movieId: 1
    } ,
    {
      body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
      rating: 1,
      userId: 3,
      movieId: 2
    } ,
    {
      body: 'Excellent film, although I thought that it ended a little too suddenly.',
      rating: 4,
      userId: 5,
      movieId: 3
    } ,
    {
      body: 'Awful experience. The plot did not even make sense',
      rating: 1,
      userId: 2,
      movieId: 4
    } ,
    {
      body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
      rating: 1,
      userId: 3,
      movieId: 5
    } ,
    {
      body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
      rating: 1,
      userId: 3,
      movieId: 6
    } ,
    {
      body: 'Excellent movie! One of the best I have seen recently',
      rating: 5,
      userId: 2,
      movieId: 7
    } ,
    {
      body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
      rating: 5,
      userId: 3,
      movieId: 8
    } ,
    {
      body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
      rating: 5,
      userId: 3,
      movieId: 9
    } ,
    {
      body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
      rating: 1,
      userId: 3,
      movieId: 10
    } ,
    {
      body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
      rating: 5,
      userId: 3,
      movieId: 11
    } ,
    {
      body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
      rating: 1,
      userId: 3,
      movieId: 12
    } ,
    {
      body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
      rating: 3,
      userId: 5,
      movieId: 13
    } ,
    {
      body: 'Awful experience. The plot did not even make sense',
      rating: 1,
      userId: 2,
      movieId: 14
    } ,
    {
      body: 'Awful experience. The plot did not even make sense',
      rating: 1,
      userId: 2,
      movieId: 15
    } ,
    {
      body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
      rating: 3,
      userId: 5,
      movieId: 16
    } ,
    {
      body: 'The premise and idea was good, but what the heck was that ending?!',
      rating: 3,
      userId: 4,
      movieId: 17
    } ,
    {
      body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
      rating: 4,
      userId: 1,
      movieId: 18
    } ,
    {
      body: 'Awful experience. The plot did not even make sense',
      rating: 1,
      userId: 2,
      movieId: 19
    } ,
    {
      body: 'Awful experience. The plot did not even make sense',
      rating: 1,
      userId: 2,
      movieId: 20
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 21
    } ,
    {
      body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
      rating: 1,
      userId: 3,
      movieId: 22
    } ,
    {
      body: 'Props for a scary monster/villian. Everything else was terribly executed.',
      rating: 2,
      userId: 4,
      movieId: 23
    } ,
    {
      body: 'Excellent movie! One of the best I have seen recently',
      rating: 5,
      userId: 2,
      movieId: 24
    } ,
    {
      body: 'This was a great film! Although I would have liked to see a little more originality',
      rating: 4,
      userId: 2,
      movieId: 25
    } ,
    {
      body: 'Props for a scary monster/villian. Everything else was terribly executed.',
      rating: 2,
      userId: 4,
      movieId: 26
    } ,
    {
      body: 'Excellent movie! One of the best I have seen recently',
      rating: 5,
      userId: 2,
      movieId: 27
    } ,
    {
      body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
      rating: 1,
      userId: 5,
      movieId: 28
    } ,
    {
      body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
      rating: 1,
      userId: 3,
      movieId: 29
    } ,
    {
      body: 'Excellent movie! One of the best I have seen recently',
      rating: 5,
      userId: 2,
      movieId: 30
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 31
    } ,
    {
      body: 'Props for a scary monster/villian. Everything else was terribly executed.',
      rating: 2,
      userId: 4,
      movieId: 32
    } ,
    {
      body: 'Prepare to be absolutely terrified! What an experieence',
      rating: 5,
      userId: 2,
      movieId: 33
    } ,
    {
      body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
      rating: 5,
      userId: 3,
      movieId: 34
    } ,
    {
      body: 'This was a great film! Although I would have liked to see a little more originality',
      rating: 4,
      userId: 2,
      movieId: 35
    } ,
    {
      body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
      rating: 2,
      userId: 3,
      movieId: 36
    } ,
    {
      body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
      rating: 1,
      userId: 3,
      movieId: 37
    } ,
    {
      body: 'Props for a scary monster/villian. Everything else was terribly executed.',
      rating: 2,
      userId: 4,
      movieId: 38
    } ,
    {
      body: 'Decent. I went into this with higher expectations than I should have',
      rating: 3,
      userId: 3,
      movieId: 39
    } ,
    {
      body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
      rating: 3,
      userId: 5,
      movieId: 40
    } ,
    {
      body: 'Props for a scary monster/villian. Everything else was terribly executed.',
      rating: 2,
      userId: 4,
      movieId: 41
    } ,
    {
      body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
      rating: 1,
      userId: 3,
      movieId: 42
    } ,
    {
      body: 'The premise and idea was good, but what the heck was that ending?!',
      rating: 3,
      userId: 4,
      movieId: 43
    } ,
    {
      body: 'Prepare to be absolutely terrified! What an experieence',
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
      body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
      rating: 1,
      userId: 3,
      movieId: 46
    } ,
    {
      body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
      rating: 4,
      userId: 1,
      movieId: 47
    } ,
    {
      body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
      rating: 2,
      userId: 4,
      movieId: 48
    } ,
    {
      body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
      rating: 3,
      userId: 5,
      movieId: 49
    } ,
    {
      body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
      rating: 4,
      userId: 1,
      movieId: 50
    } ,
    {
      body: 'Decent. I went into this with higher expectations than I should have',
      rating: 3,
      userId: 3,
      movieId: 51
    } ,
    {
      body: 'Props for a scary monster/villian. Everything else was terribly executed.',
      rating: 2,
      userId: 4,
      movieId: 52
    } ,
    {
      body: 'The premise and idea was good, but what the heck was that ending?!',
      rating: 3,
      userId: 4,
      movieId: 53
    } ,
    {
      body: 'Prepare to be absolutely terrified! What an experieence',
      rating: 5,
      userId: 2,
      movieId: 54
    } ,
    {
      body: 'Props for a scary monster/villian. Everything else was terribly executed.',
      rating: 2,
      userId: 4,
      movieId: 55
    } ,
    {
      body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
      rating: 3,
      userId: 5,
      movieId: 56
    } ,
    {
      body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
      rating: 4,
      userId: 1,
      movieId: 57
    } ,
    {
      body: 'Decent. I went into this with higher expectations than I should have',
      rating: 3,
      userId: 3,
      movieId: 58
    } ,
    {
      body: 'Prepare to be absolutely terrified! What an experieence',
      rating: 5,
      userId: 2,
      movieId: 59
    } ,
    {
      body: 'Excellent movie! One of the best I have seen recently',
      rating: 5,
      userId: 2,
      movieId: 60
    } ,
    {
      body: 'Props for a scary monster/villian. Everything else was terribly executed.',
      rating: 2,
      userId: 4,
      movieId: 61
    } ,
    {
      body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
      rating: 1,
      userId: 5,
      movieId: 62
    } ,
    {
      body: 'Prepare to be absolutely terrified! What an experieence',
      rating: 5,
      userId: 2,
      movieId: 63
    } ,
    {
      body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
      rating: 2,
      userId: 3,
      movieId: 64
    } ,
    {
      body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
      rating: 3,
      userId: 5,
      movieId: 65
    } ,
    {
      body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
      rating: 3,
      userId: 5,
      movieId: 66
    } ,
    {
      body: 'Props for a scary monster/villian. Everything else was terribly executed.',
      rating: 2,
      userId: 4,
      movieId: 67
    } ,
    {
      body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
      rating: 2,
      userId: 3,
      movieId: 68
    } ,
    {
      body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
      rating: 2,
      userId: 3,
      movieId: 69
    } ,
    {
      body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
      rating: 4,
      userId: 1,
      movieId: 70
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 71
    } ,
    {
      body: 'Prepare to be absolutely terrified! What an experieence',
      rating: 5,
      userId: 2,
      movieId: 72
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 73
    } ,
    {
      body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
      rating: 3,
      userId: 5,
      movieId: 74
    } ,
    {
      body: 'Props for a scary monster/villian. Everything else was terribly executed.',
      rating: 2,
      userId: 4,
      movieId: 75
    } ,
    {
      body: 'Excellent movie! One of the best I have seen recently',
      rating: 5,
      userId: 2,
      movieId: 76
    } ,
    {
      body: 'Excellent film, although I thought that it ended a little too suddenly.',
      rating: 4,
      userId: 5,
      movieId: 77
    } ,
    {
      body: 'This was a great film! Although I would have liked to see a little more originality',
      rating: 4,
      userId: 2,
      movieId: 78
    } ,
    {
      body: 'Awful experience. The plot did not even make sense',
      rating: 1,
      userId: 2,
      movieId: 79
    } ,
    {
      body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
      rating: 2,
      userId: 3,
      movieId: 80
    } ,
    {
      body: 'Decent. I went into this with higher expectations than I should have',
      rating: 3,
      userId: 3,
      movieId: 81
    } ,
    {
      body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
      rating: 1,
      userId: 5,
      movieId: 82
    } ,
    {
      body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
      rating: 5,
      userId: 3,
      movieId: 83
    } ,
    {
      body: 'Excellent film, although I thought that it ended a little too suddenly.',
      rating: 4,
      userId: 5,
      movieId: 84
    } ,
    {
      body: 'Prepare to be absolutely terrified! What an experieence',
      rating: 5,
      userId: 2,
      movieId: 85
    } ,
    {
      body: 'This was a great film! Although I would have liked to see a little more originality',
      rating: 4,
      userId: 2,
      movieId: 86
    } ,
    {
      body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
      rating: 2,
      userId: 4,
      movieId: 87
    } ,
    {
      body: 'Awful experience. The plot did not even make sense',
      rating: 1,
      userId: 2,
      movieId: 88
    } ,
    {
      body: 'This was a great film! Although I would have liked to see a little more originality',
      rating: 4,
      userId: 2,
      movieId: 89
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 90
    } ,
    {
      body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
      rating: 2,
      userId: 3,
      movieId: 91
    } ,
    {
      body: 'Decent. I went into this with higher expectations than I should have',
      rating: 3,
      userId: 3,
      movieId: 92
    } ,
    {
      body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
      rating: 1,
      userId: 5,
      movieId: 93
    } ,
    {
      body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
      rating: 3,
      userId: 5,
      movieId: 94
    } ,
    {
      body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
      rating: 3,
      userId: 5,
      movieId: 95
    } ,
    {
      body: 'Awful experience. The plot did not even make sense',
      rating: 1,
      userId: 2,
      movieId: 96
    } ,
    {
      body: 'Excellent film, although I thought that it ended a little too suddenly.',
      rating: 4,
      userId: 5,
      movieId: 97
    } ,
    {
      body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
      rating: 3,
      userId: 5,
      movieId: 98
    } ,
    {
      body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
      rating: 2,
      userId: 4,
      movieId: 99
    } ,
    {
      body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
      rating: 2,
      userId: 3,
      movieId: 100
    } ,
    {
      body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
      rating: 4,
      userId: 1,
      movieId: 101
    } ,
    {
      body: 'This was a great film! Although I would have liked to see a little more originality',
      rating: 4,
      userId: 2,
      movieId: 102
    } ,
    {
      body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
      rating: 4,
      userId: 1,
      movieId: 103
    } ,
    {
      body: 'Decent. I went into this with higher expectations than I should have',
      rating: 3,
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
      body: 'Excellent movie! One of the best I have seen recently',
      rating: 5,
      userId: 2,
      movieId: 106
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 107
    } ,
    {
      body: 'Awful experience. The plot did not even make sense',
      rating: 1,
      userId: 2,
      movieId: 108
    } ,
    {
      body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
      rating: 5,
      userId: 3,
      movieId: 109
    } ,
    {
      body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
      rating: 2,
      userId: 4,
      movieId: 110
    } ,
    {
      body: 'Awful experience. The plot did not even make sense',
      rating: 1,
      userId: 2,
      movieId: 1
    } ,
    {
      body: 'Excellent movie! One of the best I have seen recently',
      rating: 5,
      userId: 2,
      movieId: 2
    } ,
    {
      body: 'Awful experience. The plot did not even make sense',
      rating: 1,
      userId: 2,
      movieId: 3
    } ,
    {
      body: 'The premise and idea was good, but what the heck was that ending?!',
      rating: 3,
      userId: 4,
      movieId: 4
    } ,
    {
      body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
      rating: 2,
      userId: 3,
      movieId: 5
    } ,
    {
      body: 'Excellent film, although I thought that it ended a little too suddenly.',
      rating: 4,
      userId: 5,
      movieId: 6
    } ,
    {
      body: 'The premise and idea was good, but what the heck was that ending?!',
      rating: 3,
      userId: 4,
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
      userId: 5,
      movieId: 9
    } ,
    {
      body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
      rating: 2,
      userId: 3,
      movieId: 10
    } ,
    {
      body: 'The premise and idea was good, but what the heck was that ending?!',
      rating: 3,
      userId: 4,
      movieId: 11
    } ,
    {
      body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
      rating: 4,
      userId: 1,
      movieId: 12
    } ,
    {
      body: 'Awful experience. The plot did not even make sense',
      rating: 1,
      userId: 2,
      movieId: 13
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 14
    } ,
    {
      body: 'Excellent movie! One of the best I have seen recently',
      rating: 5,
      userId: 2,
      movieId: 15
    } ,
    {
      body: 'The premise and idea was good, but what the heck was that ending?!',
      rating: 3,
      userId: 4,
      movieId: 16
    } ,
    {
      body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
      rating: 1,
      userId: 3,
      movieId: 17
    } ,
    {
      body: 'Excellent movie! One of the best I have seen recently',
      rating: 5,
      userId: 2,
      movieId: 18
    } ,
    {
      body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
      rating: 1,
      userId: 5,
      movieId: 19
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 20
    } ,
    {
      body: 'Decent. I went into this with higher expectations than I should have',
      rating: 3,
      userId: 3,
      movieId: 21
    } ,
    {
      body: 'Excellent film, although I thought that it ended a little too suddenly.',
      rating: 4,
      userId: 5,
      movieId: 22
    } ,
    {
      body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
      rating: 2,
      userId: 4,
      movieId: 23
    } ,
    {
      body: 'Props for a scary monster/villian. Everything else was terribly executed.',
      rating: 2,
      userId: 4,
      movieId: 24
    } ,
    {
      body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
      rating: 3,
      userId: 5,
      movieId: 25
    } ,
    {
      body: 'Decent. I went into this with higher expectations than I should have',
      rating: 3,
      userId: 3,
      movieId: 26
    } ,
    {
      body: 'The premise and idea was good, but what the heck was that ending?!',
      rating: 3,
      userId: 4,
      movieId: 27
    } ,
    {
      body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
      rating: 2,
      userId: 3,
      movieId: 28
    } ,
    {
      body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
      rating: 1,
      userId: 3,
      movieId: 29
    } ,
    {
      body: 'Props for a scary monster/villian. Everything else was terribly executed.',
      rating: 2,
      userId: 4,
      movieId: 30
    } ,
    {
      body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
      rating: 2,
      userId: 3,
      movieId: 31
    } ,
    {
      body: 'Props for a scary monster/villian. Everything else was terribly executed.',
      rating: 2,
      userId: 4,
      movieId: 32
    } ,
    {
      body: 'Awful experience. The plot did not even make sense',
      rating: 1,
      userId: 2,
      movieId: 33
    } ,
    {
      body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
      rating: 1,
      userId: 5,
      movieId: 34
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 35
    } ,
    {
      body: 'Prepare to be absolutely terrified! What an experieence',
      rating: 5,
      userId: 2,
      movieId: 36
    } ,
    {
      body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
      rating: 1,
      userId: 5,
      movieId: 37
    } ,
    {
      body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
      rating: 2,
      userId: 3,
      movieId: 38
    } ,
    {
      body: 'Decent. I went into this with higher expectations than I should have',
      rating: 3,
      userId: 3,
      movieId: 39
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 40
    } ,
    {
      body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
      rating: 2,
      userId: 4,
      movieId: 41
    } ,
    {
      body: 'This was a great film! Although I would have liked to see a little more originality',
      rating: 4,
      userId: 2,
      movieId: 42
    } ,
    {
      body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
      rating: 1,
      userId: 3,
      movieId: 43
    } ,
    {
      body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
      rating: 1,
      userId: 3,
      movieId: 44
    } ,
    {
      body: 'Excellent film, although I thought that it ended a little too suddenly.',
      rating: 4,
      userId: 5,
      movieId: 45
    } ,
    {
      body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
      rating: 3,
      userId: 5,
      movieId: 46
    } ,
    {
      body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
      rating: 2,
      userId: 3,
      movieId: 47
    } ,
    {
      body: 'Excellent film, although I thought that it ended a little too suddenly.',
      rating: 4,
      userId: 5,
      movieId: 48
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 49
    } ,
    {
      body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
      rating: 2,
      userId: 4,
      movieId: 50
    } ,
    {
      body: 'Excellent film, although I thought that it ended a little too suddenly.',
      rating: 4,
      userId: 5,
      movieId: 51
    } ,
    {
      body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
      rating: 2,
      userId: 4,
      movieId: 52
    } ,
    {
      body: 'Props for a scary monster/villian. Everything else was terribly executed.',
      rating: 2,
      userId: 4,
      movieId: 53
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 54
    } ,
    {
      body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
      rating: 2,
      userId: 3,
      movieId: 55
    } ,
    {
      body: 'Excellent movie! One of the best I have seen recently',
      rating: 5,
      userId: 2,
      movieId: 56
    } ,
    {
      body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
      rating: 2,
      userId: 3,
      movieId: 57
    } ,
    {
      body: 'Props for a scary monster/villian. Everything else was terribly executed.',
      rating: 2,
      userId: 4,
      movieId: 58
    } ,
    {
      body: 'Awful experience. The plot did not even make sense',
      rating: 1,
      userId: 2,
      movieId: 59
    } ,
    {
      body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
      rating: 1,
      userId: 5,
      movieId: 60
    } ,
    {
      body: 'Awful experience. The plot did not even make sense',
      rating: 1,
      userId: 2,
      movieId: 61
    } ,
    {
      body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
      rating: 5,
      userId: 3,
      movieId: 62
    } ,
    {
      body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
      rating: 1,
      userId: 5,
      movieId: 63
    } ,
    {
      body: 'Prepare to be absolutely terrified! What an experieence',
      rating: 5,
      userId: 2,
      movieId: 64
    } ,
    {
      body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
      rating: 4,
      userId: 1,
      movieId: 65
    } ,
    {
      body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
      rating: 2,
      userId: 3,
      movieId: 66
    } ,
    {
      body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
      rating: 1,
      userId: 5,
      movieId: 67
    } ,
    {
      body: 'The premise and idea was good, but what the heck was that ending?!',
      rating: 3,
      userId: 4,
      movieId: 68
    } ,
    {
      body: 'The premise and idea was good, but what the heck was that ending?!',
      rating: 3,
      userId: 4,
      movieId: 69
    } ,
    {
      body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
      rating: 2,
      userId: 3,
      movieId: 70
    } ,
    {
      body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
      rating: 3,
      userId: 5,
      movieId: 71
    } ,
    {
      body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
      rating: 3,
      userId: 5,
      movieId: 72
    } ,
    {
      body: 'Awful experience. The plot did not even make sense',
      rating: 1,
      userId: 2,
      movieId: 73
    } ,
    {
      body: 'Excellent film, although I thought that it ended a little too suddenly.',
      rating: 4,
      userId: 5,
      movieId: 74
    } ,
    {
      body: 'Prepare to be absolutely terrified! What an experieence',
      rating: 5,
      userId: 2,
      movieId: 75
    } ,
    {
      body: 'Excellent movie! One of the best I have seen recently',
      rating: 5,
      userId: 2,
      movieId: 76
    } ,
    {
      body: 'Prepare to be absolutely terrified! What an experieence',
      rating: 5,
      userId: 2,
      movieId: 77
    } ,
    {
      body: 'Decent. I went into this with higher expectations than I should have',
      rating: 3,
      userId: 3,
      movieId: 78
    } ,
    {
      body: 'Decent. I went into this with higher expectations than I should have',
      rating: 3,
      userId: 3,
      movieId: 79
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 80
    } ,
    {
      body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
      rating: 2,
      userId: 3,
      movieId: 81
    } ,
    {
      body: 'Awful experience. The plot did not even make sense',
      rating: 1,
      userId: 2,
      movieId: 82
    } ,
    {
      body: 'Awful experience. The plot did not even make sense',
      rating: 1,
      userId: 2,
      movieId: 83
    } ,
    {
      body: 'Props for a scary monster/villian. Everything else was terribly executed.',
      rating: 2,
      userId: 4,
      movieId: 84
    } ,
    {
      body: 'This was a great film! Although I would have liked to see a little more originality',
      rating: 4,
      userId: 2,
      movieId: 85
    } ,
    {
      body: 'Decent. I went into this with higher expectations than I should have',
      rating: 3,
      userId: 3,
      movieId: 86
    } ,
    {
      body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
      rating: 1,
      userId: 5,
      movieId: 87
    } ,
    {
      body: 'Excellent movie! One of the best I have seen recently',
      rating: 5,
      userId: 2,
      movieId: 88
    } ,
    {
      body: 'This was a great film! Although I would have liked to see a little more originality',
      rating: 4,
      userId: 2,
      movieId: 89
    } ,
    {
      body: 'Excellent film, although I thought that it ended a little too suddenly.',
      rating: 4,
      userId: 5,
      movieId: 90
    } ,
    {
      body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
      rating: 4,
      userId: 1,
      movieId: 91
    } ,
    {
      body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
      rating: 1,
      userId: 3,
      movieId: 92
    } ,
    {
      body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
      rating: 5,
      userId: 3,
      movieId: 93
    } ,
    {
      body: 'Awful experience. The plot did not even make sense',
      rating: 1,
      userId: 2,
      movieId: 94
    } ,
    {
      body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
      rating: 1,
      userId: 5,
      movieId: 95
    } ,
    {
      body: 'This was a great film! Although I would have liked to see a little more originality',
      rating: 4,
      userId: 2,
      movieId: 96
    } ,
    {
      body: 'Prepare to be absolutely terrified! What an experieence',
      rating: 5,
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
      body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
      rating: 2,
      userId: 4,
      movieId: 99
    } ,
    {
      body: 'Decent. I went into this with higher expectations than I should have',
      rating: 3,
      userId: 3,
      movieId: 100
    } ,
    {
      body: 'Excellent movie! One of the best I have seen recently',
      rating: 5,
      userId: 2,
      movieId: 101
    } ,
    {
      body: 'Excellent film, although I thought that it ended a little too suddenly.',
      rating: 4,
      userId: 5,
      movieId: 102
    } ,
    {
      body: 'Props for a scary monster/villian. Everything else was terribly executed.',
      rating: 2,
      userId: 4,
      movieId: 103
    } ,
    {
      body: 'Decent. I went into this with higher expectations than I should have',
      rating: 3,
      userId: 3,
      movieId: 104
    } ,
    {
      body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
      rating: 1,
      userId: 3,
      movieId: 105
    } ,
    {
      body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
      rating: 4,
      userId: 1,
      movieId: 106
    } ,
    {
      body: 'Prepare to be absolutely terrified! What an experieence',
      rating: 5,
      userId: 2,
      movieId: 107
    } ,
    {
      body: 'Props for a scary monster/villian. Everything else was terribly executed.',
      rating: 2,
      userId: 4,
      movieId: 108
    } ,
    {
      body: 'Decent. I went into this with higher expectations than I should have',
      rating: 3,
      userId: 3,
      movieId: 109
    } ,
    {
      body: 'Awful experience. The plot did not even make sense',
      rating: 1,
      userId: 2,
      movieId: 110
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 1
    } ,
    {
      body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
      rating: 2,
      userId: 3,
      movieId: 2
    } ,
    {
      body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
      rating: 3,
      userId: 5,
      movieId: 3
    } ,
    {
      body: 'Awful experience. The plot did not even make sense',
      rating: 1,
      userId: 2,
      movieId: 4
    } ,
    {
      body: 'Prepare to be absolutely terrified! What an experieence',
      rating: 5,
      userId: 2,
      movieId: 5
    } ,
    {
      body: 'Props for a scary monster/villian. Everything else was terribly executed.',
      rating: 2,
      userId: 4,
      movieId: 6
    } ,
    {
      body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
      rating: 4,
      userId: 1,
      movieId: 7
    } ,
    {
      body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
      rating: 2,
      userId: 3,
      movieId: 8
    } ,
    {
      body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
      rating: 4,
      userId: 1,
      movieId: 9
    } ,
    {
      body: 'Props for a scary monster/villian. Everything else was terribly executed.',
      rating: 2,
      userId: 4,
      movieId: 10
    } ,
    {
      body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
      rating: 3,
      userId: 5,
      movieId: 11
    } ,
    {
      body: 'Awful experience. The plot did not even make sense',
      rating: 1,
      userId: 2,
      movieId: 12
    } ,
    {
      body: 'This was a great film! Although I would have liked to see a little more originality',
      rating: 4,
      userId: 2,
      movieId: 13
    } ,
    {
      body: 'Decent. I went into this with higher expectations than I should have',
      rating: 3,
      userId: 3,
      movieId: 14
    } ,
    {
      body: 'This was a great film! Although I would have liked to see a little more originality',
      rating: 4,
      userId: 2,
      movieId: 15
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 16
    } ,
    {
      body: 'The premise and idea was good, but what the heck was that ending?!',
      rating: 3,
      userId: 4,
      movieId: 17
    } ,
    {
      body: 'Props for a scary monster/villian. Everything else was terribly executed.',
      rating: 2,
      userId: 4,
      movieId: 18
    } ,
    {
      body: 'Excellent movie! One of the best I have seen recently',
      rating: 5,
      userId: 2,
      movieId: 19
    } ,
    {
      body: 'Awful experience. The plot did not even make sense',
      rating: 1,
      userId: 2,
      movieId: 20
    } ,
    {
      body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
      rating: 3,
      userId: 5,
      movieId: 21
    } ,
    {
      body: 'Excellent film, although I thought that it ended a little too suddenly.',
      rating: 4,
      userId: 5,
      movieId: 22
    } ,
    {
      body: 'Awful experience. The plot did not even make sense',
      rating: 1,
      userId: 2,
      movieId: 23
    } ,
    {
      body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
      rating: 3,
      userId: 5,
      movieId: 24
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 25
    } ,
    {
      body: 'Prepare to be absolutely terrified! What an experieence',
      rating: 5,
      userId: 2,
      movieId: 26
    } ,
    {
      body: 'The premise and idea was good, but what the heck was that ending?!',
      rating: 3,
      userId: 4,
      movieId: 27
    } ,
    {
      body: 'Excellent movie! One of the best I have seen recently',
      rating: 5,
      userId: 2,
      movieId: 28
    } ,
    {
      body: 'Prepare to be absolutely terrified! What an experieence',
      rating: 5,
      userId: 2,
      movieId: 29
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 30
    } ,
    {
      body: 'Awful experience. The plot did not even make sense',
      rating: 1,
      userId: 2,
      movieId: 31
    } ,
    {
      body: 'Prepare to be absolutely terrified! What an experieence',
      rating: 5,
      userId: 2,
      movieId: 32
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 33
    } ,
    {
      body: 'Excellent movie! One of the best I have seen recently',
      rating: 5,
      userId: 2,
      movieId: 34
    } ,
    {
      body: 'Excellent film, although I thought that it ended a little too suddenly.',
      rating: 4,
      userId: 5,
      movieId: 35
    } ,
    {
      body: 'Prepare to be absolutely terrified! What an experieence',
      rating: 5,
      userId: 2,
      movieId: 36
    } ,
    {
      body: 'Excellent movie! One of the best I have seen recently',
      rating: 5,
      userId: 2,
      movieId: 37
    } ,
    {
      body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
      rating: 3,
      userId: 5,
      movieId: 38
    } ,
    {
      body: 'Prepare to be absolutely terrified! What an experieence',
      rating: 5,
      userId: 2,
      movieId: 39
    } ,
    {
      body: 'Awful experience. The plot did not even make sense',
      rating: 1,
      userId: 2,
      movieId: 40
    } ,
    {
      body: 'Excellent movie! One of the best I have seen recently',
      rating: 5,
      userId: 2,
      movieId: 41
    } ,
    {
      body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
      rating: 5,
      userId: 3,
      movieId: 42
    } ,
    {
      body: 'This was a great film! Although I would have liked to see a little more originality',
      rating: 4,
      userId: 2,
      movieId: 43
    } ,
    {
      body: 'Prepare to be absolutely terrified! What an experieence',
      rating: 5,
      userId: 2,
      movieId: 44
    } ,
    {
      body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
      rating: 1,
      userId: 3,
      movieId: 45
    } ,
    {
      body: 'Props for a scary monster/villian. Everything else was terribly executed.',
      rating: 2,
      userId: 4,
      movieId: 46
    } ,
    {
      body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
      rating: 2,
      userId: 4,
      movieId: 47
    } ,
    {
      body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
      rating: 1,
      userId: 5,
      movieId: 48
    } ,
    {
      body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
      rating: 5,
      userId: 3,
      movieId: 49
    } ,
    {
      body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
      rating: 1,
      userId: 3,
      movieId: 50
    } ,
    {
      body: 'Excellent movie! One of the best I have seen recently',
      rating: 5,
      userId: 2,
      movieId: 51
    } ,
    {
      body: 'This was a great film! Although I would have liked to see a little more originality',
      rating: 4,
      userId: 2,
      movieId: 52
    } ,
    {
      body: 'Prepare to be absolutely terrified! What an experieence',
      rating: 5,
      userId: 2,
      movieId: 53
    } ,
    {
      body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
      rating: 5,
      userId: 3,
      movieId: 54
    } ,
    {
      body: 'The premise and idea was good, but what the heck was that ending?!',
      rating: 3,
      userId: 4,
      movieId: 55
    } ,
    {
      body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
      rating: 3,
      userId: 5,
      movieId: 56
    } ,
    {
      body: 'The premise and idea was good, but what the heck was that ending?!',
      rating: 3,
      userId: 4,
      movieId: 57
    } ,
    {
      body: 'Prepare to be absolutely terrified! What an experieence',
      rating: 5,
      userId: 2,
      movieId: 58
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 59
    } ,
    {
      body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
      rating: 4,
      userId: 1,
      movieId: 60
    } ,
    {
      body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
      rating: 5,
      userId: 3,
      movieId: 61
    } ,
    {
      body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
      rating: 1,
      userId: 5,
      movieId: 62
    } ,
    {
      body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
      rating: 2,
      userId: 4,
      movieId: 63
    } ,
    {
      body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
      rating: 1,
      userId: 3,
      movieId: 64
    } ,
    {
      body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
      rating: 1,
      userId: 3,
      movieId: 65
    } ,
    {
      body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
      rating: 1,
      userId: 3,
      movieId: 66
    } ,
    {
      body: 'Excellent movie! One of the best I have seen recently',
      rating: 5,
      userId: 2,
      movieId: 67
    } ,
    {
      body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
      rating: 5,
      userId: 3,
      movieId: 68
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 69
    } ,
    {
      body: 'Prepare to be absolutely terrified! What an experieence',
      rating: 5,
      userId: 2,
      movieId: 70
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 71
    } ,
    {
      body: 'Awful experience. The plot did not even make sense',
      rating: 1,
      userId: 2,
      movieId: 72
    } ,
    {
      body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
      rating: 2,
      userId: 3,
      movieId: 73
    } ,
    {
      body: 'Props for a scary monster/villian. Everything else was terribly executed.',
      rating: 2,
      userId: 4,
      movieId: 74
    } ,
    {
      body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
      rating: 5,
      userId: 3,
      movieId: 75
    } ,
    {
      body: 'Props for a scary monster/villian. Everything else was terribly executed.',
      rating: 2,
      userId: 4,
      movieId: 76
    } ,
    {
      body: 'Props for a scary monster/villian. Everything else was terribly executed.',
      rating: 2,
      userId: 4,
      movieId: 77
    } ,
    {
      body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
      rating: 1,
      userId: 5,
      movieId: 78
    } ,
    {
      body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
      rating: 2,
      userId: 3,
      movieId: 79
    } ,
    {
      body: 'Awful experience. The plot did not even make sense',
      rating: 1,
      userId: 2,
      movieId: 80
    } ,
    {
      body: 'Excellent film, although I thought that it ended a little too suddenly.',
      rating: 4,
      userId: 5,
      movieId: 81
    } ,
    {
      body: 'Props for a scary monster/villian. Everything else was terribly executed.',
      rating: 2,
      userId: 4,
      movieId: 82
    } ,
    {
      body: 'Excellent movie! One of the best I have seen recently',
      rating: 5,
      userId: 2,
      movieId: 83
    } ,
    {
      body: 'Excellent film, although I thought that it ended a little too suddenly.',
      rating: 4,
      userId: 5,
      movieId: 84
    } ,
    {
      body: 'Awful experience. The plot did not even make sense',
      rating: 1,
      userId: 2,
      movieId: 85
    } ,
    {
      body: 'The premise and idea was good, but what the heck was that ending?!',
      rating: 3,
      userId: 4,
      movieId: 86
    } ,
    {
      body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
      rating: 1,
      userId: 3,
      movieId: 87
    } ,
    {
      body: 'Excellent movie! One of the best I have seen recently',
      rating: 5,
      userId: 2,
      movieId: 88
    } ,
    {
      body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
      rating: 1,
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
      body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
      rating: 3,
      userId: 5,
      movieId: 91
    } ,
    {
      body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
      rating: 1,
      userId: 5,
      movieId: 92
    } ,
    {
      body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
      rating: 5,
      userId: 3,
      movieId: 93
    } ,
    {
      body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
      rating: 1,
      userId: 3,
      movieId: 94
    } ,
    {
      body: 'Props for a scary monster/villian. Everything else was terribly executed.',
      rating: 2,
      userId: 4,
      movieId: 95
    } ,
    {
      body: 'Excellent film, although I thought that it ended a little too suddenly.',
      rating: 4,
      userId: 5,
      movieId: 96
    } ,
    {
      body: 'Awful experience. The plot did not even make sense',
      rating: 1,
      userId: 2,
      movieId: 97
    } ,
    {
      body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
      rating: 1,
      userId: 5,
      movieId: 98
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 99
    } ,
    {
      body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
      rating: 1,
      userId: 3,
      movieId: 100
    } ,
    {
      body: 'Props for a scary monster/villian. Everything else was terribly executed.',
      rating: 2,
      userId: 4,
      movieId: 101
    } ,
    {
      body: 'Excellent film, although I thought that it ended a little too suddenly.',
      rating: 4,
      userId: 5,
      movieId: 102
    } ,
    {
      body: 'Decent. I went into this with higher expectations than I should have',
      rating: 3,
      userId: 3,
      movieId: 103
    } ,
    {
      body: 'Awful experience. The plot did not even make sense',
      rating: 1,
      userId: 2,
      movieId: 104
    } ,
    {
      body: 'Decent. I went into this with higher expectations than I should have',
      rating: 3,
      userId: 3,
      movieId: 105
    } ,
    {
      body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
      rating: 1,
      userId: 5,
      movieId: 106
    } ,
    {
      body: 'Awful experience. The plot did not even make sense',
      rating: 1,
      userId: 2,
      movieId: 107
    } ,
    {
      body: 'This was a great film! Although I would have liked to see a little more originality',
      rating: 4,
      userId: 2,
      movieId: 108
    } ,
    {
      body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
      rating: 3,
      userId: 5,
      movieId: 109
    } ,
    {
      body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
      rating: 1,
      userId: 3,
      movieId: 110
    } ,
    {
      body: 'The premise and idea was good, but what the heck was that ending?!',
      rating: 3,
      userId: 4,
      movieId: 1
    } ,
    {
      body: 'Props for a scary monster/villian. Everything else was terribly executed.',
      rating: 2,
      userId: 4,
      movieId: 2
    } ,
    {
      body: 'The premise and idea was good, but what the heck was that ending?!',
      rating: 3,
      userId: 4,
      movieId: 3
    } ,
    {
      body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
      rating: 1,
      userId: 5,
      movieId: 4
    } ,
    {
      body: 'Props for a scary monster/villian. Everything else was terribly executed.',
      rating: 2,
      userId: 4,
      movieId: 5
    } ,
    {
      body: 'Excellent movie! One of the best I have seen recently',
      rating: 5,
      userId: 2,
      movieId: 6
    } ,
    {
      body: 'Excellent movie! One of the best I have seen recently',
      rating: 5,
      userId: 2,
      movieId: 7
    } ,
    {
      body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
      rating: 3,
      userId: 5,
      movieId: 8
    } ,
    {
      body: 'Excellent movie! One of the best I have seen recently',
      rating: 5,
      userId: 2,
      movieId: 9
    } ,
    {
      body: 'The premise and idea was good, but what the heck was that ending?!',
      rating: 3,
      userId: 4,
      movieId: 10
    } ,
    {
      body: 'The premise and idea was good, but what the heck was that ending?!',
      rating: 3,
      userId: 4,
      movieId: 11
    } ,
    {
      body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
      rating: 3,
      userId: 5,
      movieId: 12
    } ,
    {
      body: 'Excellent film, although I thought that it ended a little too suddenly.',
      rating: 4,
      userId: 5,
      movieId: 13
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 14
    } ,
    {
      body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
      rating: 4,
      userId: 1,
      movieId: 15
    } ,
    {
      body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
      rating: 2,
      userId: 4,
      movieId: 16
    } ,
    {
      body: 'Props for a scary monster/villian. Everything else was terribly executed.',
      rating: 2,
      userId: 4,
      movieId: 17
    } ,
    {
      body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
      rating: 4,
      userId: 1,
      movieId: 18
    } ,
    {
      body: 'Awful experience. The plot did not even make sense',
      rating: 1,
      userId: 2,
      movieId: 19
    } ,
    {
      body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
      rating: 2,
      userId: 3,
      movieId: 20
    } ,
    {
      body: 'Prepare to be absolutely terrified! What an experieence',
      rating: 5,
      userId: 2,
      movieId: 21
    } ,
    {
      body: 'Excellent film, although I thought that it ended a little too suddenly.',
      rating: 4,
      userId: 5,
      movieId: 22
    } ,
    {
      body: 'Awful experience. The plot did not even make sense',
      rating: 1,
      userId: 2,
      movieId: 23
    } ,
    {
      body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
      rating: 3,
      userId: 5,
      movieId: 24
    } ,
    {
      body: 'This was a great film! Although I would have liked to see a little more originality',
      rating: 4,
      userId: 2,
      movieId: 25
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 26
    } ,
    {
      body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
      rating: 1,
      userId: 5,
      movieId: 27
    } ,
    {
      body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
      rating: 2,
      userId: 3,
      movieId: 28
    } ,
    {
      body: 'Prepare to be absolutely terrified! What an experieence',
      rating: 5,
      userId: 2,
      movieId: 29
    } ,
    {
      body: 'The premise and idea was good, but what the heck was that ending?!',
      rating: 3,
      userId: 4,
      movieId: 30
    } ,
    {
      body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
      rating: 2,
      userId: 3,
      movieId: 31
    } ,
    {
      body: 'Decent. I went into this with higher expectations than I should have',
      rating: 3,
      userId: 3,
      movieId: 32
    } ,
    {
      body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
      rating: 5,
      userId: 3,
      movieId: 33
    } ,
    {
      body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
      rating: 2,
      userId: 4,
      movieId: 34
    } ,
    {
      body: 'Props for a scary monster/villian. Everything else was terribly executed.',
      rating: 2,
      userId: 4,
      movieId: 35
    } ,
    {
      body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
      rating: 5,
      userId: 3,
      movieId: 36
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 37
    } ,
    {
      body: 'Excellent movie! One of the best I have seen recently',
      rating: 5,
      userId: 2,
      movieId: 38
    } ,
    {
      body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
      rating: 4,
      userId: 1,
      movieId: 39
    } ,
    {
      body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
      rating: 3,
      userId: 5,
      movieId: 40
    } ,
    {
      body: 'Prepare to be absolutely terrified! What an experieence',
      rating: 5,
      userId: 2,
      movieId: 41
    } ,
    {
      body: 'Decent. I went into this with higher expectations than I should have',
      rating: 3,
      userId: 3,
      movieId: 42
    } ,
    {
      body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
      rating: 1,
      userId: 5,
      movieId: 43
    } ,
    {
      body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
      rating: 2,
      userId: 4,
      movieId: 44
    } ,
    {
      body: 'Props for a scary monster/villian. Everything else was terribly executed.',
      rating: 2,
      userId: 4,
      movieId: 45
    } ,
    {
      body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
      rating: 5,
      userId: 3,
      movieId: 46
    } ,
    {
      body: 'Awful experience. The plot did not even make sense',
      rating: 1,
      userId: 2,
      movieId: 47
    } ,
    {
      body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
      rating: 2,
      userId: 3,
      movieId: 48
    } ,
    {
      body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
      rating: 5,
      userId: 3,
      movieId: 49
    } ,
    {
      body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
      rating: 3,
      userId: 5,
      movieId: 50
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 51
    } ,
    {
      body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
      rating: 4,
      userId: 1,
      movieId: 52
    } ,
    {
      body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
      rating: 5,
      userId: 3,
      movieId: 53
    } ,
    {
      body: 'The premise and idea was good, but what the heck was that ending?!',
      rating: 3,
      userId: 4,
      movieId: 54
    } ,
    {
      body: 'The premise and idea was good, but what the heck was that ending?!',
      rating: 3,
      userId: 4,
      movieId: 55
    } ,
    {
      body: 'Props for a scary monster/villian. Everything else was terribly executed.',
      rating: 2,
      userId: 4,
      movieId: 56
    } ,
    {
      body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
      rating: 5,
      userId: 3,
      movieId: 57
    } ,
    {
      body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
      rating: 1,
      userId: 5,
      movieId: 58
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 59
    } ,
    {
      body: 'Excellent film, although I thought that it ended a little too suddenly.',
      rating: 4,
      userId: 5,
      movieId: 60
    } ,
    {
      body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
      rating: 2,
      userId: 4,
      movieId: 61
    } ,
    {
      body: 'The premise and idea was good, but what the heck was that ending?!',
      rating: 3,
      userId: 4,
      movieId: 62
    } ,
    {
      body: 'Excellent movie! One of the best I have seen recently',
      rating: 5,
      userId: 2,
      movieId: 63
    } ,
    {
      body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
      rating: 2,
      userId: 3,
      movieId: 64
    } ,
    {
      body: 'The premise and idea was good, but what the heck was that ending?!',
      rating: 3,
      userId: 4,
      movieId: 65
    } ,
    {
      body: 'Props for a scary monster/villian. Everything else was terribly executed.',
      rating: 2,
      userId: 4,
      movieId: 66
    } ,
    {
      body: 'Excellent movie! One of the best I have seen recently',
      rating: 5,
      userId: 2,
      movieId: 67
    } ,
    {
      body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
      rating: 1,
      userId: 5,
      movieId: 68
    } ,
    {
      body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
      rating: 2,
      userId: 4,
      movieId: 69
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 70
    } ,
    {
      body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
      rating: 3,
      userId: 5,
      movieId: 71
    } ,
    {
      body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
      rating: 5,
      userId: 3,
      movieId: 72
    } ,
    {
      body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
      rating: 5,
      userId: 3,
      movieId: 73
    } ,
    {
      body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
      rating: 2,
      userId: 4,
      movieId: 74
    } ,
    {
      body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
      rating: 1,
      userId: 5,
      movieId: 75
    } ,
    {
      body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
      rating: 2,
      userId: 3,
      movieId: 76
    } ,
    {
      body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
      rating: 1,
      userId: 3,
      movieId: 77
    } ,
    {
      body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
      rating: 1,
      userId: 5,
      movieId: 78
    } ,
    {
      body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
      rating: 2,
      userId: 4,
      movieId: 79
    } ,
    {
      body: 'Excellent movie! One of the best I have seen recently',
      rating: 5,
      userId: 2,
      movieId: 80
    } ,
    {
      body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
      rating: 1,
      userId: 3,
      movieId: 81
    } ,
    {
      body: 'This was a great film! Although I would have liked to see a little more originality',
      rating: 4,
      userId: 2,
      movieId: 82
    } ,
    {
      body: 'Prepare to be absolutely terrified! What an experieence',
      rating: 5,
      userId: 2,
      movieId: 83
    } ,
    {
      body: 'The premise and idea was good, but what the heck was that ending?!',
      rating: 3,
      userId: 4,
      movieId: 84
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 85
    } ,
    {
      body: 'Decent. I went into this with higher expectations than I should have',
      rating: 3,
      userId: 3,
      movieId: 86
    } ,
    {
      body: 'Props for a scary monster/villian. Everything else was terribly executed.',
      rating: 2,
      userId: 4,
      movieId: 87
    } ,
    {
      body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
      rating: 4,
      userId: 1,
      movieId: 88
    } ,
    {
      body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
      rating: 1,
      userId: 3,
      movieId: 89
    } ,
    {
      body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
      rating: 2,
      userId: 4,
      movieId: 90
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 91
    } ,
    {
      body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
      rating: 4,
      userId: 1,
      movieId: 92
    } ,
    {
      body: 'Props for a scary monster/villian. Everything else was terribly executed.',
      rating: 2,
      userId: 4,
      movieId: 93
    } ,
    {
      body: 'This was a great film! Although I would have liked to see a little more originality',
      rating: 4,
      userId: 2,
      movieId: 94
    } ,
    {
      body: 'Excellent movie! One of the best I have seen recently',
      rating: 5,
      userId: 2,
      movieId: 95
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 96
    } ,
    {
      body: 'This was a great film! Although I would have liked to see a little more originality',
      rating: 4,
      userId: 2,
      movieId: 97
    } ,
    {
      body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
      rating: 2,
      userId: 3,
      movieId: 98
    } ,
    {
      body: 'This was a great film! Although I would have liked to see a little more originality',
      rating: 4,
      userId: 2,
      movieId: 99
    } ,
    {
      body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
      rating: 5,
      userId: 3,
      movieId: 100
    } ,
    {
      body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
      rating: 4,
      userId: 1,
      movieId: 101
    } ,
    {
      body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
      rating: 1,
      userId: 3,
      movieId: 102
    } ,
    {
      body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
      rating: 4,
      userId: 1,
      movieId: 103
    } ,
    {
      body: 'The premise and idea was good, but what the heck was that ending?!',
      rating: 3,
      userId: 4,
      movieId: 104
    } ,
    {
      body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
      rating: 4,
      userId: 1,
      movieId: 105
    } ,
    {
      body: 'Excellent movie! One of the best I have seen recently',
      rating: 5,
      userId: 2,
      movieId: 106
    } ,
    {
      body: 'Props for a scary monster/villian. Everything else was terribly executed.',
      rating: 2,
      userId: 4,
      movieId: 107
    } ,
    {
      body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
      rating: 5,
      userId: 3,
      movieId: 108
    } ,
    {
      body: 'This was a great film! Although I would have liked to see a little more originality',
      rating: 4,
      userId: 2,
      movieId: 109
    } ,
    {
      body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
      rating: 2,
      userId: 4,
      movieId: 110
    } ,
    {
      body: 'Prepare to be absolutely terrified! What an experieence',
      rating: 5,
      userId: 2,
      movieId: 1
    } ,
    {
      body: 'Awful experience. The plot did not even make sense',
      rating: 1,
      userId: 2,
      movieId: 2
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 3
    } ,
    {
      body: 'Props for a scary monster/villian. Everything else was terribly executed.',
      rating: 2,
      userId: 4,
      movieId: 4
    } ,
    {
      body: 'Prepare to be absolutely terrified! What an experieence',
      rating: 5,
      userId: 2,
      movieId: 5
    } ,
    {
      body: 'Excellent film, although I thought that it ended a little too suddenly.',
      rating: 4,
      userId: 5,
      movieId: 6
    } ,
    {
      body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
      rating: 4,
      userId: 1,
      movieId: 7
    } ,
    {
      body: 'Excellent movie! One of the best I have seen recently',
      rating: 5,
      userId: 2,
      movieId: 8
    } ,
    {
      body: 'The premise and idea was good, but what the heck was that ending?!',
      rating: 3,
      userId: 4,
      movieId: 9
    } ,
    {
      body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
      rating: 1,
      userId: 3,
      movieId: 10
    } ,
    {
      body: 'Prepare to be absolutely terrified! What an experieence',
      rating: 5,
      userId: 2,
      movieId: 11
    } ,
    {
      body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
      rating: 3,
      userId: 5,
      movieId: 12
    } ,
    {
      body: 'Props for a scary monster/villian. Everything else was terribly executed.',
      rating: 2,
      userId: 4,
      movieId: 13
    } ,
    {
      body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
      rating: 4,
      userId: 1,
      movieId: 14
    } ,
    {
      body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
      rating: 2,
      userId: 3,
      movieId: 15
    } ,
    {
      body: 'The premise and idea was good, but what the heck was that ending?!',
      rating: 3,
      userId: 4,
      movieId: 16
    } ,
    {
      body: 'Props for a scary monster/villian. Everything else was terribly executed.',
      rating: 2,
      userId: 4,
      movieId: 17
    } ,
    {
      body: 'Prepare to be absolutely terrified! What an experieence',
      rating: 5,
      userId: 2,
      movieId: 18
    } ,
    {
      body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
      rating: 2,
      userId: 3,
      movieId: 19
    } ,
    {
      body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
      rating: 4,
      userId: 1,
      movieId: 20
    } ,
    {
      body: 'Excellent movie! One of the best I have seen recently',
      rating: 5,
      userId: 2,
      movieId: 21
    } ,
    {
      body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
      rating: 1,
      userId: 5,
      movieId: 22
    } ,
    {
      body: 'Awful experience. The plot did not even make sense',
      rating: 1,
      userId: 2,
      movieId: 23
    } ,
    {
      body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
      rating: 5,
      userId: 3,
      movieId: 24
    } ,
    {
      body: 'Decent. I went into this with higher expectations than I should have',
      rating: 3,
      userId: 3,
      movieId: 25
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 26
    } ,
    {
      body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
      rating: 5,
      userId: 3,
      movieId: 27
    } ,
    {
      body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
      rating: 5,
      userId: 3,
      movieId: 28
    } ,
    {
      body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
      rating: 2,
      userId: 3,
      movieId: 29
    } ,
    {
      body: 'Excellent film, although I thought that it ended a little too suddenly.',
      rating: 4,
      userId: 5,
      movieId: 30
    } ,
    {
      body: 'Awful experience. The plot did not even make sense',
      rating: 1,
      userId: 2,
      movieId: 31
    } ,
    {
      body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
      rating: 3,
      userId: 5,
      movieId: 32
    } ,
    {
      body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
      rating: 2,
      userId: 3,
      movieId: 33
    } ,
    {
      body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
      rating: 1,
      userId: 3,
      movieId: 34
    } ,
    {
      body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
      rating: 2,
      userId: 4,
      movieId: 35
    } ,
    {
      body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
      rating: 5,
      userId: 3,
      movieId: 36
    } ,
    {
      body: 'Awful experience. The plot did not even make sense',
      rating: 1,
      userId: 2,
      movieId: 37
    } ,
    {
      body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
      rating: 4,
      userId: 1,
      movieId: 38
    } ,
    {
      body: 'Excellent film, although I thought that it ended a little too suddenly.',
      rating: 4,
      userId: 5,
      movieId: 39
    } ,
    {
      body: 'Props for a scary monster/villian. Everything else was terribly executed.',
      rating: 2,
      userId: 4,
      movieId: 40
    } ,
    {
      body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
      rating: 5,
      userId: 3,
      movieId: 41
    } ,
    {
      body: 'Prepare to be absolutely terrified! What an experieence',
      rating: 5,
      userId: 2,
      movieId: 42
    } ,
    {
      body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
      rating: 3,
      userId: 5,
      movieId: 43
    } ,
    {
      body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
      rating: 3,
      userId: 5,
      movieId: 44
    } ,
    {
      body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
      rating: 1,
      userId: 3,
      movieId: 45
    } ,
    {
      body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
      rating: 1,
      userId: 3,
      movieId: 46
    } ,
    {
      body: 'Excellent movie! One of the best I have seen recently',
      rating: 5,
      userId: 2,
      movieId: 47
    } ,
    {
      body: 'Prepare to be absolutely terrified! What an experieence',
      rating: 5,
      userId: 2,
      movieId: 48
    } ,
    {
      body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
      rating: 1,
      userId: 5,
      movieId: 49
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 50
    } ,
    {
      body: 'Excellent film, although I thought that it ended a little too suddenly.',
      rating: 4,
      userId: 5,
      movieId: 51
    } ,
    {
      body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
      rating: 3,
      userId: 5,
      movieId: 52
    } ,
    {
      body: 'Awful experience. The plot did not even make sense',
      rating: 1,
      userId: 2,
      movieId: 53
    } ,
    {
      body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
      rating: 2,
      userId: 4,
      movieId: 54
    } ,
    {
      body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
      rating: 2,
      userId: 3,
      movieId: 55
    } ,
    {
      body: 'Props for a scary monster/villian. Everything else was terribly executed.',
      rating: 2,
      userId: 4,
      movieId: 56
    } ,
    {
      body: 'Decent. I went into this with higher expectations than I should have',
      rating: 3,
      userId: 3,
      movieId: 57
    } ,
    {
      body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
      rating: 5,
      userId: 3,
      movieId: 58
    } ,
    {
      body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
      rating: 2,
      userId: 3,
      movieId: 59
    } ,
    {
      body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
      rating: 1,
      userId: 5,
      movieId: 60
    } ,
    {
      body: 'Prepare to be absolutely terrified! What an experieence',
      rating: 5,
      userId: 2,
      movieId: 61
    } ,
    {
      body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
      rating: 1,
      userId: 5,
      movieId: 62
    } ,
    {
      body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
      rating: 1,
      userId: 5,
      movieId: 63
    } ,
    {
      body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
      rating: 2,
      userId: 4,
      movieId: 64
    } ,
    {
      body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
      rating: 2,
      userId: 3,
      movieId: 65
    } ,
    {
      body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
      rating: 3,
      userId: 5,
      movieId: 66
    } ,
    {
      body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
      rating: 2,
      userId: 3,
      movieId: 67
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 68
    } ,
    {
      body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
      rating: 4,
      userId: 1,
      movieId: 69
    } ,
    {
      body: 'Props for a scary monster/villian. Everything else was terribly executed.',
      rating: 2,
      userId: 4,
      movieId: 70
    } ,
    {
      body: 'Prepare to be absolutely terrified! What an experieence',
      rating: 5,
      userId: 2,
      movieId: 71
    } ,
    {
      body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
      rating: 3,
      userId: 5,
      movieId: 72
    } ,
    {
      body: 'This was a great film! Although I would have liked to see a little more originality',
      rating: 4,
      userId: 2,
      movieId: 73
    } ,
    {
      body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
      rating: 5,
      userId: 3,
      movieId: 74
    } ,
    {
      body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
      rating: 1,
      userId: 5,
      movieId: 75
    } ,
    {
      body: 'Prepare to be absolutely terrified! What an experieence',
      rating: 5,
      userId: 2,
      movieId: 76
    } ,
    {
      body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
      rating: 3,
      userId: 5,
      movieId: 77
    } ,
    {
      body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
      rating: 2,
      userId: 4,
      movieId: 78
    } ,
    {
      body: 'Excellent film, although I thought that it ended a little too suddenly.',
      rating: 4,
      userId: 5,
      movieId: 79
    } ,
    {
      body: 'You can tell they did not have a massivebudget to work with, but overall the film was pretty entertaining',
      rating: 3,
      userId: 5,
      movieId: 80
    } ,
    {
      body: 'Decent. I went into this with higher expectations than I should have',
      rating: 3,
      userId: 3,
      movieId: 81
    } ,
    {
      body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
      rating: 2,
      userId: 3,
      movieId: 82
    } ,
    {
      body: 'The premise and idea was good, but what the heck was that ending?!',
      rating: 3,
      userId: 4,
      movieId: 83
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 84
    } ,
    {
      body: 'The premise and idea was good, but what the heck was that ending?!',
      rating: 3,
      userId: 4,
      movieId: 85
    } ,
    {
      body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
      rating: 2,
      userId: 4,
      movieId: 86
    } ,
    {
      body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
      rating: 2,
      userId: 4,
      movieId: 87
    } ,
    {
      body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
      rating: 2,
      userId: 3,
      movieId: 88
    } ,
    {
      body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
      rating: 5,
      userId: 3,
      movieId: 89
    } ,
    {
      body: 'Excellent film, although I thought that it ended a little too suddenly.',
      rating: 4,
      userId: 5,
      movieId: 90
    } ,
    {
      body: 'Excellent movie! One of the best I have seen recently',
      rating: 5,
      userId: 2,
      movieId: 91
    } ,
    {
      body: 'Excellent film, although I thought that it ended a little too suddenly.',
      rating: 4,
      userId: 5,
      movieId: 92
    } ,
    {
      body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
      rating: 1,
      userId: 5,
      movieId: 93
    } ,
    {
      body: 'Decent. I went into this with higher expectations than I should have',
      rating: 3,
      userId: 3,
      movieId: 94
    } ,
    {
      body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
      rating: 4,
      userId: 1,
      movieId: 95
    } ,
    {
      body: 'I would have given this one star, but I have a huge crush on the lead actor. Not their best work at all',
      rating: 2,
      userId: 3,
      movieId: 96
    } ,
    {
      body: 'Pretty great! A few questionable character decisions, but a very enjoyable and fun film to watch with your partner ',
      rating: 4,
      userId: 4,
      movieId: 97
    } ,
    {
      body: 'This was a great film! Although I would have liked to see a little more originality',
      rating: 4,
      userId: 2,
      movieId: 98
    } ,
    {
      body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
      rating: 5,
      userId: 3,
      movieId: 99
    } ,
    {
      body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
      rating: 4,
      userId: 1,
      movieId: 100
    } ,
    {
      body: 'Awful experience. The plot did not even make sense',
      rating: 1,
      userId: 2,
      movieId: 101
    } ,
    {
      body: "The only reason this didn't get 1 star was because they killed off the annoying character quickly",
      rating: 2,
      userId: 4,
      movieId: 102
    } ,
    {
      body: 'One of the worst horror movies I have ever watched. Stay wway if you value your time.',
      rating: 1,
      userId: 5,
      movieId: 103
    } ,
    {
      body: 'This was a quality film. It was not perfect, but overall it fleshed out some new ideas and kept me interested',
      rating: 4,
      userId: 1,
      movieId: 104
    } ,
    {
      body: 'Awful experience. The plot did not even make sense',
      rating: 1,
      userId: 2,
      movieId: 105
    } ,
    {
      body: "I don't know why I even wasted my time with this. Do yourself a favor and skip it",
      rating: 1,
      userId: 3,
      movieId: 106
    } ,
    {
      body: 'Prepare to be absolutely terrified! What an experieence',
      rating: 5,
      userId: 2,
      movieId: 107
    } ,
    {
      body: 'One of the best movie nights I can remember!! So scary! and it was an absolute blast to watch with my friends',
      rating: 5,
      userId: 3,
      movieId: 108
    } ,
    {
      body: 'The premise and idea was good, but what the heck was that ending?!',
      rating: 3,
      userId: 4,
      movieId: 109
    } ,
    {
      body: 'Props for a scary monster/villian. Everything else was terribly executed.',
      rating: 2,
      userId: 4,
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
