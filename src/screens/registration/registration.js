import registrationTemplate from './registration.template';
import './registration.css';
import GGS from '../../models/GlobalGameState';

export default class Registration {
  static setPlayerName() {
    const name = document.getElementById('playerName').value;
    GGS.hero.name = name;
    GGS.battleScreenShow = true;
    document.getElementById('heroName').innerText = name;
    document.getElementById('globaGameWrapper').classList.toggle('display-off');
    document.getElementById('registration').classList.toggle('display-off');
  }

  static addHandler() {
    document.getElementById('regForm').addEventListener('submit', (e) => {
      e.preventDefault();
      Registration.setPlayerName();
    });
  }

  static draw() {
    document.body.insertAdjacentHTML('beforeend', registrationTemplate);
  }
}
