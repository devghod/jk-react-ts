import { useEffect, useState } from 'react'
import AdsCarousel from '../components/AdsCarousel'
import NotificationBell from '../components/NotificationBell'
import Filter from '../components/Filter'
import GameList from '../components/game/GameList'

const Casino = () => {
  const [message, setMessage] = useState<string | null>(null)
  const [filter, setFilter] = useState<string | ''>('')
  const [search, setSearch] = useState<string | ''>('')

  useEffect(() => setMessage('!FELICIDADES artxxxxipa! GANADOR DESTACADO'), [])

  const handleFilter = (data: string) => {
    setFilter(data)
  }

  const handleSearch = (data: string) => {
    setSearch(data)
  }

  return (
    <div className='bg-white'>
      <AdsCarousel />
      {message && <NotificationBell message={message} />}
      <Filter handleFiltered={handleFilter} handleSearch={handleSearch} />
      <GameList filtered={filter} search={search} />
    </div>
  )
}

export default Casino
