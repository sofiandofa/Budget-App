import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {submitFirstForm} from "@/features/submit-slice"
function TotalAmount({position}:{position:string}) {

    const isTheFirstSubmited= useSelector((state)=>state.isSubmited.isTheFirstSubmited);
    const dispatch=useDispatch()
    console.log(isTheFirstSubmited)

    const submitHundler=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const amount = formData.get('amount')
        console.log(amount)
        dispatch(submitFirstForm())
        
    }
    return (
        <article className={`${position} shadow-lg`} >
            <h1 className='title '>add your total amount</h1>
            <form onSubmit={submitHundler} className='d-flex flex-column align-items-center  '>
                    <input type="number"  name='amount' className="mb-4"/>
                    <button className='btn btn-dark  d-inline' disabled ={isTheFirstSubmited?true:false} >submit</button>
            </form>
        </article>
    )
}

export default TotalAmount