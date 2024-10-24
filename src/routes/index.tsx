import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const Dashboard = lazy(() => import('../components/dashboard/Dashboard'))
const ErrorPage = lazy(() => import('../error-page'))
const Sports = lazy(() => import('../pages/sports'))
const Favorite = lazy(() => import('../pages/favorite'))
const Invite = lazy(() => import('../pages/invite'))
const Casino = lazy(() => import('../pages/casino'))
const Cashier = lazy(() => import('../pages/cashier'))
const Landing = lazy(() => import('../App'))
const SuspenseLoader = lazy(() => import('../components/SuspenseLoader'))

const Routers = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<SuspenseLoader />}>
        <Routes>
          <Route index element={<Landing />} />
          <Route path='/dashboard' element={<Dashboard />}>
            <Route index element={<Sports />} />
            <Route path='favorite' element={<Favorite />} />
            <Route path='casino' element={<Casino />} />
            <Route path='invite' element={<Invite />} />
            <Route path='cashier' element={<Cashier />} />
          </Route>
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default Routers
