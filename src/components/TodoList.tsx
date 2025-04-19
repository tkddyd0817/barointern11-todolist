import { FC } from 'react';
import { TodoListTypes } from '@/types/TodoTypes';

import TodoItem from './TodoItem';

const TodoList: FC<TodoListTypes> = ({ todos }) => {
  return (
    <ul className="mt-4 space-y-3">
      {todos
        .slice()
        .reverse()
        .map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
    </ul>
  );
};

export default TodoList;