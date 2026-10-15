// 1. Переменные
const myName = "Hvsh";
let myAge = 23;
const isLearning = true;

// 2. Вывод в консоль (открой F12 → Console)
console.log("Меня зовут:", myName);
console.log("Мой возраст:", myAge);
console.log("Я учусь?", isLearning);
console.log(myAge + 5);

// 3. Находим элементы на странице
const title = document.getElementById("title");
const description = document.getElementById("description");
const button = document.getElementById("magic-btn");

// 4. Меняем текст при загрузке
title.textContent = "Привет из JavaScript!";
description.textContent = `Меня зовут ${myName}, мне ${myAge} лет.`;

// 5. Добавляем реакцию на клик
button.addEventListener("click", () => {
  description.textContent = "Ты нажал на кнопку! JavaScript работает! 🎉";
  button.textContent = "Сработало!";
  document.body.style.backgroundColor = "lightblue";
});
