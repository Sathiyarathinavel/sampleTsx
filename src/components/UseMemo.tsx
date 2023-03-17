import React, { useState,useMemo, useEffect, useRef } from 'react'

const UseMemo = () => {
    const [sample, setSample] = useState(0);
    const [sampleTwo, setsampleTwo] = useState(0);

const first = useRef(null) as any;

    useEffect(() => {
        console.log("rerender in useeffect")
       first.current.focus(); 
    }, [])
    

    const countOne=()=>{
        setSample(sample+1);
    }

    const countTwo=()=>{
        setsampleTwo(sampleTwo+1);
    }
    console.log("rerender in component")
    const isEven=useMemo(()=>{
        console.log("inisde the is even function");    
        let i=0;
        while (i<2000000000) {
            i++;
        }
        return sample % 2===0},[sample])

        // const isEven=()=>{
        //     console.log("inisde the is even function");    
        //     let i=0;
        //     while (i<2000000000) {
        //         i++;
        //     }
        //     return sample % 2===0}
  
  return (
    <div>
        <p>This is a sample page for use memo</p>
        <p>{sample}&nbsp;<span>{isEven ?"Even":"Odd"}</span></p>
        <button onClick={countOne}>count one</button>
        <p>{sampleTwo}</p>
        <button onClick={countTwo}>count two</button>
        <div style={{marginTop:"10%"}}>
        <input ref={first} ></input>
        </div>
    </div>
  )
}

export default UseMemo