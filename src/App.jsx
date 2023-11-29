import Home from './components/routes/home/Home'
import { Route, Routes } from 'react-router-dom'

function App() {
  
    return (
      <Routes>
      <Route path='/' index element={<Home />} />
    </Routes>
  )
}

export default App
