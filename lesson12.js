function sayHello() {
    console.log("Привет, мир!")
}
sayHello()
sayHello()
sayHello()

function greet(name, age) {
    console.log(`Привет ${name}! Тебе ${age} лет.`)
}
greet("Hvsh", 23)
greet("Kodokushi", 21)
greet("Loner", 20)

function calculateArea(width, height) {
    return width * height
}
const area = calculateArea(15,3)
console.log(area)

const calculateArea1 = (width, height) => width * height
console.log(calculateArea1(15,3))

function getGreeting(hour) {
    if (hour >=5 && hour <=11) {
    return "Доброе утро!"
}
else if (hour >=12 && hour <=17) {
    return "Добрый день!"
}
else if (hour >=18 && hour <=22) {
    return "Добрый вечер!"
}
else {
    return "Доброй ночи!"
}
}
const currentHour = new Date().getHours();
const greeting = getGreeting(currentHour);
document.getElementById("result").textContent = greeting;