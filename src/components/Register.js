import React, {useState} from "react"
import "./Register.css"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"

const Register = () =>{
    //use to send request to next route(if i click on register button refer to register page)
    const navigate = useNavigate();

    // const [user, setUser] = useState({
    //     name: "",
    //     email: "",
    //     password: "",
    //     reEnterPassword: ""
    // })

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [reEnterPassword, setReEnterPassword] = useState('')
    // e = event
    // const handleChange = e => {
    //     const {name, value} = e.target
    //     setUser({
    //         //...spread operator modify each value
    //         ...user,
    //         [name]: value
    //     })
    // }

    const register = () =>{
        // const {name, email, password, reEnterPassword} = user
        //check that some values exist in name, email etc.
        if(name && email && password && (password === reEnterPassword)){
            console.log(name,email,password)
            axios.post("http://localhost:8000/register", {name, email, password})
            //.then is a promise based request when post request is complete then it execute
            .then(res => {
                alert(res.data.message)
                navigate("/login")
            }).catch(error=>{
                console.log(error)
            })
        }else{
            alert("Invalid input")
        }
    }

    return(
    <>
    <div className="main-reg">
        <div className="reg-txt">
            <p className="reg-text">With your account, you'll be able to access all of our features and services. Sign up now and start enjoying:</p>  
            <p className="reg-text1"> - Personalized experience <br/>
              - Easy access to your information </p>
        </div>
    <div className="mb-3 register-user">
        <h1 className="heading">Register</h1><br></br>
        <label for="exampleFormControlInput1" id="email" className="form-label reg-label">Your Name</label>
        <input type="text" name="name" value={name} className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Name" 
        onChange={event=>{setName(event.target.value)}}/><br></br>

        <label for="exampleFormControlInput1" id="email" className="form-label">Your Email</label>
        <input type="text" name="email" value={email}  className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Email" onChange={event=>{setEmail(event.target.value)}}/><br></br>

        <label for="exampleFormControlInput1" id="password" className="form-label">Your Password</label>
        <input type="password" name="password" value={password}  className="form-control" id="exampleFormControlInput1" placeholder="Password" onChange={event=>{setPassword(event.target.value)}}/><br></br>

        <label for="exampleFormControlInput1" id="passwordre" className="form-label">Confirm Password</label>
        <input type="password" name="reEnterPassword" value={reEnterPassword} className="form-control" id="exampleFormControlInput1" placeholder="Re-enter Password" onChange={event=>{setReEnterPassword(event.target.value)}}/><br></br>

        <button type="button" className="btn btn-info shadow mt-2" id="button" onClick={register} >Signup</button><br></br><br></br>
        <div className="login-links">
            <p>Already have an account?</p>
            {/* onClick={() => navigate('/login')} */}
            <Link to='/login' className="btnredirect">Login</Link>
        </div>
    </div>
    </div>
    </>
    )
}

export default Register