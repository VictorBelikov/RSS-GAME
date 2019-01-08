import { correctAnswer, wrongAnswer } from '../../../utils/answersAction';
import pause from '../../../utils/Pause';
import dictionaryJSON from '../../../assets/data/dictionary';
import GGS from '../../../models/GlobalGameState';
import './speaking.css';
import microphone from '../../../assets/audio/microphone.mp3';


export default class SpeakingTask {
  static async answerHelp(answer, input) {
    GGS.taskBtnAnswer.innerText = 'Ответить (Enter)';
    const val = input.value.trim().toLowerCase();
    if (answer.toLowerCase() === val) {
      correctAnswer();
    } else {
      wrongAnswer();
    }
  }

  static async isCorrectAnswer(answer) {
    const input = document.getElementById('speakingAnswer');
    await pause(0);
    input.value = '';

    document.getElementById('btnSpeaking').addEventListener('click', () => {
      new Audio(microphone).play();
      pause(500);
      // eslint-disable-next-line no-undef,new-cap
      const recognition = new webkitSpeechRecognition();
      recognition.interimResults = true;
      recognition.lang = 'en-US';

      recognition.addEventListener('result', (e) => {
        document.getElementById('speakingAnswer').value = e.results[0][0].transcript;

        if (e.results[0].isFinal) {
          SpeakingTask.answerHelp(answer, input);
        }
      });
      recognition.start();
    });

    document.getElementById('btnAnswer').addEventListener('click', () => {
      SpeakingTask.answerHelp(answer, input);
    });
  }

  static generateTemplate() {
    GGS.taskBtnAnswer.innerText = 'Отказаться';
    const dictionary = dictionaryJSON;
    const i = Math.floor(Math.random() * dictionary.length);
    const answer = dictionary[i].word;

    const template = `
      <p class="speaking-title">Произнесите слово <span style="color: wheat;">"${answer}"</span>:</p>
      <p>
        <button style="margin: 0 0 100px" type="button" id="btnSpeaking" class="btn btn-danger btn-lg">Говорить</button>
        
      </p>
      <input style="font-size: 1.2em; text-align: center;" id="speakingAnswer" type="text" disabled placeholder="Тут будет то, что произнесли">
    `;
    return { template, answer };
  }
}
