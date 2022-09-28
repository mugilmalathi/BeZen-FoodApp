import axios from "axios";
import React, { useState } from "react";
import "./Home.scss";
import "../Responsive/Responsive.scss"

const AddRecipe = () => {
  const [data, setData] = useState({
    name: "",
    img: "",
    desc: "",
    ingredients: "",
    steps: "",
  });

  const handleSubmit = (e) => {
    axios.post("https://food-recipe-details.herokuapp.com/food", data)
    .then(() => {
      setData({
        name: "",
        img: "",
        desc: "",
        ingredients: "",
        steps: "",
      });
    });
    alert("You have Successfully added Food Recipe")
  };

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
        <h1>ADD YOUR OWN RECIPE</h1>
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
        <button onClick={()=>{
            handleSubmit(data)
        }}>Submit</button>
      </div>
    </div>
  );
};

export default AddRecipe;
