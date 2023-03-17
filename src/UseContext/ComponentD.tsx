import React, { useContext } from 'react'
import { context } from './ComponentA'
import ComponentE from './ComponentE'
import ComponentF from './ComponentF'

const ComponentD = () => {
  const context1:any = useContext(context)
  return (
    <div>
      ComponentD - {context1.count}
      <button onClick={()=>context1.dispatch({type:'reset'})}>reset</button>
      <ComponentE />
      <ComponentF />
    </div>
  )
}

export default ComponentD