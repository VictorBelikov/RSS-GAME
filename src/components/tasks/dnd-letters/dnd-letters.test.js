import DragDropLettersTask from './dnd-letters';

describe('class DragDropLettersTask', () => {
  it('-generateTemplate- is a function', () => {
    expect(DragDropLettersTask.generateTemplate).toBeInstanceOf(Function);
  });

  it('-generateTemplate- returns an object with 2 values - template and answer', () => {
    expect(typeof DragDropLettersTask.generateTemplate()).toBe('object');
    expect('answer' in DragDropLettersTask.generateTemplate()).toBe(true);
    expect('template' in DragDropLettersTask.generateTemplate()).toBe(true);
    expect(Object.keys(DragDropLettersTask.generateTemplate()).length).toBe(2);
  });

  it('-generateTemplate- generates template string with <ul id="sortable">', () => {
    expect(DragDropLettersTask.generateTemplate().template.includes('id="sortable"')).toBe(true);
  });
});
