import Navbar from "./navbar";
import { useEffect, useState } from "react";
import '../styles/booklist.css'
import { Link } from "react-router-dom";

const BookList = () => {
    let [books, setbooks] = useState([])
    useEffect(() => {
        let fetchdata = async () => {
            let response = await fetch(" http://localhost:4500/books")
            let data = await response.json()
            setbooks(data)

        }
        fetchdata()
    })

    let deletebook=(id,title)=>{
       fetch(`http://localhost:4500/books/${id}`,{
        method:'DELETE'
       })
       alert(`${title} has been deleted permanently`)
    }

    

    return (
        <div className="BookList">
            <Navbar />
            <div className="bookss_list">
                {books.map(data => (
                    <div className="books">
                        <img height={280} width={200} src={data.thumbnailUrl} alt="" />
                        <div className="details">
                            <h2> {data.title}</h2>
                            <h3>PageCount: {data.pageCount}</h3>
                            <p>Authors: {data.authors}</p>
                            <p>Category: {data.categories}</p>
                            <Link className="btn1" to={`/book-list/${data.id}`}>ReadMore</Link>
                            <button onClick={()=>deletebook(data.id,data.title)}>Delete</button>
                        </div>
                        
                    </div>
                    


                ))}
                
            </div>
        </div>
    );
}

export default BookList;

