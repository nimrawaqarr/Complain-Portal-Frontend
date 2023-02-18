import { Table, TableBody, TableCell, TableHead, TableRow, styled, Button} from '@mui/material';
import {getUsers, deleteUser} from '../service/api';
import React from 'react';
import './AllUsers.css';
import {useEffect, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';

{/*const StyledTable = styled(Table)`
    width: 90%;
    margin: 50px auto 0 auto;
`

const THead = styled(TableRow)`
    background: #000000;
    & > th{
        color: #fff;
        font-size: 20px;
    }
`

const TBody = styled(TableRow)`
    & > td{
        font-size: 20px;
    }
`*/}
const Allusers = () => {

    const navigate = useNavigate();
    const [users, setUsers] = useState([]);

// if we use empty error so useeffect use only onces when component is called.
    useEffect(() => {
        console.log(users)
        getAllUsers(); 
    }, []);

    const getAllUsers = async() => {
        let response = await getUsers(); //service -> api.js
        setUsers(response.data)
        //console.log(response);
    }

    const deleteUserDetails = async(id) => {
        await deleteUser(id);
        getAllUsers(); 
    }

    return(
        <>
        {/* <h1 className='tb-heading'>List of Complain Reported Using Complain Portal</h1> */}
        <table className="table">
            <thead>
                <tr className='area'>
                    <th title="Go to tome page" style={{cursor: 'pointer'}}><i className="fa fa-chevron-left"aria-hidden="true" onClick={() => navigate('/welcome')}></i> </th>
                    <th scope='col' colSpan='10' className='heading-1'>Area of workplace</th>
                </tr>
                
                <tr className='title-tb'>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Reporter Name</th>
                    <th>Severity</th>
                    <th>Status</th>
                    <th>Bug Type</th>
                    <th>Reported Date</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map(user => (
                        <tr key={user._id}>
                            <td>{user.title}</td>
                            <td>{user.description}</td>
                            <td>{user.email}</td>
                            <td>{user.severity}</td>
                            <td>{user.status}</td>
                            <td>{user.btype}</td>
                            <td>{user.createdAt.substring(0, user.createdAt.indexOf('T'))}</td>

                            <td className='action-btn'>
                                <Link style={{marginRight: 2}} component={Link} to={`/edit/${user._id}`}>
                                <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                                </Link>

                                <Button color="secondary" onClick={() => deleteUserDetails(user._id)}>
                                <i style={{marginBottom: '12%'}} className="fa fa-trash" aria-hidden="true"></i>
                                </Button>

                                <Link color="secondary" to='/add'>
                                <i class="fa fa-plus-circle" aria-hidden="true"></i>
                                </Link>
                            </td>
                            
                        </tr>
                    ))
                }
            </tbody>
        </table>



        
        {/*<StyledTable>
            <TableHead>
                <THead>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>User Name</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell></TableCell>
                </THead>
            </TableHead>
            <TableBody>
                {
                    users.map(user => (
                        <TBody key={user._id}>
                            <TableCell>{user._id}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.username}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.phone}</TableCell>
                            <TableCell>
                                <Button variant="contained" style={{marginRight: 10}} component={Link} to={`/edit/${user._id}`}>Edit</Button>
                                <Button variant="contained" color="secondary" onClick={() => deleteUserDetails(user._id)}>Delete</Button>
                            </TableCell>
                        </TBody>
                    ))
                }
            </TableBody>
        </StyledTable>*/}
        </>
    )
}

export default Allusers;
