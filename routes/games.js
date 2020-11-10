const express = require('express');
const router = express.Router();
const Game = require('../models/Game');

router.get('/', async (req, res) => {
    try{
        const games = await Game.find();
        return res.send(games);
    } catch(error){
        return res.status(500).send({error: {description: 'Internal Server Error', message: `${error}`}});
    }
});

router.get('/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const game = await Game.findById(id);
        return res.send(game);
    }catch(error){
        return res.status(500).send({error: {description: 'Internal Server Error', message: `${error}`}});
    }
})

module.exports = router;