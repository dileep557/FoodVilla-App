import React from "react";

//******************* ClassBased Component  ******************************//
class ProfileClass extends React.Component{
    constructor(props){
        super(props);

        //*****  create state variable inside class based Component ******//
        this.state={
            count:0,
            count2:0,
        };
        console.log("constructor");
    }

    componentDidMount(){ //****  FIRST RENDER THEN CALL COMPONENTDIDMOUNT   *****// 
        // API calls HERE
        console.log("commponenet APi calls here");
    }

    render(){
        console.log("render");
        const {count}= this.state;
        return(
            <div>
                <h1>profile Class component</h1>
                <h2>name: {this.props.name}</h2>
                <h2>count: {count}</h2>
                <button onClick={()=>{
                    this.setState({
                      // WE DO NOT MUTATE STATE DIRECTLY         //  
                      // Never set the value like this -> this.State=2 //
                        count:1,
                        count2:1
                    })
                }}>count</button>
            </div>
        )
    }
}

export default ProfileClass;