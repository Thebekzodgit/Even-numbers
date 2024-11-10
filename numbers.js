function printEvenNumbers(n = 0) {
  if (n > 100) return;
  if (n % 2 === 0) console.log(n);
  printEvenNumbers(n + 1);
}

printEvenNumbers();
