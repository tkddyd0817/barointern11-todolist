
import TodoContainer from "@/components/TodoContainer"
import { fetchTodos } from "@/lib/TodoApi";
import { Todo } from "@/types/TodoTypes";

const Homepage = async () => {
  try {
    const todos: Todo[] = await fetchTodos();
    return (
      <div className="min-h-screen bg-gray-50">
        <TodoContainer serverTodos={todos} />
      </div>
    );
  } catch (error) {
    console.error('Error fetching todos:', error);
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-blue-500">
          할 일 목록을 불러오는 중 오류가 발생했습니다.
        </div>
      </div>
    );
  }
};

export default Homepage;


