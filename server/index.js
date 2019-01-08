// // mongo connect string:
// // mongodb://rss-game-user:1111111831victor@ds251804.mlab.com:51804/rss-game

// const express = require('express');
// const mongoose = require('mongoose');

// const app = express();
// app.listen(process.env.PORT);

// mongoose.connect('mongodb://rss-game-user:1111111831victor@ds251804.mlab.com:51804/rss-game');
// const Player = mongoose.model('Player', { name: String, kills: Number });
// const pl1 = new Player({ name: 'Test_player_1', kills: 1 });
// pl1.save().then(() => console.log('saved'));

const path = require('path');
const express = require('express');
const ejs = require('ejs');


const PORT = process.env.PORT || 5000;
const HOST = '0.0.0.0';
const IMG_PATH = path.resolve(__dirname, '../dist/img');
const VIEWS_PATH = path.resolve(__dirname, '../dist');
const STATIC_PATH = path.resolve(__dirname, '../dist/js');
const AUDIO_PATH = path.resolve(__dirname, '../dist/audio');
const LIBS_PATH = path.resolve(__dirname, '../dist/libs');

const app = express();
app.use('/js', express.static(STATIC_PATH));
app.use('/img', express.static(IMG_PATH));
app.use('/audio', express.static(AUDIO_PATH));
app.use('/libs', express.static(LIBS_PATH));

app.engine('html', ejs.renderFile);
app.set('views', VIEWS_PATH);
app.set('view engine', 'html');

app.get('/', (req, res) => res.render('index'));
app.get('/game', (req, res) => res.render('game'));

app
  .listen(PORT, HOST, () => console.log('Server is listening'))
  .on('error', err => console.log(err));
