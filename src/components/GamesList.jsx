import React from 'react'
import axios from 'axios'
import { API_KEY, BASE_URL } from '../utils/utils'
import { useEffect } from 'react'
import GameCard from '../components/GameCard'
import { useDispatch, useSelector } from 'react-redux'
import { firstPage, nextPage, previousPage, setGames, updateVisibles } from '../features/gamesSlice'

const GamesList = () => {
  const config = {
    headers: {"Content-type": 'application/json'}
  }

  const loadedGames = useSelector(state => state.games.loadedGames)
  const visibleGames = useSelector(state => state.games.visibleGames)
  const pageSize = useSelector(state => state.games.pageSize)
  const currentPage = useSelector(state => state.games.currentPage)
  
  const dispatch = useDispatch()

  const getGames = async () => {
    try {
      console.log(loadedGames)
      if (loadedGames.length < pageSize * currentPage) {
        await axios.get(BASE_URL + 'games',{
          params:{
            key: API_KEY,
            page: currentPage,
            page_size: pageSize
          },
          config : config
        })
        .then((res)=> {
          dispatch(setGames(res.data.results))
          
        })
        .catch((error) => {
          console.log(error)
        })
      } else {
        console.log("ENTRE AL ELSE")
        dispatch(updateVisibles())
      }
    } catch {

    }
  }

  useEffect(() => {
    getGames()
  }, [currentPage])

  const paginaPrimera = () => {dispatch(firstPage())}
  const paginaAnterior = () => {dispatch(previousPage())}
  const paginaSiguiente = () => {dispatch(nextPage())}

  return (
    <div className='container'>
      <div className='row justify-content-center gap-3 mb-3'>
        {visibleGames.map((game) => (<GameCard key={game.id} {...game} />))}
      </div>
      <div className='d-flex justify-content-center align-items-center'>
        <button className='btn' onClick={paginaPrimera}><i className="bi bi-caret-left-fill" style={{ fontSize: 25 }} /></button>
        <button className='btn' onClick={paginaAnterior}><i className="bi bi-caret-left" style={{ fontSize: 25 }} /></button>
        <span className='fw-bold'>{currentPage}</span>
        <button className='btn' onClick={paginaSiguiente}><i className="bi bi-caret-right" style={{ fontSize: 25 }} /></button>
      </div>
    </div>
    
  )
}

export default GamesList