import React from "react";
import { withStorageListener } from "./withSotageListener";

function ChangeAlert(props) {
    if(props.show){
        return <p>¿Hubo cambios?</p>;
    }
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert)

export { ChangeAlert, ChangeAlertWithStorageListener };
