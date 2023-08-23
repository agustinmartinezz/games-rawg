import React from 'react'
import Navigation from './Navigation'
import '../styles/Home.css'
import Footer from './Footer'

const Home = () => {
  return (
    <div className='homeContainer d-flex flex-column justify-content-between'>
      <Navigation />
      <Footer />
    </div>
    
    
  )
}

export default Home