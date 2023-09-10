import '../css/TodoCreateButton.css'

function TodoCreateButton(props){
    return(
        <button className="create-button" >
            <b>
                {props.children}
            </b>
        </button>
    )
}

export {TodoCreateButton}