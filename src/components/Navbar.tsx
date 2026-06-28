"use client"
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'


function Navbar() {
    const searchParams = useSearchParams();
    const todosFilter = searchParams.get("todos");
  
    const linkStyle = (active: boolean) =>
      `px-4 py-2 rounded-lg transition-all ${
        active
          ? "bg-blue-600 text-white"
          : "text-gray-600 hover:bg-gray-100 hover:text-blue-600"
      }`;
  
    return (
      <nav className="flex justify-center gap-3 mb-6">
        <Link href="/" className={linkStyle(todosFilter === null)}>
          All
        </Link>
  
        <Link
          href="/?todos=active"
          className={linkStyle(todosFilter === "active")}
        >
          Active
        </Link>
  
        <Link
          href="/?todos=completed"
          className={linkStyle(todosFilter === "completed")}
        >
          Completed
        </Link>
      </nav>
    );
  }

export default Navbar