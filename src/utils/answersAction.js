import correctAnsSound from '../assets/audio/correct-answer.mp3';
import pause from './Pause';
import { scrTaskHide } from './scrHandlers';
import GGS from '../models/GlobalGameState';
import wrongAnsSound from '../assets/audio/wrong-answer.mp3';
import removeListener from './removeListener';

const helpAnswer = async () => {
  removeListener();
  await pause(1000);
  scrTaskHide();
  await pause(700);
  GGS.battleScreenShow = true;
};

export const correctAnswer = async () => {
  new Audio(correctAnsSound).play();
  await helpAnswer();
  GGS.hero.attack(GGS.typeOfAttack);
};


export const wrongAnswer = async () => {
  new Audio(wrongAnsSound).play();
  await helpAnswer();
  GGS.monster.attack();
};

export const toggleWarn = async (input) => {
  input.classList.add('input-error');
  await pause(500);
  input.classList.remove('input-error');
};

export const answerAction = async (e, answer) => {
  if (e.target.innerText.toLowerCase() === answer) {
    correctAnswer();
  } else {
    wrongAnswer();
  }
  GGS.answerScrShow = false;
};

export const answerActionKeyboard = async (text, answer) => {
  if (text.toLowerCase() === answer.toLowerCase()) {
    correctAnswer();
  } else {
    wrongAnswer();
  }
  GGS.answerScrShow = false;
};

export const answerInputAction = (answer, input, regex) => {
  const val = input.value.trim();
  if (val !== '' && val.match(regex)) {
    if (answer === +val) {
      correctAnswer();
    } else {
      wrongAnswer();
    }
  } else {
    toggleWarn(input);
  }
};
