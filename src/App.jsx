import { useState } from 'react'
import './App.css'
import Home from './component/home/Home'
import Navbar from './component/navbar/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full h-7'>
      <Navbar />
      <Home />
    </div>
  )
}

export default App
