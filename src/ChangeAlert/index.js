import React from "react";
import { useStorageListener } from "./useStorageListener";
import style from './style.module.css'
function ChangeAlert(props) {
    const {show, toggleShow}  = useStorageListener(props.sincronizeTodos)
    if(show){
        return (
            <div className={style['alert-container']}>
                <p>Hubo cambios</p>
                <button className={style['button-reset']} onClick={()=>{toggleShow()}}>Refrescar información</button>
            </div>
        );
    }
}


export { ChangeAlert };
