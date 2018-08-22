import fibonacci from './fibonacci.js';

/* Main Program Entry */
(function main() {
  const args = process.argv.slice(2);

  fibonacci(args[0]);
})();
