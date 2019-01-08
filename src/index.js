import 'bootstrap';
import GGS from './models/GlobalGameState';
import Hero from './models/characters/Hero';
import Monster from './models/characters/Monster';
import Registration from './screens/registration/registration';
import ModalDialogWin from './components/modalDialogWin/modalDialogWin';
import ModalDialogTypeAttack from './components/modalDialogTypeAttack/modalDialogTypeAttack';
import Battle from './screens/battle/battle';
import ImageLoader from './models/ImageLoader';
import FinalScore from './screens/finalScore/finalScore';
import Task from './screens/task/task';
import startGame from './utils/startGame';

const init = async () => {
  GGS.hero = new Hero();
  GGS.monster = new Monster();
  await ImageLoader.load();
  Battle.draw();
  ModalDialogTypeAttack.draw();
  ModalDialogWin.draw();
  Registration.draw();
  Registration.addHandler();
  FinalScore.draw(); // takes btnShowScoreboard in Registration
  Task.draw();
  startGame();
};

init();
