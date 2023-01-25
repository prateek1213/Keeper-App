import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';

export default function HeadNote(props) {
    const [note,setNote]=useState({
        title : "",
        content : ""
    })
    function handleOnChange(event){
        const {name,value}=event.target;
        setNote((prev)=>{
            return {
                ...prev,
                [name] : value
            }

        })
    
    }

    return (
        <div >
            <form className="create-note">
                <input onChange={handleOnChange} type="text" name="title" placeholder="Title"></input>
                <textarea onChange={handleOnChange} type="text" name="content" placeholder="Content"></textarea>
                <button onClick={()=>props.func(note,setNote)} type="button">< AddIcon /></button>

            </form>

            



        </div>
    )
}