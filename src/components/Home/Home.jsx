import React, { useEffect, useState } from 'react'
import "./Home.scss"

import { FaSearch } from "react-icons/fa";
import axios from 'axios';
import { useNavigate } from 'react-router';

const Home = () => {

    const[data, setData]=useState([])
    const navigate = useNavigate()

    useEffect(()=>{
        axios.get("https://food-recipe-details.herokuapp.com/food")
        .then((res)=>{
            setData(res.data)
        })
        .then((e)=>{
            handleDelete(e)
        })
    }, [data])

    const handleDelete = (id)=>{
        fetch(`https://food-recipe-details.herokuapp.com/food/${id}`,{
            method: 'DELETE'
        }).then((result)=>{
            result.json()
        })
    }

  return (
    <div className='home'>
        <div className='content'>
            {
                data.map((el)=>{
                    return(
                        <div className='box'>
                            <div><img src={el.img} alt="" /></div>
                            <div>{el.name}</div>
                            <div>{el.ingredients}</div>
                            <div>
                                <button onClick={()=>{
                                    navigate("/update")
                                }}>Edit</button>
                                <button onClick={()=>handleDelete(el._id)}>Delete</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Home