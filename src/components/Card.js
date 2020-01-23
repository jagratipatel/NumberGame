import React from 'react';
 
class Card extends React.Component{

    render(){
        return( 
                <div id="cards">
                    {this.props.isCardVisible ? (<div className="card">{this.props.value1}</div>) :(<div className="card" onClick={this.props.setVisibility(1)}></div>)}
                    {this.props.isCardVisible ? (<div className="card">{this.props.value2}</div>) :(<div className="card" onClick={this.props.setVisibility(2)}></div>)}
                    {this.props.isCardVisible ? (<div className="card">{this.props.value3}</div>) :(<div className="card" onClick={this.props.setVisibility(3)}></div>)}
                </div>
            )

    }
}

export default Card;