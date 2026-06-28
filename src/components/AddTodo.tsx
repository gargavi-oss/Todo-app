'use client'
import { FormEvent, useState } from "react"
import { useTodos } from "../store/todos"

export default function AddTodo() {
    const [todo,setTodo] = useState("")
    const {handleAddTodo}= useTodos();
    const handleFormSubmit=(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        if(todo===""){
          console.log("Cannont add empty todo");
          alert("Can't add empty todo");
          return;
        }
        handleAddTodo(todo);
        setTodo("");
    }
    return (
      <div className="max-w-xl mx-auto mb-8">
        <form
          onSubmit={handleFormSubmit}
          className="flex gap-3"
        >
          <input
            type="text"
            placeholder="Write your TODO..."
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            className="flex-1 border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          />
    
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 rounded-lg font-medium transition"
          >
            Add
          </button>
        </form>
      </div>
    );
}

