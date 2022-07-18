import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  database:[],
  exercises: [],
  showExercises: [],
  exerciseDetails: {},
 
};

const exerciseSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
      setMainData: (state, action) => {
        state.database = action.payload;
      },
      setExercises: (state, action) => {
        state.exercises = action.payload;
      },
      setShowExercises:(state,action)=>{
        state.showExercises= action.payload.slice(0,10)
      },
      setExerciseDetails: (state,action)=>{
        state.exerciseDetails= action.payload
      },
  },
});
export const { setMainData,setShowExercises, setExercises, setExerciseDetails,setBodyParts, getBodyParts } = exerciseSlice.actions;
export default exerciseSlice.reducer;
