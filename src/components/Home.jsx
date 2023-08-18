import React from 'react'
import Navigation from './Navigation'
import '../styles/Home.css'
import Footer from './Footer'

const Home = () => {
  return (
    <div className='homeContainer d-flex flex-column justify-content-between'>
      <Navigation />
      {/* <div className='container text-center'>
        <h1 className='text-light'>Sitio creado por Agustin Martinez</h1>
      </div> */}
      <Footer />
    </div>
    
    
  )
}

export default Home