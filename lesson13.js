const book = {
    title: "Скотный двор",
    author: "Джордж Оруэлл",
    year: 1945,
    pages: 156,
    getInfo: function() {
        console.log(`${this.title} by ${this.author} ${this.year}`)
    }
}

console.log(`Книга ${book.title} автора ${book.author}, ${book.year} года, ${book.pages} страниц.`)
book.getInfo()

const colors = ["red", "black", "white"]

console.log(colors[0])
console.log(colors[2])
console.log(colors.length)

const tasks = [
    {id: 1, text: "Научиться Frontend", completed: true},
    {id: 2, text: "Научиться Backend", completed: false},
    {id: 3, text: "Научиться Full-stack", completed: false}
]

console.log(tasks[1].text)
console.log(tasks.length)

const person = {
    name: "Hvsh",
    age: 23,
    city: "Moscow"
}
document.getElementById("output").textContent = `Привет, ${person.name}! Тебе ${person.age} лет, ты из ${person.city}`