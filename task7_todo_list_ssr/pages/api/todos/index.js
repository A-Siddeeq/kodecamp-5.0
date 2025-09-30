let todos = [];

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(todos);
  } else if (req.method === "POST") {
    const { title } = req.body;
    const newTodo = { id: Date.now().toString(), title };
    todos.unshift(newTodo);
    res.status(201).json(newTodo);
  } else {
    res.status(405).end();
  }
}
