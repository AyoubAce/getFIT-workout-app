import React, { useEffect, useLayoutEffect } from "react";
import "./exercise-details.css";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import HorizontalScroll from "./HorizontalScroll";

const ExerciseDetails = () => {
  const mainData = useSelector((state) => state.data.database);
  let { id } = useParams();
  let exercise= mainData?.filter((item) => item.id === id)[0];
  const navigate = useNavigate();
 
  if (!exercise) {
    navigate("/notfound");
  }
  useEffect(()=>{

  },[id])
  useLayoutEffect(()=>{
   window.scrollTo({
    top:0,
    left:0,
    behavior:"smooth"
   })
  },[id])

    //similar exercises by body parts
    const similarParts = mainData?.filter(
        (item) =>
          item.target=== exercise.target &&
          item.id !== exercise.id
      );
  //similar exercises by target muscle
  const similarTargets= mainData?.filter(item=>item.equipment===exercise.equipment && item.id !== exercise.id)
  console.log("target", similarTargets);
  return (
    <section className="exercise-page">
      <h2>Consistency makes all the difference</h2>
      <div className="exercise-details">
        <div className="exercise-img">
          <img src={exercise?.gifUrl} alt="exercise" />
        </div>
        <div className="description">
          <h3>{exercise?.name}</h3>
          <table>
          <tbody>
            <tr>
              <td className="detail-name">Body part:</td>
              <td>
                {" "}
                <span>{exercise?.bodyPart}</span>
              </td>
            </tr>
            <tr>
              <td className="detail-name">Target:</td>
              <td>
                {" "}
                <span>{exercise?.target}</span>
              </td>
            </tr>
            <tr>
              <td className="detail-name">Equipment:</td>
              <td>
                {" "}
                <span>{exercise?.equipment}</span>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="similar-exercises">
      <h3>Similar <span>Target Muscle</span> Exercises</h3>
      <HorizontalScroll data={similarParts} />
      <h3>Similar <span>Equipment</span> Exercises</h3>
      <HorizontalScroll data={similarTargets}/>

      </div>
    </section>
  );
};

export default ExerciseDetails;
