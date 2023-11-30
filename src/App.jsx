import Home from './components/routes/home/Home'
import { Route, Routes } from 'react-router-dom'
import SignIn from './components/routes/sign-in/Sign-in'
import Navigation from './components/routes/navigation/Navigation'


function App() {
  
    return (
      <>
      <Navigation />
      <Routes>
      <Route path='/' index element={<Home />} />
      <Route path='/sign-in' element={<SignIn/>} />
    </Routes>
      </>
  )
}

export default App
