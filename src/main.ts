/*
A memoized function would avoid redoing a process if the result was found earlier. 
We want to be able to turn any function into a memoized one so that we can get a more optimized version.
*/

import { memoizeFib } from './memoize-fib.ts';

const fib = (n: number): number => {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
};

const memoizedFib = memoizeFib(fib);

console.log('memoizeFib(5):', memoizedFib(5));
console.log('memoizeFib(6):', memoizedFib(6));
console.log('memoizeFib(7):', memoizedFib(7));
console.log('memoizeFib(10):', memoizedFib(10));
