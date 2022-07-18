import React, { useRef } from "react";
import arrow from "../../assets/arrow.svg";
import { useSelector, useDispatch } from "react-redux";
import { setExercises, setShowExercises} from "../../app/features/exercisesSlice";

const Categories = () => {
    //more than 1327 exercise
    const mainData=useSelector(state=>state.data.database)
    //get body parts by removing duplicates 
    const bodyParts= new Set(mainData?.map(item=>item.bodyPart));
    const dispatch= useDispatch()

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

    const handleCategory=(category)=>{
      if(category==="all"){
        dispatch(setExercises(mainData))
        dispatch(setShowExercises(mainData))
      }
      else{
        dispatch(setExercises(mainData.filter(item=>item.bodyPart===category)))
        dispatch(setShowExercises(mainData.filter(item=>item.bodyPart===category)))
      }
    }
  return (
    <div className="categories-container">
    <h3>Body Parts</h3>
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
        return <span key={index} onClick={()=>handleCategory(item)}>{item}</span>
     })}
    </div>
  </div>
  )
}

export default Categories