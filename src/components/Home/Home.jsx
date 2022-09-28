import React, { useContext, useEffect, useState } from "react";
import "./Home.scss";
// import { FaSearch } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router";
import Skeleton from "react-loading-skeleton";

const Home = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://food-recipe-details.herokuapp.com/food")
      .then((res) => {
        setData(res.data);
      })
      .then((e) => {
        handleDelete(e);
      });
  }, [data]);

  const handleDelete = (id) => {
    fetch(`https://food-recipe-details.herokuapp.com/food/${id}`, {
      method: "DELETE",
    }).then((result) => {
      result.json();
    });
  };

  const handleUpdate = (id) => {
    localStorage.setItem("foodID", JSON.stringify(id));
  };

  const handleSingleFood = (event) => {
    localStorage.setItem("singleFood", JSON.stringify(event));
    navigate("/singleFood");
  };

  return (
    <div className="home">
      <div className="search-main">
        <input
          className="search"
          type="text"
          placeholder="Enter Food Recipe..."
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
      <div className="content">
        {data
          ? data
              .filter((e) => e.name.toLowerCase().includes(search))
              .map((el) => {
                return (
                  <div
                    className="box"
                  >
                    <div>
                      <img 
                        src={el.img} 
                        alt="" 
                        onClick={() => {
                            handleSingleFood(el);
                        }}
                    />
                    </div>
                    <div onClick={() => {
                      handleSingleFood(el);
                    }}>{el.name}</div>
                    <div onClick={() => {
                      handleSingleFood(el);
                    }}>{el.ingredients}</div>
                    <div>
                      <button
                        onClick={() => {
                          handleUpdate(el._id);
                          navigate("/update");
                        }}
                      >
                        Edit
                      </button>
                      <button onClick={() => handleDelete(el._id)}>
                        Delete
                      </button>
                    </div>
                  </div>
                );
              })
          : [...Array(8)].map((data) => {
              return (
                <div className="box">
                  <div>
                    <Skeleton
                        circle
                    />
                  </div>
                  <div><Skeleton /></div>
                  <div><Skeleton /></div>
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default Home;
