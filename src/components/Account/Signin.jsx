import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import "./account.scss"
import { Link } from 'react-router-dom';
import "../Responsive/Responsive.scss"

const Signin = () => {

  const[email, setEmail]=useState("");
  const[password, setPassword]=useState("")
  const[data, setData]=useState([])
  const navigate = useNavigate()

  useEffect(()=>{
    axios.get("https://food-recipe-details.herokuapp.com/userdetailss")
    .then((res)=>{
      setData(res.data)
    })
  }, [data])


  const handleLogin = ()=>{
    data.map((e)=>{
      if(e.email === email && e.password === password){
        navigate("/")
        localStorage.setItem("name", JSON.stringify(e.name))
        localStorage.setItem("email", JSON.stringify(email))
      }else{
        console.log("Wrong Credentials...!")
      }
    })
  }


  return (
    <div className="signin">
      <div>
        <h1>SIGNIN</h1>
        <input 
          type="email" 
          id="email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          placeholder="Enter Email" 
        />
        <br />
        <input 
          type="password" 
          id="password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          placeholder="Enter Password" 
        />
        <br />
        <button onClick={handleLogin}>Submit</button>
        <div>New User, <Link to="/signup" style={{color:"gray"}}>Click Here</Link></div>
      </div>
    </div>
  );
};


export default Signin