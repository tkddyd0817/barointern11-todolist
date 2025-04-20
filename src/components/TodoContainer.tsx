"use client";
import TodoFilterTap from "@/components/TodoFilterTap";
import TodoInput from "@/components/TodoInput";
import TodoList from "@/components/TodoList";
import Loading from "@/components/Loading";
import { useTodos } from "@/hooks/UseTodos";
import { TodoContainerTypes } from "@/types/TodoTypes";
import React, { FC, useState } from "react";
import TodoStatus from "@/components/TodoStatus";

const TodoContainer: FC<TodoContainerTypes> = ({ serverTodos }) => {
  const { todos, isLoading, isError, error } = useTodos({
    initialData: serverTodos,
  });
  const [filter, setFilter] = useState<"ALL" | "COMPLETED">("ALL");

  if (isLoading) return <Loading />;
  if (isError)
    return (
      <div className="p-6 text-center text-blue-500">
        리스트를 가져오는 중 에러가 발생했습니다: {(error as Error).message}
      </div>
    );

    const remaining = todos.filter((t) => !t.completed).length;
    const completed = todos.filter((t) => t.completed).length;

  const filteredTodos = todos.filter((todo) => {
    if (filter === "ALL") {
      return !todo.completed; // 완료되지 않은 할일만 표시
    } else {
      return todo.completed; // 완료된 할일만 표시
    }
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div
        className="
    bg-blue-200 
    rounded-lg 
    border 
    border-black-500 
    w-full                
    max-w-[800px]         
    min-h-[400px]         
    sm:min-h-[600px]      
    p-4                   
    sm:p-6                
    shadow-md
    mx-auto               
  "
      >
        <h1
          className="
      text-xl             
      sm:text-2xl         
      font-bold 
      text-center 
      mb-4                
      sm:mb-6              
    "
        >
          TodoList
        </h1>
        <div className="space-y-4 sm:space-y-6">

           {/* 새 할 일 입력 */}
          <TodoInput />

{/* 할 일 상태 표시 */}
          <TodoStatus remaining={remaining} completed={completed} />

          {/* 필터 탭 */}
          <TodoFilterTap filter={filter} setFilter={setFilter} />

          {/* 할 일 목록 */}
          <TodoList todos={filteredTodos} />
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
