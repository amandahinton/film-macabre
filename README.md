# HorrorHost

HorrorHost is a website allowing you to curate your own blood-curdling collection of horror movies while discovering new favorites! HorrorHost can be found at: https://horrorhost.herokuapp.com/

## Development
* You can read more about the project using the wiki located at: https://github.com/amandahinton/film-macabre/wiki
* To start a development environment:
    1. Clone the repository at: https://github.com/amandahinton/film-macabre
    2. Run the command "npm install" from the project root in your terminal to install dependencies
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
    * User management includes registration, login/logout authentication, and authorization to perform different CRUD operations throughout the site.
    * The Bcrypt hashing agorithm is used to maintain password security.
    * All forms are protected against csurf attacks 
* Shelves
    * Authenticated users can create custom shelves and add/delete movies from their shelves or the 3 default shelves created for them upon registration. Custom shelves can also be deleted.
    * Shelves display in their entirety (on shelf detail page) or as a preview (on homepage or user profile).
* Movies
    * A list of horror movies and their corresponding reviews/rating can be browsed at the user's leisure. 
    * Movies are displayed individually (on movie detail and review detail pages), on a shelf, and as a gallery of the full database (on movies page).
    * Users may complete a form to suggest a movie to add to the database.
* Reviews
    * Authenticated users can submit a review for a movie, or edit/delete their review if they have previously submitted one.
## Challenges and Learnings
* We learned quickly how important it is to ensure that nobody pushes to the main branch without a review process, and to commit early and often to keep all the branches updated.
* A script we implemented to hide the review edit form until a button is clicked was toggling correctly between hidden and visible, but was incorrectly displaying as visible at first. We fixed this by reordering our css file. Order is important!
* Implementing a star rating system for each movie was more challenging than expected and we have a new appreciation for that feature in other sites.
* We also learned how much attention to detail is necessary for styling a consistent experience with good white spacing and alignment, a cohesive visual language, and, . 

## Code Highlight

*Displaying movies on shelves*
* Iterates through all of a user's shelves and displays each
* If shelf includes more than six movies, add an overlay that links to the full list
* Star reviews for each movie
```
mixin showShelvesPreview(shelves, titles)
    if shelves
        each shelf in shelves
            div(id="shelfId" hidden)= shelf.id
            .shelf
                .shelf-name
                if titles
                        a.shelf-title(href=`/shelves/${shelf.id}`)= shelf.name
                .one-shelf
                    if shelf.Movies.length > 6
                        each movie in shelf.Movies.slice(0, 5)
                            .movie-tile(class="movie-image" id=movie.id)
                                a.poster-link(id="poster-link" href=`/movies/${movie.id}`)
                                    img.poster-pic(src=movie.cover)
                                a.title-link(id="title-link" href=`/movies/${movie.id}`)= movie.title
                                div.star-container
                                    -const num = Object.values(movie.Reviews).map(review => review.rating).reduce((a,b) => {return a + b}, 0)
                                    -const total = movie.Reviews.length
                                    -let score = num/(total * 1.0)
                                    -score = Math.round(score)
                                    div(id="starContainer")
                                        -let i = 0
                                        -let j = score
                                        while i < score
                                            span(class="fa fa-star checked")
                                            -i++
                                        while j < 5
                                            span(class="fa fa-star")
                                            -j++
                        .see-more-box.sixth-movie
                            -let sixth = shelf.Movies[6]
                                img.poster-pic-behind(src=sixth.cover)
                                a.sixth-overlay(id="shelf-link" href=`/shelves/${shelf.id}`)
                                    h4.see-more-text See all movies on this shelf
                                    span(class="fa fa-angle-double-right")
                                if curId && curId === shelf.userId
                                    form(action="#", method="get")
                                        input(type="hidden" name="_csrf" value=csrfToken)
                                        button(class="small-button toggle" id=`delete-${shelf.id}-${movie.id}` style="display:none") Delete
```

## Database Structure

![](https://github.com/amandahinton/film-macabre/blob/main/design/database_schema.png)

## Contributors
* [Tanner Pedretti](https://github.com/VoodooJellyfish) (VoodooJellyfish)
* [Amanda Hinton](https://github.com/amandahinton) (amandahinton)
* [Moncef Sebbata](https://github.com/msebbata) (msebbata)
* [Walker William](https://github.com/walkerwilliamsx) (walkerwilliamsx)






