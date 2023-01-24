const Movie = require('../models/movie.model');

const movieCtrl = {};

// Función que devuelve todas las películas
movieCtrl.getMovies = async (req, res) => {
    const movies = await Movie.find()
        .then((data) => res.json(data))
        .catch((err) => console.error(err));
}

// Funcón que devuelve una película dad un id
movieCtrl.getMovie = async (req, res) => {
    const movie = await Movie.findById(req.params.id)
        .then((data) =>  {
           if (data != null) res.json(data)
            else res.json({status: 'La película no existe'})
        })
        .catch((err) => console.log(err));
}

// Añadir una nueva película a nuestra base de datos
movieCtrl.addMovie = async (req, res) => {
    const myMovie = new Movie(req.body);
    await myMovie.save()
        .then (() => res.json({status: 'Película guardada'}))
        .catch(err => res.send(err.message));
}

// Función para actualizr una película con el id y la película con los nuevos datos
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

// Función para borrar una película dada un id
movieCtrl.deleteMovie = async (req, res) => {
    await Movie.findByIdAndDelete(req.params.id)
        .then((data) => {
           if (data != null) res.json({status: 'Película borrada'})
            else res.json({status: 'La película no existe'});
        })
        .catch((err) => res.send(err.message));
}

// Función para obtener los diferentes géneros de la DB
movieCtrl.getGenres = async (req, res) => {
    await Movie.find().distinct('genres')
        .then((data) => res.json(data))
        .catch((err) => console.error(err));
}

module.exports = movieCtrl;