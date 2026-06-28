"use client"
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'


function Navbar() {
    const searchParms = useSearchParams();
    const todosFilter = searchParms.get('todos');
    console.log(todosFilter)
    return (
    <nav>
        <Link href="/" className={todosFilter===null ? `text-red-600`:""}>All</Link>
        <Link href="/?todos=active" className={todosFilter==="active" ? "active":""}>Active</Link>
        <Link href="/?todos=completed" className={todosFilter==="completed" ? "active":""}>Completed</Link>
    </nav>
  )
}

export default Navbar