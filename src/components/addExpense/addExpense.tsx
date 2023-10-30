import { useDispatch } from "react-redux"
import {useRef} from 'react'
import {addExpenses} from "../../features/budget-slice"

function AddExpense({id}:{id:string}) {
    
    const dispatch=useDispatch();
    const nameExpense =useRef<HTMLInputElement>(null)
    const amountExpense =useRef<HTMLInputElement>(null)

    
    const handleSubmit=(e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        e.preventDefault();
        if(nameExpense.current!==null && amountExpense.current!==null){
            dispatch(addExpenses({
                name:nameExpense.current.value,
                amount:amountExpense.current.value,
                id
            }))
        }
    }
    return (
        <div>
            <button className="btn btn-light border border-1  fw-bold  text-black-50" data-bs-toggle="modal" data-bs-target="#expenseModal" >
                    add Expense
            </button>

            <div className="modal fade" id="expenseModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Add Expense</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="mb-3 row">
                                <label htmlFor="nameExpense" className="col-sm-2 col-form-label">Name</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="nameExpense" name="nameExpense"
                                        ref={nameExpense} />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label htmlFor="amountExpense" className="col-sm-2 col-form-label">amount</label>
                                <div className="col-sm-10">
                                    <input type="number" className="form-control" id="amountExpense" name="amountExpense"
                                        ref={amountExpense}/>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn  btn-dark" onClick={handleSubmit}
                                data-bs-dismiss="modal">Add
                        </button>
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default AddExpense