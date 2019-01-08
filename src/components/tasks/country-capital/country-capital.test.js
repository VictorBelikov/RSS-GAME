import CountryCapitalTask from './country-capital';

describe('class CountryCapitalTask', () => {
  it('-generateTemplate- is a function', () => {
    expect(CountryCapitalTask.generateTemplate).toBeInstanceOf(Function);
  });

  it('-generateTemplate- returns an object with 2 values - template and answer', () => {
    expect(typeof CountryCapitalTask.generateTemplate()).toBe('object');
    expect('answer' in CountryCapitalTask.generateTemplate()).toBe(true);
    expect('template' in CountryCapitalTask.generateTemplate()).toBe(true);
    expect(Object.keys(CountryCapitalTask.generateTemplate()).length).toBe(2);
  });

  it('-generateTemplate- generates template string with <ul id="ccapitalList">', () => {
    expect(CountryCapitalTask.generateTemplate().template.includes('id="ccapitalList"')).toBe(true);
  });
});
