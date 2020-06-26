"use strict";

// 1 decision
let languageName = prompt('Какое официальное название языка JavaScript?');

if (languageName == 'ECMAScript') {
    alert('Правильно!');
} else {
    alert('Ты не знаешь? «ECMAScript»!');
}

// 2 decision
let signNumber = prompt('Введите число');

if (signNumber > 0) {
    alert(1);
} else if (signNumber < 0) {
    alert(-1);
} else {
    alert(0);
}

// 3 decision
let result = (a + b < 4) ? 'Мало' : 'Много';

// 4 decision
let message = (login == 'Сотрудник') ? 'Привет' :
    (login == 'Директор') ? 'Здравствуйте' :
    (login == '') ? 'Нет логина' : '';

