import React, { createContext, useReducer } from 'react'
import ComponentB from './ComponentB'
import ComponentD from './ComponentD'

export const context = createContext({});
let initialValue = 0;
let reducer = (state:any,action:any) =>{
    switch (action.type) {
        case 'increament':
            return state + 1
        case 'decreament':
            return state - action.payload
        case 'reset':
            return state = 0;
        default:
            return state;
    }
}
const ComponentA = () => {
    const [count, dispatch] = useReducer(reducer, initialValue)
  return (
    <div>
        <context.Provider value={{count:count,dispatch:dispatch}}>
            count - {count}
            <ComponentB />
            <ComponentD />
        </context.Provider>
    </div>
  )
}

export default ComponentA