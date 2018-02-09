import React,{Component} from "react"
import "./loginheader.css"
class Loginheader extends Component{
	constructor(){
		super()
		this.local = this.local.bind(this)
	}
	render(){
		return(
			<div>
			<p className="header_p">{this.props.now}<span onClick={this.local} className="header_span">{this.props.choose}</span></p>
			</div>
			)
	}
	local(e){
		 this.props.register(e.target.innerHTML)
	}
}


export default Loginheader
