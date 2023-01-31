const genres = require('../models/genres.model');

const genresCtrl = {};

genresCtrl.getGenres = async (req, res) => {
    const genre = await genres.find()
        .then((data) => res.json(data))
        .catch((err) => console.error(err));
};

genresCtrl.getGenre = async (req, res) => {
    const genre = await genres.findById(req.params.id)
        .then((data) =>  {
           if (data != null) res.json(data)
            else res.json({status: 'El género no existe'})
        })
        .catch((err) => console.log(err));
}

genresCtrl.addGenre = async (req, res) => {
    const myGenre = new genres(req.body);
    await myGenre.save()
        .then (() => res.json({status: 'Género guardado'}))
        .catch(err => res.send(err.message));
}

genresCtrl.updateGenre = async (req, res) => {
    const genre = req.body;
    await genres.findByIdAndUpdate(
        req.params.id,
        {$set: genre},
        {new: true})
        .then((data) =>
        {
            if(data!= null) res.json({status: 'Género actualizado', data})
            else res.json({status: 'El género no existe'})
        }).catch((err) => res.send(err.message));
}

genresCtrl.deleteGenre = async (req, res) => {
    await genres.findByIdAndDelete(req.params.id)
        .then((data) => {
           if (data != null) res.json({status: 'Género borrado'})
            else res.json({status: 'El género no existe'});
        })
        .catch((err) => res.send(err.message));
}



module.exports = genresCtrl;