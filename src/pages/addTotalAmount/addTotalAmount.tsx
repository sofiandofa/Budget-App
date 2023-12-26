
import { useDispatch, useSelector } from "react-redux";
import {useState,useEffect} from "react"
import Categories from "../../components/categories";
import TotalAmount from "../../components/totalAmount";
import {submitFirstForm} from '@/features/submit-slice'
import "./addTotalAmount.css"
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { isTheFirstSubmited } from "@/store/submit-selector";
import Navbar from "@/components/navbar/navbar";

function AddTotalAmount() {
    const [index, setIndex] = useState(0);
    const isTheFirstSubmite= useSelector(isTheFirstSubmited)
    
    const dispatch=useDispatch()

    useEffect(()=> {
        if(isTheFirstSubmite){
            setIndex(1)
        }
    }, [isTheFirstSubmite])
    useEffect(()=>{
        if(index===0 && isTheFirstSubmite){
            dispatch(submitFirstForm())
        }
    },[index])
    const content=()=>{
        
        if(index===0){
            return <>
                <Categories position={"nextSlide"} />
                <TotalAmount position={"activeSlide"} />
            </>
        }
        if(index===1){
            return <>
                <Categories position={"activeSlide"}/>
                <TotalAmount position={"lastSlide"}/>
            </>
        }
    }
    return (
    <div>
        <Navbar/>
        <section className="section">
            <div className="section-center">
                {content()}
                <button className="prev" onClick={() => setIndex(index - 1)} disabled ={index===0? true: false} >
                <FiChevronLeft/>
                </button>
                <button className="next" onClick={() => setIndex(index + 1)} disabled ={index===1? true: false} >
                    <FiChevronRight />
                </button>
            </div>
        </section>
    </div>
    )
}

export default AddTotalAmount