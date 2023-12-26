import AddTotalAmount from './pages/addTotalAmount/addTotalAmount.tsx'
import Budgets from './pages/budgets/budgets.tsx'
import AddBudget from './pages/addBudget/addBudget.tsx'
import { store } from './store/store.ts'
import {Provider} from "react-redux"



export default function App(){
        return(
        <Provider store={store}>
                <AddTotalAmount/>
                <AddBudget />
                <Budgets/>
        </Provider >
)

}
