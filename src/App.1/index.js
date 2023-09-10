import React, { useState } from 'react'
import { useLocalStorage } from './useLocalStorage';
import { AppUI } from './AppUI';

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
      <AppUI
        todosCompleted={todosCompleted}
        todosLength={todosLength}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        todosFiltred={todosFiltred}
        deleteTodo={deleteTodo}
        completeTodo={completeTodo}
      />
    </>);
}
