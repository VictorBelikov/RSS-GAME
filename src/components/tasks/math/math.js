import '../common.css';
import { answerInputAction } from '../../../utils/answersAction';
import pause from '../../../utils/Pause';


export default class MathTask {
  static answerHelp(answer, input) {
    const regex = /^-?[0-9]\d*(\.\d+)?$/;
    answerInputAction(answer, input, regex);
  }

  static async isCorrectAnswer(answer) {
    const input = document.getElementById('mathAnswer');
    input.focus();
    await pause(0);
    input.value = '';
    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        MathTask.answerHelp(answer, input);
      }
    });
    document.getElementById('btnAnswer').addEventListener('click', () => {
      MathTask.answerHelp(answer, input);
    });
  }

  static calculate(a, b, operator) {
    switch (operator) {
      case '+':
        return a + b;
      case '-':
        return a - b;
      case '/':
        return Math.floor(a / b);
      case '*':
        return a * b;
      default:
        throw new TypeError('Incorrect operator');
    }
  }

  static generateTemplate() {
    const operators = ['+', '-', '/', '*'];
    const op = operators[Math.floor(Math.random() * operators.length)];
    const a = Math.floor(Math.random() * 10) + 1;
    const b = Math.floor(Math.random() * 10) + 1;
    const answer = MathTask.calculate(a, b, op);
    const template = `
      <p class="math-title">Вычислите выражение:</p>
      <p class="math-expr">${a} ${op} ${b} = </p>
      <input id="mathAnswer" type="text" placeholder="Ответ...  ">
    `;
    return { template, answer };
  }
}
