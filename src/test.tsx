import React, { useState } from "react"
import { Calendar } from "@/components/ui/calendar"

export function CalendarDemo() {
    
}
function Test() {
    const [inputValue,setinputValue]=React.useState<string | undefined>()
    const [date, setDate] = React.useState<Date | undefined>((new Date()))
    const [toggleTheCalendar, setToggleTheCalendar] = useState(false)
    // console.log(date?.toISOString())
    console.log(inputValue)
    {/* <input type="date" onChange={(e)=>setinputValue(e.target.value)} name="" id="" /> */}

    return (
    <div className=" bg-blend-darken flex flex-col justify-center items-center">
        <button 
        className=" bg-sky-700 rounded-sm text-white p-2"
        onClick={()=>setToggleTheCalendar(prev=>!prev)}
        >click</button>

        {toggleTheCalendar&&
            <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border shadow"
        />}
        <div>
        <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border shadow bg-slate-500"
        />
        </div>
        

    </div>
    )



}

export default Test

/*
page pricipale css bootstrap:

import img from './assets/pngwing.com.png'

const style={   
    centering:{left: "50%",top: "50%",transform: "translate(-50%, -50%)"},
    header:{    marginBottom: '60px',fontSize: '60px',textAlign: "center",fontWeight: "800",color: "#779fe6"}

}
return (
    <div className="bg-dark text-light vh-100 position-relative">
        <div className={`row container text-sm-center position-absolute align-items-center justify-content-center flex-md-row flex-column-reverse`} 
            style={style.centering} >
            <div className="  d-md-flex  col-lg-4  col-md-6 ">
                <img src={img} alt="" className="img-fluid w-100 text-center "/>
            </div>
            <div className="col-lg-8 text-center text-md-start col-md-6 ">
                <h1 style={style.header} className=''>
                    create count for finantial safety
                </h1>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, dolorum.lorem3
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, dolorum.lorem3
                </p>
            </div>
        </div>
    </div>
)
*/
