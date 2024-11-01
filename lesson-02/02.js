let dice1 = Math.floor(Math.random() * 6) + 1;
let dice2 = Math.floor(Math.random() * 6) + 1;

let isWinningDouble = (dice1 === dice2) && (dice1 > 3);

console.log('Первый бросок: ' + dice1);
console.log('Второй бросок: ' + dice2);
if (isWinningDouble) {
  console.log('Выигрышный дубль!');
} else {
  console.log('Не выигрышный дубль.');
}