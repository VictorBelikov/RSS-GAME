import GGS from '../models/GlobalGameState';
import pause from './Pause';

export const scrScoreboardShow = () => {
  GGS.scoreboardScr.classList.remove('hideScoreboard');
  GGS.scoreboardScr.classList.add('showScoreboard');
};

export const scrScoreboardHide = async () => {
  GGS.scoreboardScr.classList.add('hideScoreboard');
  document.getElementById('registration').classList.toggle('display-off');
  await pause(1000);
  GGS.scoreboardScr.classList.remove('showScoreboard');
};

export const scrTaskShow = () => {
  GGS.taskScr.classList.remove('hideTask');
  GGS.taskScr.classList.add('showTask');
};

export const scrTaskHide = async () => {
  GGS.taskScr.classList.add('hideTask');
  await pause(1000);
  GGS.taskScr.classList.remove('showTask');
};
