import React from 'react'
import axios from 'axios'
import { API_KEY, BASE_URL, config } from '../utils/utils'
import { useMemo  } from 'react'
import GameCard from '../components/GameCard'
import { useInfiniteQuery } from '@tanstack/react-query';

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

  const visibleGames = useMemo(() => data ? data.pages.flatMap((page) => page.games) : [], [data])

  return (
    <div className='container'>
      <div className='row justify-content-center gap-3 mb-3'>
        {visibleGames.map((game) => (<GameCard key={game.id} {...game} />))}
      </div>
      <div className='d-flex justify-content-center align-items-center'>
        {isLoading && <strong>Cargando...</strong>}
        {!isLoading && <button className='btn btn-secondary mb-3' onClick={fetchNextPage}>Cargar más</button>}
      </div>
    </div>
  )
}

export default GamesList