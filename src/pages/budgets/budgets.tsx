import { useSelector } from "react-redux"
import { budgetSelector } from "../../store/budget-selector"
import BudgetItem from "../../components/budgetItem/budgetItem";
import './budgets.css'

function Budgets() {
    const {budgetsList}=useSelector(budgetSelector);

    const content=budgetsList.map((budget:BudgetInfo)=>{
        return (
            
            budget.id!==undefined&&
            <div className="budgetsItems-holder container mx-auto pt-4 ">
                <div className=" border  border-black" key={budget.id}>
                    <BudgetItem budget={budget} key={budget.id}/>
                    
                </div>
            </div>
        
        )
    })
    return content
}

export default Budgets