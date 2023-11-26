import React from "react";
import { withStorageListener } from "./withSotageListener";

function ChangeAlert(props) {
    if(props.show){
        return (
            <div>
                <p>Hubo cambios</p>
                <button onClick={()=>{props.toggleShow()}}>Refrescar información</button>
            </div>
        );
    }
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert)

export { ChangeAlert, ChangeAlertWithStorageListener };
