import { useEffect } from 'react'
import { useFavoriteStore } from '../stores/favoriteStore'
import { FaCheckCircle } from 'react-icons/fa'

type TNotification = {
  message: string
  color: string
}

const Nofication = (props: TNotification) => {
  const { setSuccessFalse, success } = useFavoriteStore()
  const { message } = props

  useEffect(() => {
    if (success) {
      setTimeout(() => {
        setSuccessFalse()
      }, 3000)
    }
  }, [success])

  return (
    <>
      {success && (
        <div className='fixed flex items-center justify-center inset-x-0'>
          <div className='bg-green-50 p-2 rounded shadow-lg'>
            <p className='text-green-500 font-bold flex items-center'>
              <FaCheckCircle />
              <span className='ml-1'>{message}</span>
            </p>
          </div>
        </div>
      )}
    </>
  )
}

export default Nofication
