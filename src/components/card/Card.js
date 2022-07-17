import React from 'react'
import "./card.css"

const Card = ({exercise}) => {
  return (
    <div className='card'>
     <div>
        <img src={exercise.gifUrl} alt='exercise' loading='lazy' />
     </div>
        <h4>{exercise.name}</h4>
     <div className='badges'>
        <span>{exercise.bodyPart} </span>
        <span>{exercise.target}</span>
     </div>
    </div>
  )
}

export default Card