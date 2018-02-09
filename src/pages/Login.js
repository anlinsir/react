

import React,{Component} from "react"
import Loginheader from "../component/loginheader"
import "./Login.css"
import LoginInput from "../component/logininput"
import axios from "axios"
class Login extends Component{
	constructor(){
		super()
		this.state = {
			username:"username",
			password:""
		}
		this.register = this.register.bind(this)
		this.login = this.login.bind(this)
		this.change = this.change.bind(this)
		this.index =this.index.bind(this)
	}
	render(){
		return(
			<div className="wrap">
				<Loginheader register={this.register} now="拉勾登录" choose="注册" />
				<LoginInput name="username" onchenge={this.change} value={this.state.username} type="text" pl="username" />
				
				<LoginInput name="password" onchenge={this.change} type="password" pl="password" value={this.state.password} />
				<button onClick={this.login} className="btn1">登录</button>
				<button onClick={this.index} className="btn1 fixed" >首页</button>


			</div>
			)
	}
	register(name){
		window.location ="/register"
	}
	change(val,name){
		this.setState({
			[name]:val
		})
	}

	index(){
		window.location="/"
	}

	login(e){
		var _this =this
		var {username,password} = this.state
		axios.post("/login",{username,password}).then(function(data){
			console.log(data)
			if(data.data.code){
				alert(data.data.message)
				return
			}
			alert(data.data.message)
			localStorage.user = _this.state.username

			_this.props.history.push(`/app/my/${_this.state.username}`)

		})
	}
}

export default Login