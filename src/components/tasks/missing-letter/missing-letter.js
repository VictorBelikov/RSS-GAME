import './missing-letter.css';
import pause from '../../../utils/Pause';
import dictionary from '../../../assets/data/dictionary';
import { correctAnswer, toggleWarn, wrongAnswer } from '../../../utils/answersAction';

export default class MissingLetterTask {
  static answerHelp(letter, input) {
    const val = input.value.toLowerCase().trim();
    if (val !== '' && val.match(/^[a-zA-Z]+$/)) {
      if (val === letter.toLowerCase()) {
        correctAnswer();
      } else {
        wrongAnswer();
      }
    } else {
      toggleWarn(input);
    }
  }

  static async isCorrectAnswer(letter) {
    const input = document.getElementById('missletterAnswer');
    input.focus();
    await pause(0);
    input.value = '';
    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        MissingLetterTask.answerHelp(letter, input);
      }
    });
    document.getElementById('btnAnswer').addEventListener('click', () => {
      MissingLetterTask.answerHelp(letter, input);
    });
  }

  static generateTemplate() {
    const i = Math.floor(Math.random() * dictionary.length);
    const { word } = dictionary[i];
    const j = Math.floor(Math.random() * word.length);
    const answer = word[j];
    let wordStr = '';

    for (let k = 0; k < word.length; k += 1) {
      if (k === j) {
        wordStr += '<li><input id="missletterAnswer" type="text"></li>';
      } else {
        wordStr += `<li>${word[k]}</li>`;
      }
    }

    const template = `
      <p class="missletter-title">Вставьте пропущенную букву в английском слове
        <span style="color: wheat">"${dictionary[i].value[0]}":</span>
        <ul class="missletter-word">${wordStr}</ul>
      </p>
    `;
    return { template, answer };
  }
}
