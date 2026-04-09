import React, { Component } from 'react'

export default class MyClassComponent extends Component {
    constructor(props){
        super(props);
        this.state = { count: 0 }
        console.log("1 constructor: Intial Setup")
    }
    componentDidMount(){
        console.log("3 CopmonentDidMount: Component added to Dom First time");
    }
    componentDidUpdate(prevProps, prevState){
        console.log("4 ComponentDidUpdate: State/Props Change", prevState);
    }
    componentWillUnmount(){
        console.log("5 ComponetWillUnmount: Component removed from DOM")
    }
  render() {
    console.log("2 Render: UI Render");
    return (
      <div>
        <h2>Count: {this.state.count}</h2>
        <button onClick={()=>{this.setState({ count: this.state.count + 1 })}}>Add karo</button>
      </div>
    )
  }
}
