let todos = [];

export default function handler(req, res) {
  const { id } = req.query;

  if (req.method === "PATCH") {
    const { title } = req.body;
    todos = todos.map((todo) => (todo.id === id ? { ...todo, title } : todo));
    res.status(200).json({ success: true });
  } else if (req.method === "DELETE") {
    todos = todos.filter((todo) => todo.id !== id);
    res.status(200).json({ success: true });
  } else {
    res.status(405).end();
  }
}
