"use strict";

// 1 decision
if (age >= 14 && age <= 90);

// 2 decision
if (!(age >= 14 && age <= 90));

// 3 decision
if (age < 14 || age > 90);

// 3 decision
let userName = prompt("Кто там?", "");

if (userName == "Админ") {
  let pass = prompt("Пароль?", "");

  if (pass == "Я главный") {
    alert("Здравствуйте!");
  } else if (pass == "" || pass == null) {
    alert("Отменено");
  } else {
    alert("Неверный пароль");
  }
} else if (userName == "" || userName == null) {
  alert("Отменено");
} else {
  alert("Я вас не знаю");
}
