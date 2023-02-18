import React from 'react'
import './WelcomePage.css'
import { useNavigate } from 'react-router-dom'

function WelcomPage() {
  const navigate = useNavigate();

  const Logout = () => {
      localStorage.removeItem('loginUser');
      navigate('/');
  }

  return (
    <div className='welcome-div'>
    <div className='welcome-txt'>
        <img className='logo' src='images/img-logo.png' alt='Logo' />
        <h1>WELCOME !</h1>
        <p>The complain registration application visualizes projects and bugs that are related to these projects. 
          The application enables you to log a new bug from the frontend.</p>
        <button className='log-btn' onClick={Logout}>Log Out</button>
    </div>
    <div className='welcome-button'>
        <button className="button parallelogram" onClick={() => navigate('/add')}><span className="skew-fix">Report Bug</span></button>
        <button className="but parallelogram" onClick={() => navigate('/all')}><span className="skew-fix">Check List</span></button>
    </div>
</div>
  )
}

export default WelcomPage