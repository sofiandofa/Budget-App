import {createSlice}from "@reduxjs/toolkit"
const initialState={
    budgetsList:[{
        id:undefined,
        name:undefined,
        amount:undefined,
        date:undefined,
        expensesBudget:[{name:"",amount:"",id:""}],
    }],
    totalAmount:undefined,

}
const budgetSlice=createSlice({
    name:"budget",
    initialState,
    reducers:{
        addBudget(state,action:{payload: {name:string,amount:string,id:string,date:string};type: string;}){
            const budget:BudgetInfo=action.payload;
            state.budgetsList?.push(budget);
            return 
        },
        deleteBudget(){

        },
        renameBudget(){

        },
        addExpenses(state,action:{payload: {name:string,amount:string,id:string};type: string;}){
            const expense=action.payload;
            const{name,amount,id}=expense
            const budget=state.budgetsList.find(ele=>{ele.id===expense.id})
            const budgetExpenses=budget?.expensesBudget
            budgetExpenses?.push({name:name,amount:amount,id:id})
            return
        },
        addTotalAmount(state,action){
            const total=action.payload;
            state.totalAmount=total;
        }

    }
})
export const {addBudget,deleteBudget,renameBudget,addExpenses,addTotalAmount} =budgetSlice.actions;
export default budgetSlice.reducer;