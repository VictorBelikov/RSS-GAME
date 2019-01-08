import { answerAction } from '../../../utils/answersAction';
import geometricFigures from '../../../assets/data/geometricFigures';
import GGS from '../../../models/GlobalGameState';

export default class GeometrVertTask {
  static isCorrectAnswer(answer) {
    document.getElementById('geometricVerts').addEventListener('click', async (e) => {
      answerAction(e, answer);
    });
  }

  static generateTemplate() {
    const figures = geometricFigures;
    const i = Math.floor(Math.random() * figures.length);
    const answer = `${figures[i].sides}`;
    GGS.taskAnswer = answer;

    // Generate 4 unique numbers
    const options = [];
    while (options.length < 4) {
      const item = Math.floor(Math.random() * 9);
      if (!options.includes(item)) {
        options.push(item);
      }
    }
    if (!options.includes(+answer)) {
      options[3] = +answer;
    }

    const template = `
      <p class="geometric-title">Определите количетво вершин:</p>
      <div class="geometric-figure ${figures[i].name}"></div>
      <ul id="geometricVerts" class="geometric-list">
        <li class="key-1">${options[0]}</li>
        <li class="key-2">${options[1]}</li>
        <li class="key-3">${options[2]}</li>
        <li class="key-4">${options[3]}</li>
      </ul>
    `;
    return { template, answer };
  }
}
