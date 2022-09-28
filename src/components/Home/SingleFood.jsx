import React from 'react'
import "./Home.scss"
import "../Responsive/Responsive.scss"

const SingleFood = () => {

  const singleFood = JSON.parse(localStorage.getItem("singleFood")) || []

  return (
    <div className='singlefood'>
      <img className='simg' src={singleFood.img} alt="" />
      <div className='sname'>{singleFood.name}</div>
      <div className='sdesc'>{singleFood.desc}</div>
      <div className='singr'>{singleFood.ingredients}</div>
      <div className='sstep'>{singleFood.steps}</div>

    </div>
  )
}

export default SingleFood