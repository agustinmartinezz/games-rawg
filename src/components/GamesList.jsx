import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { API_KEY, BASE_URL, config } from '../utils/utils'
import { useMemo  } from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import GameCard from '../components/GameCard'
import { useInfiniteQuery } from '@tanstack/react-query';
import GameDetail from './GameDetail'

const fetchGames = async ({ pageParam }) => {
  try {
    let res = ""

    if (pageParam) {
      res = await axios.get(pageParam,{ config })
    } else {
      res = await axios.get(BASE_URL + 'games',{
        params:{
          key: API_KEY,
          page_size: 21
        },
        config : config
      })
    }

    return {
      games: res.data.results,
      nextFetch: res.data.next
    }
  } catch (error) {
    console.log(error)
  }
}

function GamesList() {
  const { isLoading, isError, data, fetchNextPage } = useInfiniteQuery(
    ['games'],
    fetchGames,
    {
      getNextPageParam: (lastPage, pages) => lastPage.nextFetch
    }
  )

  const [modalState, setModalState] = useState(false)

  const visibleGames = useMemo(() => data ? data.pages.flatMap((page) => page.games) : [], [data])

  return (
    <>
      <Navigation />
      <div className='container mt-3'>
        <GameDetail setModalState={setModalState} modalState={modalState} />
        <div className='row justify-content-center gap-3 mb-3'>
          {
          !isLoading ? visibleGames.map((game) => (<GameCard key={game.id} {...game} setModalState={setModalState} />)) 
          :
          Array.from({ length: 21 }, (_, index) => (
            <GameCard key={index} setModalState={setModalState}/>
          ))
          }
        </div>
        <div className='d-flex flex-column justify-content-center align-items-center'>
          {!isLoading && <button className='btn btn-dark mb-3' onClick={fetchNextPage}>Cargar más</button>}
        </div>
      </div>
      <Footer />
    </>
    
  )
}

export default GamesList