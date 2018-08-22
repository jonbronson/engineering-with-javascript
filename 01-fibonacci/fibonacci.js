const args = process.argv.slice(2);

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

fibonacci(args[0]);
