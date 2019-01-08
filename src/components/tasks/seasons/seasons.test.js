import SeasonsTask from './seasons';

describe('class SeasonsTask', () => {
  it('-generateTemplate- is a function', () => {
    expect(SeasonsTask.generateTemplate).toBeInstanceOf(Function);
  });

  it('-generateTemplate- returns an object with 2 values - template and answer', () => {
    expect(typeof SeasonsTask.generateTemplate()).toBe('object');
    expect('answer' in SeasonsTask.generateTemplate()).toBe(true);
    expect('template' in SeasonsTask.generateTemplate()).toBe(true);
    expect(Object.keys(SeasonsTask.generateTemplate()).length).toBe(2);
  });

  it('-generateTemplate- generates template string with <ul id="seasonsList">', () => {
    expect(SeasonsTask.generateTemplate().template.includes('id="seasonsList"')).toBe(true);
  });
});
