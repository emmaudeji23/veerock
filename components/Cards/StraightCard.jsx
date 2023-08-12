import React from 'react'

const StraightCard = ({icon, text}) => {
  return (
    <div className='flex gap-4 items-center'>
        <div>{icon}</div>
        <p className="text-xl">
            {text}
        </p>
    </div>
  )
}

export default StraightCard