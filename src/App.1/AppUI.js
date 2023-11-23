import React from "react"
import TodoCounter from "../TodoCounter"
import { TodoSearch } from "../TodoSearch"
import { TodoItem } from "../TodoList/TodoItem"
import { TodoList } from "../TodoList"
import {TodoCreateButton} from "../TodoCreateButton"
import { TodosError } from "../TodosError"
import { TodosEmpty } from "../TodosEmpty"
import { SkeletonListTodos } from "../Skeleton"

import {TodoConsumer, TodoContext} from "../TodoContext";
import { Modal } from "../Modal"
import { ModalForm } from "../ModalForm"

function AppUI(){
    const {openModal, setOpenModal} = React.useContext(TodoContext)
    return (
        <>
            <TodoCounter />
            <TodoSearch />
            <TodoConsumer>
                {({
                    loading,
                    error,
                    setSearchValue,
                    todosFiltred,
                    deleteTodo, 
                    completeTodo,
                })=>(
                        <TodoList>
                        {loading && <SkeletonListTodos></SkeletonListTodos>}
                        {error && <TodosError></TodosError>}
                        {(!loading && todosFiltred.length === 0) && <TodosEmpty></TodosEmpty>}
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

                    )
                }
            </TodoConsumer>
            <TodoCreateButton openModal={openModal} setOpenModal={setOpenModal}>
            Create Task
            </TodoCreateButton>
            {openModal && (
                <Modal>
                    <ModalForm></ModalForm>
                </Modal>
            )}
        </>
    )
}

export {AppUI}
