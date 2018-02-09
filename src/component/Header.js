

import React,{Component} from "react"
import './Header.css'

class Header extends Component{
	constructor(){
		super()
	}
	render(){
		
		return(
				<div>
					<div className="header">
						<p>{this.props.font}</p>
					</div>
				</div>
			)
	}
}

export default Header