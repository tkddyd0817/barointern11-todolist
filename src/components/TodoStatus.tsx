import { FC } from 'react';
import { TodoStatusTypes } from '@/types/TodoTypes';

const TodoStatus: FC<TodoStatusTypes> = ({ remaining, completed }) => {
  return (
<div className="
  mb-3              
  sm:mb-4           
  p-2              
  sm:p-3            
  rounded-lg
">
  <p className="
    mb-1 
    text-xs        
    sm:text-sm      
    text-black-500
    flex            
    items-center    
    gap-1           
    sm:gap-2        
  ">
    남은 할 일: 
    <span className="
      font-semibold
      text-sm       
      sm:text-base  
    ">
      {remaining}
    </span>
  </p>
  <p className="
    text-xs         
    sm:text-sm      
    text-black-500
    flex            
    items-center   
    gap-1           
    sm:gap-2        
  ">
    완료된 일: 
    <span className="
      font-semibold
      text-sm       
      sm:text-base  
    ">
      {completed}
    </span>
  </p>
</div>
  );
};

export default TodoStatus;

