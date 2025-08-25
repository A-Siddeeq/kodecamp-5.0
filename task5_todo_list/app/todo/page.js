'use client'
import React, {useState, useEffect} from 'react'
import { getTask } from "../utils/helper";
import { FcAddDatabase, FcDeleteDatabase } from "react-icons/fc";
import { FaRegEdit } from "react-icons/fa";


const TodoList = () => {

      const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const data = await getTask();
      setTasks(data);
    };
    fetchTasks();
  }, []);

const handleAdd = () => {
  const newTitle = prompt("Enter new task:");
  if (newTitle !== null && newTitle !== "") {
    const newTask = {
      id: Date.now(), 
      title: newTitle
    };
    setTasks([newTask, ...tasks]);
  }
};

const handleEdit = (id) => {
  const updatedTasks = tasks.map(task => {
    if (task.id === id) {
      const newTitle = prompt("Edit task title:", task.title);
      if (newTitle !== null && newTitle !== "") {
        return { ...task, title: newTitle };
      }
    }
    return task;
  });
  setTasks(updatedTasks);
};

  const handleDelete = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div>
        <h1 className='text-center text-3xl font-bold'>TODO LIST</h1>

        <div>
            <ul className='flex justify-center mx-auto my-2 gap-x-4 bg-gray-700 w-max p-2 rounded-md list-none'>
                <li>Pending</li>
                <li>Completed</li>
            </ul>
        </div>

        <section className='flex mx-2 justify-between text-center bg-gray-800 p-4 rounded-lg shadow-md mb-4'>
        <h1 className='text-xl font-bold'>Tasks</h1>
       <div className='flex items-center gap-x-2'><p>Add</p>
        <button className='bg-green-500 rounded-xl p-2' onClick={handleAdd}><FcAddDatabase /></button>
        </div></section>
        {tasks.map((task) => (
         (<div key={task.id} className='flex justify-between items-center bg-blue-400 m-2 p-2 rounded-sm'>
           <p> {task.title}</p>
           <div className='flex gap-x-2'>
            <button className='bg-blue-500 rounded-xl p-2' onClick={() => handleEdit(task.id)}><FaRegEdit />
</button>
           <button className='bg-red-600 rounded-xl p-2' onClick={() => handleDelete(task.id)}><FcDeleteDatabase />
</button>
         </div>
         </div>)
     ))}
    </div>
  )
}



export default TodoList
