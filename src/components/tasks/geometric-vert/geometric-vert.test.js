import GeometrVertTask from './geometric-vert';

describe('class GeometrVertTask', () => {
  it('-generateTemplate- is a function', () => {
    expect(GeometrVertTask.generateTemplate).toBeInstanceOf(Function);
  });

  it('-generateTemplate- returns an object with 2 values - template and answer', () => {
    expect(typeof GeometrVertTask.generateTemplate()).toBe('object');
    expect('answer' in GeometrVertTask.generateTemplate()).toBe(true);
    expect('template' in GeometrVertTask.generateTemplate()).toBe(true);
    expect(Object.keys(GeometrVertTask.generateTemplate()).length).toBe(2);
  });

  it('-generateTemplate- generates template string with <ul id="geometricVerts">', () => {
    expect(GeometrVertTask.generateTemplate().template.includes('id="geometricVerts"')).toBe(true);
  });
});
