const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    rank: {type: Number, required:true},
    name: {type: String, required:true},
    platform: {type: String, required:true},
    year: {type: Number},
    genre: {type: String, required:true},
    publisher: {type: String, required:true},
    naSales: {type: Number, required:true},
    euSales: {type: Number, required:true},
    jpSales: {type: Number, required:true},
    otherSales: {type: Number, required:true},
    globalSales: {type: Number, required:true},
});

module.exports = Game = mongoose.model('Game', gameSchema);