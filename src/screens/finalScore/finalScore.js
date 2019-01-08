import finalScoreTemplate from './finalScore.template';
import './finalScore.css';
import GGS from '../../models/GlobalGameState';
import LocalStorageHandler from '../../models/LocalStorageHandler';
import pause from '../../utils/Pause';
import { scrScoreboardShow, scrScoreboardHide } from '../../utils/scrHandlers';


export default class FinalScore {
  static draw() {
    document.body.insertAdjacentHTML('beforeend', finalScoreTemplate);
    GGS.scoreboardScr = document.getElementById('scoreboard');
    // btn in finalScore
    document.getElementById('btnNewGame').addEventListener('click', FinalScore.startNewGame);
    // btn in registration
    document.getElementById('btnShowScoreboard').addEventListener('click', async () => {
      FinalScore.createScoreList();
      scrScoreboardShow();
      await pause(1000);
      document.getElementById('registration').classList.toggle('display-off');
    });

    GGS.scoreboardTable = document.getElementById('scoreboardTableBody');
  }

  static async startNewGame() {
    GGS.finalScoreShow = false;
    scrScoreboardHide();
  }

  static createScoreList() {
    GGS.finalScoreShow = true;
    const data = LocalStorageHandler.getData();
    let template = '';
    if (data) {
      data.forEach((el, i) => {
        template += `
          <tr>
            <td>${i + 1}</td>
            <td>${el.name}</td>
            <td>${el.kills}</td>
          </tr>
        `;
      });
    }
    GGS.scoreboardTable.innerHTML = template;
  }
}
