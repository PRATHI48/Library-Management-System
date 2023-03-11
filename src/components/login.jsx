import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";
const Login = () => {
    let [email, setemail] = useState("")
    let [password, setpassword] = useState("")
    let navigate = useNavigate()

    let submit = (e) => {
        e.preventDefault()
        if (email == "admin@gmail.com" && password == 1234) {
            navigate('/admin')
        }
        else {
            alert('invalid credentials')
        }
    }

    return (
        
        <div className="login">
       
            <div className="login_form">
            
            <img  height={350} width={350}  src="\images\2.jpg" alt="" />
                <form action="" onSubmit={{ submit }}>
                    <h1>LOGIN</h1>
                    <input value={email} onChange={(e) => setemail(e.target.value)} className="form-control" type="email" placeholder="ENTER EMAIL ADDRESS" /> <br />
                    <input value={password} onChange={(e) => setpassword(e.target.value)} className="form-control" type="password" placeholder="ENTER PASSWORD" /> <br />
                    <button onClick={submit}>LOGIN</button>
                </form>
            </div>
        </div>
    );
}

export default Login;