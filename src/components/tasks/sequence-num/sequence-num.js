import { correctAnswer, toggleWarn, wrongAnswer } from '../../../utils/answersAction';
import pause from '../../../utils/Pause';

export default class SequenceNumTask {
  static answerHelp(answer, input) {
    const val = input.value.trim().toLowerCase();
    if (val !== '' && val.match(/^[0-9]+$/)) {
      if (+val === answer) {
        correctAnswer();
      } else {
        wrongAnswer();
      }
    } else {
      toggleWarn(input);
    }
  }

  static async isCorrectAnswer(answer) {
    const input = document.getElementById('sequencenumAnswer');
    input.focus();
    await pause(0);
    input.value = '';
    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        SequenceNumTask.answerHelp(answer, input);
      }
    });
    document.getElementById('btnAnswer').addEventListener('click', () => {
      SequenceNumTask.answerHelp(answer, input);
    });
  }

  static generateTemplate() {
    let num = Math.floor(Math.random() * 100) + 1;
    const sequence = Math.floor(Math.random() * 10) + 1;
    const place = Math.floor(Math.random() * 4);
    let answer;
    let str = `<li>${num}</li>`;

    for (let i = 0; i < 4; i += 1) {
      if (i === place) {
        num += sequence;
        answer = num;
        str += '<li><input id="sequencenumAnswer" type="text"></li>';
      } else {
        str += `<li>${num += sequence}</li>`;
      }
    }

    const template = `
      <p class="sequencenum-title">Продолжите числовую последовательность:
        <ul class="sequencenum-list">${str}</ul>
      </p>
    `;
    return { template, answer };
  }
}
