import MissingLetterTask from './missing-letter';

describe('class MissingLetterTask', () => {
  it('-generateTemplate- is a function', () => {
    expect(MissingLetterTask.generateTemplate).toBeInstanceOf(Function);
  });

  it('-generateTemplate- returns an object with 2 values - template and answer', () => {
    expect(typeof MissingLetterTask.generateTemplate()).toBe('object');
    expect('answer' in MissingLetterTask.generateTemplate()).toBe(true);
    expect('template' in MissingLetterTask.generateTemplate()).toBe(true);
    expect(Object.keys(MissingLetterTask.generateTemplate()).length).toBe(2);
  });

  it('-generateTemplate- generates template string with <ul class="missletter-word">', () => {
    expect(MissingLetterTask.generateTemplate().template.includes('class="missletter-word"')).toBe(true);
  });
});
