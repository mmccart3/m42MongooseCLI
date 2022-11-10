const MovieCollection = require('./model');

async function createMovie(movieObject) {
    try {
        const newMovie = await MovieCollection.create(movieObject)
        console.log(newMovie);
    } catch (error) {
        console.log(error);
    }
};

async function listMovies() {};

async function updateMovie (someObject) {};

async function deleteMovie (someObject) {};

module.exports = {createMovie, listMovies, updateMovie, deleteMovie}