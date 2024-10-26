import { useEffect, useMemo } from 'react'
import { useGameStore } from '../../stores/gameStore'
import { useFavoriteStore } from '../../stores/favoriteStore'
import GameListItem from './GameListItem'
import Nofication from '../Notification'

type TGameList = {
  filtered: string
  search: string
  type: string
}

const GameList = (props: TGameList) => {
  const { filtered, search, type } = props
  const { games, getGames, isLoading } = useGameStore()
  const { success } = useFavoriteStore()

  useEffect(() => {
    getGames(type)
  }, [getGames, type])

  const filteredGames = useMemo(() => {
    let res
    if (filtered === 'search') {
      res = games.filter(game =>
        game.name.toLowerCase().includes(search.toLowerCase()),
      )
    } else if (filtered === 'provider') {
      res = games.filter(game =>
        game.provider.toLowerCase().includes(search.toLowerCase()),
      )
    } else {
      res = games.filter(game => game.category.toLowerCase().includes(filtered))
    }
    return res
  }, [games, filtered, search])

  return (
    <div className='pb-4 h-96 overflow-auto'>
      {isLoading && (
        <div className='grid grid-cols-3 gap-4 animate-pulse mt-2 mx-4'>
          <div className='h-24 bg-gray-300 rounded-lg'></div>
          <div className='h-24 bg-gray-300 rounded-lg'></div>
          <div className='h-24 bg-gray-300 rounded-lg'></div>
          <div className='h-24 bg-gray-300 rounded-lg'></div>
          <div className='h-24 bg-gray-300 rounded-lg'></div>
          <div className='h-24 bg-gray-300 rounded-lg'></div>
          <div className='h-24 bg-gray-300 rounded-lg'></div>
          <div className='h-24 bg-gray-300 rounded-lg'></div>
          <div className='h-24 bg-gray-300 rounded-lg'></div>
        </div>
      )}
      {!isLoading && games.length === 0 && (
        <div className='text-center text-slate-500 my-5 h-full'>No data</div>
      )}
      {!isLoading && (
        <div className='grid grid-cols-3 gap-4 mt-2 mx-4'>
          {filteredGames?.map((game, index) => (
            <GameListItem game={game} key={index} />
          ))}
        </div>
      )}
      {success && <Nofication message='Success' color='green' />}
    </div>
  )
}

export default GameList
