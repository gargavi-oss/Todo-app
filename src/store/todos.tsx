"use client"

import { createContext, ReactNode, useContext, useEffect, useState } from "react";

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
    const [todos,setTodos]=useState<Todo[]>([])
    useEffect(()=>{

            const newTodos = localStorage.getItem("todos") || "[]";
            setTodos(JSON.parse(newTodos) as Todo[]);
    },[]);
    
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

                localStorage.setItem("todos",JSON.stringify(newTodos));
            return newTodos;
        })
    }
   
        
        const toggleTodosAsCompleted = (id: string) => {
            setTodos((prev) => {
              const newTodos = prev.map((todo) =>
                todo.id === id
                  ? { ...todo, completed: !todo.completed }
                  : todo
              )

                localStorage.setItem("todos",JSON.stringify(newTodos));

              return newTodos;

            }
            );
          };
        const handleTodoDelete = (id:string)=>{
            setTodos((prev)=>{
                const newTodos = prev.filter((todo)=>todo.id!==id)

                    localStorage.setItem("todos",JSON.stringify(newTodos));

                return newTodos;
            }
            );
        };
          

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