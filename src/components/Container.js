import React from 'react';
import Card from './Card'

class Container extends React.Component {

  constructor(props) {
    super(props);
    this.state =  {
      attempts : 0,
      luckyAttempts : 0,
      wrongAttempts : 0,
      randomNumber : this.randomNoGenerator(),
      value1 : this.randomNoGenerator(),
      value2 : this.randomNoGenerator(),
      value3 : this.randomNoGenerator(),
      isCardVisible: false
  }
 
  }


  randomNoGenerator =()=> {
    let r = Math.floor(Math.random() * 100);
    return r;
  }

  setVisibility =(id)=>{
    this.numberMatch(id);
    this.setState({
      isCardVisible:true,
      attempts : this.state.attempts + 1 ,
    })

  }
    
  numberMatch = (id)=>{
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
  }


    render() {
      return (
        <div id="back">
        <p id="attempts">Attempts:{this.state.attempts}</p>
        <div id="score">
        <p id="luckyAttempts">Lucky Attempts:{this.state.luckyAttempts}</p>
        <p id="wrongAttempts">Wrong Attempts:{this.state.wrongAttempts}</p>
        </div>
        <div id="randomno">{this.state.randomNumber}</div>
          <Card  value1={this.state.value1} value2={this.state.value2} value3={this.state.value3} isCardVisible={this.state.isCardVisible} setVisibility={this.setVisibility}/>
        </div>
      )
    }
  }
  
  export default Container;
  
  