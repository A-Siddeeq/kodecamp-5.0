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
  const { id } = req.query;
  let todos = readTodos();

  if (req.method === "PATCH") {
    const { title } = req.body;
    todos = todos.map((todo) => (todo.id === id ? { ...todo, title } : todo));
    writeTodos(todos);
    res.status(200).json({ success: true });
  } else if (req.method === "DELETE") {
    todos = todos.filter((todo) => todo.id !== id);
    writeTodos(todos);
    res.status(200).json({ success: true });
  } else {
    res.status(405).end();
  }
}
