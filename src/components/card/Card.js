import React from 'react'
import "./card.css"
import {Link} from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { setExerciseDetails } from '../../app/features/exercisesSlice'


const Card = ({exercise}) => {
   const dispatch= useDispatch()
   const handleExercise=()=>{
      dispatch(setExerciseDetails(exercise))
   }
  return (
   <Link to={`/exercise/${exercise.id}`}>
    <div className='card' onClick={handleExercise}>
     <div>
        <img src={exercise.gifUrl} alt='exercise' loading='lazy' />
     </div>
        <h4>{exercise.name}</h4>
     <div className='badges'>
        <span>{exercise.bodyPart} </span>
        <span>{exercise.target}</span>
     </div>
    </div>
   </Link>
  )
}

export default Card