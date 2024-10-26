import { Link, useLocation } from 'react-router-dom'
import { MdSportsBasketball } from 'react-icons/md'
import { FaStar, FaDice, FaWallet } from 'react-icons/fa'
import { IoIosPersonAdd } from 'react-icons/io'

const DashboardMenu = () => {
  const location = useLocation()
  const isActivePath = (path: string) => {
    return location.pathname.endsWith(path)
  }

  return (
    <div className='w-full grid grid-cols-5 text-slate-400'>
      <Link
        to={'/dashboard'}
        className={`uppercase text-center hover:bg-slate-100 hover:text-sky-400 px-1 py-2 font-semibold
          ${isActivePath('dashboard') && 'bg-slate-200 text-sky-500'}`}
      >
        <div className='justify-self-center mb-2'>
          <MdSportsBasketball />
        </div>
        <div className='text-xs tracking-wide'>Sports</div>
      </Link>
      <Link
        to={'favorite'}
        className={`uppercase text-center hover:bg-slate-100 hover:text-sky-400 px-1 py-2 font-semibold
          ${isActivePath('favorite') && 'bg-slate-200 text-sky-500'}`}
      >
        <div className='justify-self-center mb-2'>
          <FaStar />
        </div>
        <div className='text-xs tracking-wide'>Favorites</div>
      </Link>
      <Link
        to={'invite'}
        className={`uppercase text-center hover:bg-slate-100 hover:text-sky-400 px-1 py-2 font-semibold
          ${isActivePath('invite') && 'bg-slate-200 text-sky-500'}`}
      >
        <div className='justify-self-center mb-2'>
          <IoIosPersonAdd />
        </div>
        <div className='text-xs tracking-wide'>Invite</div>
      </Link>
      <Link
        to={'casino'}
        className={`uppercase text-center hover:bg-slate-100 hover:text-sky-400 px-1 py-2 font-semibold
          ${isActivePath('casino') && 'bg-slate-200 text-sky-500'}`}
      >
        <div className='justify-self-center mb-2'>
          <FaDice />
        </div>
        <div className='text-xs tracking-wide'>Casino Live</div>
      </Link>
      <Link
        to={'cashier'}
        className={`uppercase text-center hover:bg-slate-100 hover:text-sky-400 px-1 py-2 font-semibold
          ${isActivePath('cashier') && 'bg-slate-200 text-sky-500'}`}
      >
        <div className='justify-self-center mb-2'>
          <FaWallet />
        </div>
        <div className='text-xs tracking-wide'>Cashier</div>
      </Link>
    </div>
  )
}

export default DashboardMenu
