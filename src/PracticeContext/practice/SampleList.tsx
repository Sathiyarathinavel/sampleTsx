import React, { useEffect, useState } from 'react'

const SampleList = (props:any) => {
    console.log(props.getItems())
    const [val, setVal] = useState([]) as any

    useEffect(() => {
      setVal(props.getItems())
      console.log("update items")
    }, [props.getItems])

    console.log(val)
    
  return val.map((item:any)=>(<div key={item}>{item}</div>))
}

export default SampleList