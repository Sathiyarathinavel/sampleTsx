import React, { useContext } from 'react'
import { context } from './SampleCompOne'

const SampleCompTwo = () => {
const first:any = useContext(context)
  return (
    <div>
        {first.count}
        <button onClick={(e:any)=>{first.dispatch({type:'increment'})}}>Increment</button>
        </div>
  )
}

export default SampleCompTwo