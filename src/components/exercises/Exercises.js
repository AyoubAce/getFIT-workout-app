import React,{useState} from "react";
import Categories from "./Categories";
import "./exercises.css";
import SearchExercise from "./SearchExercise";
import { useSelector } from "react-redux/es/exports";
import Card from "../card/Card";


const Exercises = () => {
  const exercises= useSelector(state=>state.data.exercises)
  const [ showExercises, setShowExercises]= useState()
  let pages=1, range=[]
  if(exercises){
    let page= Math.floor(exercises.length/10)
    pages= exercises.length % 10 ===0  ? page : page+1;
    range=[...Array(pages).keys()];
  }
  return (
    <section className="exercises-section">
      <h2>
        READY TO <span>get FIT!</span>
      </h2>
      <SearchExercise />
      <Categories/>
      <div className="exercises">
      <div className="exercises-wrapper">
      {exercises ? exercises.map((item,index)=>{
        return <Card exercise={item} key={index}/>
      }): <div>Sorry we can't show any exercises today! Go jogging</div>}
      </div>

      </div>
    </section>
  );
};

export default Exercises;
