
// const  User = (props) => {
//     return (
//         <div>
//         <h1>{props.name}</h1>
//         <p>{props.discription}</p>
//         </div>
//     );
// };
// export default User;
// import React from "react";
import React, { useState,useEffect } from "react";


const User = (props)=>{
    const [planet,setPlanet] =useState("earth");
    
    //componenetDidMount
useEffect( () => {
    //heavy compitaion

    // setPlanet("jupter");
    console.log("component mounting");

    //componentWillUnmount
    return console.log("bye bye");
},[]);



//componenetDidUpdate
//shouldComponentUpadet
useEffect( () =>{
    console.log("planet changed");
},[planet]);
  

    return(
         <div>
              <h1>{props.name}</h1>
             <p>{props.discription}</p>
             <button onClick={() => setPlanet("pluto")}>{planet}</button>
         </div>  
  );
};



//  class User extends React.Component{
//      constructor(props){
//          super(props);

//          this.state ={
//          planet:"earth",
//          };
//          console.log("hey Im  from constructor")
//      }

//      componentDidMount(){
//          this.setState({  planet:"jupitar"});
//      }

//     //  static getDerivedStaticFromProps(prop,state)
//     //  {
//     //     console.log("hey Im  from get Derived Static From Props");
//     //      return {  planet:"jupitar"};
//     //  }
    
//      shouldComponentUpdate(nextProp,nextState)
//      {
//         console.log("hey i am from  should Component Update");
//          console.log({
//              nextProp,
//              nextState,
//     });
//         return true;
//     }

//    getSnapshotBeforeUpdate(prevProp,prevState)
//    {
//     console.log("hey i am from   get Snapshot Before Update");
//     console.log({
//         prevProp,
//         prevState,
//     });

//     return true;

//    }

//     componentDidUpdate(){
//         console.log(this.state);
//     }

//      render(){ 
//          console.log("hey I am being render()");
//          return(
//            <div>
//                <h1>{this.props.name}</h1>
//                <p>{this.props.discription}</p>
//                <h4>{this.state.planet}</h4>
//            </div>

//          );
//     }
//  }
   export default User;