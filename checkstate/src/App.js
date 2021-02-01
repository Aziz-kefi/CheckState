import React, { Component } from 'react';
import './App.css';
import picture from './PDP.jpg' ; 


class App extends Component {
  Person = {
    fullName: "Kéfi Mohamed Aziz" ,
    bio : "Just a random person",
    profession : "Student in GO MY CODE(and ESPRIT )",
    imgSrc : picture
  };
 
    constructor( props ){
        super( props )
        this.state = { show : false , seconds: 0, interval : null};
        
    }

    toggleDiv = () => {
        const { show,interval } = this.state;
        this.setState( { show : !show} )
        if (!show)
        {
            this.setState({ interval: setInterval(() => {
            this.setState({seconds : this.state.seconds+1})
            }, 1000)
            
        })}
        else 
        {
          clearInterval(interval);
          this.setState({seconds:0});
          
        }
        
    }
 componentDidMount(){
   console.log('component is mounted')
 }
 componentDidUpdate(){
   console.log('component is updated')
 }
componentWillUnmount(){
  console.log('component is unmounted')
}
    render() {
      if (this.state.show ) 
        {
          return (
  
              <div className="container">
                  <br />
                  <div className="chrono"> 
                 
                    <p>{this.state.seconds}</p>
                  </div>
                  <button onClick={ this.toggleDiv } className="btn btn-success"> Profile</button>
                  
                  { this.state.show && <h1>Hello {this.Person.fullName}</h1> }
                  { this.state.show && <p>I'm  {this.Person.bio}</p>  }
                  { this.state.show && <p>I'm a GMC and ESPRIT student{this.Person.profession}</p>  }
                  { this.state.show && <img src={this.Person.imgSrc} alt="PDP" width="320px" />  }

              </div>
  
          );
        }  
      else 
        {
          return (
            <div className="container">
               <button onClick={this.toggleDiv } className="btn btn-success"> SHOW PROFILE</button>
            </div>
            )
        }
  
  }
}

export default App;