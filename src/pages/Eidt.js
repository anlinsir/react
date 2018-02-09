

import React,{Component} from "react"
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch,
  NavLink
} from "react-router-dom"
import Header from "../component/Header"
import "./eidt.css"
import EidtPages from "./eidtpage"

class Eidt extends Component{
	constructor(){
		super()
			}

	render(){
		return(
			<div>
			<Switch>
			
      <Route path="/eidt/page" component={EidtPages} />
      <Redirect path="/eidt" to="/eidt/page" />


			</Switch>



			</div>
			)
	}
}

export default Eidt