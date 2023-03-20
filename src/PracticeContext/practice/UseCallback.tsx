import React, { useState, useCallback } from 'react'
import SampleList from './SampleList'
export default function App() {
    const [number, setNumber] = useState(1) 
    const [dark, setDark] = useState(false)
    const theme = {
        backgroundColor: dark ? '#333' : '#FFF',
        color: dark ? '#FFF' : '#333'
    }  
    const getItems = useCallback(() => {
        return [number ,number + 1 , number + 2 ]
    }, [number])
    
    return (
        <div >
            <input
                type="number"
                defaultValue={number}
                onChange={e => setNumber(parseInt(e.target.value===""?"0":e.target.value))} />
                
                <button onClick={() => setDark(prevDark => !prevDark)}>
                Toggle theme
            </button>
            <div style={theme}>
           <SampleList getItems={getItems}/>
             </div>        
        </div>
    )
}