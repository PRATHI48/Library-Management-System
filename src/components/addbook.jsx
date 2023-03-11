import Navbar from "./navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/addbook.css'

const AddBooks = () => {
    let [title, settitle] = useState([])
    let [pageCount, setpageCount] = useState([])
    let [authors, setauthor] = useState([])
    let [categories, setcategories] = useState([])
    let [descripition,setdescription]=useState([])
    let [thumbnailUrl, setthumbnailUrl] = useState([])

    let navigate = useNavigate()

    let submit = (e) => {
        e.preventDefault()

    let data = { title, pageCount, authors, categories, thumbnailUrl }
    fetch("http://localhost:4500/books",{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(data)
     })
     alert("Book added successfully")
     console.log(data);
     navigate('/book-list')
    }



    return (
        <div className="addbook">

            <Navbar />

            <div className="books_list">
                <h1>Add Books Details</h1>
                <form action="" onSubmit={submit}>
                    <label htmlFor=""><b>Title:</b>  </label>
                    <input value={title} onChange={(e)=>settitle(e.target.value)} type="title"  placeholder="Enter Title"/> <br />

                    <label htmlFor=""><b>PageCount:</b> </label>
                    <input value={pageCount} onChange={(e)=>setpageCount(e.target.value)} type="pagecount"  placeholder="Enter The PageCount"/> <br />

                    <label htmlFor=""><b>Authors:</b> </label>
                    <input value={authors} onChange={(e)=>setauthor(e.target.value)} type="author" placeholder="Enter Author Name" /> <br />

                    <label htmlFor=""><b>Categories:</b> </label>
                    <input value={categories} onChange={(e)=>setcategories(e.target.value)} type="categroy" placeholder="Enter Category" /><br />

                    <label htmlFor=""><b>Description:</b> </label>
                    <input value={descripition} onChange={(e)=>setdescription(e.target.value)} type="description" placeholder="Enter Description" /><br />

                    <label htmlFor=""><b>ImageUrl:</b> </label>
                    <input value={thumbnailUrl} onChange={(e)=>setthumbnailUrl(e.target.value)} type="url"  placeholder="Enter Image Link" /><br />

                    <div className="button">
                        <button1 onClick={submit}>Submit</button1>
                        <button2 >Cancel</button2>
                    </div>
                </form>
            </div>

        </div>
    );
}

export default AddBooks;