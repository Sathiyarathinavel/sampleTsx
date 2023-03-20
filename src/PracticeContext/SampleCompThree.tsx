import React, { useContext } from 'react'
import { context } from './SampleCompOne'

const SampleCompThree = () => {
    const second:any = useContext(context)
  return (
    <div>{second.count}&nbsp;<button onClick={(e:any)=>{second.dispatch({type:'decrement',payload:1})}}>Decrement</button></div>
  )
}

export default SampleCompThree