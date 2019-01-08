import { answerAction } from '../../../utils/answersAction';
import './geometric-figure.css';
import geometricFigures from '../../../assets/data/geometricFigures';
import GGS from '../../../models/GlobalGameState';

export default class GeometrFigTask {
  static isCorrectAnswer(answer) {
    document.getElementById('geometricList').addEventListener('click', async (e) => {
      answerAction(e, answer);
    });
  }

  static generateTemplate() {
    const figures = geometricFigures;

    // Generate 4 unique numbers
    const options = [];
    while (options.length < 4) {
      const item = Math.floor(Math.random() * figures.length);
      if (!options.includes(item)) {
        options.push(item);
      }
    }

    const i = Math.floor(Math.random() * options.length);
    const answer = figures[options[i]].name;
    GGS.taskAnswer = answer;

    const template = `
      <p class="geometric-title">Определите геометрическую фигуру:</p>
      <div class="geometric-figure ${answer}"></div>
      <ul id="geometricList" class="geometric-list">
        <li class="key-1">${figures[options[0]].name}</li>
        <li class="key-2">${figures[options[1]].name}</li>
        <li class="key-3">${figures[options[2]].name}</li>
        <li class="key-4">${figures[options[3]].name}</li>
      </ul>
    `;
    return { template, answer };
  }
}
