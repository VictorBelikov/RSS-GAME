import TranslateTask from './translate';

describe('class TranslateTask', () => {
  it('-generateTemplate- is a function', () => {
    expect(TranslateTask.generateTemplate).toBeInstanceOf(Function);
  });

  it('-generateTemplate- returns an object with 2 values - template and answer', () => {
    expect(typeof TranslateTask.generateTemplate()).toBe('object');
    expect('answer' in TranslateTask.generateTemplate()).toBe(true);
    expect('template' in TranslateTask.generateTemplate()).toBe(true);
    expect(Object.keys(TranslateTask.generateTemplate()).length).toBe(2);
  });

  it('-generateTemplate- generates template string with <input id="translateAnswer">', () => {
    expect(TranslateTask.generateTemplate().template.includes('id="translateAnswer"')).toBe(true);
  });
});
