import React from 'react'
import { Route, Routes } from 'react-router'
import Signup from '../Account/Signup'
import Footer from '../Footer/Footer'
import AddRecipe from '../Home/AddRecipe'
import Home from '../Home/Home'
import UpdateData from '../Home/UpdateData'
import Navbar from '../Navbar/Navbar'

const AllRoutes = () => {
  return (
    <div>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/update" element={<UpdateData />} />
            <Route path="/add" element={<AddRecipe />} />
            <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
    </div>
  )
}

export default AllRoutes