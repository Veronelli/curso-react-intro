import React, {useState} from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider({children}){
    const [searchValue, setSearchValue] = React.useState('');
    const {item:todos, saveItem: saveTodos, loading, error} = useLocalStorage('TODOS_V1',[]);
    const todosCompleted = todos.filter( todo => todo.completed === true).length;
    const todosLength = todos.length;
    useState('')
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
    console.log(todos)
    return (
            <TodoContext.Provider value={{
              loading,
              todos,
              error,
              todosCompleted,
              todosLength,
              searchValue,
              setSearchValue,
              todosFiltred,
              deleteTodo, 
              completeTodo
            }}>
                {children}
            </TodoContext.Provider>
    )
}

function TodoConsumer({children}){
    return (<TodoContext.Consumer>{children}</TodoContext.Consumer>)
}

export {TodoProvider, TodoConsumer, TodoContext};
