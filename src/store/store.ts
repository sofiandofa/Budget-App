import {configureStore} from "@reduxjs/toolkit"
import budgetSlice from "../features/budget-slice"
import submitSlice from "../features/submit-slice"


export const store=configureStore({
    reducer:{
        budget:budgetSlice,
        isSubmited:submitSlice,
    }
})