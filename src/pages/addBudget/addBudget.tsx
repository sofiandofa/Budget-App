import React,{ useState} from "react"
// import wallet from "../../assets/pngwing.com.png"
import wallet from "../../assets/wallet-svgrepo-com.svg"  
import './addBudget.css'
import { useDispatch, useSelector } from "react-redux"
import { addBudget } from "../../features/budget-slice"
import { budgetSelector } from "../../store/budget-selector"
import Navbar from "@/components/navbar/navbar"


function AddBudget() {
    const dispatch=useDispatch()
    const budget=useSelector(budgetSelector)
    const {totalAmount}=useSelector(budgetSelector)

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
        <div>
            <Navbar/>
            <section className="budgets-container">
                <div className="budget mx-auto container justify-center items-end">
                    <div className="budget-img-holder">
                        <img src={wallet} alt="" className=""/>
                    </div>
                    <div className="budget-content d-flex align-items-center flex-column ">
                        <h1>organise your Budget</h1>
                        <h3 className=" fst-italic "> Your Total Amount Is <span className="total-amount">{`${totalAmount}`}</span>$</h3>
                        <form className="d-flex flex-column  align-items-center   justify-content-between border border-black p-4"
                        onSubmit={submitHundler}
                        >
                            <select className=" form-select mb-3 outline-2 focus:shadow-sm w-64 rounded-none ">
                                <option value="" className="">one</option>
                            </select>
                            <label htmlFor="" className=" text-black flex-column flex-sm-row "><span className="w-40 text-center text-sm-start">budget name</span>
                                <input  type="text" name="" id="" className="rounded-1 border-black border-opacity-75  border-2 " 
                                    value={name}  
                                    onChange={(e)=>setName(e.target.value)} />
                            </label>
                            <label htmlFor="" className=" text-black flex-column flex-sm-row"><span className=" w-40 text-center text-sm-start">budget amount</span>
                                <input type="number" name="" id="" className="rounded-1 border-black border-opacity-75 v border-2 " 
                                    value={amount}  
                                    onChange={(e)=>setAmount(e.target.value)}/>
                            </label>
                            <button
                            type="submit"
                            className="btn btn-dark mt-3  rounded-2 text-blue-800 font-semibold "
                            >
                                save
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AddBudget