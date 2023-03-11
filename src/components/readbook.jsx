import Navbar from "./navbar";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import '../styles/readbook.css';

const ReadBook = () => {
    let params=useParams()//to fetch id from the url or route
    // console.log(params);

    let [book,setbook]=useState([])
     
    useEffect(()=>{
    let fetchdata=async()=>{
        let response=await fetch(`http://localhost:4500/books/${params.id}`)
        let data=await response.json()
        setbook(data)
    }
    fetchdata()
})

    return ( 
        <div className="readbook">
            <Navbar/>
            <div className="read">
                <img height={200} width={230} src={book.thumbnailUrl} alt="" />
                <div className="info">
                    <h2>Title: {book.title}</h2>
                    <h3>Author: {book.authors}</h3>
                    <p><b>Short-Description:</b> <small>{book.shortDescription}</small> </p>
                    <p><b>Long-Description:</b> <small>{book.longDescription}</small></p>

                </div>
            </div>
        </div>
     );
}
 
export default ReadBook;