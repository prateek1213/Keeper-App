import React from "react";
const date =new Date();
const year=date.getFullYear();


export function Footer(){
    return (<footer> <p className="footer">Copyright &copy; {year}</p> </footer>);
}