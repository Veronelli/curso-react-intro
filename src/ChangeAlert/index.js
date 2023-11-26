import React from "react";
import { withStorageListener } from "./withSotageListener";
import style from './style.module.css'
function ChangeAlert(props) {
    if(props.show){
        return (
            <div className={style['alert-container']}>
                <p>Hubo cambios</p>
                <button className={style['button-reset']} onClick={()=>{props.toggleShow()}}>Refrescar información</button>
            </div>
        );
    }
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert)

export { ChangeAlert, ChangeAlertWithStorageListener };
