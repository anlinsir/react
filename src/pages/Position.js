
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
import PositionList from "../component/PositionList"
import Detali from "./detali"
import axios from "axios"
import Bpp from "./app"
class Position extends Component{
	constructor(){
		super()
		this.state ={
			html:[],
			count:5
		}
		this.change = this.change.bind(this)
		this.more = this.more.bind(this)
		this.edit =this.edit.bind(this)
	}

	componentWillMount(){
		var _this = this

		axios.post("/api/positionlist").then(function(data){		
			data = data.data.data.content.data.page.result			
			var sss = []
				for(let i = 0 ;i<=_this.state.count-1;i++){
					sss.push(data[i])
				}
			_this.setState({
				html:sss,
				count:_this.state.count+5
			})
		})
	}
	change(id){

			var html = {}
			console.log(this.props)
		for(var i in this.state.html){
			if(id == this.state.html[i].positionId){
				 html = this.state.html[i]
				 this.props.history.replace(`/app/detali/${this.state.html[i].positionId}`)
			}
		}
	}
	more(){
		var _this = this
		axios.post("/api/positionlist").then(function(data){		
			data = data.data.data.content.data.page.result			
			var dd = []
			console.log(_this.state.count)
				for(var i = 0; i<=_this.state.count-1;i++){
					dd.push(data[i])								
				}
			_this.setState({
				html:dd,
				count:_this.state.count+5
			})
				
					
		})
				}
	

	edit(){
		window.location = "/eidt"
	}
	render(){
		
			var _this = this
		var li = this.state.html.map(function(item,index){
					return <PositionList onchange={_this.change} item={item} key={index}/>
				})	
				
		return(
			
				<div>
				
				
					  <Header className font="拉勾网"/>
				
					{localStorage.user?<div className="custom-info">
            <span className="info">10秒钟定制职位</span>
            <a className="go">
                <em className="icon"></em>
                <em className="text" onClick={this.edit}>编辑</em>
            </a>
        </div>:""}
		{localStorage.type || localStorage.location || localStorage.salaty || localStorage.size ?<div className="blink_box">
				以根据
				<span className="blink">{localStorage.type?localStorage.type:""}</span>
				<span className="blink">{localStorage.location?localStorage.location:""}</span>
				<span className="blink">{localStorage.salaty?localStorage.salaty:""}</span>
				<span className="blink">{localStorage.size?localStorage.size:""}</span>



				为您匹配
			</div>:""}



					<ul className="list">
					  {li}

					  <li onClick={this.more}  className="activeable list-more">加载更多</li>
					
					  <div id="copyright"><p>©2015 lagou.com, all right reserved </p><div className="copyright-item"><span className="phone active">移动版&nbsp;·&nbsp;</span><span className="computer">电脑版&nbsp;·&nbsp;</span><a href="#header">回顶部</a></div></div>
					  </ul>
       					
				</div>

			)
	}



}

export default Position