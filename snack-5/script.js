const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]

let evenNumbers = [];

nums.forEach((num) => (num % 2 === 0 ? evenNumbers.push(num) : false));

console.log(evenNumbers);
