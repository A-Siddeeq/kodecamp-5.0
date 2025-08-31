let todos = [];

export async function GET() {
  return Response.json(todos);
}

export async function POST(request) {
  const { title } = await request.json();
  const newTodo = { id: Date.now(), title };
  todos.unshift(newTodo);
  return Response.json(newTodo);
}