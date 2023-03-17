import React, { useContext } from 'react'
import { context } from './SampleCompOne'

const SampCompFour = () => {
    const three:any =useContext(context)
  return (
    <div>{three.count}<button onClick={(e:any)=>{three.dispatch({type:'reset'})}}>Reset</button></div>
  )

}

export default SampCompFour