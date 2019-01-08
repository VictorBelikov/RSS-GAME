import $ from 'jquery';
import template from './modalDialogWin.template';
import './modalDialogWin.css';
import GGS from '../../models/GlobalGameState';

export default class ModalDialogWin {
  static draw() {
    document.body.insertAdjacentHTML('beforeend', template);
  }

  static playerWin() {
    return new Promise((resolve) => {
      $('#modalWin').on('hidden.bs.modal', () => {
        GGS.monster.generateBody();
        GGS.mainGameCycleInProgress = true;
        GGS.battleScreenShow = true;
        resolve();
      });
    });
  }
}
