import $ from 'jquery';
import './modalDialogTypeAttack.css';
import template from './modalDialogTypeAttack.template';
import GGS from '../../models/GlobalGameState';
import Task from '../../screens/task/task';


export default class ModalDialogTypeAttack {
  static typeOfAttack(attack) {
    GGS.typeOfAttack = attack;
    GGS.modalTypeAttackShow = false;
    Task.generateTaskType();
  }

  static call() {
    $('#modalTypeAttack').modal({ backdrop: 'static', keyboard: false });
    GGS.battleScreenShow = false;
    GGS.modalTypeAttackShow = true;
  }

  static draw() {
    document.body.insertAdjacentHTML('beforeend', template);
    $('#modalTypeAttack').on('click', (e) => {
      if (e.target.id === 'fbAttack') {
        ModalDialogTypeAttack.typeOfAttack('fireball');
      } else if (e.target.id === 'spearAttack') {
        ModalDialogTypeAttack.typeOfAttack('spear');
      }
    });
  }
}
