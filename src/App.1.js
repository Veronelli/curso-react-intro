import { TodoItems } from './TodoItems';
import TodoCounter from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import TodoCreateButton from './TodoCreateButton';
import React from 'react';

const defaultTodo = [
  {
    title: 'Cortar cebolla',
    completed: true

  },
  {
    title: 'Realizar Tarea de Programacion',
    completed: false

  },
  {
    title: 'Realizar la tarea de Matematicas',
    completed: false

  },
]

export function App() {
  return (
    <React.Fragment>
      <TodoCounter completed={5} total={15} />
      <TodoSearch />
      <TodoList>
        <TodoItems todos={defaultTodo}/>
      </TodoList>
      <TodoCreateButton>
        Create Task
      </TodoCreateButton>
    </React.Fragment>
  );
}
