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
