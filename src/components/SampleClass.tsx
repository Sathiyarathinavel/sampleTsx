import React,{Component} from 'react';

interface MyProps {
  }
  
  interface MyState {
    count: number
  }

export default class SampleClass  extends React.Component<MyProps,MyState>{
    constructor(props:any) {
      super(props)
    
      this.state = {
        count : 0 
      }
    }

    // increment(){
    //   this.setState(count:this.state.count+1)
    // }

render(){
    return(
        <div>
        <h1>Hi Every one</h1>
        <h1>count -{this.state.count}</h1>
        {/* <button onClick={()=>this.increment()}>increment</button> */}
        </div>
    )  
}
}
