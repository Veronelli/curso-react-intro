import { TodoItem } from "./TodoItem";

function TodoItems({todos, setSearchValue}){
    return todos.map(todo=>(
        <
            TodoItem
            title={todo.title}
            key={todo.title}
            completed={todo.completed}
            setSearchValue={setSearchValue}
        />
    ))
    
}

export { TodoItems };