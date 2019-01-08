import pause from '../../src/utils/Pause';


describe('Pause', () => {
  it('-pause- is a function', () => {
    expect(pause).toBeInstanceOf(Function);
  });

  it('-pause- return new Promise', () => {
    expect(pause()).toBeInstanceOf(Promise);
  });

  it('-pause- return new Promise once', () => {
    expect.assertions(1);
    return pause(100)
      .then(data => expect(data)
        .toEqual(undefined));
  });

  it('-pause- can work with time as a parameter; waits 1 second', () => {
    jest.useFakeTimers();
    pause(1000);
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
  });
});
