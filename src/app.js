require("./db/connection");
const yargs = require('yargs');
const mongoose = require('mongoose');
const {createMovie} = require ('./movies/function');

async function myApp (yargsObject) {
    if (yargsObject.create) {
        // code to add a movie
        await createMovie({title:yargsObject.title, actor:yargsObject.actor, director: yargsObject.director});
    } else if (yargsObject.read) {
        // code to list all movies
    } else if (yargsObject.update) {
        // code to update one movie field
    } else if (yargsObject.delete) {
        // code to delete a movie
    } else {
        console.log("Command not recognised")
    };
    await mongoose.disconnect();
};

myApp(yargs.argv);