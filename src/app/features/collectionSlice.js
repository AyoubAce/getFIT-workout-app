import { createSlice } from "@reduxjs/toolkit";

const initialState={
    collection: [],
}
const collectionSlice= createSlice({
    name:"collection",
    initialState,
    reducers:{
        getCollection: (state)=>{
            state.collection=JSON.parse(localStorage.getItem("myCollection")) || []
        },
        setCollection:(state,action)=>{
            let existing= state.collection.find(id=>id===action.payload)
            if(existing){
                let updatedStorage= state.collection.filter(id=>id!==action.payload)
                localStorage.setItem("myCollection", JSON.stringify(updatedStorage))
                state.collection= updatedStorage
            }
            else{
                localStorage.setItem("myCollection", JSON.stringify([...state.collection, action.payload]))
                 state.collection= [...state.collection, action.payload]
            }
        }
    }
})

export const {setCollection, getCollection}= collectionSlice.actions
export default collectionSlice.reducer