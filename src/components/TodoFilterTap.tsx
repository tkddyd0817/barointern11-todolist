import { CheckSquare, List } from 'lucide-react';
import { FC } from 'react';

import { TodoFilterTapsTypes } from '@/types/TodoTypes';

const TodoFilterTabs: FC<TodoFilterTapsTypes> = ({ filter, setFilter }) => {
  return (
    <div className="
    mb-4 
    flex 
    justify-center        
    gap-2              
    sm:gap-3           
  ">
    <button
      onClick={() => setFilter('ALL')}
      className={`
        rounded-lg 
        px-2 py-2        
        sm:px-4 sm:py-3  
        min-w-[44px]     
        sm:min-w-[100px] 
        transition-colors
        ${
          filter === 'ALL'
            ? 'bg-blue-600 text-white'
            : 'bg-gray-200 text-gray-800 hover:bg-blue-100 hover:text-blue-800'
        }
      `}
    >
      <span className="
        hidden 
        sm:inline 
        text-sm        
        lg:text-base   
      ">
        모든 할 일
      </span>
      <span className="
        sm:hidden
        flex 
        items-center 
        justify-center
      ">
        <List size={18} />  
      </span>
    </button>
  
    <button
      onClick={() => setFilter('COMPLETED')}
      className={`
        rounded-lg 
        px-2 py-2        
        sm:px-4 sm:py-3  
        min-w-[44px]     
        sm:min-w-[100px] 
        transition-colors
        ${
          filter === 'COMPLETED'
            ? 'bg-blue-600 text-white'
            : 'bg-gray-200 text-gray-800 hover:bg-blue-100 hover:text-blue-800'
        }
      `}
    >
      <span className="
        hidden 
        sm:inline 
        text-sm       
        lg:text-base   
      ">
        완료된 일
      </span>
      <span className="
        sm:hidden
        flex 
        items-center 
        justify-center
      ">
        <CheckSquare size={18} />  
      </span>
    </button>
  </div>
  );
};

export default TodoFilterTabs;




