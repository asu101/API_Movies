const express = require('express');
const genreCtrl = require('../controllers/genres.controller');
const router = express.Router();

router.get('/', genreCtrl.getGenres);
router.get('/genre/:id', genreCtrl.getGenre);
router.post( '', genreCtrl.addGenre);
router.put('/:id', genreCtrl.updateGenre);
router.delete('/:id', genreCtrl.deleteGenre);

module.exports = router;