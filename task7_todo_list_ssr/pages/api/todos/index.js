import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "pages", "lib", "data", "todos.json");

function readTodos() {
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
  } catch {
    return [];
  }
}

function writeTodos(todos) {
  fs.writeFileSync(filePath, JSON.stringify(todos, null, 2));
}

export default function handler(req, res) {
  if (req.method === "GET") {
    const todos = readTodos();
    res.status(200).json(todos);
  } else if (req.method === "POST") {
    const { title } = req.body;
    const todos = readTodos();
    const newTodo = { id: Date.now().toString(), title };
    todos.unshift(newTodo);
    writeTodos(todos);
    res.status(201).json(newTodo);
  } else {
    res.status(405).end();
  }
}
