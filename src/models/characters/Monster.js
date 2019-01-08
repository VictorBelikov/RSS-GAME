import $ from 'jquery';
import monsterSoundHurts from '../../assets/audio/monster-hurts.wav';
import monsterSoundAttack from '../../assets/audio/monster-attack.mp3';
import monsterSoundDie from '../../assets/audio/monster-die.mp3';
import monsterNames from '../../assets/data/monsterNames.json';
import GGS from '../GlobalGameState';
import pause from '../../utils/Pause';
import modalDialogWin from '../../components/modalDialogWin/modalDialogWin';

export default class Monster {
  constructor() {
    this.name = '';
    this.hp = 100;
    this.legImgs = [];
    this.armImgs = [];
    this.bodyImgs = [];
    this.headImgs = [];
    this.bloodImg = null;
    this.attackImg = null;
    this.spriteAttackLength = 10;
    this.monsterAttack = false;

    this.headY = 90;
    this.leftArmY = 265;
    this.rightArmY = 255;
    this.headX = 1010;
    this.bodyX = 1020;
    this.rightArmX = 820;
    this.leftArmX = 1150;
    this.legsX = 1057;
  }

  generateName() {
    const adjective = Math.floor(Math.random() * monsterNames.adjective.length);
    const race = Math.floor(Math.random() * monsterNames.race.length);
    const name = Math.floor(Math.random() * monsterNames.name.length);
    this.name = `${monsterNames.adjective[adjective]} ${monsterNames.race[race]} ${monsterNames.name[name]}`;
    return this.name;
  }

  async generateBody() {
    this.headNum = Math.floor(Math.random() * this.headImgs.length);
    this.bodyNum = Math.floor(Math.random() * this.bodyImgs.length);
    this.armsNum = Math.floor(Math.random() * this.armImgs.length);
    this.legsNum = Math.floor(Math.random() * this.legImgs.length);
    // restore health
    this.hp = 100;
    GGS.monsterHealth.style.width = `${this.hp}%`;
  }

  attack() {
    new Audio(monsterSoundAttack).play();
    this.monsterAttack = true;
  }

  hurts() {
    this.headX = 1010;
    this.bodyX = 1020;
    this.rightArmX = 820;
    this.leftArmX = 1150;
    this.legsX = 1057;

    this.hp -= 20; // hero damage
    if (GGS.monsterHealth) {
      GGS.monsterHealth.style.width = `${this.hp}%`;
    }
    if (this.hp <= 0) {
      this.die();
    } else {
      new Audio(monsterSoundHurts).play();
    }
  }

  generateMessageForModalWin() {
    const modalWinBody = document.getElementById('modalWinBody');
    const oldName = this.name;
    const newName = this.generateName();
    modalWinBody.innerHTML = `
      <p>Вы достигли уровня <span>${GGS.hero.level}</span>.</p>
      <p>Победа над монстром - <span>"${oldName}"</span>.</p>
      <p>Ваш следующий враг - <span>"${newName}"</span>.</p>
      Удачной битвы!`;
  }

  async die() {
    GGS.battleScreenShow = false;
    GGS.monsterHitTheGround = true;
    new Audio(monsterSoundDie).play();
    GGS.hero.level += 1;
    GGS.hero.hp = 100;
    GGS.heroHealth.style.width = `${GGS.hero.hp}%`;
    GGS.heroLevel.textContent = GGS.hero.level;

    await pause(750);
    GGS.mainGameCycleInProgress = false;
    this.generateMessageForModalWin();
    $('#modalWin').modal();
    await modalDialogWin.playerWin();
    GGS.monsterName.innerText = this.name;
  }
}
