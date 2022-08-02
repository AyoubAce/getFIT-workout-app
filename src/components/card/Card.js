import React from "react";
import "./card.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setExerciseDetails } from "../../app/features/exercisesSlice";
import { setCollection } from "../../app/features/collectionSlice";

const Card = ({ exercise }) => {
  const dispatch = useDispatch()
  const collection= useSelector(state=>state.collection.collection)
  let existing=collection.find(id=>id===exercise.id)
  
  const handleExercise = () => {
    dispatch(setExerciseDetails(exercise));
  };
  const handleCollection=()=>{
    dispatch(setCollection(exercise.id))
  }
  
  // //check local storage for favorite exercises
  // const storage = JSON.parse(localStorage.getItem("myExercises")) || [];
  // let existing = storage.find((id) => id === exercise.id);
  // const [state, setState] = useState(false);
  // const favoriteExercises = () => {
  //   if (existing) {
  //     let updatedStorage = storage.filter((id) => id !== exercise.id);
  //     localStorage.setItem("myExercises", JSON.stringify(updatedStorage));
  //   } else {
  //     localStorage.setItem(
  //       "myExercises",
  //       JSON.stringify([...storage, exercise.id])
  //     );
  //   }
  //   //re-render the card.
  //   setState(!state);
  // };
  return (
    <div className="card-container">
      <Link to={`/exercise/${exercise.id}`}>
        <div className="card">
          <div onClick={handleExercise}>
            <img src={exercise.gifUrl} alt="exercise" loading="lazy" />
          </div>
          <h4>{exercise.name}</h4>
          <div className="badges">
            <span>{exercise.bodyPart} </span>
            <span>{exercise.target}</span>
          </div>
        </div>
      </Link>
      <div className="favorite" data-hover={existing ? "remove from collection":"add to collection"}>
      <svg
        viewBox="0 0 139 131"  
        xmlns="http://www.w3.org/2000/svg"
        onClick={handleCollection}
      >
        <path
          d="M69.5 1.01297L92.077 40.7922L92.1897 40.9908L92.4136 41.0357L137.479 50.0658L106.367 83.6749L106.211 83.8438L106.237 84.0724L111.515 129.428L69.7069 110.425L69.5 110.331L69.2931 110.425L27.4845 129.428L32.7628 84.0724L32.7894 83.8438L32.6331 83.6749L1.52132 50.0658L46.5864 41.0357L46.8103 40.9908L46.9231 40.7922L69.5 1.01297Z"
          fill={existing ? "rgba(255,255,255,0.8)" : "rgba(63, 51, 81,0.65)"}
          stroke="white"
        />
      </svg>
      </div>
    </div>
  );
};

export default Card;
