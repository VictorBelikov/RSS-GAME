import GeometrFigTask from './geometric-figure';

describe('class GeometrFigTask', () => {
  it('-generateTemplate- is a function', () => {
    expect(GeometrFigTask.generateTemplate).toBeInstanceOf(Function);
  });

  it('-generateTemplate- returns an object with 2 values - template and answer', () => {
    expect(typeof GeometrFigTask.generateTemplate()).toBe('object');
    expect('answer' in GeometrFigTask.generateTemplate()).toBe(true);
    expect('template' in GeometrFigTask.generateTemplate()).toBe(true);
    expect(Object.keys(GeometrFigTask.generateTemplate()).length).toBe(2);
  });

  it('-generateTemplate- generates template string with <ul id="geometricList">', () => {
    expect(GeometrFigTask.generateTemplate().template.includes('id="geometricList"')).toBe(true);
  });
});
