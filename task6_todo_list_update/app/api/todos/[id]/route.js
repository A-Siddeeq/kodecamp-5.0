let todos = [];

export async function PATCH(request, { params }) {
  const { id } = params;
  const { title } = await request.json();
  todos = todos.map(todo => todo.id == id ? { ...todo, title } : todo);
  return Response.json({ success: true });
}

export async function DELETE(request, { params }) {
  const { id } = params;
  todos = todos.filter(todo => todo.id != id);
  return Response.json({ success: true });
}