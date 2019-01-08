import LocalStorageHandler from '../../src/models/LocalStorageHandler';

describe('class localStorageHandler', () => {
  it('-getData- is a function', () => {
    expect(LocalStorageHandler.getData).toBeInstanceOf(Function);
  });

  it('-getData- returns an array of length not more than 11 elements', () => {
    for (let i = 0; i < 15; i++) {
      LocalStorageHandler.addPlayer({
        name: `TestName${i}`,
        kills: `${i}`,
      });
    }
    expect(LocalStorageHandler.getData()).toBeInstanceOf(Array);
    expect(LocalStorageHandler.getData().length).not.toBe(15);
    expect(LocalStorageHandler.getData().length).toBe(11);
  });

  it('-getData- returns returns a sorted array', () => {
    localStorage.clear();
    for (let i = 1; i <= 10; i++) {
      LocalStorageHandler.addPlayer({
        name: `TestName${i}`,
        kills: `${i}`,
      });
    }
    expect(LocalStorageHandler.getData()[0].kills).toBe('10');
    expect(LocalStorageHandler.getData()[5].kills).toBe('5');
    expect(LocalStorageHandler.getData()[9].kills).toBe('1');
  });

  it('-getData- returns null if localStorage is empty', () => {
    localStorage.clear();
    expect(LocalStorageHandler.getData()).not.toBeInstanceOf(Array);
    expect(LocalStorageHandler.getData()).toBe(null);
  });

  it('-addPlayer- is a function', () => {
    expect(LocalStorageHandler.addPlayer).toBeInstanceOf(Function);
  });

  it('-addPlayer- add array of objects to the local storage', () => {
    localStorage.clear();
    LocalStorageHandler.addPlayer({ name: 'name1', kills: '1' });
    LocalStorageHandler.addPlayer({ name: 'name2', kills: '2' });
    const arr = JSON.parse(localStorage.getItem('scoreboard'));
    expect(arr).toBeInstanceOf(Array);
    expect(arr.length).toEqual(2);
    expect(typeof arr[0]).toEqual('object');
    expect(typeof arr[1]).toEqual('object');
  });
});
