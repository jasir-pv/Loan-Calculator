
import { Route, Routes } from 'react-router-dom'
import './App.css'
import LoanCalculator from './pages/Home'
import Home from './pages/Home'
import About from './pages/About'
import Exchange from './pages/Exchange'


function App() {
 

  return (
    <div className='overflow-hidden'>
   
   <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/exchange" element={<Exchange />} />
    </Routes>
    </div>
  )
}

export default App
