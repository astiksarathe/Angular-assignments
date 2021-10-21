import { NumberPipe } from './number.pipe';

describe('NumberPipe', () => {
  it('should display low if number is 99', () => {
    const pipe = new NumberPipe();
    expect(pipe.transform(99)).toEqual('99 (low)');

  });

  it('should display high if number is 101', () => {

    const pipe = new NumberPipe();
    expect(pipe.transform(101)).toEqual('101 (high)');

  });

  it('should display infinite if number is 1001', () => {
    const pipe = new NumberPipe();
    expect(pipe.transform(1001)).toEqual('1001 (infinite)');

  });
});



