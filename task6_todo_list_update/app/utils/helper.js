export async function getTask() {
    const res = await fetch ('https://jsonplaceholder.typicode.com/todos')
   return res.json();}