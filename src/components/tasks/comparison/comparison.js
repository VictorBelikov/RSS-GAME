import { correctAnswer, toggleWarn, wrongAnswer } from '../../../utils/answersAction';
import pause from '../../../utils/Pause';

export default class ComparisonTask {
  static answerHelp(answer, input) {
    const val = input.value.trim();
    if (val !== '' && (val === '<' || val === '>' || val === '=')) {
      if (answer === val) {
        correctAnswer();
      } else {
        wrongAnswer();
      }
    } else {
      toggleWarn(input);
    }
  }

  static async isCorrectAnswer(answer) {
    const input = document.getElementById('comarisonAnswer');
    input.focus();
    await pause(0);
    input.value = '';
    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        ComparisonTask.answerHelp(answer, input);
      }
    });
    document.getElementById('btnAnswer').addEventListener('click', () => {
      ComparisonTask.answerHelp(answer, input);
    });
  }

  static calculate(a, b) {
    switch (true) {
      case a > b:
        return '>';
      case a < b:
        return '<';
      case a === b:
        return '=';
      default:
        throw new TypeError('Incorrect operation: -a- or -b- is NaN.');
    }
  }

  static generateTemplate() {
    const a = Math.floor(Math.random() * 1000) + 1;
    const b = Math.floor(Math.random() * 1000) + 1;
    const answer = ComparisonTask.calculate(a, b);
    const template = `
      <p class="comarison-title">Сравните два числа и впишите (> < =):</p>
      <p class="comarison-expr">${a} <span style="color: red">?</span> ${b}</p>
      <input id="comarisonAnswer" type="text" placeholder="Ответ...  ">
    `;
    return { template, answer };
  }
}
