import { describe, it, expect } from 'vitest';
import { promisify } from '../promisify';

describe('simple promisify', () => {
  it('should resolve with correct result', async () => {
    function multiplyCallback(
      callback: (result: number) => void,
      a: number,
      b: number
    ): void {
      setTimeout(() => callback(a * b), 10);
    }

    const asyncMultiply = promisify(multiplyCallback);
    const result = await asyncMultiply(3, 4);
    expect(result).toBe(12);
  });

  it('should work with string concat too', async () => {
    function concatCallback(callback: (result: string) => void): void {
      setTimeout(() => callback('hell"o'), 10);
    }

    const asyncConcat = promisify(concatCallback);
    const result = await asyncConcat();
    expect(result).toBe('hell"o');
  });
});
