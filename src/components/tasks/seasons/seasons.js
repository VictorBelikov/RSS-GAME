import { answerAction } from '../../../utils/answersAction';
import GGS from '../../../models/GlobalGameState';
import seasons from '../../../assets/data/seasons';
import './seasons.css';


export default class SeasonsTask {
  static isCorrectAnswer(answer) {
    document.getElementById('seasonsList').addEventListener('click', async (e) => {
      answerAction(e, answer);
    });
  }

  static generateTemplate() {
    const months = seasons;
    const i = Math.floor(Math.random() * months.length);
    const answer = months[i].season;
    GGS.taskAnswer = answer;

    const template = `
      <p class="seasons-title">Выберите время года для месяца
        <span style="color: wheat;">"${months[i].month.toUpperCase()}"</span>:
      </p>
      <ul id="seasonsList" class="seasons-list">
        <li class="key-1">winter</li>
        <li class="key-2">spring</li><br>
        <li class="key-3">summer</li>
        <li class="key-4">autum</li>
      </ul>
    `;
    return { template, answer };
  }
}
