import GGS from '../GlobalGameState';
import fireballSound from '../../assets/audio/fireball.wav';
import heroDieSound from '../../assets/audio/hero-die.mp3';
import spireSound from '../../assets/audio/spire-throw.mp3';
import heroHurtsSound from '../../assets/audio/hero-hurts.mp3';
import pause from '../../utils/Pause';
import LocalStorageHandler from '../LocalStorageHandler';
import FinalScore from '../../screens/finalScore/finalScore';
import { scrScoreboardShow } from '../../utils/scrHandlers';


export default class Hero {
  constructor() {
    this.name = '';
    this.hp = 100;
    this.level = 0;
    this.sx = 30;
    this.syIdle = 30;
    this.syAttack = 383;
    this.syDie = 733;
    this.syHurt = 1083;
    this.heroImg = null;
    this.attackSpriteLength = 4000;
    this.spellImgs = [];
  }

  async attack(attack) {
    GGS.heroSY = this.syAttack;
    GGS.heroSX = this.sx;
    GGS.heroSpriteLength = this.attackSpriteLength;

    if (attack === 'fireball') {
      GGS.fireballAttack = true;
      await pause(500);
      new Audio(fireballSound).play();
    } else if (attack === 'spear') {
      GGS.spearAttack = true;
      new Audio(spireSound).play();
    }
  }

  hurts() {
    GGS.heroSY = this.syHurt;
    GGS.heroSX = this.sx;

    this.hp -= 20; // monster damage
    if (GGS.heroHealth) {
      GGS.heroHealth.style.width = `${this.hp}%`;
    }
    if (this.hp <= 0) {
      this.die();
    } else {
      new Audio(heroHurtsSound).play();
    }
  }

  async die() {
    GGS.battleScreenShow = false;
    LocalStorageHandler.addPlayer({
      name: this.name,
      kills: this.level,
    });

    new Audio(heroDieSound).play();
    GGS.heroSY = this.syDie;
    GGS.heroSX = this.sx;

    await pause(600); // waiting for death (sprite)
    GGS.mainGameCycleInProgress = false;
    await pause(1000); // waiting for scoreboard
    this.hp = 100;
    this.level = 0;
    FinalScore.createScoreList();
    scrScoreboardShow();
    await pause(100);
    document.getElementById('globaGameWrapper').classList.toggle('display-off');

    GGS.monster.generateBody();
    GGS.monsterName.innerText = GGS.monster.generateName();
    GGS.heroHealth.style.width = `${this.hp}%`;
    GGS.heroLevel.textContent = this.level;
    GGS.mainGameCycleInProgress = true;
  }
}
