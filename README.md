# HorrorHost

HorrorHost is a website allowing you to curate your own blood-curdling collection of horror movies while discovering new favorites! HorrorHost can be found at: https://horrorhost.herokuapp.com/

## Development
* You can read more about the project using the wiki located at: https://github.com/amandahinton/film-macabre/wiki
* To start a development environment:
    1. Clone the repository at: https://github.com/amandahinton/film-macabre
    2. Run the command "npm install" from the project root in your terminal to install dependencies.
    3. Run the command "npm start" to launch the server
    4. Navigate to the localhost port specified in config/index.js

## Technologies Used
* Javascript
* HTML/CSS
* Pug
* Node.js
* Express
* Postgres
* Sequelize
* Heroku
* Git/Github

##  Features
* Users
    * User functionality including registration, Login/Logout authentication, and authorization to perform different CRUD operations throughout the site is all present.
    * The Bcrypt hashing algorithm is used to maintain password security.
    * All forms are protected against Csurf attacks
* Shelves
    * Authenticated users can create custom shelves and add/delete movies from their shelves or the 3 default shelves created for them upon registration. Custom shelves can also be deleted.
* Movies
    * A list of horror movies and their corresponding reviews/rating can be browsed at the user's leisure.
* Reviews
    * Authenticated Users can submit a review for a movie, or edit/delete their review if they have previously submitted one.
## Challenges
We ran into some problems along the way including:
* We learned quickly how important it is to ensure that nobody pushes to the main branch without a review process, and to commit early and often to keep all the branches updated.
* A script we implemented to hide the review edit form until a button is clicked was toggling correctly between hidden and visible, but was incorrectly displaying as visible at first. We fixed this by reordering our css file. Order is important!
* Not really a bug, but implementing a star rating system for each movie was a lot more challenging than expected and I have a new appreciation for that feature in other sites.
## Code Highlights
* Star reviews rendering in pug for each movie:
```
div.star-container
    -let score
        each review in reviews
            -const num = Object.values(movie.Reviews).map(review => review.rating).reduce((a,b) => {return a + b}, 0)
            -const total = movie.Reviews.length
            -score = num/(total * 1.0)
            -score = Math.round(score)
        div(id="starContainer")
            -let i = 0
            -let j = score
            while i < score
                span(class="fa fa-star checked")
                -i++
```
## Database Structure

## Contributors
* Tanner Pedretti(VoodooJellyfish)
* Amanda Hinton(amandahinton)
* Moncef Sebbata (msebbata)
* Walker Williams (walkerwilliamsx)
