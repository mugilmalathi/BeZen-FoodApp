import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "../Responsive/Responsive.scss"

const UpdateData = () => {

  const[data, setData]=useState({
    name: "",
    img: "",
    desc: "",
    ingredients: "",
    steps: "",
  })
  const id = JSON.parse(localStorage.getItem("foodID"))
 
  const handleSubmit = ()=>{
    fetch(`https://food-recipe-details.herokuapp.com/food/${id}`,{
            method: 'PATCH'
        }).then((result)=>{
            result.json()
        }).then(() => {
          setData({
            name: "",
            img: "",
            desc: "",
            ingredients: "",
            steps: "",
          });
        });
  }
  
  const handleChange = (e)=>{
    const {id, value} = e.target;
    setData({
        ...data,
        [id]:value
    })
  }

  return (
    <div className="add">
      <div>
        <h1>UPDATE RECIPE</h1>
        <input 
          type="text" 
          id="name"
          onChange={handleChange}
          value={data.name}
          placeholder="Enter Name of the recipe.." 
        />
        <br />
        <input 
          type="text" 
          id="img"
          onChange={handleChange}
          value={data.img}
          placeholder="Enter Image URL" 
        />
        <br />
        <input 
          type="text" 
          id="desc"
          onChange={handleChange}
          value={data.desc}
          placeholder="Enter Food Description.." 
        />
        <br />
        <input 
          type="text" 
          id="ingredients"
          onChange={handleChange}
          value={data.ingredients}
          placeholder="Enter Food Incredients" 
        />
        <br />
        <textarea
          cols="30"
          rows="10"
          id="steps"
          onChange={handleChange}
          value={data.steps}
          placeholder="Enter the Steps..."
        ></textarea>
        <br />
        <button 
        onClick={handleSubmit}
        >Submit</button>
      </div>
    </div>
  );
};

export default UpdateData