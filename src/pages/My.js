

import React,{Component} from "react"
import Header from "../component/Header"
import "./My.css"
class My extends Component{
	constructor(){
		super()
        this.state = {
            user:localStorage.user
        }
        this.click =this.click.bind(this)
        this.exit = this.exit.bind(this)
	}
    click(){
        window.location = "/login"
    }
    exit(){
        localStorage.removeItem("user")
        this.setState({
            user:""
        })
    }



	render(){
		return(

			<div>
			<Header font="拉勾网"/>
			<div id="content">
        
        <div className="logininfo">
                <div className="nologin center">
                    <a className="loginbut" onClick={this.click}  target="_self">{this.state.user?this.state.user+"/切换":"登录 / 注册"}</a>
                </div>
                    </div>
        
        
        <div className="buttons">
            
            <a className="button deliver" >
                <span>投递</span>
                
                
            </a>
            <a className="button interview" >面试</a>
            
            <a className="button invitation" >
                <span>邀约</span>
                            </a>
            
            <a className="button collect">收藏</a>
            
            </div>
            {this.state.user?<a onClick={this.exit} className="button exit" id="exit">退出</a>:""}
            </div>
            </div>
			)
	}
}

export default My