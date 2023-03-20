import { keys } from '@mui/system'
import React, { useEffect, useState } from 'react'

function getSavedVal(key:any,initialValue:any){
 let asKey=localStorage.getItem(key);
 let savedValue;
 if(asKey) savedValue=JSON.parse(asKey) 
 console.log(savedValue);
 if(savedValue) return savedValue;
 if(savedValue instanceof Function) return initialValue()
 
 return initialValue
}


const useLocalStorage = (key:any,initialValue:any) => {
    const [value, setValue] = useState(()=>{
        return getSavedVal(key,initialValue)
        
    })
    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(value))
    },[value])
  return [value, setValue]
}

export default useLocalStorage