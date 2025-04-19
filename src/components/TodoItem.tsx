"use client";
import { FC, useState } from "react";
import { TodoItemTypes } from "@/types/TodoTypes";
import { useTodos } from "@/hooks/UseTodos";
import { PenTool, Trash2 } from "lucide-react";

const TodoItem: FC<TodoItemTypes> = ({ todo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.title);
  const { updateMutation, deleteMutation } = useTodos();

  const handleToggle = () => {
    updateMutation.mutate({ id: todo.id, completed: !todo.completed });
  };

  const handleDelete = () => {
    deleteMutation.mutate(todo.id);
  };

  const handleUpdate = () => {
    if (!editText.trim()) return;
    updateMutation.mutate({
      id: todo.id,
      title: editText,
      completed: todo.completed,
    });
    setIsEditing(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleUpdate();
    }
  };

  return (
    <li
      className="
    flex 
    items-start 
    justify-between 
    p-2                
    sm:p-3            
    border 
    border-black-500 
    rounded-lg
  "
    >
      <div
        className="
      flex 
      w-full 
      flex-col 
      pr-1              
      sm:pr-2           
    "
      >
        <div
          className="
        mb-1 
        flex 
        items-center 
        gap-2            
        sm:gap-3         
      "
        >
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={handleToggle}
            className="
            w-4 h-4          
            sm:w-5 sm:h-5   
            accent-blue-500 
            cursor-pointer
          "
          />
          {isEditing ? (
            <input
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              onKeyPress={handleKeyPress}
              onBlur={handleUpdate}
              className="
              w-full 
              p-1              
              sm:p-2           
              text-sm          
              sm:text-base     
              border 
              rounded 
              focus:outline-none 
              focus:ring-2 
              focus:ring-blue-500
            "
              autoFocus
            />
          ) : (
            <span
              className={`
            break-all
            text-sm          
            sm:text-base     
            ${todo.completed ? "text-gray-400 line-through" : "text-gray-700"}
          `}
            >
              {todo.title}
            </span>
          )}
        </div>
        <span
          className="
        ml-6              
        sm:ml-7           
        break-all 
        text-xs         
        sm:text-sm       
        text-black-500
      "
        >
          {todo.date}
        </span>
      </div>
      <div
        className="
      flex 
      gap-1            
      sm:gap-2          
    "
      >
        <button
          type="button"
          onClick={() => setIsEditing(true)}
          className="
          px-2 py-1        
          sm:px-3 sm:py-1  
          text-sm 
          border 
          border-black-500 
          rounded-lg 
          hover:bg-gray-100
        "
        >
          <PenTool size={16} className="sm:w-5 sm:h-5" />
        </button>
        <button
          type="button"
          onClick={handleDelete}
          className="
          px-2 py-1        
          sm:px-3 sm:py-1  
          text-sm 
          border 
          border-red-300 
          text-red-500 
          rounded-lg 
          hover:bg-red-50
        "
        >
          <Trash2 size={16} className="sm:w-5 sm:h-5 text-red-500" />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
