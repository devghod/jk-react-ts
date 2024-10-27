import { memo } from 'react'
import { TGame } from '../../types/TGame'

type TFavoriteListItem = {
  data: TGame
}

const FavoriteListItem = (props: TFavoriteListItem) => {
  const { data } = props

  return (
    <div className='h-24 rounded-lg relative'>
      <img
        loading='lazy'
        src={data.imageUrl}
        className='h-24 w-full rounded-lg object-cover'
      />
      <div className='absolute inset-0 flex items-end w-full'>
        <div className='text-white bg-black bg-opacity-50 p-2 rounded-b-lg w-full truncate'>
          {data.name}
        </div>
      </div>
    </div>
  )
}

export default memo(FavoriteListItem)
