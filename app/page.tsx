import AddTodo from "@/src/components/AddTodo";
import Navbar from "@/src/components/Navbar";
import Todos from "@/src/components/Todos";
// app/layout.tsx
// pages/_app.tsx
import "./globals.css";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
  <div className="max-w-2xl mx-auto">
    <h1 className="text-4xl font-bold text-center mb-8">
      Todo App
    </h1>

    <Navbar />
    <AddTodo />
    <Todos />
  </div>
</div>
  );
}
