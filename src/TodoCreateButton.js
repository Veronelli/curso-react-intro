import './css/TodoCreateButton.css'

export default function(props){
    return(
        <button className="create-button">
            <b>
                {props.children}
            </b>
        </button>
    )
}