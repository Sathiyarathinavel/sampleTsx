import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./DragAndDrop.css"
import Image from './king.png'

function useEventListner(eventType: any, handler:any) {
    useEffect(() => {
      document.addEventListener(eventType,handler)
      
    
      return () => {
         document.removeEventListener(eventType,handler)     }
    }, [eventType,handler])
    
 }


const DargAndDrop=()=> {
    const [drag, setdrag] = useState() as any
    let beingDraged: any;

       const handelDrop=(e:any)=>{       
                e.target.append(drag)     
       }

  const nav=useNavigate();

  let sampleObj={
    name:'sathiya',
    age:24
  }

   
  return (
    <div>
        <h1>Drag and Drop</h1>
        <div id="gameboard">
            <div className="square one" onDrop={handelDrop} onDragOver={(e:any)=>{e.preventDefault()}}>
                <img src={Image} draggable onDragStart={(e:any)=>setdrag(e.target)} id="king"/>
            </div>
            <div className="square two" onDrop={handelDrop} onDragOver={(e:any)=>{e.preventDefault()}}></div>
            <div className="square three" onDrop={handelDrop} onDragOver={(e:any)=>{e.preventDefault()}}></div>
            <button onClick={()=>{nav("/Label",{state:sampleObj})}}>Next Page</button>
        </div>
    </div>
  )
}

export default DargAndDrop  


