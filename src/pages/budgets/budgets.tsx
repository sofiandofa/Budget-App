import { useSelector } from "react-redux"
import { budgetSelector } from "../../store/budget-selector"
import BudgetItem from "../../components/budgetItem/budgetItem";
import './budgets.css'

function Budgets() {
    const budgets=useSelector(budgetSelector);


    const content=budgets.budgetsList.map((budget:BudgetInfo)=>{
        return (
            
            budget.id!==undefined&&
            <div className=" border  border-black" key={budget.id}>
                <BudgetItem budget={budget} key={budget.id}/>
            </div>
        
        )
    })
    return content
}

export default Budgets