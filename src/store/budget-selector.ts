type Props={
        budget:{
            budgetsList:[],
            totalAmount:number,
        }
    
}

export const budgetSelector=((state:Props)=>state.budget)