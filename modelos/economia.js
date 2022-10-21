const mongoose = require('mongoose');

const ecoSchema = new mongoose.Schema({
    userID: {type: String, require: true, unique: true},
    dinero: {type: Number, default: 1000},
    banco: {type: Number, default: 100},
    daily: String,
    hourly: String, 
    monthly: String,
    weekly: String,
    work: String,
    beg: String,
})

const model = mongoose.model("economia", ecoSchema);

module.exports = model;

/*
╔═════════════════════════════════════════════════════╗
║    || - || Desarrollado por <Lander/>#5830 || - ||  ║
║    ----------| discord.gg/DYqbaVNSQD |----------    ║
╚═════════════════════════════════════════════════════╝
*/
