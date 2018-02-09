
import React,{Component} from "react"
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch,
  NavLink
} from "react-router-dom"
import Loadable from 'react-loadable';
import "./footer.css"
import Position from "../pages/Position"
//import Search from "../pages/Search"
//import My from "../pages/My"
import Detali from "../pages/detali"
import App from "../App"

const Search = Loadable({
  loader: () => import('../pages/Search'),
  loading: () => <div>Loading...</div>,
});
const My = Loadable({
  loader: () => import('../pages/My'),
  loading: () => <div>Loading...</div>,
});

class Footer extends Component{
	constructor(){
		super()
	}

	componentWillMount(){
		    
	}


	componentDidMount(){
		var url = window.location.pathname.slice(1,7)
if(url =="detali"){
  console.log("aaa")
  var html = document.getElementById("div")
		var footer = document.querySelectorAll("Footer")
		console.log(html,footer[0])
		html.removeChild(footer[0])

}
		
	}

	render(){
		
		return(
			<Router>
			<div id="div">
			<Switch>
			<Route path="/postion" component={Position} />
		 	<Route path="/search" component={Search} />
		 	<Route path="/my" component={My} />
		 	<Route path="/app" conponet={App} />
		 	<Route path="/detali/:positionId" component={Detali} />
		 	
		 	<Redirect exact path="/" to="/app" />
		 	<Route render={()=>{return <div>  404 ！</div>}} />
		 	</Switch>
		 <footer>
		 	



          <ul className="footer_ul">
              <li><Link to="/postion">职位</Link></li>
              <li><Link to="/search">搜索</Link></li>
              <li><Link to="/my">我的</Link></li>

          </ul>
       </footer>
       	</div>
       </Router>
			)
	}
}

export default Footer