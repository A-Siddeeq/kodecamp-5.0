import React, { useState } from "react";
import { FcAddDatabase, FcDeleteDatabase } from "react-icons/fc";
import { FaRegEdit } from "react-icons/fa";
import { useRouter } from "next/router";

export default function TodoList({ initialTodos }) {
  const [tasks, setTasks] = useState(initialTodos);
  const [editId, setEditId] = useState(null);
  const [editValue, setEditValue] = useState("");
  const router = useRouter();

  const handleAdd = async () => {
    const newTitle = prompt("Enter new task:");
    if (newTitle && newTitle.trim() !== "") {
      const res = await fetch("/api/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: newTitle }),
      });
      const newTask = await res.json();
      setTasks([newTask, ...tasks]);
    }
  };

  const handleEditClick = (id, title) => {
    setEditId(id);
    setEditValue(title);
  };

  const handleEditSave = async (id) => {
    await fetch(`/api/todos/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: editValue }),
    });
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, title: editValue } : task
      )
    );
    setEditId(null);
    setEditValue("");
  };

  const handleDelete = async (id) => {
    await fetch(`/api/todos/${id}`, { method: "DELETE" });
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleView = (id) => {
    router.push(`/todos/${id}`);
  };

  return (
    <section className="w-full max-w-xl mx-auto bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Tasks</h2>
        <button
          className="bg-green-500 rounded-xl p-2 text-white"
          onClick={handleAdd}
        >
          <FcAddDatabase />
        </button>
      </div>
      {tasks.length === 0 && (
        <p className="text-center text-gray-500">No tasks yet.</p>
      )}
      {tasks.map((task) => (
        <div
          key={task.id}
          className="flex justify-between items-center bg-blue-100 m-2 p-2 rounded"
        >
          {editId === task.id ? (
            <>
              <input
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
                className="border p-1 rounded"
              />
              <button
                className="bg-green-500 rounded-xl p-2 text-white ml-2"
                onClick={() => handleEditSave(task.id)}
              >
                Save
              </button>
              <button
                className="bg-gray-500 rounded-xl p-2 text-white ml-2"
                onClick={() => setEditId(null)}
              >
                Cancel
              </button>
            </>
          ) : (
            <>
              <p
                className="flex-1 cursor-pointer"
                onClick={() => handleView(task.id)}
              >
                {task.title}
              </p>
              <button
                className="bg-blue-500 rounded-xl p-2 text-white ml-2"
                onClick={() => handleEditClick(task.id, task.title)}
              >
                <FaRegEdit />
              </button>
              <button
                className="bg-red-600 rounded-xl p-2 text-white ml-2"
                onClick={() => handleDelete(task.id)}
              >
                <FcDeleteDatabase />
              </button>
            </>
          )}
        </div>
      ))}
    </section>
  );
}
