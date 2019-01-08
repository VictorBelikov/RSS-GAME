import './battle.css';
import template from './battle.template';
import GGS from '../../models/GlobalGameState';

export default class Battle {
  static draw() {
    document.body.insertAdjacentHTML('beforeend', template);
    const canvas = document.querySelector('canvas');
    GGS.ctx = canvas.getContext('2d');

    document.getElementById('heroName').innerText = GGS.hero.name;
    const heroHealth = document.getElementById('heroHp');
    const heroLevel = document.getElementById('heroLevel');
    const monsterHealth = document.getElementById('monsterHp');

    heroHealth.style.width = `${GGS.hero.hp}%`;
    heroLevel.textContent = GGS.hero.level;
    monsterHealth.style.width = `${GGS.monster.hp}%`;

    GGS.heroHealth = heroHealth;
    GGS.heroLevel = heroLevel;
    GGS.monsterHealth = monsterHealth;
    GGS.monsterName = document.getElementById('monsterName');

    document.getElementById('monsterName').innerText = GGS.monster.generateName();
    GGS.monster.generateBody();
  }
}
