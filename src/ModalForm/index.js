import React from "react";
import { TodoContext } from "../TodoContext";

function ModalForm(){
    const {setOpenModal, saveTodos, todos} = React.useContext(TodoContext);
    const [todo, setTodo] = React.useState('');

    const onChange = (event)=>{
        setTodo(event.target.value)
    }
    const createNewTodo = (event)=>{
        event.preventDefault();
        const newTodoList = [...todos, {
            title: todo,
            completed: false
        }];

        saveTodos(newTodoList)
        setOpenModal(false)
    }
    return (
        <div className="modal">
            <div className="window">
                <div className="exit-modal">
                    <button onClick={()=>setOpenModal(false)}><b>x</b></button>
                </div>
                <div className="container">
                    <div className="content">
                        <form onSubmit={createNewTodo}>
                            <label>Escribe un todo</label>
                            <textarea placeholder="Cortar cebolla" value={todo} onChange={onChange}>
                                {todo}
                            </textarea>
                            <button>Crear Tarea</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {ModalForm};