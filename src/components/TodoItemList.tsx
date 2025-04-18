import { Check, PenTool, Trash2 } from 'lucide-react'
import { useState } from 'react'

export default function TodoItemList() {
  const [isCompleted, setIsCompleted] = useState(false);
  return (
    <div className="space-y-3">
    
        {/* 각 할일 아이템 */}
         <div className="flex items-center justify-between p-3 border border-black-500 rounded-lg">
           <div className="flex items-center gap-3">
             <input 
               type="checkbox" 
               className="w-5 h-5 accent-blue-500"
               onChange={() => setIsCompleted(!isCompleted)}
             />
             {/* <span>리스트 내용</span> */}
             <span 
             className={
              `${
         isCompleted 
           ? "text-gray-400 line-through" 
           : "text-gray-700"
       }`
       }
       >
        직무과제 수행
       </span> 
           </div>
          <div className="flex gap-2">
            <button className="px-3 py-1 text-sm border border-gblack-500 rounded-lg hover:bg-gray-100">
              <PenTool/>
            </button>
           <button className="px-3 py-1 text-sm border border-red-300 text-red-500 rounded-lg hover:bg-red-50">
           <Trash2 className="w-5 h-10 text-red-500" />
           </button>
         </div>
       </div>
    
       {/* 추가 아이템 예시 */}
       <div className="flex items-center justify-between p-3 border border-black-500 rounded-lg">
          <div className="flex items-center gap-3">
           <Check
              type="checkbox" 
              className="w-5 h-5 accent-blue-500"
           
           />
           <span className="text-gray-400 line-through">완료된 할일</span>
         </div>
         <div className="flex gap-2">
            <button className="px-3 py-1 text-sm border border-black-500 rounded-lg hover:bg-gray-100">
            <PenTool/>
           </button>
           <button className="px-3 py-1 text-sm border border-red-300 text-red-500 rounded-lg hover:bg-red-50">
           <Trash2 className="w-5 h-10 text-red-500" />
           </button>
         </div>
       </div>
     </div>
  
    
    
   
  )
}
