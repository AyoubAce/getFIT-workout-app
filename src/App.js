import React, { useEffect} from "react";
import axios from "axios";
import "./App.css";
import Hero from "./components/hero/Hero";
import Navbar from "./components/nav/Navbar";
import Exercises from "./components/exercises/Exercises";
import {useDispatch } from "react-redux";
import {getExercises, getMainData} from "./app/features/exercisesSlice"

function App() {

  const dispatch= useDispatch()
  useEffect(() => {
    fetchData()
  }, []);
  const fetchData = async () => {
   await axios
      .get("https://exercisedb.p.rapidapi.com/exercises", {
        headers: {
          'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
          "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
        },
      })
      .then((res) => {
        dispatch(getMainData(res.data))
        dispatch(getExercises(res.data))
      })
      .catch((error) => console.log(error));
  };


  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Exercises />
    </div>
  );
}

export default App;
