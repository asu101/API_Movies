const mongoose = require('mongoose')
const {Schema} = mongoose;

const movieSchema = new Schema({
    title: {type: String, required: true},
    year: {type: Number, required: true},
    director: {type: String, required: true},
    plot: {type: String, required: true},
    genres: [{type: String, required: true, default: null}],
    poster: {type: String, require: true, default: null},
    imb: {
        rating: {type: Number, required: true},
        votes: {type: Number, required: true},
    }
});

module.exports = mongoose.model('Movie', movieSchema, 'movies2022');