
// const  User = (props) => {
//     return (
//         <div>
//         <h1>{props.name}</h1>
//         <p>{props.discription}</p>
//         </div>
//     );
// };
// export default User;
import React from "react";

 class User extends React.Component{
     constructor(props){
         super(props);

         this.state ={
         planet:"earth",
         };
         console.log("hey Im am from constructor")
     }
     componentDidMount(){
        //  console.log("heloo i should be first");
        //  console.log("hey i am from componentDidMount");
        this.setState(
            {planet:"marse"}
        );
     }
     render(){ 
         console.log("heyI am being render()");
         return(
           <div>
               <h1>{this.props.name}</h1>
               <p>{this.props.discription}</p>
               <h4>{this.state.planet}</h4>
           </div>

         );
    }
 }
  export default User;