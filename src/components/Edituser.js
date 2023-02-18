import { FormControl, FormGroup, Input, InputLabel, Typography, styled, Button } from '@mui/material'
import React from 'react'
import './EditUser.css'
import { useState, useEffect } from 'react'
import { editUser, getUser} from '../service/api'
import {useNavigate, useParams} from 'react-router-dom';

{/*const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% auto 0 auto;
    & >
`*/}
const defaultValue = {
    title: '',
    description: '',
    email: '',
}
const Edituser = () => {
    const [user, setUser] = useState(defaultValue);
    const navigate = useNavigate();
    //get id from url
    const {id} = useParams();

    useEffect(() =>{
        loadUserDetails();
    }, [])

    const loadUserDetails = async() => {
        const response = await getUser(id);
        setUser(response.data);
    }

    {/* e is a event that catch what the user type in this text field is is
        a by default */}
    const onValueChange = (e) => {
        console.log(e.target.value)
        //...spread operator that don't override the values new values only append.
        //and next is key value pair form
        setUser({...user, [e.target.name]: e.target.value })
    }

const editUserDetails = async() =>{
    await editUser(user, id); //service -> api.js
    navigate('/all')
}

    return(
        <>

        <div className='edituser-div'>
        <div className='edit-txt'>
            
        {/* <img src='images/img-2.jpg' alt='EditLogo' /> */}
        <img className='logo' src='/images/img-logo.png' alt='Logo' />

             <h1 className='edit-heading'><i title='Go to home page' className="fa fa-chevron-left" id='back-arrow' aria-hidden="true" 
             onClick={() => navigate('/welcome')}></i> Update Complain</h1>
            <p className='add-text'>A bug report is something that stores all information needed to document,
             report and fix problems occurred in software or on a website.</p>
            <button className='edit-btn' onClick={() => navigate('/all')}>Check List</button>
        </div>

        <div className="mb-3 edit-reg">
        <h1 className='heading-form'>Edit Complain</h1><br></br>
        
        <label htmlFor="exampleFormControlInput1" id="title-txt" className="form-label">Complain Title</label>
        <input type="text" name="title"  className="form-control" id="exampleFormControlInput1" 
        placeholder="Enter Complain Title" value={user.title} onChange={(e) => onValueChange(e)}/><br></br>

        <label htmlFor="exampleFormControlInput1" id="email-txt" className="form-label">Reporter Name</label>
        <input type="text" name="email" className="form-control" id="exampleFormControlInput1" 
        placeholder="Enter Reporter Name" value={user.email} onChange={(e) => onValueChange(e)} /><br></br>
       
        <label htmlFor="exampleFormControlInput1" id="description" className="form-label">Description</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" type="text" name="description" 
        rows="4"  placeholder="Enter Your Description" value={user.description} onChange={(e) => onValueChange(e)}></textarea><br></br>
      
        <label className="status-label">Complain Status</label>
        <div className='status'>
            <select name="status" id="bugsuvrity" className="name2" required  value={user.status} onChange={onValueChange}>
                <option value="Reported">Reported</option>
                <option value="In-Progress">In-Progress</option>
                <option value="Complete">Complete</option>
            </select><br></br>
        </div>


        <label className='label-drop'>Severity</label>
        <label className='label-down'>Bug Type</label><br/>
        
        <div className='dropdown-div'>

            <select name="severity" id="bugsuvrity" className="name" required value={user.severity} onChange={onValueChange}>
                <option value="Select Severity">Select Severity</option>
                <option value="Critical">Critical</option>
                <option value="Minor">Minor</option>
                <option value="Major">Major</option>
                <option value="LowTrival">Low Trival</option>
                <option value="Blocker">Blocker</option>
            </select>

            <select name="btype" className="name1" required value={user.btype} onChange={onValueChange}>
                <option value="Select Bug Type">Select Bug Type</option>
                <option value="Functional defects" >Functional defects</option>
                <option value="Performance defects">Performance defects</option>
                <option value="Usability defects">Usability defects</option>
                <option value="Compatibility defects">Compatibility defects</option>
                <option value="Security defects">Security defects</option>
            </select>
        </div>
        
        <button type="button" className="btn btn-info shadow mt-2" id="button" onClick={() => editUserDetails()}>Edit Complain</button>
    </div>
        
    </div> 
    </>
    )
}

export default Edituser;

