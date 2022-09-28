import React, { useEffect, useState } from 'react'
import "../Responsive/Responsive.scss"

const UpdateData = () => {

  const[data,setData]=useState([])
  const[name,setName]=useState("")
  const[img,setImg]=useState("")
  const[desc,setDesc]=useState("")
  const[ing,setIng]=useState("")
  const[step,setStep]=useState("")
  const id = JSON.parse(localStorage.getItem("foodID"))

  useEffect(()=>{
    getData()
  }, [])

  const getData = ()=>{
    fetch("https://food-recipe-details.herokuapp.com/food")
    .then((result)=>{
      result.json().then((res)=>{
        setData(res)
        setName(res.name)
        setImg(res.img)
        setDesc(res.desc)
        setIng(res.ing)
        setStep(res.step)
      })
    })
  }
 
  const handleSubmit = ()=>{
    let item = {name, img, desc, ing, step}
    fetch(`https://food-recipe-details.herokuapp.com/food/${id}`,{
            method: 'PUT',
            headers: {
              'Accept':'application/json',
              'Content-Type':'application/json'
            },
            body:JSON.stringyfy(item)
        }).then((result)=>{
            result.json()
            .then(() => {
              getData()
            });
        })   
  }

  return (
    <div className="add">
      <div>
        <h1>UPDATE RECIPE</h1>
        <input 
          type="text" 
          id="name"
          onChange={(e)=>setName(e.target.value)}
          value={name}
          placeholder="Enter Name of the recipe.." 
        />
        <br />
        <input 
          type="text" 
          id="img"
          onChange={(e)=>setImg(e.target.value)}
          value={img}
          placeholder="Enter Image URL" 
        />
        <br />
        <input 
          type="text" 
          id="desc"
          onChange={(e)=>setDesc(e.target.value)}
          value={desc}
          placeholder="Enter Food Description.." 
        />
        <br />
        <input 
          type="text" 
          id="ingredients"
          onChange={(e)=>setIng(e.target.value)}
          value={ing}
          placeholder="Enter Food Incredients" 
        />
        <br />
        <textarea
          cols="30"
          rows="10"
          id="steps"
          onChange={(e)=>setStep(e.target.value)}
          value={step}
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