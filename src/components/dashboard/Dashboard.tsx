import { Outlet } from 'react-router-dom'
import { FaUser } from 'react-icons/fa'
import { IoWalletSharp } from 'react-icons/io5'
import { HiMenuAlt2 } from 'react-icons/hi'
import { currencyFormat } from '../../utils/currencyHelper'
import DashboardMenu from './DashboardMenu'
import { useFavoriteStore } from '../../stores/favoriteStore'
import Loader from '../Loader'

const Dashboard = () => {
  const { isLoading: favoriteLoading } = useFavoriteStore()

  return (
    <div className='relative'>
      <div className='fixed bottom-top left-0 right-0 shadow bg-white z-10'>
        <div className='w-full grid grid-cols-11 py-2'>
          <div className='col-span-1 justify-self-center content-center text-sky-500'>
            <button className='active:text-sky-700 mt-1'>
              <HiMenuAlt2 className='text-xl' />
            </button>
          </div>
          <div className='col-span-4 text-lg font-bold text-sky-500'>FUN88</div>
          <div className='col-span-5 font-bold flex justify-self-end items-center text-slate-500 pr-2 border-r'>
            <IoWalletSharp />
            <span className='ml-2 text-sky-500'>
              {currencyFormat({ amount: 20000.577, currency: 'USD' })}
            </span>
          </div>
          <div className='col-end-12 col-span-1 justify-self-center content-center text-sky-500'>
            <button className='active:text-sky-700 mt-1'>
              <FaUser className='rounded-full text-xl bg-slate-200' />
            </button>
          </div>
        </div>
      </div>
      <div className='py-10 bg-gray-100'>
        <Outlet />
      </div>
      <div className='fixed bottom-0 left-0 right-0 shadow-2xl z-10 bg-white border-t border-gray-100'>
        <DashboardMenu />
      </div>
      {favoriteLoading && <Loader />}
    </div>
  )
}

export default Dashboard
