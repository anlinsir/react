



import React,{Component} from "react"
import Loginheader from "../component/loginheader"
import "./Login.css"
import LoginInput from "../component/logininput"

class Register extends Component{
	constructor(){
		super()
		this.register = this.register.bind(this)
		this.index = this.index.bind(this)
	}
	render(){
		var {match} = this.props;
		return(
			<div className="wrap">
				<Loginheader className="left" register={this.register} now="拉勾注册" choose="登录"/>
				<div className="box">
				<span className="span ">666</span>
				<LoginInput type="text" pl="phone"/>
				</div>
				<div className="box ">
				<LoginInput type="text" pl="root"/>
				<span className="span">952233</span>
				</div>
				<div className="box">
				<LoginInput type="text" pl="roottp"/>
				<span className="span">555665</span>
				</div>
				<p className="yes">注册拉勾代表你已同意《拉勾用户协议》</p>
				<button className="btn2">注册</button>
				<button onClick={this.index} className="btn1 fixed" >首页</button>

			</div>
			)
	}
	index(){
		window.location="/"
	}
	register(name){
		window.location = "/login"
	}
}

export default Register
