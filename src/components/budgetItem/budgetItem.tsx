import AddExpense from "../addExpense/addExpense"
import ShowExpenses from "../showExpenses/showExpenses"
import "./budgetItem.css"

function BudgetItem({budget}:{budget:BudgetInfo}) {

    return (
        
        
            
            <div className="p-3">
                <h2 className="budgets-info-header d-flex justify-content-between align-items-center gap-2  border-1 border  border-black p-2 rounded-1">
                    <span>{budget.name}</span>
                    <span>{budget.amount}$</span>
                </h2>
                <div className="d-flex justify-content-between">
                    <AddExpense id={budget.id} />
                    <ShowExpenses/>
                </div>
            </div>
            
            
        
        
    )
}

export default BudgetItem