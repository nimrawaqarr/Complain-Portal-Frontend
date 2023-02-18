import { FormControl, FormGroup, Input, InputLabel, Typography, styled, Button } from '@mui/material'
import React from 'react';
// import '../App.css';
import './AddUser.css';
import { useState } from 'react';
import { addUser } from '../service/api';
import {useNavigate} from 'react-router-dom';

{/*const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% auto 0 auto;
    & >
`*/}
const defaultValue = {
    title: '',
    description: '',
    email: ''
}
const Adduser = () => {
    const [user, setUser] = useState(defaultValue);
    
    const navigate = useNavigate();
    {/* e is a event that catch what the user type in this text field is is
        a by default */}
    const onValueChange = (e) => {
        console.log(e.target.value)
        //...spread operator that don't override the values new values only append.
        //and next is key value pair form
        setUser({...user, [e.target.name]: e.target.value })
        console.log(user)
    }

const addUserDetails = async() =>{
    console.log(user)
    await addUser(user); //service -> api.js
    navigate('/all')
}

    return(
    <>
        <div className='adduser-div'>

            <div className='add-txt'>
             <img className='logo' src='images/img-logo.png' alt='Logo' />
             <h1 className='add-heading'><i title="Go to home page" className="fa fa-chevron-left" id='back-arrow' aria-hidden="true" 
             onClick={() => navigate('/welcome')}></i> Report Complain</h1>
            <p className='add-text'>Bug Fixes means a temporary work-around, patch, or bypass
             to update the program code to correct errors or defects.</p>
            <button className='add-btn' onClick={() => navigate('/all')}>Check List</button>
            </div>


        <div className="mb-3 add-reg">
        <h1 className='heading-form'>Add Complain</h1><br></br>
        
        <label for="exampleFormControlInput1" id="title-txt" className="form-label">Complain Title</label>
        <input type="text" name="title"  className="form-control" id="exampleFormControlInput1" 
        placeholder="Enter Complain Title" onChange={(e) => onValueChange(e)}/><br></br>

        <label for="exampleFormControlInput1" id="email-txt" className="form-label">Reporter Name</label>
        <input type="text" name="email" className="form-control" id="exampleFormControlInput1" 
        placeholder="Enter Reporter Name" onChange={(e) => onValueChange(e)} /><br></br>
       
        <label for="exampleFormControlInput1" id="description" className="form-label">Description</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" type="text" name="description" 
        rows="4"  placeholder="Enter Your Description" onChange={(e) => onValueChange(e)}></textarea><br></br>

        <label className='label-drop'>Severity</label>
        <label className='label-down'>Bug Type</label><br/>

        <div className='dropdown-div'>

            <select name="severity" id="bugsuvrity" className="name" required onChange={onValueChange}>
                <option value="Select Severity">Select Severity</option>
                <option value="Critical">Critical</option>
                <option value="Minor">Minor</option>
                <option value="Major">Major</option>
                <option value="Low Trival">Low Trival</option>
                <option value="Blocker">Blocker</option>
            </select>

            <select name="btype" className="name1" required onChange={onValueChange}>
                <option value="Select Bug Type">Select Bug Type</option>
                <option value="Functional Defects">Functional defects</option>
                <option value="Performance Defects">Performance defects</option>
                <option value="Usablility Defects">Usability defects</option>
                <option value="Compatibility Defect">Compatibility defects</option>
                <option value="Security Defect">Security defects</option>
            </select>
        </div>
        
        <button type="button" className="btn btn-info shadow mt-2" id="button" onClick={() => addUserDetails()}>Add Complain</button>
    </div>
    </div>
    </>
    )
}

export default Adduser;

