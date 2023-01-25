import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';


export default function Notes(props){
    function handleOnClick(event){
        event.preventDefault();
        props.deleteNote(props.id);
    }
    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={handleOnClick} ><DeleteIcon /></button>
        </div>
    )
}