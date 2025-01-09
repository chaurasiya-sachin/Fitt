import React from 'react'

const BodyPartExerciseCard = ({
    gifUrl,
    equipment,
    target,
    name,
    onClick
}) => {
  return (
    <div onClick={onClick} className='w-60 h-auto bg-gray-50 cursor-pointer border-t-2 border-red-700 flex flex-col justify-center items-center gap-4 m-4'>
        <div className='h-80 flex justify-center items-center'>
             <img  src={gifUrl} alt="" />
        </div>
        <div className='flex gap-4'>
        <p className='bg-red-500 text-sm rounded-lg py-2 px-4 text-white'>{equipment}</p>
        <p className='bg-green-600 text-sm rounded-lg py-2 px-4 text-white'>{target}</p>
        </div>
        <h2 className='font-bold'>{name}</h2>
    </div>
  )
}

export default BodyPartExerciseCard