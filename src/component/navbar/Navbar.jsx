import React from 'react'
import Search from '../search/Search'

const Navbar = () => {
  return (
    <div className='max-w-7xl w-full h-20 shadow-lg bg-red-500 flex align-middle'>
      <h1>Fitt..</h1>
      <div className='w-3/4 h-20 border- border-black '>
        <Search  />
      </div>
      
    </div>
  )
}

export default Navbar
