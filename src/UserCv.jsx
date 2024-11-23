import { Component } from "react";
import PersonalInfo from "./PersonalInfo";
import Contacts from "./Contacts";
import Experience from "./Experience";



class UserCv extends Component{
    render(){
        return(
            <div className="user-cv">
        <PersonalInfo />
        <Experience />
        <Contacts />
      </div>
        );
    }
}
export default UserCv;