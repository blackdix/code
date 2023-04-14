import React from "react";
import './css/blog.css';


export default function blog(props){

    return <div className="blog-wrap">
        <p>
        <img src="https://placeimg.com/640/480/nature" alt=""/>
        <p>{props.tanggal}</p>
        <p>{props.judul}</p>
        <p>{props.summary}</p>
        </p>
    </div>
 
}