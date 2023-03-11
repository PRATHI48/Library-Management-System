// import { useState } from "react";
import Navbar from "./navbar";
import '../styles/adduser.css';
import { useRef } from "react";

const AddUser = () => {

    let fristName=useRef(null)
    let lastName=useRef(null)
    let email=useRef(null)
    let contact=useRef(null)
   
    let adduser=(e)=>{
        e.preventDefault()

        // let data={fristName.current.value,lastName,email,contact}

        let data={
            fristName:fristName.current.value,
            lastName:lastName.current.value,
            email:email.current.value,
            contact:contact.current.value,
        }
        fetch(" http://localhost:4500/users",{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(data)
     })
     alert("User added successfully")


    }

    // let [name, setname] = useState([])
    // let [email, setemail] = useState([])
    // let [contact, setcontact] = useState([])

    // let adduser = (e) => {
    //     e.preventDefault()
    // }


    return (
        <div className="userlist">
            <Navbar />

            <div className="user">
                <h1>User List Details</h1>
                <form action="" onSubmit={adduser}>

                    <label htmlFor=""><b>Name:</b></label>
                    <input ref={fristName} className="frist" type="name"  placeholder="Enter FristName" />
                    <input ref={lastName} className="frist" type="name" placeholder="Enter LastName" />
                    <br/>
                    
                    <label htmlFor=""><b>Email:</b></label>
                    <input ref={email} type="email" placeholder="Enter Email Id" /><br/>
                    
                    <label ref={contact} htmlFor=""><b>Contact:</b></label>
                    <input type="tel" placeholder="Enter Contact Number" /><br/>
                    <button onClick={adduser}>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default AddUser;