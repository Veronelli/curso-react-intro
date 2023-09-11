import { TodoContext } from '../TodoContext'
import '../css/TodoCounter.css'
import React from 'react'

function TodoCounter(){
  const {todosLength, todosCompleted} = React.useContext(TodoContext)
  if (todosCompleted !== todosLength)
  {
    return(
      <h1 >
        Has completado {todosCompleted} de {todosLength} TODO
      </h1>
    )
  }
  else
  {
    return (
      <>
        <h1>
          Genial completaste todas las tareas 🎉

        <h3>
          Sigue proponiendote desafios
        </h3>
        </h1>
      </>
    )
  }
}
export default TodoCounter;