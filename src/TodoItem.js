import './css/TodoItem.css'
const colorStatus = {
  true: {
    background: "green"
  },
  false: {
    background: "red"
  }

}

function TodoItem({title, completed}){
    return(
      <div className='todo-list'>
        <li>
          <div style={colorStatus[completed]} className='statusColor'>
          </div>
          <div>
          <h4>{title}
          </h4>
          <p><i>{completed ? "Completed" : ""}</i></p>
            
          </div>
          <button className='delete-button'>
            X
          </button>
        </li>
      </div>
    )
    }

export { TodoItem };
