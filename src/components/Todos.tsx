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
        <ul>
            {
                filterTodos.map((todo:Todo)=>{
                    return <li key={todo.id}>            
                        <input type="checkbox" name="" id ={`todo-${todo.id}`} checked={todo.completed} onChange={()=>toggleTodosAsCompleted(todo.id)}/>
                        <label htmlFor={`todo-${todo.id}`}>{todo.task}</label>
                        {
                            todo.completed && (
                                <button type="button" onClick={()=>handleTodoDelete(todo.id)}>Delete</button>
                            )
                        }
                    </li>
                })
            }
        </ul>
  )
}

