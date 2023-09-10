import {ReactComponent as CheckSVG} from "./check.svg"
import {ReactComponent as DeleteSVG} from "./delete.svg"
import './css/TodoItem.css'

const iconTypes = {
    check: (fillColor)=>{return <CheckSVG className="Icon-svg" fill={fillColor} />},
    delete: (fillColor)=>{return <DeleteSVG className="Icon-svg" fill={fillColor} />}
}

function TodoIcon({type, fillColor, onComplete}){
    return (
        <span onClick={onComplete} className={`Icon Icon-svg Icon-${type} ${fillColor}`}>
            {iconTypes[type](fillColor)}
        </span>
    )
}

export {TodoIcon};