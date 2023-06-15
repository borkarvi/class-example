import React from 'react';
import './App.css';
import UserData from './component/UserData/UserData';

class App extends React.Component{


   constructor(props){
    super(props)

    this.state = {
      fname: 'ARC',
      lname: 'VIGO'
    };
   }

   render(){
console.log('called')
    const changeFnameToLowerCase = () => {
      console.log('called')
       this.setState({fname: this.state.fname.toLowerCase()})
    }
    return(
      <div>
        {/* <h1>This is class App {this.state.fname + ' ' + this.state.lname.toLowerCase()}</h1> */}
        <h1>
          This is class App {" "}
          {`${this.state.fname} - ${this.state.lname.toLowerCase()}`}{" "}
          </h1>
          <br/>
          <button onClick={changeFnameToLowerCase}>changeFnameToLowerCase</button>

        <UserData username ='arc'/>
      </div>
    )
   }
}
export default App;
