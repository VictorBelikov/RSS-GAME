import { answerAction } from '../../../utils/answersAction';
import GGS from '../../../models/GlobalGameState';


export default class SequenceDayTask {
  static isCorrectAnswer(answer) {
    document.getElementById('sequencedayList').addEventListener('click', async (e) => {
      answerAction(e, answer);
    });
  }

  static generateTemplate() {
    const daysOfWeek = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    let i = Math.floor(Math.random() * 7);
    const j = Math.floor(Math.random() * 4);
    const day = daysOfWeek[i];
    const options = [];

    if (i === 6) i = 0;
    else i += 1;
    const answer = daysOfWeek[i];
    GGS.taskAnswer = answer;

    // Generate 4 unique numbers
    while (options.length < 4) {
      const item = Math.floor(Math.random() * daysOfWeek.length);
      if (!options.includes(item) && day !== daysOfWeek[item] && item !== i) {
        options.push(item);
      }
    }

    options[j] = i;
    const option1 = options[0];
    const option2 = options[1];
    const option3 = options[2];
    const option4 = options[3];

    const template = `
      <p class="sequenceday-title">Выберите день недели следующий за
        <span style="color: wheat;">"${day.toUpperCase()}"</span>:
        <br><span style="font-size: 20px;">(кликни на дне недели)</span>
      </p>
      <ul id="sequencedayList" class="sequenceday-list">
        <li class="key-1">${daysOfWeek[option1]}</li>
        <li class="key-2">${daysOfWeek[option2]}</li>
        <li class="key-3">${daysOfWeek[option3]}</li>
        <li class="key-4">${daysOfWeek[option4]}</li>
      </ul>
    `;
    return { template, answer };
  }
}
