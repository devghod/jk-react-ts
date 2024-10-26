import { TGame } from '../../types/TGame'
import { FaStar, FaRegStar } from 'react-icons/fa'
import { useFavoriteStore } from '../../stores/favoriteStore'

type TGameListItem = {
  game: TGame
}

const GameListItem = (props: TGameListItem) => {
  const { game } = props
  const { favorites, isLoading, addFavorite, deleteFavorite } =
    useFavoriteStore()

  const isFavorite = (id: number) => {
    const res = favorites.findIndex(_id => _id === id)
    return res > -1 ? true : false
  }

  const handleFavorite = (id: number) => {
    if (isFavorite(id)) {
      deleteFavorite(id)
    } else {
      addFavorite(id)
    }
  }

  return (
    <div className='h-24 rounded-lg relative'>
      <img
        loading='lazy'
        alt={game.name}
        src={game.imageUrl}
        className='h-24 w-full rounded-lg object-cover'
      />
      <div className='absolute inset-y-1 p-2 top-0 right-0 z-10'>
        <button onClick={() => handleFavorite(game.id)} disabled={isLoading}>
          {/* <FaStar
            className={`shadow
              ${
                isFavorite(game.id)
                  ? 'text-yellow-400 hover:text-yellow-500'
                  : 'text-gray-400 hover:text-gray-500'
              }`}
          /> */}
          {isFavorite(game.id) && (
            <FaStar className='shadow text-yellow-400 hover:text-yellow-500' />
          )}
          {!isFavorite(game.id) && (
            <FaRegStar className='shadow text-gray-100 hover:text-gray-200' />
          )}
        </button>
      </div>
      <div className='absolute inset-0 flex items-end w-full'>
        <div className='text-white bg-black bg-opacity-50 p-2 rounded-b-lg w-full truncate'>
          {game.name}
        </div>
      </div>
    </div>
  )
}

export default GameListItem
