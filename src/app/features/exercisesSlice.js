import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mainData: [],
  exercises: [],
  exercise: {},
  similarExercises: [],
  searchResult: [],
};

const exerciseSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    getMainData: (state, action) => {
      state.mainData = action.payload;
    },
    getExercises: (state, action) => {
      state.exercises = action.payload;
    },
    //gets exercises as payload and return a set of unique body parts
    setBodyParts:(state)=>{
        state.bodyParts= new Set([...state.exercises].map(item=>item.bodyPart))
    },
    similarExercises: (state) => {
      state.similarExercises = state.exercises
        .filter((item) => {
          return (
            item.target === state.exercise.target &&
            item.id !== state.exercise.id
          );
        })
        .slice(0, 12);
    },
    searchedExercise: (state, action) => {},
  },
});
export const { getMainData, getExercises, setBodyParts, getBodyParts } = exerciseSlice.actions;
export default exerciseSlice.reducer;
