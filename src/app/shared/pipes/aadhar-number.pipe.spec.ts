import { AadharNumberPipe } from './aadhar-number.pipe';

describe('AadharNumberPipe', () => {
  it('create an instance', () => {
    const pipe = new AadharNumberPipe();
    expect(pipe).toBeTruthy();
  });
});
