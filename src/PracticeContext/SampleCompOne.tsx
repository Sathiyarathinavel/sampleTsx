import React, { createContext, useReducer } from 'react'
import SampCompFour from './SampCompFour';
import SampleCompThree from './SampleCompThree';
import SampleCompTwo from './SampleCompTwo'
export const context=createContext({})
let initialVal=0;
let reducer=(state:any,action:any)=>{
    switch(action.type){
        case "increment":
            return state+1;
        case "decrement":
            return state-1;
        case "reset":
            return 0;
        default:
            return state;
    }
}

const SampleCompOne = () => {
 const [count, dispatch] = useReducer(reducer, initialVal)
  return (
   <context.Provider value={{count:count,dispatch:dispatch}}>
    count:{count}
    <SampleCompTwo/>
    <SampleCompThree/>
    <SampCompFour/>
   </context.Provider>
  )
}

export default SampleCompOne