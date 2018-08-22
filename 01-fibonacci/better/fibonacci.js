function fibonacci(number){
  let a = 1, b = 0, temp;

  while (number >= 0){
    temp = a;
    a = a + b;
    b = temp;
    number--;
    console.log(b);
  }
}

/* Main Program Entry */
(function main() {

  const args = process.argv.slice(2);

  fibonacci(args[0]);
})();