import { correctAnswer, toggleWarn, wrongAnswer } from '../../../utils/answersAction';
import pause from '../../../utils/Pause';
import dictionaryJSON from '../../../assets/data/dictionary';

export default class ListeningTask {
  static answerHelp(answer, input) {
    const val = input.value.trim().toLowerCase();
    if (val !== '' && val.match(/^[a-zA-Z]+$/)) {
      if (answer.toLowerCase() === val) {
        correctAnswer();
      } else {
        wrongAnswer();
      }
    } else {
      toggleWarn(input);
    }
  }

  static async isCorrectAnswer(answer) {
    const input = document.getElementById('listeningAnswer');
    input.focus();
    await pause(0);
    input.value = '';
    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        ListeningTask.answerHelp(answer, input);
      }
    });

    document.getElementById('btnAnswer').addEventListener('click', () => {
      ListeningTask.answerHelp(answer, input);
    });

    document.getElementById('btnListening').addEventListener('click', () => {
      const msg = new SpeechSynthesisUtterance();
      msg.voiceURI = 'Alex';
      msg.lang = 'en-US';
      msg.text = answer;
      speechSynthesis.speak(msg);
    });
  }

  static generateTemplate() {
    const dictionary = dictionaryJSON;
    const i = Math.floor(Math.random() * dictionary.length);
    const answer = dictionary[i].word;

    const template = `
      <p class="listening-title">Введите услышанное слово:</p>
      <p>
        <button style="margin: 0 0 100px" type="button" id="btnListening" class="btn btn-danger btn-lg">Прослушать слово</button>
      </p>
      <input id="listeningAnswer" type="text" placeholder="Ответ...  ">
    `;
    return { template, answer };
  }
}
