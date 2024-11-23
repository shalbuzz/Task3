import { Component } from "react";

class Experience extends Component{
  clickHandler = (event)=>{
        console.log('Button click!')
      }
    render(){
      
        return(
            <div className="experience">

             
            <h2>İş Təcrübəsi</h2>
            <ul>
              <li>Frontend Developer, ABC Şirkəti (2020-2023)</li>
              <li>UI/UX Dizayner, XYZ Agentliyi (2017-2020)</li>
            </ul>
            <button type="button" onClick={this.clickHandler}>Button click!!</button>
          </div>
          
        )
    }
}
export default Experience;