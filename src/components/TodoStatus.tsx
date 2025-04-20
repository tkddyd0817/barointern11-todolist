import { FC } from 'react';

import { TodoStatusTypes } from '@/types/TodoTypes';

const TodoStatus: FC<TodoStatusTypes> = ({ remaining, completed }) => {
  return (
    <div className="mb-4">
      <p className="mb-1 text-sm text-black-500">
        남은 할 일: <span className="font-semibold">{remaining}</span>
      </p>
      <p className="text-sm text-black-500">
        완료된 일: <span className="font-semibold">{completed}</span>
      </p>
    </div>
  );
};

export default TodoStatus;