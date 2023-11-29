import Home from './components/routes/home/Home'
import { Route, Routes } from 'react-router-dom'
import Navigation from './components/routes/navigation/Navigation'

function App() {
  
    return (
      <Routes>
      <Route path='/' index element={<Navigation />} />
      <Route path='/home' element={<Home />} />
    </Routes>
  )
}

export default App
