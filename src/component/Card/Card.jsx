import React from 'react'

const Card = ({name,onClick}) => {
  return (
    <div onClick={onClick} className='w-48  h-24 flex justify-center bg-gray-100 items-center border-1 border-blue-200 hover:bg-gray-200 hover:cursor-pointer text-blue-950 text-2xl rounded-md capitalize'>
    {name}
    </div>
  )
}

export default Card