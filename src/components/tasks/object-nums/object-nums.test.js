import ObjectNumsTask from './object-nums';

describe('class ObjectNumsTask', () => {
  it('-generateTemplate- is a function', () => {
    expect(ObjectNumsTask.generateTemplate).toBeInstanceOf(Function);
  });

  it('-generateTemplate- returns an object with 2 values - template and answer', () => {
    expect(typeof ObjectNumsTask.generateTemplate()).toBe('object');
    expect('answer' in ObjectNumsTask.generateTemplate()).toBe(true);
    expect('template' in ObjectNumsTask.generateTemplate()).toBe(true);
    expect(Object.keys(ObjectNumsTask.generateTemplate()).length).toBe(2);
  });

  it('-generateTemplate- generates template string with <input id="objectnumsAnswer">', () => {
    expect(ObjectNumsTask.generateTemplate().template.includes('id="objectnumsAnswer"')).toBe(true);
  });

  it('-generateTemplate- generates template string with <div id="objectnumsImg"', () => {
    expect(ObjectNumsTask.generateTemplate().template.includes('id="objectnumsImg"')).toBe(true);
  });
});
