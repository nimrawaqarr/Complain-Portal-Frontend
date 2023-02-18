import React from 'react'
import {AppBar, Toolbar, styled} from '@mui/material';
import '../App.css';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Header = styled(AppBar)`
    background: #00008B;
`;

const Tabs = styled(NavLink)`
    font-size: 20px;
    margin-right: 20px;
    color: inherit;
    text-decoration: none
`;

const Navbar = () =>{
    const navigate = useNavigate();

    return(
        <Header position="static">
            <Toolbar>
                <img onClick={() => navigate('/welcome')} title='Go to home page' className='logo-top' src='/images/img-logo.png' alt='Logo' /> 
                <h4 className='nav-pointer' style={{marginRight: 20, cursor: 'pointer'}} onClick={() => navigate('/welcome')}>Complain</h4>
                {/*<Tabs to='/'>CRUD APP</Tabs>*/}
                <Tabs className="tab" to='/add'>Add Complain</Tabs>
                <Tabs className="tab"  to='/all'>Dashbord</Tabs>
            </Toolbar>
        </Header>
    )
}

export default Navbar;
