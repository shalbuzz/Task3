import { Component } from "react";

class Experience extends Component{
  // state = {
  //   message: "Click here!",
  //   clicked: false
  // };
 
  // clickHandler = () => {
  //   this.setState({ message: "Clicked!", clicked: true });
  //   console.log("Clicked!")
  // };
  
    render(){
  //     const { message,clicked } = this.state;
  //     let className = "subscribe-button";
  //     if (!clicked) {
  //       className += " subscribe-button_blue";
  //     } else {
  //       className += " subscribe-button_grey";
  //     }
   

      
        return(
            <div className="experience">

             
            <h2>İş Təcrübəsi</h2>
            <ul>
              <li>Frontend Developer, ABC Şirkəti (2020-2023)</li>
              <li>UI/UX Dizayner, XYZ Agentliyi (2017-2020)</li>
            </ul>
            
          </div>
        )
        
    }
  
  }
export default Experience;