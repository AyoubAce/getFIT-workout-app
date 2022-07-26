import React from "react";
import Categories from "./Categories";
import "./exercises.css";
import SearchExercise from "./SearchExercise";
import { useSelector, useDispatch } from "react-redux/es/exports";
import Card from "../card/Card";
import ReactPaginate from "react-paginate";
import { setShowExercises } from "../../app/features/exercisesSlice";


const Exercises = () => {
  const dispatch= useDispatch()
  const exercises= useSelector(state=>state.data.exercises)
  const showExercises= useSelector(state=>state.data.showExercises)

  const handlePageChange=(data)=>{
    dispatch(setShowExercises(exercises.slice(data.selected*10, (data.selected*10)+10)))
  }
  return (
    <section className="exercises-section" id="exercises">
      <h2>
        READY TO <span>get FIT!</span>
      </h2>
      <SearchExercise />
      <Categories/>
      <div className="exercises">
      <h3>Exercises</h3>
      <div className="exercises-wrapper">
      {showExercises?.map((item,index)=>{
        return <Card exercise={item} key={index}/>
      })
      }
      {/*  <div>Sorry we can't show any exercises today! Go jogging</div> */}
      </div>
      <div className="pagination-container">
      {
        exercises.length > 10 && <ReactPaginate
        previousLabel="<"
        nextLabel=">"
        containerClassName="pagination"
        activeClassName="active"
        pageClassName="page-item"
        previousClassName="page-item"
        nextClassName="page-item"
        breakLabel="..."
        breakClassName="page-link"
        pageCount={Math.floor(exercises.length/10)+1}
        onPageChange={handlePageChange}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        />
        
      }
      </div>
      </div>
    </section>
  );
};

export default Exercises;
