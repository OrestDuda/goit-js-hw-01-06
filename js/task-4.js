let credits = 23580;
const pricePerDroid = 3000;
let message;

let quantity = 0;
let totalPrice = quantity * pricePerDroid;
let totalBalance = 0;

let userAnswer = prompt('How many droids you want to buy?');
if (userAnswer === null) {
  message = 'Canceled by user';
} else if (quantity > 0 && credits > totalPrice) {
  totalBalance = credits - totalPrice;
  message = `Вы купили дроидов ${quantity}, на счету осталось ${totalBalance} кредитов.`;
} else {
  message = 'Недостаточно средств на счету!';
}
console.log(message);
