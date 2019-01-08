import dictionary from '../../../assets/data/dictionary';
import { correctAnswer, wrongAnswer, toggleWarn } from '../../../utils/answersAction';
import pause from '../../../utils/Pause';


export default class TranslateTask {
  static answerHelp(i, input) {
    const val = input.value.trim().toLowerCase();
    if (val !== '' && val.match(/^[а-яА-Я]+$/)) {
      if (dictionary[i].value.includes(val)) {
        correctAnswer();
      } else {
        wrongAnswer();
      }
    } else {
      toggleWarn(input);
    }
  }

  static async isCorrectAnswer(i) {
    const input = document.getElementById('translateAnswer');
    input.focus();
    await pause(0);
    input.value = '';
    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        TranslateTask.answerHelp(i, input);
      }
    });
    document.getElementById('btnAnswer').addEventListener('click', () => {
      TranslateTask.answerHelp(i, input);
    });
  }

  static generateTemplate() {
    const i = Math.floor(Math.random() * dictionary.length);
    const { word } = dictionary[i];

    const template = `
      <p class="translate-title">Перведите на русский язык слово
        <p class="translate-word" style="color: wheat;font-size: 50px">${word}:</p>
      </p>
      <input id="translateAnswer" type="text" placeholder="Ответ...  ">
    `;
    return { template, answer: i };
  }
}
