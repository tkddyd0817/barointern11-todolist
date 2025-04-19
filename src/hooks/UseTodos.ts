import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { postTodos, deleteTodos, fetchTodos, updateTodos } from '@/lib/TodoApi';
import { Todo, UseTodosParams } from '@/types/TodoTypes';

export const useTodos = ({ initialData }: UseTodosParams = {}) => {
  const queryClient = useQueryClient();

  // 프리패치 함수 추가
  const prefetchTodos = async () => {
    await queryClient.prefetchQuery({
      queryKey: ['todos'],
      queryFn: fetchTodos,
    });
  };

  const {
    data: todos = [],
    isLoading,
    isError,
    error,
  } = useQuery<Todo[]>({
    queryKey: ['todos'],
    queryFn: fetchTodos,
    initialData,
  });

  const postMutation = useMutation({
    mutationFn: postTodos,
    onMutate: async () => {
      await prefetchTodos(); // 프리패치 추가
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, title, completed }: { 
      id: string; 
      title?: string; 
      completed?: boolean 
    }) => updateTodos(id, { title, completed }),
    onMutate: async (updatedTodo) => {
      await queryClient.cancelQueries({ queryKey: ['todos'] });
      await prefetchTodos(); // 프리패치 추가
      const previousTodos = queryClient.getQueryData<Todo[]>(['todos']);
      queryClient.setQueryData<Todo[]>(['todos'], (old = []) =>
        old.map((todo) =>
          todo.id === updatedTodo.id
            ? { 
                ...todo, 
                ...(updatedTodo.title !== undefined && { title: updatedTodo.title }),
                ...(updatedTodo.completed !== undefined && { completed: updatedTodo.completed })
              }
            : todo,
        ),
      );
      return { previousTodos };
    },
    onError: (err, variables, context) => {
      if (context?.previousTodos) {
        queryClient.setQueryData(['todos'], context.previousTodos);
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });


  const deleteMutation = useMutation({
    mutationFn: (id: string) => deleteTodos(id),
    onMutate: async (id: string) => {
      await queryClient.cancelQueries({ queryKey: ['todos'] });
      await prefetchTodos(); // 프리패치 추가
      const previousTodos = queryClient.getQueryData<Todo[]>(['todos']);
      queryClient.setQueryData<Todo[]>(['todos'], (old = []) =>
        old.filter((todo) => todo.id !== id),
      );
      return { previousTodos };
    },
    onError: (err, id, context) => {
      if (context?.previousTodos) {
        queryClient.setQueryData(['todos'], context.previousTodos);
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });

  return {
    todos,
    isLoading,
    isError,
    error,
    postMutation,
    updateMutation,
    deleteMutation,
    prefetchTodos, // 프리패치 함수 반환
  };
};






