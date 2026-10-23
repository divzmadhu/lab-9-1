import type {AlertBoxProps} from "../../types";

export default function  AlertBox( props : AlertBoxProps){

    return(
        <div>
            <p>{props.type}</p>
            <p>{props.message}</p>
            <button onClick = {props.onClose}>Close</button>
        </div>
    );


}