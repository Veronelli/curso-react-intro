import '../../css/TodoItem.css'
import { TodoIcon } from '../../TodoIcon';

function TodoItem({title, completed, onComplete, onDelete}){
    return(
      <div className='todo-list'>
        <li>
          <TodoIcon type="check"
            onComplete={onComplete}
            fillColor={completed ? "green" : "gray"}/>
          <div>
          <h4>
            {title}
          </h4>
          <p><i>{completed ? "Completed" : ""}</i></p>
            
          </div>
          <button className='delete-button' onClick={onDelete}>
          <div>
            
          <TodoIcon type="delete"
            fillColor='white'
            onClick={onDelete}/>
            </div>
          </button>
        </li>
      </div>
    )
    }

export { TodoItem };
