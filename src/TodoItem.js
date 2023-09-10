import './css/TodoItem.css'
const colorStatus = {
  true: {
    background: "green"
  },
  false: {
    background: "red"
  }

}

function TodoItem({title, completed, onComplete, onDelete}){
    return(
      <div className='todo-list'>
        <li>
          <div
            style={colorStatus[completed]}
            className='statusColor'
            onClick={onComplete}>
          </div>
          <div>
          <h4>{title}
          </h4>
          <p><i>{completed ? "Completed" : ""}</i></p>
            
          </div>
          <button className='delete-button' onClick={onDelete}>
            X
          </button>
        </li>
      </div>
    )
    }

export { TodoItem };
