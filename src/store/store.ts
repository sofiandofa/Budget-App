import {configureStore} from "@reduxjs/toolkit"
import budgetSlice from "../features/budget-slice"



export const store=configureStore({
    reducer:{
        budget:budgetSlice
    }
})