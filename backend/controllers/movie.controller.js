const Movie = require('../models/movie.model');

const movieCtrl = {};

movieCtrl.getMovies = async (req, res) => {
    const movies = await Movie.find()
        .then((data) => res.json(data))
        .catch((err) => console.error(err));
}

movieCtrl.getMovie = async (req, res) => {
    const movie = await Movie.findById(req.params.id)
        .then((data) =>  {
           if (data != null) res.json(data)
            else res.json({status: 'La película no existe'})
        })
        .catch((err) => console.log(err));
}

movieCtrl.addMovie = async (req, res) => {
    const myMovie = new Movie(req.body);
    await myMovie.save()
        .then (() => res.json({status: 'Película guardada'}))
        .catch(err => res.send(err.message));
}

movieCtrl.updateMovie = async (req, res) => {
    const movie = req.body;
    await Movie.findByIdAndUpdate(
        req.params.id,
        {$set: movie},
        {new: true})
        .then((data) =>
        {
            if(data!= null) res.json({status: 'Película actualizada'})
            else res.json({status: 'La película no existe'})
        })
        .catch((err) => res.send(err.message));
}

movieCtrl.deleteMovie = async (req, res) => {
    await Movie.findByIdAndDelete(req.params.id)
        .then((data) => {
           if (data != null) res.json({status: 'Película borrada'})
            else res.json({status: 'La película no existe'});
        })
        .catch((err) => res.send(err.message));
}

movieCtrl.getGenres = async (req, res) => {
    await Movie.find().distinct('genres')
        .then((data) => res.json(data))
        .catch((err) => console.error(err));
}

/*
movieCtrl.getSeriescategorias = async (req, res) => {
    const series = await Movie.findById(req.params.categories)
        .then((data) =>  {
              if (data != null) res.json(data)
                else res.json({status: 'La serie no existe'})
        })
        .catch((err) => console.log(err));
}

 */

module.exports = movieCtrl;