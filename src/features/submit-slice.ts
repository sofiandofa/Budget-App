//is submited in first page
import {createSlice}from "@reduxjs/toolkit"

const submitSlice=createSlice({
    name:"isSubmited",
    initialState:{
        isTheFirstSubmited:false,
        isTheSecondSubmmited:false,
    },
    reducers:{
        submitFirstForm(state){
            state.isTheFirstSubmited=!state.isTheFirstSubmited
        },
        submitSecondeForm(state){
            state.isTheSecondSubmmited=!state.isTheSecondSubmmited
        }
    }
})
export const {submitFirstForm,submitSecondeForm}= submitSlice.actions;
export default submitSlice.reducer;