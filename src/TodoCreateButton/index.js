import '../css/TodoCreateButton.css'

function TodoCreateButton({children, openModal, setOpenModal}){
    return(
        <button className="create-button" onClick={()=>setOpenModal(!openModal)}>
            <b>
                {children}
            </b>
        </button>
    )
}

export {TodoCreateButton}