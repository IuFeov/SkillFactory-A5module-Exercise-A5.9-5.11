
//Variables
let guessNumber = Math.round(Math.random() * 30);
let tries = 10;
 //String func
 function restartMsg() {
    return "Угадываемое число поменялось";
}
function tryMore()  {
    return "Попыток осталось: " + tries;
}
//Logical func
function hasLost() {
    return tries === 0;
}
function hasWon(number)   {
   return guessNumber === number;
}
function isGreater(number)   {
   return guessNumber > number;
}
function isLess(number)   {
   return guessNumber < number;
}
//Math Func
 function init() {
   guessNumber = Math.round(Math.random() * 30);
   tries = 10;
 }
 function makeTriesLess()  {
    tries--;
}
//Action func
function lostMsg() {
   init();
   return `Попытки закончились - Вы проиграли. ${restartMsg()}`;
}
function wonMsg() {
    init();
    return  `Правильно! WON! ${restartMsg()}`;
}
function gMsg() {
    makeTriesLess();
    return `Ваше число больше угадываемого. ${tryMore()}`;
}
function lMsg() {
    makeTriesLess();
    return `Ваше число меньше угадываемого. ${tryMore()}`;
}

function guess(number) {
    if(hasLost()) {
        return lostMsg();
    }
    if(hasWon(number)) {
        return wonMsg();
    }
    if(isGreater(number)) {
        return lMsg();
    }
    if(isLess(number)) {
        return gMsg();
    }
    return "Ошибка! Введите число до 30";
}
//Waiting for full page download
//    $(document).ready(function() {
//});

//Event service
$(document).ready(function() {
    $(".btn").click(function() {
      const inputValue = $("input").val();
      const resultValue = guess(+inputValue);
      const $result = $(".result");
      $result.html(resultValue);
    });
   });