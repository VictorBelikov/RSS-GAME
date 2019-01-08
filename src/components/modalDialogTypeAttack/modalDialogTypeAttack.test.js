import ModalDialogTypeAttack from './modalDialogTypeAttack';
import GGS from '../../models/GlobalGameState';
import Task from '../../screens/task/task';

describe('class ModalDialogTypeAttack', () => {
  it('-draw- is a function', () => {
    expect(ModalDialogTypeAttack.draw).toBeInstanceOf(Function);
  });

  it('-draw- inserts correct template to the document', () => {
    ModalDialogTypeAttack.draw();
    expect(document.querySelector('#modalTypeAttack #modalTypeAttackTitle')).not.toBe(null);
    expect(document.querySelector('#modalTypeAttack #spearAttack')).not.toBe(null);
    expect(document.querySelector('#modalTypeAttack #fbAttack')).not.toBe(null);
  });

  it('-typeOfAttack- is a function', () => {
    expect(ModalDialogTypeAttack.typeOfAttack).toBeInstanceOf(Function);
  });

  it('-typeOfAttack- sets global game parametres typeOfAttack', () => {
    Task.draw();
    ModalDialogTypeAttack.typeOfAttack('someTestAttack');
    expect(GGS.typeOfAttack).toBe('someTestAttack');
  });

  it('-typeOfAttack- sets global game parametres modalTypeAttackShow to false', () => {
    Task.draw();
    ModalDialogTypeAttack.typeOfAttack('someTestAttack');
    expect(GGS.modalTypeAttackShow).toBe(false);
  });
});
