import ImageLoader from '../../src/models/ImageLoader';


describe('class ImageLoader', () => {
  it('-load- is a function', () => {
    expect(ImageLoader.load).toBeInstanceOf(Function);
  });

  it('-load- return new Promise', () => {
    expect(ImageLoader.load()).toBeInstanceOf(Promise);
  });
});
