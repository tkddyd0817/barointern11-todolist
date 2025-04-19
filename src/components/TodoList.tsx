import { FC } from 'react';
import { TodoListTypes } from '@/types/TodoTypes';

import TodoItem from './TodoItem';

const TodoList: FC<TodoListTypes> = ({ todos }) => {
  return (
    <ul className="
    mt-3                
    sm:mt-4             
    space-y-2          
    sm:space-y-3       
    max-h-[350px]      
    sm:max-h-[500px]   
    overflow-y-auto    
    px-1              
    sm:px-2            
    -mx-1             
    sm:-mx-2          
  ">
    {todos
      .slice()
      .reverse()
      .map((todo) => (
        <TodoItem 
          key={todo.id} 
          todo={todo} 
        />
      ))}
  </ul>
  );
};

export default TodoList;