import { correctAnswer, toggleWarn, wrongAnswer } from '../../../utils/answersAction';
import './object-nums.css';
import picturesJSOM from '../../../assets/data/pictures';
import pause from '../../../utils/Pause';


export default class ObjectNumsTask {
  static answerHelp(answer, input) {
    const val = input.value.trim();
    if (val !== '' && val.match(/^[0-9]+$/)) {
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
    const input = document.getElementById('objectnumsAnswer');
    input.focus();
    await pause(0);
    input.value = '';
    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        ObjectNumsTask.answerHelp(answer, input);
      }
    });
    document.getElementById('btnAnswer').addEventListener('click', () => {
      ObjectNumsTask.answerHelp(answer, input);
    });
  }

  static generateTemplate() {
    const pictures = picturesJSOM;
    const i = Math.floor(Math.random() * pictures.length);
    const answer = pictures[i].objects;

    const template = `
      <p class="objectnums-title">Какое количество предметов на картинке:</p>
      <div id="objectnumsImg" class="objectnums-${pictures[i].name}"></div>
      <input id="objectnumsAnswer" type="text" placeholder="Ответ...  ">
    `;
    return { template, answer };
  }
}
