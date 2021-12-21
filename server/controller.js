const movies = require('./db.json');
let newMovieId = 11; 


module.exports = {
    getMovies: (req, res) => {
        res.status(200).send(movies)
    },
    deleteMovie: (req, res) => {
        const targetId = +req.params.id;

        const foundIndex = movies.findIndex(movieObj => {
            return movieObj.id === targetId
        });

        movies.splice(foundIndex, 1);

        res.status(200).send(movies);
    },
    addMovie: (req, res) => {
        console.log(req.body)

        req.body.id = newMovieId

        movies.push(req.body)

        newMovieId += 1;

        res.status(200).send(movies)
    }
}