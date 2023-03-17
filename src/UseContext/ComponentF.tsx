import React, { useContext } from 'react'
import { context } from './ComponentA'

const ComponentF = () => {
  const {dispatch,count}:any = useContext(context)
  return (
    <div>
      ComponentF - {count}
      <button onClick={()=>{dispatch({type:'increament'})}}>increament</button>
    </div>
  )
}

export default ComponentF