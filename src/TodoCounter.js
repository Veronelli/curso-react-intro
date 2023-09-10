import './css/TodoCounter.css'
import React from 'react'

function TodoCounter({completed, total}){
  if (completed !== total)
  {
    return(
      <h1 >
        Has completado {completed} de {total} TODO
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