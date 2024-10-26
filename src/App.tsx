import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Link } from 'react-router-dom'

function App() {
  return (
    <div className='fixed flex items-center justify-center inset-0'>
      <div className='text-center '>
        <div className='flex justify-center'>
          <a href='https://vite.dev' target='_blank'>
            <img src={viteLogo} className='logo' alt='Vite logo' />
          </a>
          <a href='https://react.dev' target='_blank'>
            <img src={reactLogo} className='logo react' alt='React logo' />
          </a>
        </div>
        <h1>Vite + React + Typescript</h1>
        <br />
        <p className=''>
          <Link className='border p-1 text-sm rounded' to='/dashboard'>
            Proceed to the game
          </Link>
        </p>
      </div>
    </div>
  )
}

export default App
