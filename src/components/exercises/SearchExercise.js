import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setExercises, setShowExercises } from "../../app/features/exercisesSlice";

const SearchExercise = () => {
  const mainData = useSelector((state) => state.data.database);
  const dispatch= useDispatch()
  const [search, setSearch] = useState("");
  const [notfound, setNotfound] = useState(false);


  //button search
  const handleSearch = (e) => {
    if (search) {
      const searchedData = mainData.filter((item) => (
        item.name.toLowerCase().includes(search) ||
       item.equipment.toLowerCase().includes(search) || 
       item.target.toLowerCase().includes(search) || 
       item.bodyPart.toLowerCase().includes(search) 
      ));
      dispatch(setExercises(searchedData))
      dispatch(setShowExercises(searchedData))
      if(searchedData.length===0){
        setNotfound(true)
      }
    }

  };
  //OK key (enter) search
  const handleKeyDown=(e)=>{
    if(e.key==='Enter'){
      const searchedData = mainData.filter((item) => (
        item.name.toLowerCase().includes(search) ||
       item.equipment.toLowerCase().includes(search) || 
       item.target.toLowerCase().includes(search) || 
       item.bodyPart.toLowerCase().includes(search)
      ));
      dispatch(setExercises(searchedData))
      dispatch(setShowExercises(searchedData))
      if(searchedData.length===0){
        setNotfound(true)
      }
    }
  }

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="search exercises..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value.toLowerCase())
          setNotfound(false)
          }}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSearch}>Search</button>
      {notfound && <p>No results found! Try again</p>}
    </div>
  );
};

export default SearchExercise;
