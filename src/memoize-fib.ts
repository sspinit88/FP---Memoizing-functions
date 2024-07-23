/*
  A memoized function would avoid redoing a process if the result was found earlier. 
  We want to be able to turn any function into a memoized one so that we can get a more optimized version.


  function fib(n: number): number {
    if (n == 0) {
      return 0;
    } else if (n == 1) {
      return 1;
    } else {
      return fib(n - 2) + fib(n - 1);
    }
  }

*/

const memoizeFib = <T extends (x: number) => any>(
  fn: T
): ((x: number) => ReturnType<T>) => {
  const cache = {} as Record<number, ReturnType<T>>;
  return (x) => (x in cache ? cache[x] : (cache[x] = fn(x)));
};

export { memoizeFib };
