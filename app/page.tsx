import AddTodo from "@/src/components/AddTodo";
import Todos from "@/src/components/Todos";


export default function Home() {
  return (
    <main>
      <h2>TODO NEXT + TYPESCRIPT</h2>
      <AddTodo/>
      <Todos/>
    </main>
  );
}
