import ListeningTask from './listening';

describe('class ListeningTask', () => {
  it('-generateTemplate- is a function', () => {
    expect(ListeningTask.generateTemplate).toBeInstanceOf(Function);
  });

  it('-generateTemplate- returns an object with 2 values - template and answer', () => {
    expect(typeof ListeningTask.generateTemplate()).toBe('object');
    expect('answer' in ListeningTask.generateTemplate()).toBe(true);
    expect('template' in ListeningTask.generateTemplate()).toBe(true);
    expect(Object.keys(ListeningTask.generateTemplate()).length).toBe(2);
  });

  it('-generateTemplate- generates template string with <input id="listeningAnswer">', () => {
    expect(ListeningTask.generateTemplate().template.includes('id="listeningAnswer"')).toBe(true);
  });
});
