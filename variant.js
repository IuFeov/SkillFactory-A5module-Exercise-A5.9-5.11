
//Variables
let guessNumber = Math.round(Math.random() * 30);
let tries = 10;

//Math Func
 function init(number) {
   guessNumber = Math.round(Math.random() * 30);
   tries = 10;
 }
 function makeTriesLess()  {
    tries--;
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
 //String func
 function restartMsg() {
    return "Загаданное число поменялось";
}
function tryMore()  {
    return "Попыток осталось: " + tries;
}

//Action func
function lostMsg() {
   init();
   return "Попытки закончились - Вы проиграли. ${restartMsg()}";
}
function wonMsg() {
    init();
    return  "Правильно! ${restartMsg()}";
}
function gMsg() {
    makeTriesLess();
    return "Загаданное число больше. ${tryMore()}";
}
function lMsg() {
    makeTriesLess();
    return "Загаданное число меньше. ${tryMore()}";
}

function guess() {
    if(hasLost()) {
        return lostMsg();
    }
    if(hasWon()) {
        return wonMsg();
    }
    if(isGreater()) {
        return gMsg();
    }
    if(isLess()) {
        return lMsg();
    }
    return "Ошибка";
}S
//Waiting for full page download
    $(document).ready(function() {
});