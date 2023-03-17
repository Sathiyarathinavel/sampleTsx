import { count } from 'console';
import React, { useEffect, useRef, useState } from 'react'

function UseRefHook() {
    const [sample, setsample] = useState(0);
    const timerRef = useRef(null) as any;
    const focus = useRef(null) as any;
    const count = useRef(null) as any;


    useEffect(() => {
      focus.current.focus();    
    }, [])

    useEffect(() => {
     count.current=count.current+1
    }, [])
    
    
    useEffect(() => {
        timerRef.current=setInterval(()=>{
       
            setsample(prev=> prev + 1);
       
      },1000)
    
      return () => {
        clearInterval( timerRef.current);
      }
    }, [])

    const resume=()=>{
      timerRef.current=setInterval(()=>{
       
        setsample(prev=> prev + 1);
   
  },1000)
    }
    
  return (
    <div>
        <div> Hook time ---- {sample}</div>
        <button onClick={()=>clearInterval(timerRef.current)}>Pause Timer</button>
        <button onClick={resume}>Resume Timer</button>
        <input ref={focus}></input>
        <input ref={focus}></input>
        <input ref={focus}></input>
        <input ref={focus}></input>
        <input ref={focus}></input>
        <h1>render count:{count.current}</h1>
    </div>
  )
}

export default UseRefHook