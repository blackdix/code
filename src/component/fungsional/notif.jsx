import {React, useState} from "react";


const [inNotif,setIsNotif]=useState(false)

const notif =()=>{
    setIsNotif(!inNotif)
    setTimeout(()=>{
        setIsNotif((state)=>!state)
    },2000)
}

export default notif;