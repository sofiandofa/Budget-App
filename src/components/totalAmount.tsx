import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {submitFirstForm} from "@/features/submit-slice"
import { isTheFirstSubmited } from "@/store/submit-selector";
import { addTotalAmount } from "@/features/budget-slice";

function TotalAmount({position}:{position:string}) {

    const isTheFirstSubmite= useSelector(isTheFirstSubmited);
    const dispatch=useDispatch()

    const submitHundler=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const amount = formData.get('amount')
        dispatch(submitFirstForm())
        dispatch(addTotalAmount(amount))
    }
    return (
        <article className={`${position} shadow-lg`} >
            <h1 className='title '>add your total amount</h1>
            <form onSubmit={submitHundler} className='d-flex flex-column align-items-center  '>
                    <input type="number"  name='amount' className="mb-4"/>
                    <button className='btn btn-dark  d-inline' disabled ={isTheFirstSubmite?true:false} >submit</button>
            </form>
        </article>
    )
}

export default TotalAmount