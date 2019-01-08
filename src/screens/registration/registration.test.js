import Registration from './registration';
import Hero from '../../models/characters/Hero';
import GGS from '../../models/GlobalGameState';
import template from '../battle/battle.template';


describe('Registration', () => {
  it('-draw- is a function', () => {
    expect(Registration.draw).toBeInstanceOf(Function);
  });

  it('-draw- inserts the registration screen into the document', () => {
    Registration.draw();
    expect(document.querySelector('#regForm #playerName')).not.toBe(null);
  });

  it('-addHandler- is a function', () => {
    expect(Registration.addHandler).toBeInstanceOf(Function);
  });

  it('-setPlayerName- is a function', () => {
    expect(Registration.setPlayerName).toBeInstanceOf(Function);
  });

  it('-setPlayerName- set correct player name', () => {
    document.body.insertAdjacentHTML('beforeend', template);
    GGS.hero = new Hero();
    Registration.draw();
    document.getElementById('playerName').value = 'someTestName';
    Registration.setPlayerName();
    expect(document.getElementById('heroName').innerText).toBe('someTestName');
  });
});
