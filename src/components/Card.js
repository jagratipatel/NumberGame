import React from 'react';
 
class Card extends React.Component{

    render(){
        return( 
                <div id="cards">
                    {this.props.isCardVisible ? (<button className="card">{this.props.value1}</button>) :(<button className="card" onClick= {()=>{this.props.setVisibility(1)}}></button>)}
                    {this.props.isCardVisible ? (<button className="card">{this.props.value2}</button>) :(<button className="card" onClick= {()=>{this.props.setVisibility(2)}}></button>)}
                    {this.props.isCardVisible ? (<button className="card">{this.props.value3}</button>) :(<button className="card" onClick= {()=>{this.props.setVisibility(3)}}></button>)}
                </div>
            )

    }
}

export default Card;