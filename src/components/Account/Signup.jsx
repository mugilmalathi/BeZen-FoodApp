import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import "./account.scss"

const Signup = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
      });
    
    const navigate = useNavigate();
    
      const handleSubmit = (e) => {
        axios.post("https://food-recipe-details.herokuapp.com/userdetailss", data)
        .then(() => {
          setData({
            name: "",
            email: "",
            password: ""
          });
        });
        // alert("You have Successfully added Food Recipe")
        navigate("/signin")
      };
    
      const handleChange = (e)=>{
        const {id, value} = e.target;
        setData({
            ...data,
            [id]:value
        })
      }
    
      return (
        <div className="signup">
          <div>
            <h1>SIGNUP</h1>
            <input 
              type="name" 
              id="name"
              onChange={handleChange}
              value={data.name}
              placeholder="Enter Name" 
            />
            <br />
            <input 
              type="email" 
              id="email"
              onChange={handleChange}
              value={data.email}
              placeholder="Enter Email" 
            />
            <br />
            <input 
              type="password" 
              id="password"
              onChange={handleChange}
              value={data.password}
              placeholder="Enter Password" 
            />
            <br />
            <button onClick={()=>{
                handleSubmit(data)
            }}>Submit</button>
            <div>Alreacy an Account <Link to="/signin" style={{color:"gray"}}>Click Here</Link></div>
          </div>
          
        </div>
      );
    };

export default Signup

//changessjksdhf nsdkfh