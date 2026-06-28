"use client"
import { useSearchParams } from "next/navigation";
import { useTodos } from "../store/todos";
import { Todo } from "../store/todos";

export default function Todos() {
    const searchParmas= useSearchParams();
    const todosFilter = searchParmas.get("todos");

    const {todos,toggleTodosAsCompleted,handleTodoDelete}= useTodos();
    console.log(todos)
    let filterTodos = todos;
    if(todosFilter==="active"){
        filterTodos=filterTodos.filter((todo)=>todo.completed!==true);
        console.log(filterTodos);
    } else if(todosFilter==="completed"){
        filterTodos = filterTodos.filter((todo)=>todo.completed===true);
    }
    return (
        <ul className="max-w-xl mx-auto space-y-3">
          {filterTodos.map((todo: Todo) => (
            <li
              key={todo.id}
              className="flex items-center justify-between bg-white shadow rounded-lg p-4 border"
            >
              <div className="flex items-center gap-3">
                <input
                  id={`todo-${todo.id}`}
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodosAsCompleted(todo.id)}
                  className="h-5 w-5 accent-blue-600 cursor-pointer"
                />
      
                <label
                  htmlFor={`todo-${todo.id}`}
                  className={`cursor-pointer ${
                    todo.completed
                      ? "line-through text-gray-400"
                      : "text-gray-800"
                  }`}
                >
                  {todo.task}
                </label>
              </div>
      
              {todo.completed && (
                <button
                  onClick={() => handleTodoDelete(todo.id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded transition"
                >
                  Delete
                </button>
              )}
            </li>
          ))}
        </ul>
      );
}

