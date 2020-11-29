// Напиши класс StringBuilder. На вход он получает один параметр - строку, которую записывает в свойство _value.
// Добавь классу следующий функционал:
// Геттер value - возвращает текущее значение поля _value
// Метод append(str) - получает параметр str (строку) и добавляет ее в конец _value
// Метод prepend(str) - получает параметр str (строку) и добавляет ее в начало value
// Метод pad(str) - получает параметр str (строку) и добавляет ее в начало и в конец _value
// Метод pad должен использовать методы append и prepend

// Write code under this line
const StringBuilder = function (value) {
  this.value = value;
};
StringBuilder.prototype.getValue = function () {
  return this.value;
};
StringBuilder.prototype.append = function (str) {
  return (this.value = this.getValue() + str);
};
StringBuilder.prototype.prepend = function (str) {
  return (this.value = str + this.getValue());
};
StringBuilder.prototype.pad = function (str) {
  this.append(str);
  this.prepend(str);
};

console.log(typeof StringBuilder);
// 'function'

const builder = new StringBuilder('.');
builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='
