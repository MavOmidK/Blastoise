var mongoose = require('mongoose');

var TeamsSchema = new mongoose.Schema({
    teamName: String,
    owner: String
});

module.exports = mongoose.model('teams', TeamsSchema);