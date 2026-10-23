import type {UserProfileCardProps} from "../../types";

export default function UserProfileCard (props: UserProfileCardProps){
    return(
        <div>
        <h2>{props.user.name}</h2>
        <p>{props.user.email}</p>
        <p>{props.user.role}</p>
        <button onClick = {()=> props.onEdit?.(props.user.id)}>
           Edit Profile
        </button>
        </div>
    );
}