var mongoose = require('mongoose');

var ProspectSchema = new mongoose.Schema({
    pros_fullName: String,
    pros_gamesPlayed: Number,
    pros_gamesRemaining: Number
});

module.exports = mongoose.model('prospects', ProspectSchema);