import React from 'react'
import { useNavigate } from 'react-router-dom'
import phoneimg from '../Pictures/phone.png'

function InfoPageNav() {

const navigate = useNavigate()
  return (
    
    <div className="ContactInfo">
    <div className="nav">
    <div className="technology" onClick={()=>{
            navigate('/contact');
        }}>contactInfo</div>
        <div className="technology" onClick={()=>{
            navigate('/technology');
        }}> Technologies </div>
        <div className="technology" onClick={()=>{
            navigate ('/resume');
        }}>Resume </div>
            <div className="technology" onClick={()=>{
              navigate ('/projects');
        }}>Projects </div>
        
    </div>
</div>
  )

}

export default InfoPageNav

