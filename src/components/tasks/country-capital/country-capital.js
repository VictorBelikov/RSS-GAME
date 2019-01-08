import countryCapitals from '../../../assets/data/countryCapitals';
import './country-capital.css';
import { answerAction } from '../../../utils/answersAction';
import GGS from '../../../models/GlobalGameState';


export default class CountryCapitalTask {
  static isCorrectAnswer(answer) {
    document.getElementById('ccapitalList').addEventListener('click', async (e) => {
      answerAction(e, answer);
    });
  }

  static generateTemplate() {
    const countries = countryCapitals;
    const i = Math.floor(Math.random() * 4);

    // Generate 4 unique numbers
    const options = [];
    while (options.length < 4) {
      const item = Math.floor(Math.random() * countries.length);
      if (!options.includes(item)) {
        options.push(item);
      }
    }
    const option1 = options[0];
    const option2 = options[1];
    const option3 = options[2];
    const option4 = options[3];
    const { country } = countries[options[i]];
    const answer = countries[options[i]].capital;
    GGS.taskAnswer = answer;

    const template = `
      <p class="ccapital-title">Столица страны
        <span style="color: wheat;">${country}</span>:
        <br><span style="font-size: 20px;">(кликни на стране)</span>
      </p>
      <ul id="ccapitalList" class="ccapital-list">
        <li class="key-1">${countries[option1].capital}</li>
        <li class="key-2">${countries[option2].capital}</li>
        <li class="key-3">${countries[option3].capital}</li>
        <li class="key-4">${countries[option4].capital}</li>
      </ul>
    `;
    return { template, answer };
  }
}
