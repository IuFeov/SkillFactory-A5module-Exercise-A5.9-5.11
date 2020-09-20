let guessNumber = Math.round(Math.random() * 30); // ❶
let tries = 10;
function guess(number) { // ❷
 if (tries === 0) { // ❸
   guessNumber = Math.round(Math.random() * 30); // ❹
   tries = 10; // ❹
   return "Попытки закончились - Вы проиграли. Загаданное число поменялось";
 }
 if (guessNumber === number) { // ❸
   guessNumber = Math.round(Math.random() * 30);
   tries = 10;
   return "Правильно! Загаданное число поменялось";
 }
 if (guessNumber > number) { // ❸
   tries--; // ❺
   return "Загаданное число больше. Попыток осталось: " + tries;
 }
 if (guessNumber < number) { // ❸
   tries--;
   return "Загаданное число меньше. Попыток осталось: " + tries;
 }
};


let guessNumber = Math.round(Math.random() * 30); // ❶
let tries = 10;
function guess(number) { // ❷
 if (tries === 0) { // ❸
   init(number);
   return "Попытки закончились - Вы проиграли. Загаданное число поменялось";
 }
 if (guessNumber === number) { // ❸
    init(number);
   return "Правильно! Загаданное число поменялось";
 }
 if (guessNumber > number) { // ❸
   tries--; // ❺
   return "Загаданное число больше. Попыток осталось: " + tries;
 }
 if (guessNumber < number) { // ❸
   tries--;
   return "Загаданное число меньше. Попыток осталось: " + tries;
 }
};


 function init(number) {
   guessNumber = Math.round(Math.random() * 30);
   tries = 10;
 }
 function hasLost() {
     return tries === 10;
 }
 function restartMsg() {
     return "Угадываемое число изменилось.";
 }
function isMore() {

}
function makeTriesLess  {
    tries--;
}
function lose() {
    return 
}
};