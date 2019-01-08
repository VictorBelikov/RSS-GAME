import MathTask from './math';

describe('class MathTask', () => {
  it('-generateTemplate- is a function', () => {
    expect(MathTask.generateTemplate).toBeInstanceOf(Function);
  });

  it('-generateTemplate- returns an object with 2 values - template and answer', () => {
    expect(typeof MathTask.generateTemplate()).toBe('object');
    expect('answer' in MathTask.generateTemplate()).toBe(true);
    expect('template' in MathTask.generateTemplate()).toBe(true);
    expect(Object.keys(MathTask.generateTemplate()).length).toBe(2);
  });

  it('-generateTemplate- generates template string with <input id="mathAnswer">', () => {
    expect(MathTask.generateTemplate().template.includes('id="mathAnswer"')).toBe(true);
  });

  it('-calculate- is a function', () => {
    expect(MathTask.calculate).toBeInstanceOf(Function);
  });

  it('-calculate- returns correct result of math operation or TypeError', () => {
    expect(MathTask.calculate(4, 5, '+')).toBe(9);
    expect(MathTask.calculate(40, 5, '-')).toBe(35);
    expect(MathTask.calculate(80, 4, '/')).toBe(20);
    expect(MathTask.calculate(90, 5, '*')).toBe(450);
    expect(() => {
      MathTask.calculate(NaN, 'hello');
    }).toThrowError(TypeError);
  });
});
