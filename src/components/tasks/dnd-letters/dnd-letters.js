import $ from 'jquery';
import 'jquery-ui-dist/jquery-ui';
import './dnd-letters.css';
import { correctAnswer, wrongAnswer } from '../../../utils/answersAction';
import dictionaryJSON from '../../../assets/data/dictionary';


export default class DragDropLettersTask {
  static answerHelp(answer, str) {
    if (answer.toLowerCase() === str.toLowerCase()) {
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
      const arr = Array.from(document.getElementsByClassName('dnd-letter'));
      arr.forEach((el) => {
        str += el.innerText;
      });
      DragDropLettersTask.answerHelp(answer, str);
    });
  }

  static generateTemplate() {
    const dictionary = dictionaryJSON;
    const i = Math.floor(Math.random() * dictionary.length);
    const answer = dictionary[i].word;
    let str = '';

    Array.from(answer)
      .sort(() => Math.random() - 0.5)
      .forEach((el) => {
        str += `<li class="dnd-letter">${el}</li>`;
      });

    const template = `
      <p class="dndletters-title">Восстановите порядок букв:</p>
      <ul id="sortable">${str}</ul>
    `;
    return { template, answer };
  }
}
