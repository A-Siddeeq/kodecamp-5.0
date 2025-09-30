import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function TodoItem() {
  const router = useRouter();
  const { id } = router.query;
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`/api/todos`)
        .then((res) => res.json())
        .then((data) => setTodo(data.find((t) => t.id === id)));
    }
  }, [id]);

  if (!todo) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-md mx-auto mt-10 bg-white rounded shadow p-6">
      <h2 className="text-2xl font-bold mb-2">Task Details</h2>
      <p className="mb-4">{todo.title}</p>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => router.back()}
      >
        Back
      </button>
    </div>
  );
}
