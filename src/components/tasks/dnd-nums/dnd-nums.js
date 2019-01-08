import $ from 'jquery';
import 'jquery-ui-dist/jquery-ui';
import { correctAnswer, wrongAnswer } from '../../../utils/answersAction';


export default class DragDropNumsTask {
  static answerHelp(answer, str) {
    if (answer === str) {
      correctAnswer();
    } else {
      wrongAnswer();
    }
  }

  static async isCorrectAnswer(answer) {
    $(() => {
      $('#sortable').sortable();
    });

    document.getElementById('btnAnswer').addEventListener('click', () => {
      let str = '';
      const arr = Array.from(document.getElementsByClassName('dnd-num'));
      arr.forEach((el) => {
        str += `${el.innerText} `;
      });
      DragDropNumsTask.answerHelp(answer, str.trim());
    });
  }

  static generateTemplate() {
    const nums = [];
    let str = '';

    for (let i = 0; i < 5; i += 1) {
      const num = Math.floor(Math.random() * 100) + 1;
      nums.push(num);
      str += `<li class="dnd-num">${num}</li>`;
    }

    const answer = nums.sort((a, b) => a - b).join(' ');

    const template = `
      <p class="dndnums-title">Восстановите последовательность цифр:</p>
      <ul id="sortable">${str}</ul>
    `;
    return { template, answer };
  }
}
