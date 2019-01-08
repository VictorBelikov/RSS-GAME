import SequenceDayTask from './sequence-day';

describe('class SequenceDayTask', () => {
  it('-generateTemplate- is a function', () => {
    expect(SequenceDayTask.generateTemplate).toBeInstanceOf(Function);
  });

  it('-generateTemplate- returns an object with 2 values - template and answer', () => {
    expect(typeof SequenceDayTask.generateTemplate()).toBe('object');
    expect('answer' in SequenceDayTask.generateTemplate()).toBe(true);
    expect('template' in SequenceDayTask.generateTemplate()).toBe(true);
    expect(Object.keys(SequenceDayTask.generateTemplate()).length).toBe(2);
  });

  it('-generateTemplate- generates template string with <ul id="sequencedayList">', () => {
    expect(SequenceDayTask.generateTemplate().template.includes('id="sequencedayList"')).toBe(true);
  });
});
