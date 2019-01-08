import DragDropNumsTask from './dnd-nums';

describe('class DragDropNumsTask', () => {
  it('-generateTemplate- is a function', () => {
    expect(DragDropNumsTask.generateTemplate).toBeInstanceOf(Function);
  });

  it('-generateTemplate- returns an object with 2 values - template and answer', () => {
    expect(typeof DragDropNumsTask.generateTemplate()).toBe('object');
    expect('answer' in DragDropNumsTask.generateTemplate()).toBe(true);
    expect('template' in DragDropNumsTask.generateTemplate()).toBe(true);
    expect(Object.keys(DragDropNumsTask.generateTemplate()).length).toBe(2);
  });

  it('-generateTemplate- generates template string with <ul id="sortable">', () => {
    expect(DragDropNumsTask.generateTemplate().template.includes('id="sortable"')).toBe(true);
  });
});
