const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

let userAnswer = prompt('Password?');
if (userAnswer === ADMIN_PASSWORD) {
  message = 'Welcome';
} else if (userAnswer === null) {
  message = 'Canceled by user';
} else {
  message = 'Access denied';
}
console.log(message);
