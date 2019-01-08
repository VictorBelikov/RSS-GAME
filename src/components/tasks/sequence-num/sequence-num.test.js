import SequenceNumTask from './sequence-num';

describe('class SequenceNumTask', () => {
  it('-generateTemplate- is a function', () => {
    expect(SequenceNumTask.generateTemplate).toBeInstanceOf(Function);
  });

  it('-generateTemplate- returns an object with 2 values - template and answer', () => {
    expect(typeof SequenceNumTask.generateTemplate()).toBe('object');
    expect('answer' in SequenceNumTask.generateTemplate()).toBe(true);
    expect('template' in SequenceNumTask.generateTemplate()).toBe(true);
    expect(Object.keys(SequenceNumTask.generateTemplate()).length).toBe(2);
  });

  it('-generateTemplate- generates template string with <input id="sequencenumAnswer">', () => {
    expect(SequenceNumTask.generateTemplate().template.includes('id="sequencenumAnswer"')).toBe(true);
  });
});
