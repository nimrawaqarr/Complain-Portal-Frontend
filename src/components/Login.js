import React, {useState} from "react"
import "./Login.css"
import axios from "axios"
import { useNavigate, Link} from "react-router-dom"


const Login = () =>{
    //use to send request to next route(if i click on register button refer to register page)
    const navigate = useNavigate();

    const [user, setUser] = useState({
        email: "",
        password: "",
    })
    const [loginUser, setLoginUser] = useState(false)
    // e = event
    const handleChange = e => {
        const {name, value} = e.target
        setUser({
            //...spread operator modify each value
            ...user,
            [name]: value
        })
    }


    const login = () => {
        axios.post("http://localhost:8000/", user)
        .then(res => {
            if(res.data.status==="200"){

                alert(res.data.message)
                localStorage.setItem("loginUser", true)
                navigate("/welcome")
            }
            else{
                alert(res.data.message)
                
            }
        })
    }

    return(
    <>
    <div className="div-login">
    <div className="login-txt">
        <h1 className="login-heading">Welcome back!</h1>
        <p className="login-text">Please sign in to your account to continue.</p>
    </div>  
        <div className="mb-3 login" id="logindiv">
        <h1 className="heading">Login</h1><br></br>
        <label for="exampleFormControlInput1" id="email" className="form-label">Your Email</label>
        <input name="email" value={user.email} className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Email" onChange={handleChange}/><br></br>
        <label for="exampleFormControlInput1" id="password" className="form-label">Your Password</label>
        <input type="password" name="password" value={user.password} className="form-control" id="exampleFormControlInput1" placeholder="Password" onChange={handleChange}/><br></br>
        <button type="button" className="btn btn-info" id="button" onClick={login}>Login</button><br></br><br></br>
        <div className="login-links">
            <p>Don't have an account?</p>
            {/* onClick={() => navigate('/login')} */}
            <Link to='/register' className="btnredirect">Signup</Link>
        </div>
        </div>
    </div>


        {/*<div className="login">
            <h1>Login</h1>
            <input type="text" name="email" value={user.email} placeholder="Enter your Email" onChange={handleChange}></input>
            <input type="password" name="password" value={user.password} placeholder="Enter your Password" onChange={handleChange}></input>
            <div className="button" onClick={login}>Login</div>
            <div>or</div>
            <div className="button" onClick={() => history.push('/register')}>Register</div>
    </div>*/}
    </>
    )
}

export default Login;