import type {AlertBoxProps} from "../../types";

export default function  AlertBox( props : AlertBoxProps){

    let closeButton;
    if(props.onClose){
        closeButton =(
            <button onClick = {props.onClose}>Close</button>
        );
    }
    

    return(
        <div>
            <p>{props.type}</p>
            <p>{props.message}</p>
            {props.children}
            {closeButton}
            {/* <button onClick = {props.onClose}>Close</button> */}
        </div>
    );


}