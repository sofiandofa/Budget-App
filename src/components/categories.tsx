import CategorieExample from './categorieExample'
import { exampales } from '@/helpers/examples'

function Categories({position}:{position:string}) {

    return (
        <article className={position} >
            <form className='form-group d-flex flex-column align-items-center mt-lg-4 '>
                    <label htmlFor="" className=''> Add Your Categories</label>
                    <input type="text" name="" id="" className='form-control-sm border-1'/>
            </form>
            <div className='d-flex flex-column flex-sm-row flex-wrap justify-content-center gap-md-1 mt-0 mt-md-5'>
                {exampales.map(ele=>{
                    return <CategorieExample example={ele}/>
                })}
                
            </div>
        </article>
    )
}

export default Categories