import React from 'react';
import Card from './Card'

class Container extends React.Component {

  constructor(props) {
    super(props);
    this.state =  {
      attempts : 0,
      luckyAttempts : 0,
      wrongAttempts : 0,
      randomNumber : 0,
      value1 : 0,
      value2 : 0,
      value3 : 0,
      isCardVisible: false,
      message: "failed"
  }
 console.log("contructor chalo");
  }

  componentDidMount(){
    const resetData = this.luckFactor();
    this.setState({
      randomNumber: resetData.randomNumber ,
      value1: resetData.value1 , 
      value2: resetData.value2 ,
      value3 :resetData.value3
    })
    console.log("didmount chaloo");
  }

  luckFactor = ()=>{
    let newNumber,randomNumber,value1,value2,value3;
     newNumber =  this.randomNoGenerator(1,3);
     randomNumber = this.randomNoGenerator(1,10);
     console.log("random number luck factor se"+randomNumber);
     if(newNumber === 1){
       value1 = randomNumber;
     }
     else{
       value1 = this.randomNoGenerator(1,10)
     }

      if(newNumber === 2){
      value2 = randomNumber;
     }

     else{
      value2 = this.randomNoGenerator(1,10);
     }

     if(newNumber === 3){
      value3 = randomNumber;
     }

     else{
      value3 = this.randomNoGenerator(1,10);
     }
     console.log("luck factor chala");

     return  {randomNumber,value1,value2,value3}
  
  }

  randomNoGenerator =(min,max)=> {
   let r = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(" randomNoGenerator chala "+r)
    return r;
  }

  setVisibility =(id)=>{
    console.log("setvisibility se id"+id)
    this.setState({
      isCardVisible:true,
      attempts : this.state.attempts + 1  
    })
    this.numberMatch(id);
    if(this.state.attempts === 9){
      this.result()
    }
  }
    
  numberMatch = (id)=>{
     console.log("numbermatch se id "+id)
    if (id === 1 && this.state.value1 === this.state.randomNumber){
      this.setState({
        luckyAttempts : this.state.luckyAttempts + 1
      })
    }

    else if(id === 2 && this.state.value2 === this.state.randomNumber){
      this.setState({
        luckyAttempts : this.state.luckyAttempts + 1
      })
    }

    else if(id === 2 && this.state.value3 === this.state.randomNumber){
      this.setState({
        luckyAttempts : this.state.luckyAttempts + 1
      })
    }

    else{
      this.setState({
        wrongAttempts : this.state.wrongAttempts + 1
      })
    }
    
    console.log(this.state.attempts);
    setTimeout(()=>{
      let Data = this.luckFactor();
      this.setState({
        randomNumber: Data.randomNumber ,
        value1: Data.value1 , 
        value2: Data.value2 ,
        value3 :Data.value3 ,
        isCardVisible : false
      })
  
    },1200)
  }

  result = ()=>{
    let msg;
    if (this.state.luckyAttempts <3){
      msg = "BAD LUCK ):"
    }
    else if (this.state.luckyAttempts >3 && this.state.luckyAttempts<7){
      msg = "GOOD LUCK (:"
    }
    else{
      msg = "EXCELENT LUCK !"
    }

    this.setState({
      message : msg
    })
    console.log("result chala");
  }

    render() {
      console.log("render chaloo");
      return (
        <div id="back">
          {this.state.attempts<10 ? ( <div id="game">
        <p id="attempts">Attempts:{this.state.attempts}/10</p>
        <div id="score">
        <p id="luckyAttempts">Lucky Attempts:{this.state.luckyAttempts}</p>
        <p id="wrongAttempts">Wrong Attempts:{this.state.wrongAttempts}</p>
        </div>
        <div id="randomno">{this.state.randomNumber}</div>
          <Card  value1={this.state.value1} value2={this.state.value2} value3={this.state.value3} isCardVisible={this.state.isCardVisible} setVisibility={this.setVisibility}/>
          </div>)
          :(<div id="result">
            <p id="message">{this.state.message}</p>
          </div>)}
        </div>
      )
    }
  }
  
  export default Container;
  
  