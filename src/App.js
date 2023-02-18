import './App.css';
import Adduser from './components/Adduser';
import Allusers from './components/Allusers';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/Navbar';
import Edituser from './components/Edituser';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ProtectedRoutes from './components/ProtectedRoute';
import HomePage from './components/HomePage';
import WelcomPage from './components/WelcomPage'


function App() {
  return (
    <div className="App">
    
    <BrowserRouter>
        {/* <Navbar/> */}
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route element={<ProtectedRoutes/>}>
          <Route path='/welcome' element={<WelcomPage/>} />
          <Route path='/all' element={<><Navbar/><Allusers/></>} />
          <Route path='/add' element={<><Navbar/><Adduser/></>} />
          <Route path='/edit/:id' element={<><Navbar/><Edituser/></>} />
          </Route>
        </Routes>

    </BrowserRouter>
     

    </div>
  );
}

export default App;
