var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Team = require('../models/Team.js');

router.get('/', function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    res.setHeader('Access-Control-Allow-Credentials', true); // If needed
    Team.find(function (err, teams) {
      if (err) return next(err);
      res.json(teams);
    });
  });

  module.exports = router;