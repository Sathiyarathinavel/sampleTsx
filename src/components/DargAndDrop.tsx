import React, { useEffect, useState } from 'react'
import "./DragAndDrop.css"
import Image from './king.png'

// function useEventListner(eventType: any, handler:any) {
//     useEffect(() => {
//       document.addEventListener(eventType,handler)
      
    
//       return () => {
//          document.removeEventListener(eventType,handler)     }
//     }, [eventType,handler])
    
//  }


function DargAndDrop() {
    const [drag, setdrag] = useState() as any
    let beingDraged: any;

       const handelDrop=(e:any)=>{       
                e.target.append(drag)     
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
        </div>
    </div>
  )
}

export default DargAndDrop  


