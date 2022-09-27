import React from 'react'
import "../Home/Home.scss"

const Signup = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
      });
    
      const handleSubmit = (e) => {
        axios.post("https://food-recipe-details.herokuapp.com/food", data)
        .then(() => {
          setData({
            name: "",
            email: "",
            password: ""
          });
        });
        alert("You have Successfully added Food Recipe")
      };
    
      const handleChange = (e)=>{
        const {id, value} = e.target.value;
        setData({
            ...data,
            [id]:value
        })
      }
    
      return (
        <div className="add">
          <div>
            <h1>SIGNUP</h1>
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
              id="email"
              onChange={handleChange}
              value={data.email}
              placeholder="Enter Image URL" 
            />
            <br />
            <input 
              type="text" 
              id="password"
              onChange={handleChange}
              value={data.password}
              placeholder="Enter Food Description.." 
            />
            <br />
            <button onClick={()=>{
                handleSubmit(data)
            }}>Submit</button>
          </div>
        </div>
      );
    };

export default Signup