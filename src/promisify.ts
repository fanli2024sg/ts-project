export function promisify<TArgs extends unknown[], TResult>(
  fn: (callback: (result: TResult) => void, ...args: TArgs) => void
): (...args: TArgs) => Promise<TResult> {
  return (...args: TArgs): Promise<TResult> => {
    return new Promise<TResult>((resolve) => {
      fn(
        (result: TResult) => {
          resolve(result);
        },
        ...args
      );
    });
  };
}
