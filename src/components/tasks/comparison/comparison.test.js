import ComparisonTask from './comparison';

describe('class ComparisonTask', () => {
  it('-generateTemplate- is a function', () => {
    expect(ComparisonTask.generateTemplate).toBeInstanceOf(Function);
  });

  it('-generateTemplate- returns an object with 2 values - template and answer', () => {
    expect(typeof ComparisonTask.generateTemplate()).toBe('object');
    expect('answer' in ComparisonTask.generateTemplate()).toBe(true);
    expect('template' in ComparisonTask.generateTemplate()).toBe(true);
    expect(Object.keys(ComparisonTask.generateTemplate()).length).toBe(2);
  });

  it('-generateTemplate- generates template string with <input id="comarisonAnswer">', () => {
    expect(ComparisonTask.generateTemplate().template.includes('id="comarisonAnswer"')).toBe(true);
  });

  it('-calculate- is a function', () => {
    expect(ComparisonTask.calculate).toBeInstanceOf(Function);
  });

  it('-calculate- returns only "< > =" or TypeError', () => {
    expect(ComparisonTask.calculate(4, 5)).toBe('<');
    expect(ComparisonTask.calculate(40, 5)).toBe('>');
    expect(ComparisonTask.calculate(77, 77)).toBe('=');
    expect(() => {
      ComparisonTask.calculate(NaN, 'hello');
    }).toThrowError(TypeError);
  });
});
