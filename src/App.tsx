
import AddBudget from "./pages/addBudget/addBudget";
import './App.css'
import Budgets from "./pages/budgets/budgets";

function App() {


    return (
    <main>
        <section className="bg-dark-subtle budgets-container">
            <AddBudget/>
        </section>
        <section className="budgetsItems-holder container mx-auto pt-4 ">
            <Budgets/>
        </section>
    </main>
)}




export default App
