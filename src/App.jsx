import { Route, Routes } from 'react-router-dom'
import './App.scss'
import HomePage from './pages/HomePage'
import TargetPage from './pages/TargetPage'
import CharityPage from './pages/CharityPage'
import ErrorPage from './pages/ErrorPage'
import ProfilePage from './pages/ProfilePage'
import CartPage from './pages/CartPage'


function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/target' element={<TargetPage/>}/>
      <Route path='/charity' element={<CharityPage/>}/>
      <Route path='/profile' element={<ProfilePage/>}/>
      <Route path='/cart' element={<CartPage/>}/>
      <Route path='*' element={<ErrorPage/>}/>
    </Routes>
    </>
  )
}

export default App
