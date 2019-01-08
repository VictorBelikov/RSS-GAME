import Monster from './Monster';
import Battle from '../../screens/battle/battle';
import GGS from '../GlobalGameState';
import Hero from './Hero';

describe('class Monster', () => {
  let monster;
  beforeEach(() => {
    monster = new Monster();
    HTMLMediaElement.prototype.play = jest.fn();
    HTMLCanvasElement.prototype.getContext = jest.fn();
  });

  it('-generateName- is a function', () => {
    expect(monster.generateName).toBeInstanceOf(Function);
  });

  it('-generateName- return a string', () => {
    expect(typeof monster.generateName()).toEqual('string');
  });

  it('-generateName- generate random names', () => {
    monster.name = 'test-name';
    monster.generateName();
    expect(monster.name).not.toEqual('test-name');
  });

  it('-generateBody- is a function', () => {
    expect(monster.generateBody).toBeInstanceOf(Function);
  });

  it('-generateBody- set monster health point to 100', () => {
    GGS.hero = new Hero();
    GGS.monster = monster;
    Battle.draw();
    monster.hp = 77;
    monster.generateBody();
    expect(monster.hp).not.toEqual(77);
    expect(monster.hp).toEqual(100);
  });

  it('-generateBody- sets the amount of health in global game statement and monster health progressbar to 100%', () => {
    GGS.hero = new Hero();
    GGS.monster = monster;
    Battle.draw();
    monster.generateBody();
    monster.hp = 77;
    expect(GGS.monsterHealth.style.width).not.toEqual('77%');
    expect(GGS.monsterHealth.style.width).toEqual('100%');
  });

  it('-attack- is a function', () => {
    expect(monster.attack).toBeInstanceOf(Function);
  });

  it('-attack- sets monsterAttack flag to true', () => {
    monster.monsterAttack = null;
    monster.attack();
    expect(monster.monsterAttack).toEqual(true);
  });

  it('-hurts- is a function', () => {
    expect(monster.hurts).toBeInstanceOf(Function);
  });

  it('-hurts- restores monster body parameters to default after movement', () => {
    monster.headX = 777;
    monster.bodyX = 777;
    monster.rightArmX = 777;
    monster.leftArmX = 777;
    monster.legsX = 777;
    monster.hurts();
    expect(monster.headX).toEqual(1010);
    expect(monster.bodyX).toEqual(1020);
    expect(monster.rightArmX).toEqual(820);
    expect(monster.leftArmX).toEqual(1150);
    expect(monster.legsX).toEqual(1057);
  });

  it('-die- is a function', () => {
    expect(monster.die).toBeInstanceOf(Function);
  });

  it('-die- increases hero\'s level by 1', () => {
    GGS.hero = new Hero();
    GGS.monster = monster;
    GGS.hero.level = 0;
    monster.die();
    expect(GGS.hero.level).toEqual(1);
  });

  it('-die- sets hero\'s health point to 100', () => {
    Battle.draw();
    GGS.hero = new Hero();
    GGS.monster = monster;
    GGS.hero.hp = 0;
    monster.die();
    expect(GGS.hero.hp).toEqual(100);
  });

  it('-die- sets random monster\'s name to the screen', () => {
    GGS.hero = new Hero();
    GGS.monster = monster;
    Battle.draw();
    monster.name = 'some test name';
    monster.die();
    expect(GGS.monsterName.innerText).not.toEqual('some test name');
  });
});
