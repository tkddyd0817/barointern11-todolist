//TodoInput.tsx css 완성본

import { useTodos } from "@/hooks/UseTodos";
import { Plus, Loader } from "lucide-react";
import { FC, useState } from "react";

const TodoInput: FC = () => {
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");
  const { postMutation } = useTodos();

  const handleAdd = () => {
    if (!title.trim()) {
      setError("할 일을 입력해주세요.");
      return;
    }
    setError("");
    postMutation.mutate(title);
    setTitle("");
  };
  return (
    <div
      className="
  flex         
  sm:flex-row     
  gap-2 
  mb-4            
  sm:mb-6         
  relative        
"
    >
 <input
      type="text"
      placeholder="할일을 입력하세요"
      className="
        flex-1            /* flex-grow: 1로 설정하여 남은 공간 차지 */
        px-3              /* 모바일: 기본 패딩 */
        sm:px-4           /* 데스크톱: 더 큰 패딩 */
        py-3              /* 모바일: 기본 패딩 */
        sm:py-4           /* 데스크톱: 더 큰 패딩 */
        text-sm           /* 모바일: 작은 텍스트 */
        sm:text-base      /* 데스크톱: 기본 텍스트 */
        border 
        border-black-500 
        rounded-lg 
        focus:outline-none 
        focus:border-blue-500
      "
      value={title}
      onChange={(e) => {
        setTitle(e.target.value);
        if (error) setError("");
      }}
      onKeyDown={(e) => {
        if (e.key === "enter") {
          handleAdd();
        }
      }}
      disabled={postMutation.isPending}
    />
     <button
      type="button"
      onClick={handleAdd}
      disabled={postMutation.isPending}
      className="
        shrink-0          /* 버튼 크기 고정 */
        w-auto            /* 자동 너비 */
        px-3              /* 모바일: 기본 패딩 */
        sm:px-4           /* 데스크톱: 더 큰 패딩 */
        py-3              /* 모바일: 기본 패딩 */
        sm:py-4           /* 데스크톱: 더 큰 패딩 */
        bg-blue-500 
        text-white 
        rounded-lg 
        hover:bg-blue-600 
        transition-colors
        flex            
        items-center
        justify-center
      "
    >
      {postMutation.isPending ? (
        <Loader className="
          h-4 w-4        
          sm:h-5 sm:w-5 
          animate-spin
        "/>
      ) : (
        <Plus className="
          h-4 w-4       
          sm:h-5 sm:w-5  
        "/>
      )}
    </button>

      {error && (
        <p
          className="
  absolute
  bottom-[-20px]
  left-1/2           /* 왼쪽에서 50% 위치로 */
  transform          /* 변환 적용 */
  -translate-x-1/2   /* 자신의 너비의 50%만큼 왼쪽으로 이동 */
  text-xs 
  sm:text-sm        /* 데스크톱: 약간 더 큰 텍스트 */
  text-red-500
  mt-1
  whitespace-nowrap /* 텍스트가 한 줄로 유지되도록 */
"
        >
          {error}
        </p>
      )}
    </div>
  );
};

export default TodoInput;

