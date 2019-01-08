import Battle from './battle';
import GGS from '../../models/GlobalGameState';
import Hero from '../../models/characters/Hero';
import Monster from '../../models/characters/Monster';

describe('Battle', () => {
  beforeEach(() => {
    HTMLCanvasElement.prototype.getContext = jest.fn();
  });

  it('-draw- is a function', () => {
    expect(Battle.draw).toBeInstanceOf(Function);
  });

  it('-draw- inserts correct template into the document', () => {
    GGS.hero = new Hero();
    GGS.monster = new Monster();
    Battle.draw();
    expect(document.querySelector('#globaGameWrapper #canvasWrapper')).not.toBe(null);
  });

  it('-draw- set correct hero name', () => {
    GGS.hero = new Hero();
    GGS.monster = new Monster();
    GGS.hero.name = 'someTestName';
    Battle.draw();
    expect(document.getElementById('heroName').innerText).toEqual('someTestName');
  });
});
