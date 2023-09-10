import { TodoItem } from '../TodoList/TodoItem';
import TodoCounter from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import TodoCreateButton from '../TodoCreateButton';
import React, { useState } from 'react'
import { useLocalStorage } from './useLocalStorage';

export function App() {
  const [searchValue, setSearchValue] = React.useState('');
  const [todos, saveTodos] = useLocalStorage('TODOS_V1',[]);
  useState('');
  const todosCompleted = todos.filter( todo => todo.completed === true).length;
  const todosLength = todos.length;
  const todosFiltred = todos.filter(
    (todo) => {
      return todo
      .title
      .toLowerCase()
      .replace(/ /g,'')
      .includes(
        searchValue
        .replace(/ /g,'')
        .toLowerCase())
      }
    );

  const completeTodo = (text)=>{
    const newTodosList = [...todos]
    const todoIndex = newTodosList.findIndex(todo=>todo.title === text)
    newTodosList[todoIndex].completed = !(newTodosList[todoIndex].completed)
    saveTodos(newTodosList)
  }

  const deleteTodo = (text)=>{
    const newTodoList = [...todos];
    const todoIndex = newTodoList.findIndex( todo => todo.title === text);
    newTodoList.splice(todoIndex, 1)
    saveTodos(newTodoList)
  }

  return (
    <>
      <TodoCounter completed={todosCompleted} total={todosLength} />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}/>
      <TodoList>
        {todosFiltred.map(todo=>
                <TodoItem
                title={todo.title}
                key={todo.title}
                completed={todo.completed}
                setSearchValue={setSearchValue}
                onDelete = {()=>deleteTodo(todo.title)}
                onComplete = {()=>completeTodo(todo.title)} 
            />)}
      </TodoList>
      <TodoCreateButton>
        Create Task
      </TodoCreateButton>
    </>
  );
}
