import Image from "next/image";
import TodoList from "./todo/page";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1 className="text-3xl font-bold">Welcome to the Todo App</h1>
      <Link href="/todo" className="text-blue-500 hover:underline bg-white p-2 rounded-full">Open Todo List</Link>
    </div>
  );
}
