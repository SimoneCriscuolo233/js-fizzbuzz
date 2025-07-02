// Stampa dei numeri da 1 a 100 utilizzando for
for (let i = 1; i <= 100; i++) {
  // Se il numero è divisibile per 3 e per 5, stampa "FizzBuzz"
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(`${i} FizzBuzz`);
  }
  // Se il numero è divisibile solo per 3, stampa "Fizz"
  else if (i % 3 === 0) {
    console.log(`${i} Fizz`);
  }
  // Se il numero è divisibile solo per 5, stampa "Buzz"
  else if (i % 5 === 0) {
    console.log(`${i} Buzz`);
  }
  // Altrimenti, stampa il numero stesso
  else {
    console.log(i);
  }
}