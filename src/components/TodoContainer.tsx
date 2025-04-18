
 'lucide-react'
import TodoFilterTap from '@/components/TodoFilterTap'
import TodoInput from '@/components/TodoInput'
import TodoItemList from '@/components/TodoItemList'
import React from 'react'

export default function TodoContainer() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
       <div className="bg-blue-200 rounded-lg border border-black-500 w-[800px] min-h-[600px] p-6 shadow-md">
         <h1 className="text-2xl font-bold text-center mb-6">TodoList</h1>
         <TodoInput/>
         <TodoFilterTap/>
         <TodoItemList/>
        </div>
        </div>
  )
}
