import { useMemo } from 'react'
import { useFavoriteStore } from '../../stores/favoriteStore'
import { useGameStore } from '../../stores/gameStore'
import FavoriteListItem from './FavoriteListItem'

const FavoriteList = () => {
  const { favorites } = useFavoriteStore()
  const { games, isLoading } = useGameStore()

  const filteredGames = useMemo(() => {
    return games.filter(game => favorites.includes(game.id))
  }, [favorites, games])

  return (
    <div className='py-4'>
      {isLoading && (
        <div className='grid grid-cols-3 gap-4 animate-pulse mt-2 mx-4'>
          <div className='h-24 bg-gray-300 rounded-lg'></div>
          <div className='h-24 bg-gray-300 rounded-lg'></div>
          <div className='h-24 bg-gray-300 rounded-lg'></div>
          <div className='h-24 bg-gray-300 rounded-lg'></div>
          <div className='h-24 bg-gray-300 rounded-lg'></div>
          <div className='h-24 bg-gray-300 rounded-lg'></div>
        </div>
      )}
      {!isLoading && games.length === 0 && (
        <div className='text-center text-slate-500 my-2 py-2 h-full'>
          No data
        </div>
      )}
      {!isLoading && (
        <div className='grid grid-cols-3 gap-4 mt-2 mx-4'>
          {filteredGames?.map((game, index) => (
            <FavoriteListItem data={game} key={index} />
          ))}
        </div>
      )}
    </div>
  )
}

export default FavoriteList
