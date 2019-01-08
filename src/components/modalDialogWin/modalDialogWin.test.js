import ModalDialogWin from './modalDialogWin';

describe('class ModalDialogWin', () => {
  it('-draw- is a function', () => {
    expect(ModalDialogWin.draw).toBeInstanceOf(Function);
  });

  it('-draw- add correct template to the document', () => {
    ModalDialogWin.draw();
    expect(document.querySelector('#modalWin #modalWinTitle')).not.toBe(null);
    expect(document.querySelector('#modalWin #modalWinBody')).not.toBe(null);
  });

  it('-playerWin- is a function', () => {
    expect(ModalDialogWin.playerWin).toBeInstanceOf(Function);
  });

  it('-playerWin- return new Promise', () => {
    expect(ModalDialogWin.playerWin()).toBeInstanceOf(Promise);
  });
});
