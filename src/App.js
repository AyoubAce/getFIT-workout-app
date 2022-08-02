import React, { useEffect } from "react";
import axios from "axios";
import Hero from "./components/hero/Hero";
import Navbar from "./components/nav/Navbar";
import Exercises from "./components/exercises/Exercises";
import { useDispatch } from "react-redux";
import {
  setExercises,
  setMainData,
  setShowExercises,
} from "./app/features/exercisesSlice";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ExerciseDetails from "./components/exercise-details/ExerciseDetails";
import NoMatch from "./components/notfound/NoMatch";
import Footer from "./components/footer/Footer";
import MyCollection from "./components/mycollection/MyCollection";

// import Sidebar from "./components/sidebar/Sidebar";
// import { getCollection } from "./app/features/collectionSlice";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchData();
    // dispatch(getCollection())

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const fetchData = async () => {
    await axios
      .get("https://exercisedb.p.rapidapi.com/exercises", {
        headers: {
          "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
          "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
        },
      })
      .then((res) => {
        console.log("refetched again");
        dispatch(setMainData(res.data));
        dispatch(setExercises(res.data));
        dispatch(setShowExercises(res.data.slice(0, 10)));
      })
      .catch((error) => console.log(error));
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        {/* <Sidebar/> */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Exercises />
              </>
            }
          />
          <Route path="/exercise/:id" element={<ExerciseDetails />} />
          <Route path="/collection" element={<MyCollection />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
        </div>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
