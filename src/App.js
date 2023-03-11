
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './components/login';
import Admin from './components/admin';
import BookList from './components/booklist';
import AddBooks from './components/addbook';
import AddUser from './components/adduser';
import ReadBook from './components/readbook';
import UsersList from './components/userlist';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route element={<Login/>} path="/" />
        <Route element={<Admin/>} path="/admin"/>
        <Route element={<BookList/>} path="/book-list"/>
        <Route element={<AddBooks/>} path="/add-book"/>
        <Route element={<AddUser/>} path="/add-user"/>
        <Route element={<ReadBook/>} path="/book-list/:id"/>
        <Route element={<UsersList/>} path="/user-list"/>
        

      </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
