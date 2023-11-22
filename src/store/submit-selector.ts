

type Props={
    isSubmited:{
        isTheFirstSubmited:boolean,
        isTheSecondSubmmited:boolean
    }
}

export const isTheFirstSubmited=(({isSubmited}:Props)=>isSubmited.isTheFirstSubmited)
export const isTheSecondSubmmited=(({isSubmited}:Props)=>isSubmited.isTheSecondSubmmited)
