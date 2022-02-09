import React, {Component} from "react"


export default class App extends Component{
  mens = (x) =>{
    return "O dobro do número escolhido foi:"
  }
  num = (x)=>{
    return x*2
  }
  render(){
    return(
      <div><h1>{this.mens()} {this.num(2)}</h1></div>
    )
  }
}