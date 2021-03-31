var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Prospect = require('../models/Prospect.js');

/* GET ALL PROSPECTS */
router.get('/', function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    res.setHeader('Access-Control-Allow-Credentials', true); // If needed
    Prospect.find(function (err, prospects) {
      if (err) return next(err);
      res.json(prospects);
    });
  });

/* GET SINGLE PROSPECT BY ID */
router.get('/:id', function(req, res, next) {
    Prospect.findById(req.params.id, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });
  
  /* SAVE PROSPECT */
  router.post('/', function(req, res, next) {
    Prospect.create(req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });
  
  /* UPDATE PROSPECT */
  router.put('/:id', function(req, res, next) {
    Prospect.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });
  
  /* DELETE PROSPECT */
  router.delete('/:id', function(req, res, next) {
    Prospect.findByIdAndRemove(req.params.id, req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });
  
  module.exports = router;