import React, { useEffect } from 'react'
import useLocalStorage from './useLocalStorage'

const SampleTesgt = () => {
    const [data, setdata] = useLocalStorage('name', "" ) 
    const [count,setCount]=useLocalStorage("count",'')
    console.log(count);
    // console.log(parseInt(count))

    useEffect(() => {
      setCount(count===""? 1:(parseInt(count)+1))
    }, [])
    
  return (
    <div>
      <input onChange={(e:any)=>{setdata(e.target.value)}} value={data}/>
      <div>{data}</div>
      <p>Component Rerender Times :{count}</p>
    </div>
  )
}

export default SampleTesgt