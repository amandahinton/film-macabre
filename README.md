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
    * User functionality including registration, Login/Logout authentication, and authorization to perform different CRUD operations throughout the site is all present.
    * The Bcrypt hashing algorithm is used to maintain password security.
    * All forms are protected against Csurf attacks
* Shelves
    * Authenticated users can create custom shelves and add/delete movies from their shelves or the 3 default shelves created for them upon registration. Custom shelves can also be deleted.
    * Shelves display in their entirety (on shelf detail page) or as a preview (on homepage or user profile).
* Movies
    * A list of horror movies and their corresponding reviews/rating can be browsed at the user's leisure.
    * Movies are displayed individually (on movie detail and review detail pages), on a shelf, and as a gallery of the full database (on movies page).
    * Users may complete a form to suggest a movie to add to the database.
* Reviews
    * Authenticated Users can submit a review for a movie, or edit/delete their review if they have previously submitted one.

## Challenges and Learnings
* We learned quickly how important it is to ensure that nobody pushes to the main branch without a review process, and to commit early and often to keep all the branches updated.
* A script we implemented to hide the review edit form until a button is clicked was toggling correctly between hidden and visible, but was incorrectly displaying as visible at first. We fixed this by reordering our css file. Order is important!
* Implementing a star rating system for each movie was more challenging than expected and we have a new appreciation for that feature in other sites.
* We also learned how much attention to detail is necessary for styling a consistent experience with good white spacing and alignment and a cohesive visual language.
* We had to keep coming back to site functionality, design, and database seeds over the course of the week as our site developed, new needs arose, code was implemented that crossed boundaries between features and demanded reconciling, and bugs were uncovered. It was a continuous cycle of build-test-improve-polish.

## Code Highlights
*Display shelves with movies, star ratings, and shelf previews*
* Iterates through all of a user's shelves and displays each available
* If shelf includes more than six movies, truncate list and add an overlay that links to the shelf
* Display aggregate star rating for all reviews of each movie
```pug
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

*Routing for reviews*
```js
router.post('/:id(\\d+)', requireAuth, csrfProtection, reviewValidators, asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id, 10);

    const reviewToUpdate = await db.Review.findByPk(id);
    let movieId = reviewToUpdate.movieId;
    const { body, rating } = req.body;

    const review = {body, rating,};

    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
        await reviewToUpdate.update(review);
        res.redirect(`/movies/${reviewToUpdate.movieId}`);
    } else {
        const errors = validatorErrors.array().map((error) => error.msg);
        res.render('review', {title: 'Edit Review', review: { ...review, id }, movieId, errors, csrfToken: req.csrfToken(),});
    }
}));
```

*Routing for shelves*
```js
router.get('/:id', requireAuth, csrfProtection, asyncHandler(async (req, res) => {
    try {
        const { id } = req.params;
        const shelf = await db.Shelf.findByPk(id, {
            include: {model: db.Movie, include: db.Review,},
        });
        const curId = res.locals.user ? res.locals.user.id : null;
        let defaultUserShelves = await db.Shelf.findAll({
            where: {userId: curId,}, limit: 3, order: [['id', 'ASC']],});

        defaultUserShelves = defaultUserShelves.map((myShelf) => myShelf.id);

        let isDefault = defaultUserShelves.some((curShelf) => {
            return parseInt(curShelf, 10) == parseInt(id, 10);
        });

        const userObj = await db.User.findByPk(shelf.userId);
        const created = shelf.createdAt.toLocaleDateString();
        const updated = shelf.updatedAt.toLocaleDateString();
        res.render('shelf', {shelf, userObj, created, updated, curId, isDefault, csrfToken: req.csrfToken(),});
    } catch (err) {
        res.render('title', {title: 'This shelf does not exist!',});
    }
}));
```

*Use external API to generate movie seed data(partial code)*
```js
function seedTitles(titles) {
    return titles.map(function(title) {
        const formatTitle = title.split(" ").join("+");
        return `http://www.omdbapi.com/?t=${formatTitle}&apikey=7f485d8e`;
    })
};

const getMovie = async (url) => {
    try {
        const movieRes = await fetch(url);
        const movieData = await movieRes.json();
        const seed = ({ title: movieData.Title, year: movieData.Year, description: movieData.Plot, director: movieData.Director, cover: movieData.Poster });
        movieSeeds.push(seed);
    } catch (e) {
        console.log("Failed to fetch movie", e);
    }
};
```

## Database Structure

![](https://github.com/amandahinton/film-macabre/blob/main/design/database_schema.png)

## Contributors
* [Tanner Pedretti](https://github.com/VoodooJellyfish) (VoodooJellyfish)
* [Amanda Hinton](https://github.com/amandahinton) (amandahinton)
* [Moncef Sebbata](https://github.com/msebbata) (msebbata)
* [Walker William](https://github.com/walkerwilliamsx) (walkerwilliamsx)
