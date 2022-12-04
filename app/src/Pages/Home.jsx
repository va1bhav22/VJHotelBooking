import React from 'react'
import Featured from '../Components/Featured/Featured'
import Header from '../Components/Header/Header'
import Navbar from '../Components/Navbar'
import "./Home.css"
const Home = () => {
  return (
    <div>
      <Navbar/>
    <Header/>
    <div className="homeContainer">
      <Featured/>
      
    </div>
    </div>
  )
}

export default Home