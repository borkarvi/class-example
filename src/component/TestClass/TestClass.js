import React from "react";

class TestClass extends React.Component{
    username1 = ''
    constructor(props){
        super(props)
        this.username1 = props.username;
        console.log('props' , props)
    };

    render(){
        return(
            <div>
                <p>Test class inside FC {this.username1}</p>
                <p>add with testData = {this.props.val + 2}</p>
            </div>
        )
    }
};
export default TestClass;