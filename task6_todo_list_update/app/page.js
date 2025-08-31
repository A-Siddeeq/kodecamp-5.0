'use client'
import React, { useState, useEffect } from 'react'
import { FcAddDatabase, FcDeleteDatabase } from "react-icons/fc";
import { FaRegEdit } from "react-icons/fa";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editValue, setEditValue] = useState("");

  // Fetch todos from API
  useEffect(() => {
    fetch('/api/todos')
      .then(res => res.json())
      .then(data => setTasks(data));
  }, []);

  // Add new todo
  const handleAdd = async () => {
    const newTitle = prompt("Enter new task:");
    if (newTitle && newTitle.trim() !== "") {
      const res = await fetch('/api/todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: newTitle })
      });
      const newTask = await res.json();
      setTasks([newTask, ...tasks]);
    }
  };

  // Edit todo
  const handleEditClick = (id, title) => {
    setEditId(id);
    setEditValue(title);
  };

  const handleEditSave = async (id) => {
    await fetch(`/api/todos/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: editValue })
    });
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, title: editValue } : task
    ));
    setEditId(null);
    setEditValue("");
  };

  // Delete todo
  const handleDelete = async (id) => {
    await fetch(`/api/todos/${id}`, { method: 'DELETE' });
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div>
      <h1 className='text-center text-3xl font-bold'>TODO LIST</h1>
      <section className='flex mx-2 justify-between text-center bg-gray-800 p-4 rounded-lg shadow-md mb-4'>
        <h1 className='text-xl font-bold'>Tasks</h1>
        <div className='flex items-center gap-x-2'>
          <p>Add</p>
          <button className='bg-green-500 rounded-xl p-2' onClick={handleAdd}><FcAddDatabase /></button>
        </div>
      </section>
      {tasks.map((task) => (
        <div key={task.id} className='flex justify-between items-center bg-blue-400 m-2 p-2 rounded-sm'>
          {editId === task.id ? (
            <>
              <input
                value={editValue}
                onChange={e => setEditValue(e.target.value)}
                className="border p-1"
              />
              <button className='bg-green-500 rounded-xl p-2' onClick={() => handleEditSave(task.id)}>Save</button>
              <button className='bg-gray-500 rounded-xl p-2' onClick={() => setEditId(null)}>Cancel</button>
            </>
          ) : (
            <>
              <p onClick={() => handleEditClick(task.id, task.title)} style={{ cursor: "pointer" }}>{task.title}</p>
              <div>
                <button className='bg-blue-500 rounded-xl p-2' onClick={() => handleEditClick(task.id, task.title)}><FaRegEdit /></button>
                <button className='bg-red-600 rounded-xl p-2' onClick={() => handleDelete(task.id)}><FcDeleteDatabase /></button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  )
}

export default TodoList