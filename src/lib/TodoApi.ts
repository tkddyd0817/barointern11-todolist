import { Todo } from "@/types/TodoTypes";

const BASE_URL = `${process.env.NEXT_PUBLIC_API_URL}/todos`;

/* 조회 */
export const fetchTodos = async (): Promise<Todo[]> => {
  const res = await fetch(BASE_URL, { cache: 'no-store' });
  if (!res.ok) {
    throw new Error('투두 목록을 가져오는 중 오류가 발생했습니다.');
  }
  return res.json();
};

/* 생성 */
export const postTodos = async(title:string):Promise<Todo[]> =>{
    const formattedDate = new Date().toISOString().slice(0,10);

    const newTodo = {
        title:title,
        date:formattedDate,
        completed:false,
    };

    const res = await fetch(BASE_URL,{
        method:"post",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(newTodo),
    });
    if(!res.ok){
        throw new Error("투두 생성에 실패했습니다.");
    }
    return res.json();
};

/* 수정 */
export const updateTodos = async(
    id:string,
    updatedFields:Partial<Todo>,
):Promise<Todo> =>{
    const res = await fetch(`${BASE_URL}/${id}`,{
        method:'PATCH',
        headers:{'CONTENT-Type':"application/json"},
        body:JSON.stringify(updatedFields),
    });
    if(!res.ok){
        throw new Error("투두 수정이 실패했습니다.");
    }
    return res.json();
};

/* 삭제 */
export const deleteTodos = async (id: string):Promise<void>  =>{
const res = await fetch(`${BASE_URL}/${id}`,{
    method: "DELETE",
});
if(!res.ok){
    throw new Error("아이템 삭제에 실패했습니다");
 }
};
