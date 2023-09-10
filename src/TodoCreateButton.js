export default function(props){
    return(
        <div className="create-button">
            <button>
                <b>
                    {props.children}
                </b>
            </button>
        </div>
    )
}