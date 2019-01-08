import Hero from './Hero';
import GGS from '../GlobalGameState';
import Battle from '../../screens/battle/battle';
import Registration from '../../screens/registration/registration';
import Monster from './Monster';

describe('class Hero', () => {
  let hero;
  beforeEach(() => {
    hero = new Hero();
    HTMLMediaElement.prototype.play = jest.fn();
  });

  it('-attack- is a function', () => {
    expect(hero.attack).toBeInstanceOf(Function);
  });

  it('-attack- sets fireballAttack as true in global game state if parameter is "fireball"', () => {
    hero.attack('fireball');
    expect(GGS.fireballAttack).toEqual(true);
  });

  it('-attack- sets spearAttack as true in global game state if parameter is "spear"', () => {
    hero.attack('spear');
    expect(GGS.spearAttack).toEqual(true);
  });

  it('-hurts- is a function', () => {
    expect(hero.hurts).toBeInstanceOf(Function);
  });

  it('-hurts- sets the amount of health(%) in global game statement and hero health progressbar', () => {
    HTMLCanvasElement.prototype.getContext = jest.fn();
    GGS.hero = hero;
    GGS.monster = new Monster();
    hero.hurts();
    hero.hp = 77;
    Registration.draw();
    Battle.draw();
    expect(GGS.heroHealth.style.width).toEqual('77%');
  });

  it('-die- is a function', () => {
    expect(hero.die).toBeInstanceOf(Function);
  });

  it('-die- sets hero health points to 100', () => {
    hero.die();
    expect(hero.hp).toEqual(100);
  });

  it('-die- sets hero level to zero', () => {
    hero.die();
    expect(hero.level).toEqual(0);
  });

  it('-die- restores main game cycle', () => {
    hero.die();
    expect(GGS.mainGameCycleInProgress).toEqual(true);
  });

  it('-die- doesn\'t remove battle scene from the screen', () => {
    HTMLCanvasElement.prototype.getContext = jest.fn();
    GGS.hero = hero;
    GGS.monster = new Monster();
    Battle.draw();
    hero.die();
    expect($('#globaGameWrapper').css('display')).toEqual('block');
  });
});
