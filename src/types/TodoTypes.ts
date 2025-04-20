export type Todo = {
    id:string,
    title:string,
    date:string,
    completed:boolean
}

export type UseTodosParams = {
    initialData?: Todo[];
  };

  export type MutationContext = {
    previousTodos: Todo[];
  }

  export type TodoClientProps = {
    serverTodos: Todo[];
  };
  
  export type TodoContainerTypes = {
    serverTodos: Todo[];
  };
  
  export type TodoItemTypes = {
    todo: Todo;
  };

  export type UpdateTodoInput = {
    id: string;
    title?: string;
    completed?: boolean;
  };

  export type TodoListTypes = {
    todos: Todo[];
  };



  export type TodoStatusTypes = {
    remaining: number;
    completed: number;
  };

export type TodoFilterTapsTypes = {
    filter:"ALL" | "COMPLETED",
    setFilter: (value:"ALL"|"COMPLETED") =>void;
};