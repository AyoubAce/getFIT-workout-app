import { configureStore } from "@reduxjs/toolkit";
import exercisesReducer from "./features/exercisesSlice";
import collectionReducer from "./features/collectionSlice"


export const store= configureStore({
    reducer:{
        data: exercisesReducer,
        collection: collectionReducer
    }
})