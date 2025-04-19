


import { useTodos } from '@/hooks/UseTodos';
import { Plus ,Loader} from 'lucide-react'
import { FC, useState } from 'react'


 const TodoInput:FC = ()=> {
const [title, setTitle] = useState("");
const [error,setError] = useState("");
const {postMutation} =  useTodos();

const handleAdd = () => {
  if (!title.trim()) {
    setError('할 일을 입력해주세요.');
    return;
  }
  setError('');
  postMutation.mutate(title);
  setTitle('');
};
  return (
    <div className="flex gap-2 mb-6">
    <input 
       type="text" 
       placeholder="할일을 입력하세요" 
       className="flex-1 px-4 py-4 border border-black-500 rounded-lg focus:outline-none focus:border-blue-500"
    value={title}
    onChange={(e)=> {
      setTitle(e.target.value);
      if(error) setError("");
    }}
    onKeyDown={(e)=>{
      if(e.key==="enter") {
        handleAdd();
      }
    }}
    disabled={postMutation.isPending}
    />
     <button
     type='button'
     onClick={handleAdd} 
     disabled={postMutation.isPending}
     className="px-4 py-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
    {postMutation.isPending ? (
            <Loader className="h-5 w-5 animate-spin" />
          ) : (
            <Plus size={20} />
          )}
     </button>
    {error&& <p className="mt-1 text-xs text-red-500">{error}</p>}
   </div>
  )
}

export default TodoInput;
