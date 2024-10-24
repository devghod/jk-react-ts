import React, { useState } from 'react'
import { FaSearch, FaFire } from 'react-icons/fa'
import { NewIcon, JackpotIcon, LiveIcon, SlotsIcon } from '../utils/iconHelper'
import { RiMenuSearchLine } from 'react-icons/ri'
import { LiaSearchSolid } from 'react-icons/lia'

type TFilter = {
  handleFiltered: (data: string) => void
  handleSearch: (data: string) => void
}

const Filter = (props: TFilter) => {
  const { handleFiltered, handleSearch } = props
  const [filter, setFilter] = useState<string | ''>('')

  const isFilteredBy = (value: string) => filter === value
  const handleFilter = (value: string) => {
    setFilter(value)
    handleFiltered(value)
  }

  const handleSearching = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    handleSearch(value)
  }

  return (
    <div className='mx-4'>
      <div className='w-full grid grid-cols-6 text-slate-500'>
        <button
          onClick={() => handleFilter('search')}
          className={`uppercase text-center hover:bg-slate-100 hover:text-sky-400 p-1
            ${isFilteredBy('search') && 'bg-slate-200 text-sky-500 font-semibold border-b-2 border-sky-500'}`}
        >
          <div className='justify-self-center mb-2'>
            <FaSearch />
          </div>
          <div className='text-xs tracking-wide'>Search</div>
        </button>
        <button
          onClick={() => handleFilter('start')}
          className={`uppercase text-center hover:bg-slate-100 hover:text-sky-400 p-1
            ${isFilteredBy('start') && 'bg-slate-200 text-sky-500 font-semibold border-b-2 border-sky-500'}`}
        >
          <div className='justify-self-center mb-2'>
            <FaFire />
          </div>
          <div className='text-xs tracking-wide'>Start</div>
        </button>
        <button
          onClick={() => handleFilter('new')}
          className={`uppercase text-center hover:bg-slate-100 hover:text-sky-400 p-1
            ${isFilteredBy('new') && 'bg-slate-200 text-sky-500 font-semibold border-b-2 border-sky-500'}`}
        >
          <div className='justify-self-center mb-2'>
            <NewIcon />
          </div>
          <div className='text-xs tracking-wide'>New</div>
        </button>
        <button
          onClick={() => handleFilter('slots')}
          className={`uppercase text-center hover:bg-slate-100 hover:text-sky-400 p-1
            ${isFilteredBy('slots') && 'bg-slate-200 text-sky-500 font-semibold border-b-2 border-sky-500'}`}
        >
          <div className='justify-self-center mb-2'>
            <SlotsIcon />
          </div>
          <div className='text-xs tracking-wide'>Slots</div>
        </button>
        <button
          onClick={() => handleFilter('live')}
          className={`uppercase text-center hover:bg-slate-100 hover:text-sky-400 p-1
            ${isFilteredBy('live') && 'bg-slate-200 text-sky-500 font-semibold border-b-2 border-sky-500'}`}
        >
          <div className='justify-self-center mb-2'>
            <LiveIcon />
          </div>
          <div className='text-xs tracking-wide'>Live</div>
        </button>
        <button
          onClick={() => handleFilter('jackpot')}
          className={`uppercase text-center hover:bg-slate-100 hover:text-sky-400 p-1
            ${isFilteredBy('jackpot') && 'bg-slate-200 text-sky-500 font-semibold border-b-2 border-sky-500'}`}
        >
          <div className='justify-self-center mb-2'>
            <JackpotIcon />
          </div>
          <div className='text-xs tracking-wide'>Jackpot</div>
        </button>
      </div>
      {filter === 'search' && (
        <div className='w-full flex space-x-1 mb-5 mt-2'>
          <div className='relative w-full'>
            <div className='absolute inset-y-0 left-0 flex items-center pl-3'>
              <LiaSearchSolid className='self-center' />
            </div>
            <input
              onChange={e => handleSearching(e)}
              className='w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500'
              placeholder='Search here'
            />
          </div>
          <button className='border p-2 rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500'>
            <RiMenuSearchLine />
          </button>
        </div>
      )}
    </div>
  )
}

export default Filter
