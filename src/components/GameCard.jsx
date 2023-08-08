import React from 'react'
import '../styles/GameCard.css'

const GameCard = ({ background_image, name, rating, released }) => {
  return (
    <article className='col-3 p-0 text-center'>
      <div className='ratio ratio-16x9'>
        <img src={background_image} alt="" className='img-fluid'/>
      </div>
      <div className='row'>
        <p className='fw-bold mb-0'>{name} | {rating}</p>
        <p>Released: {released}</p>
      </div>
    </article>
  )
}

export default GameCard