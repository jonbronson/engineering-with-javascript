/**
 * Compute a fibonacci sequence
 * @param {number} count
 */
function fibonacci(count) {
  let a = 1;
  let b = 0;
  let temp;

  while (count >= 0) {
    temp = a;
    a = a + b;
    b = temp;
    count--;
    console.log(b);
  }
}

export default fibonacci;
