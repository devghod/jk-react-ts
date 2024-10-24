import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Link } from 'react-router-dom'

function App() {
  return (
    <div className=''>
      <div className='flex'>
        <a href='https://vite.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React + Typescript</h1>
      <p>
        <Link to='/dashboard'>Proceed to the game</Link>
      </p>
    </div>
  )
}

export default App
