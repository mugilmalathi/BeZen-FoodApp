import React from 'react'
import "./Footer.scss"
import "../Responsive/Responsive.scss"

import { BsLinkedin } from "react-icons/bs";
import { BsGlobe } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";

const Footer = () => {

  const handleLinkedIn=()=>{
    window.open("https://www.linkedin.com/in/mugil-arasan/")
  }
  const handlePortfolio=()=>{
    window.open("https://mugilarasan-portfolio.vercel.app/#")
  }
  const handleGitHub=()=>{
    window.open("https://github.com/mugilmalathi")
  }

  return (
    <div className='footer'>
        <div>
          <BsLinkedin className='icon' onClick={handleLinkedIn}/>
          <BsGlobe className='icon' onClick={handlePortfolio}/>
          <BsGithub className='icon' onClick={handleGitHub}/>
          <BsInstagram className='icon'/>
          <BsYoutube className='icon'/>
        </div>
        <div>2022 ©Copyright Reserved by Mugilarasan</div>
    </div>
  )
}

export default Footer