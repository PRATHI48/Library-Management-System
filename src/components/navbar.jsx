import {Link} from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
    return (  
        <div className="navbar">
            <div className="logo">
            <img style={{"background-color":"transparent"}} height={70} width={70} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxSpUCgM9c1Gxb8VZ63EpeLiw8VdMqAEkb6w&usqp=CAU" alt="" />
            </div>
            <div className="links">
                <ul>
                    <li><Link className="l" to="/admin">Home</Link></li>
                    <li><Link  className="l" to="/book-list">Book List</Link></li>
                    <li><Link className="l" to="/user-list">Use List</Link></li>
                    <li><Link className="l" to="/add-book">Add Books</Link></li>
                    <li><Link className="l" to="/add-user">Add User</Link></li>
                    <li><Link className="l" to="/">Logout</Link></li>
                </ul>
            </div>
        </div>
    );
}
 
export default Navbar;