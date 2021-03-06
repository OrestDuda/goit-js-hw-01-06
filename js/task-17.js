// Напиши функцию countTotalSalary(employees) принимающую объект зарплат. Функция считает общую сумму зарплаты
// работников и возвращает ее. Каждое поле объекта, передаваемого в функцию, имеет вид "имя":"зарплата".

const countTotalSalary = function (employees) {
  'use strict';
  // Write code under this line
  let arrayValues = Object.values(employees);
  let totalSalary = 0;
  for (let arrayValue of arrayValues) {
    totalSalary += arrayValue;
  }
  return totalSalary;
};

// Объекты и ожидаемый результат
const developers = {
  mango: 300,
  poly: 250,
  alfred: 450,
};
console.log(countTotalSalary(developers));
// 1000

const supports = {
  kiwi: 200,
  lux: 150,
  chelsy: 150,
};
console.log(countTotalSalary(supports));
// 500
