const tasks = [
  { id: 1, text: "Научиться Frontend", completed: true },
  { id: 2, text: "Научиться Backend", completed: false },
  { id: 3, text: "Научиться Full-stack", completed: false }
];

let completedCount = 0;

for (const task of tasks) {
  if (task.completed) {
    console.log("✅ " + task.text);
    completedCount++; // увеличиваем счётчик
  } else {
    console.log("⏳ " + task.text);
  }
}

console.log("Выполнено задач: " + completedCount + " из " + tasks.length);