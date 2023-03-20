import React from 'react'
import { UseTable } from './UseTabel'

const SampleTabel = () => {
    const varb=["a","b"];
    const details=["data1","data2"]
  return (
    <div>
        <UseTable columns={varb} data={details}/>
    </div>
  )
}

export default SampleTabel