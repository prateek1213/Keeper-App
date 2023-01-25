import React, { useState } from "react";
import { Header } from "./component/Header";
import { Footer } from "./component/Footer";
import HeadNote from "./component/headNote";
import Notes from "./component/notes"
// import { getValue } from "@testing-library/user-event/dist/utils";
export default function App (){
    const [notes,setNotes]=useState([]);

    function handleDelete(id){
       setNotes((prevNotes)=>{
        return prevNotes.filter((value,index)=>{
                return id!==index;
            })
        })
    }


    function handleOnClick(note,setNote){
        setNotes((prev)=>{
            return [...prev,note]
            
        })
        setNote({
            title : "",
            content : ""
        })
    }


    return (
    <div >
    <Header />
    <HeadNote 
    key={1}
    func={handleOnClick} />
    
    {   
        notes.map((value,index)=>{
        return <Notes 
        key={index}
        id={index}
        title={value.title}
        content={value.content}
        deleteNote={handleDelete}
        />
    })
    }
    
    
    <Footer />
    
    </div>
    )
}