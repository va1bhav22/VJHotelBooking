import React from 'react'
import Featured from '../Components/Featured/Featured'
import FeaturedProperties from '../Components/FeaturedProperties/FeaturedProperties'
import Header from '../Components/Header/Header'
import MailList from '../Components/MailList/MailList'
import Navbar from '../Components/Navbar'
import PropertyList from '../Components/PropertyList/propertyList'
import "./Home.css"
const Home = () => {
  return (
    <div>
      <Navbar/>
    <Header/>
    <div className="homeContainer">
      <Featured/>
      <h1 className="homeTitle">Browse by property type</h1>
      <PropertyList/>
      <h1 className="homeTitle">Home Guests Love</h1>
      <FeaturedProperties/>
      <MailList/>
    </div>
    </div>
  )
}

export default Home