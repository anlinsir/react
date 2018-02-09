import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch,
  NavLink
} from "react-router-dom"
import logo from './logo.svg';
import './App.css';


import Bpp from "./pages/app"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Eidt from "./pages/Eidt"

import EidtPages from "./pages/eidtpage"

var footer = document.querySelectorAll("Footer")
console.log(footer)
var url = window.location.pathname.slice(1,7)
if(url =="detali"){
  console.log("aaa")
}



class App extends Component {
  constructor(){
    super();
    
  }
  
  render() {
    return (

      <Router>
      <div className="App">
      <Switch>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/eidt" component={Eidt} />  
    
      <Route path="/app" component={Bpp} />
      
      <Redirect exact path="/" to="/app" />

      /*<Route render={()=>{return <div>  404 ！</div>}} />*/
      </Switch>
     
        </div>
       </Router>
    );
  }
}

export default App;
