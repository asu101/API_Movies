const mongoose = require('mongoose')
const {Schema} = mongoose;

const seriesSchema = new Schema({
    title: {type: String, required: true},
    year: {type: Number, required: true},
    episodes: {type: Number, required: true},
    plot: {type: String, required: true},
    genres: [{type: String, required: true}],
    poster: [{type: String, required: true}],
    imb: [{
        email: {type: String, required: true, default: null},
        score: {type: Number, required: true, default: null},
    }]
});

module.exports = mongoose.model('Movie', seriesSchema, 'movies2022');