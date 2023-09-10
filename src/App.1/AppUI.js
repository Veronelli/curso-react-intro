import React from "react"
import TodoCounter from "../TodoCounter"
import { TodoSearch } from "../TodoSearch"
import { TodoItem } from "../TodoList/TodoItem"
import { TodoList } from "../TodoList"
import {TodoCreateButton} from "../TodoCreateButton"

function AppUI({todosCompleted, todosLength, searchValue, setSearchValue, todosFiltred, deleteTodo, completeTodo}){
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
    )
}

export {AppUI}
