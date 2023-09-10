import { TodoItem } from "./TodoItem";

function TodoItems({todos}){
    return todos.map(todo=>(
            <TodoItem title={todo.title} key={todo.title} completed={todo.completed}></TodoItem>
    ))
    
}

export { TodoItems };