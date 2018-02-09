import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch,
  NavLink
} from "react-router-dom"

import "../component/footer.css"
import Position from "./Position"
import Search from "./Search"
import My from "./My"
import Detali from "./detali"
import User from "./user"






class NewApp extends Component {
  constructor(){
    super();
    
  }
  
  render() {
    return (
          <Router>
      <div id="div">
      <Switch>
      <Route path="/app/postion" component={Position} />
      <Route path="/app/search" component={Search} />
      <Route path="/app/user/:username" component={User} />
      <Route path="/app/my" component={My} />
      <Route path="/app/my/:user" component={My} />

      <Route path="/app/detali/:positionId" component={Detali} />
      <Redirect exact path="/app" to="/app/postion" />
      <Route render={()=>{return <div>  404 ！</div>}} />
      </Switch>
     <footer>
      



          <ul className="footer_ul">
              <li><NavLink to="/app/postion" activeClassName="likes">职位</NavLink></li>
              <li><NavLink to="/app/search" activeClassName="likes">搜索</NavLink></li>
              <li><NavLink to="/app/my" activeClassName="likes">我的</NavLink></li>

          </ul>
       </footer>
        </div>
       </Router>
      
    );
  }
}

export default NewApp;
