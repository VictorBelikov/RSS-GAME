// mongo connect string:
// mongodb://rss-game-user:1111111831victor@ds251804.mlab.com:51804/rss-game

const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.listen(process.env.PORT);

mongoose.connect('mongodb://rss-game-user:1111111831victor@ds251804.mlab.com:51804/rss-game');
const Player = mongoose.model('Player', { name: String, kills: Number });
const pl1 = new Player({ name: 'Test_player_1', kills: 1 });
pl1.save().then(() => console.log('saved'));
