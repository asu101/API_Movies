const mongoose = require('mongoose');
const URI = 'mongodb+srv://asu101a:progresa@cluster0.sw85qxl.mongodb.net/ASU';
mongoose.connect(URI)
    .then(db => console.log('DB connected'))
    .catch(err => console.log(err));

module.exports = mongoose;