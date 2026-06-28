import AddTodo from "@/src/components/AddTodo";
import Navbar from "@/src/components/Navbar";
import Todos from "@/src/components/Todos";


export default function Home() {
  return (
    <main>
      <h2>TODO NEXT + TYPESCRIPT</h2>
      <Navbar/>
      <AddTodo/>
      <Todos/>
    </main>
  );
}
