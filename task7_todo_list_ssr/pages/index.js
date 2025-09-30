import TodoList from "./todos/TodoList";

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/todos");
  const todos = await res.json();
  return { props: { todos: todos || [] } };
}

export default function Home({ todos }) {
  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center">
      <h1 className="text-4xl font-bold mt-8 mb-4">TODO LIST</h1>
      <TodoList initialTodos={todos || []} />
    </main>
  );
}
