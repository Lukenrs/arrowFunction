import React, {Component} from "react"


export default class App extends Component{
  mens = (m) =>{
    return m
  }
  num = (x)=>{
    return x*2
  }
  render(){
    return(
      <div><h1>{this.mens("O dobro do valor escolhido é:")} {this.num(2)}</h1></div>
    )
  }
}