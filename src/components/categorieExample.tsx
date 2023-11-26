import React from 'react'

function CategorieExample({example}:{example:string}) {
    
    return (
        <button className=' btn btn-dark'>
            {example}
        </button>
    )
}

export default CategorieExample