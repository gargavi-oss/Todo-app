'use client'
import { FormEvent, useState } from "react"
import { useTodos } from "../store/todos"

export default function AddTodo() {
    const [todo,setTodo] = useState("")
    const {handleAddTodo}= useTodos();
    const handleFormSubmit=(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        handleAddTodo(todo);
        setTodo("");
    }
  return (
    <div className="">
        <form onSubmit={handleFormSubmit}>
            <input type="text" placeholder="Write your TODO" value={todo} onChange={(e)=>setTodo(e.target.value)} name="" id="" />
            <button type="submit">Add</button>
        </form>
    </div>
  )
}

