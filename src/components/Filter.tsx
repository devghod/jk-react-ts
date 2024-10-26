import React, { useMemo, useState } from 'react'
import { FaSearch, FaFire } from 'react-icons/fa'
import {
  NewIcon,
  JackpotIcon,
  LiveIcon,
  SlotsIcon,
  CloseIcon,
} from '../utils/iconHelper'
import { RiMenuSearchLine } from 'react-icons/ri'
import { LiaSearchSolid } from 'react-icons/lia'
import { useProviderStore } from '../stores/providerStore'

type TFilter = {
  handleFiltered: (data: string) => void
  handleSearch: (data: string) => void
}

const Filter = (props: TFilter) => {
  const {
    getProviders,
    providers,
    isLoading: providerLoading,
  } = useProviderStore()
  const { handleFiltered, handleSearch } = props
  const [filter, setFilter] = useState<string | ''>('')
  const [showProviders, setShowProviders] = useState<boolean>(false)

  const isFilteredBy = (value: string) => filter === value
  const handleFilter = (value: string) => {
    setFilter(value)
    handleFiltered(value)
  }

  const handleSearching = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    handleSearch(value)
  }

  const handleGetProviders = () => {
    setShowProviders(true)
    getProviders()
  }

  const filterByProvider = (provider: string) => {
    setShowProviders(false)
    handleFiltered('provider')
    handleSearch(provider)
  }

  const filteredProviders = useMemo(() => providers, [providers])

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
          <button
            onClick={handleGetProviders}
            className='border p-2 rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500'
          >
            <RiMenuSearchLine />
          </button>
        </div>
      )}
      {showProviders && (
        <div className='relative z-20 transition ease-in-out duration-300'>
          <div className='fixed inset-0 bg-black bg-opacity-50'>
            <div className='fixed bottom-0 left-0 right-0'>
              <div className='bg-white w-full h-72'>
                <div className='flex bg-sky-500 justify-between p-2 border-b'>
                  <div className='text-slate-100 text-sm content-center'>
                    Filter by Providers
                  </div>
                  <button
                    onClick={() => setShowProviders(false)}
                    className='border p-1 rounded-lg text-red-300 border-red-300'
                  >
                    <CloseIcon />
                  </button>
                </div>
                <div className=''>
                  {providerLoading && (
                    <div className='grid grid-cols-2 gap-2 animate-pulse mt-2 mx-2'>
                      <div className='h-10 bg-gray-300 rounded-lg'></div>
                      <div className='h-10 bg-gray-300 rounded-lg'></div>
                      <div className='h-10 bg-gray-300 rounded-lg'></div>
                      <div className='h-10 bg-gray-300 rounded-lg'></div>
                      <div className='h-10 bg-gray-300 rounded-lg'></div>
                      <div className='h-10 bg-gray-300 rounded-lg'></div>
                      <div className='h-10 bg-gray-300 rounded-lg'></div>
                      <div className='h-10 bg-gray-300 rounded-lg'></div>
                      <div className='h-10 bg-gray-300 rounded-lg'></div>
                      <div className='h-10 bg-gray-300 rounded-lg'></div>
                      <div className='h-10 bg-gray-300 rounded-lg'></div>
                      <div className='h-10 bg-gray-300 rounded-lg'></div>
                    </div>
                  )}
                  {!providerLoading && filteredProviders.length === 0 && (
                    <div className='text-center text-slate-500 my-2 py-2 h-full'>
                      No data
                    </div>
                  )}
                  {!providerLoading && (
                    <div className='grid grid-cols-2 gap-4 mt-3 mx-4 h-52 overflow-auto'>
                      {filteredProviders.map((provider, index) => (
                        <button
                          onClick={() => filterByProvider(provider.name)}
                          key={index}
                          className='bg-gray-100 h-10 rounded-lg text-slate-500 hover:bg-gray-200 hover:text-slate-600'
                        >
                          {provider.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Filter
