import React from 'react'
import '../styles/GameCard.css'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import StarRating from './StarRating'

const prueba = () => {console.log("PRUEBA")}

const GameCard = ({ background_image, name, rating, released }) => {
  return (
    <article className='col-3 p-0 text-center text-light' onClick={prueba}>
      {name ?
        <>
          <div className='ratio ratio-16x9'>
            <img src={background_image} alt="" className='img-fluid'/>
          </div>
          <div className='row'>
            <p className='fw-bold mb-0'>{name}</p>
            <StarRating rating={rating} />
            <p>Released: {released}</p>
          </div>  
        </>
      :
        <div className='skeletonGameCard'>
          <Skeleton height={"15vh"} borderRadius={"1rem"} line/>
          <Skeleton width={"50%"}/>
          <Skeleton width={"25%"}/>
          <Skeleton width={"25%"}/>
        </div>
      }
    </article>
  )
}

export default GameCard