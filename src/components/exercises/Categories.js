import React, { useRef } from "react";
import arrow from "../../assets/arrow.svg";
import { useSelector } from "react-redux";

const Categories = () => {
    //more than 1327 exercise
    const exercises=useSelector(state=>state.data.exercises)
 
    //get body parts by removing duplicates 
    const bodyParts= new Set(exercises?.map(item=>item.bodyPart));


    const categories = useRef();
    const leftArrow = useRef();
    const rightArrow = useRef();
    const handleScrollRight = () => {
      categories.current.scrollTo({
        left:
          categories.current.offsetWidth +
          categories.current.scrollLeft,
        behavior: "smooth",
      });
    };
    const handleScrollLeft=()=>{
      categories.current.scrollTo({
        left:categories.current.scrollLeft-categories.current.offsetWidth,
        behavior:'smooth'
      })
    }
  return (
    <div className="categories-container">
    <h4>Body Parts</h4>
    <img
        ref={leftArrow}
        src={arrow}
        alt="arrow-left"
        className="arrow arrow-left"
        onClick={handleScrollLeft}
      />
      <img
        ref={rightArrow}
        src={arrow}
        alt="arrow-right"
        className="arrow arrow-right"
        onClick={handleScrollRight}
      />
    <div ref={categories} className="categories">
     {["all",...bodyParts]?.map((item,index)=>{
        return <span key={index}>{item}</span>
     })}
    </div>
  </div>
  )
}

export default Categories