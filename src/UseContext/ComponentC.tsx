import React, { useContext } from 'react'
import { context } from './ComponentA'

const ComponentC = () => {
  const context1:any = useContext(context)
  return (
    <div>
      ComponentC - {context1.count}
      <button onClick={()=>context1.dispatch({type:'decreament',payload:2})}>decreament</button>
      </div>
  )
}

export default ComponentC