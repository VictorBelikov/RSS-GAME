import $ from 'jquery';
import GGS from '../models/GlobalGameState';
import MainGameCycle from '../models/MainGameCycle';
import ModalDialogTypeAttack from '../components/modalDialogTypeAttack/modalDialogTypeAttack';
import FinalScore from '../screens/finalScore/finalScore';
import { answerActionKeyboard } from './answersAction';


const startGame = async () => {
  // Keyboard events
  document.body.addEventListener('keypress', (e) => {
    if (e.code === 'Space' && GGS.battleScreenShow) {
      ModalDialogTypeAttack.call();
    } else if (e.key === '1' && GGS.modalTypeAttackShow) {
      $('#modalTypeAttack').modal('toggle');
      ModalDialogTypeAttack.typeOfAttack('spear');
    } else if (e.key === '2' && GGS.modalTypeAttackShow) {
      $('#modalTypeAttack').modal('toggle');
      ModalDialogTypeAttack.typeOfAttack('fireball');
    } else if (e.key === 'Enter' && GGS.finalScoreShow) {
      FinalScore.startNewGame();
    } else if (e.key === '1' && GGS.answerScrShow) {
      answerActionKeyboard(
        document.getElementsByClassName('key-1')[0].innerText,
        GGS.taskAnswer,
      );
    } else if (e.key === '2' && GGS.answerScrShow) {
      answerActionKeyboard(
        document.getElementsByClassName('key-2')[0].innerText,
        GGS.taskAnswer,
      );
    } else if (e.key === '3' && GGS.answerScrShow) {
      answerActionKeyboard(
        document.getElementsByClassName('key-3')[0].innerText,
        GGS.taskAnswer,
      );
    } else if (e.key === '4' && GGS.answerScrShow) {
      answerActionKeyboard(
        document.getElementsByClassName('key-4')[0].innerText,
        GGS.taskAnswer,
      );
    }
  });

  document.getElementById('btnChooseCast')
    .addEventListener('click', ModalDialogTypeAttack.call);
  MainGameCycle.start();
};

export default startGame;
