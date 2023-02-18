import React from 'react'
import './HomePage.css'
import { useNavigate } from 'react-router-dom'

function HomePage() {

  const navigate = useNavigate();
  
  return (
    <div className='home-div'>
        <div className='home-txt'>
            <img className='logo' src='images/img-logo.png' alt='Logo' />
            <h1>Complain Portal</h1>
            <p>Complain registration is the process of logging and monitoring bugs or errors during software testing. 
            It is also referred to as defect tracking or issue tracking. Large systems may have hundreds or 
            thousands of defects. Each needs to be evaluated, monitored and prioritized for debugging.</p>
            <button className='start-btn' onClick={() => navigate('/login')}>Get Started 
               <i class="fa fa-chevron-right" aria-hidden="true"></i></button>
        </div>
        <div className='home-img'>
            <img className='image-home' src='images/image-5.jpg' alt='Logo' />
        </div>
    </div>
  )
}

export default HomePage