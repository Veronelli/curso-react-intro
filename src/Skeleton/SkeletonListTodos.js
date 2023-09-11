import { SkeletonTodoItem } from "./SkeletonTodoItem"
import React from "react"

const EXAMPLE_TIEMS_NUMBER = 3
function SkeletonListTodos(){
    const todosArray = []

    for (let index = 0; index < EXAMPLE_TIEMS_NUMBER;index++){
        todosArray.push(<SkeletonTodoItem/>)
    }
    const [todos] = React.useState(todosArray)

    return (
        <>
            {todos.map(todo=>todo)}
        </>

    )
}

export {SkeletonListTodos}