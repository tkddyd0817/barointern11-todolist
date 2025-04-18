import { Plus } from 'lucide-react'


export default function TodoInput() {
  return (
    <div className="flex gap-2 mb-6">
    <input 
       type="text" 
       placeholder="목표를 입력하세요" 
       className="flex-1 px-4 py-4 border border-black-500 rounded-lg focus:outline-none focus:border-blue-500"
     />
     <button className="px-4 py-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
       <Plus/>
     </button>
    
   </div>
  )
}
