import React,{Component} from "react"

import "./logininput.css"
class LoginInput extends Component{
	constructor(){
		super()
		this.change = this.change.bind(this)
	}
	change(e){
		this.props.onchenge(e.target.value,e.target.name)
	}
	render(){
		return(
			<input className="input" name={this.props.name} value={this.props.value} onChange={this.change} type={this.props.type} placeholder={this.props.pl}/>
			)
	}
}

export default LoginInput