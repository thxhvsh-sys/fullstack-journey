const userAge = 23
const hour = 5
const greetingElement = document.getElementById("greeting")
if (userAge >=18) {
    console.log("Доступ разрешён!")
}
else {
    console.log("Доступ запрещён!")
}

if (hour >=5 && hour <=11) {
    console.log("Доброе утро!")
    greetingElement.textContent = "Доброе утро!"
}
else if (hour >=12 && hour <=17) {
    console.log("Добрый день!")
    greetingElement.textContent = "Добрый день!"
}
else if (hour >=18 && hour <=22) {
    console.log("Добрый вечер!")
    greetingElement.textContent = "Добрый вечер!"
}
else {
    console.log("Доброй ночи!")
    greetingElement.textContent = "Доброй ночи!"
}