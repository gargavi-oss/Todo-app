"use client"

import { Children, createContext, ReactNode, useContext, useState } from "react";

export type Todo={
    id: string; 
    task:string;
    completed:boolean;
    createdAt: Date;
}

export type TodosContext={
    todos: Todo[];
    handleAddTodo : (task:string)=> void;
    toggleTodosAsCompleted: (id:string)=>void;
    handleTodoDelete:(id:string)=>void;
}

export const todosContext = createContext<TodosContext | null>(null);

export const TodosPovider = ({children}:{children:ReactNode})=>{
    const [todos,setTodos]=useState<Todo[]>([]);
    const handleAddTodo=(task:string)=>{
        setTodos((prev)=>{
            const newTodos :Todo[]=[
                {
                    id: Math.random().toString(),
                    task,
                    completed: false,
                    createdAt: new Date()
                },
                ...prev
            ]
            return newTodos;
        })
    }
   
        
        const toggleTodosAsCompleted = (id: string) => {
            setTodos((prev) =>
              prev.map((todo) =>
                todo.id === id
                  ? { ...todo, completed: !todo.completed }
                  : todo
              )
            );
          };
        const handleTodoDelete = (id:string)=>{
            setTodos((prev)=>
                prev.filter((todo)=>todo.id!==id)
            )
        }
          

    return (
        <todosContext.Provider value={{todos,handleAddTodo,toggleTodosAsCompleted,handleTodoDelete}}>
            {children}
        </todosContext.Provider>
    )
}

export function useTodos(){
    const todosContextValue = useContext(todosContext)
    if(!todosContextValue){
        throw new Error()
    }
    return todosContextValue;
}