const mongoose = require('mongoose');
const {Schema} = mongoose;

const seriesSchema = new Schema({
   name: {type: String, required: true},
   icon: {type: String, required: true},
});

module.exports = mongoose.model('Genre', seriesSchema, 'genres');