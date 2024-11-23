import { Component } from "react";
import UserCv from "./UserCv";
import "./styles.css";


class App extends Component{
  render(){
    return(
      <div className="app">
      <h1>CV - React Proqrami</h1>
      <UserCv />
    </div>
    );
  }
}
export default App;