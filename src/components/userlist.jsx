import Navbar from "./navbar";
import { useState,useEffect } from "react";
import '../styles/userlist.css';

const UsersList = () => {
    let [users,setusers]=useState([])
    useEffect(()=>{
        let fetchdata= async()=>{
            let response=await fetch("http://localhost:4500/users")
            let data=await response.json()
            setusers(data)
        }
        fetchdata()
    })
    let remove=(id,fristName,lastName)=>{
        fetch(`http://localhost:4500/users/${id}`,
        {
            method:'DELETE'
        })
        alert(`${fristName}${lastName} has been deleted permanently`)
    }

    return ( 
        <div className="usersslist">
            <Navbar/>
            
            <div className="lists">
                {users.map(data=>(
                   <div className="list">
                    <div className="li">
                    <h1>{(data.fristName[0])}</h1>
                    <h2>Name:{data.fristName} {data.lastName}</h2>
                    <p>Email:{data.email}</p>
                    <p>Contact:{data.contact}</p>
                    <button onClick={()=>remove(data.id,data.fristName,data.lastName)}>Delete</button>
                   </div></div> 
                ))}
            </div>
        </div>
     );
}
 
export default UsersList;

