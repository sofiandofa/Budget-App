import React,{ useState} from "react"
import wallet from "../../assets/pngwing.com.png"  
import './addBudget.css'
import { useDispatch, useSelector } from "react-redux"
import { addBudget } from "../../features/budget-slice"
import { budgetSelector } from "../../store/budget-selector"

function AddBudget() {
    const dispatch=useDispatch()
    const budget=useSelector(budgetSelector)

    const [name, setName] = useState("")
    const [amount, setAmount] = useState("")
    const submitHundler=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        if(name!=="" && amount!==""){
            dispatch(addBudget({name,amount,id:budget.budgetsList.length.toString(),date:Date.now().toString()}));
        }
        setName("");
        setAmount('')
    }
    return (
        <div className="budget mx-auto container  ">
            <div className="budget-img-holder">
                <img src={wallet} alt="" className=""/>
            </div>
            <div className="budget-content bg-dark-subtle d-flex align-items-center flex-column ">
                <h1>organise your Budget</h1>
                <form className="d-flex flex-column  align-items-center  justify-content-between"
                onSubmit={submitHundler}
                >
                    <label htmlFor="">budget name
                        <input  type="text" name="" id="" className="rounded-1 border-black border-opacity-50 v border-1  " 
                            value={name}  
                            onChange={(e)=>setName(e.target.value)} />
                    </label>
                    <label htmlFor="">budget amount
                        <input type="number" name="" id="" className="rounded-1 border-black border-opacity-50 v border-1  " 
                            value={amount} 
                            onChange={(e)=>setAmount(e.target.value)}/>
                    </label>
                    <button
                    type="submit"
                    className="btn btn-dark mt-3  rounded-2 "
                    >
                        save
                    </button>
                </form>
            </div>
        </div>
    )
}

export default AddBudget