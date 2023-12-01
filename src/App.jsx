import Home from './components/routes/home/Home'
import { Route, Routes } from 'react-router-dom'
import SignIn from './components/routes/sign-in/Sign-in'
import Navigation from './components/routes/navigation/Navigation'
import Shop from './components/shop/Shop'
import ViewCategory from './components/view-category/ViewCategory'


function App() {
  
    return (
      <>
      <Navigation />
      <Routes>
      <Route path='/' index element={<Home />} />
      <Route path='/sign-in' element={<SignIn/>} />
      <Route path='/shop' element={<Shop/>} />
      <Route path='/shop/:category' element={<ViewCategory />} />    
    </Routes>
      </>
  )
}

export default App
