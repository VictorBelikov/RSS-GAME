'use strict';

// mongo connect string:
// mongodb://rss-game-user:1111111831victor@ds251804.mlab.com:51804/rss-game

var express = require('express');
var mongoose = require('mongoose');

var app = express();
app.listen(process.env.PORT);

mongoose.connect('mongodb://rss-game-user:1111111831victor@ds251804.mlab.com:51804/rss-game');
var Player = mongoose.model('Player', { name: String, kills: Number });
var pl1 = new Player({ name: 'Test_player_1', kills: 1 });
pl1.save().then(function () {
  return console.log('saved');
});