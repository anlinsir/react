import React,{Component} from "react"
import "./eidt.css"
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch,
  NavLink
} from "react-router-dom"
import Header from "../component/Header"

class EidtPages extends Component{
	constructor(){
		super()
		this.state = {
			typeshow:true,
			typelist:["产品经理","Java",'运营','Android','PHP','UI','IOS','编辑','BD']
			,locationshow:true,
			locationlist:["北京","上海","广州","深圳","成都","杭州","保定","北海","北京","包头","长春","成都","常德","承德","重庆","长沙","常州","沧州","滁州","郴州","东莞","大连","东营","德阳","德州","达州","佛山","阜阳","福州","桂林","贵阳","广州","赣州","淮安","邯郸","哈尔滨","合肥","黄冈","呼和浩特","海口","衡阳","河源","杭州","惠州","湖州","菏泽","金华","江门","荆门","济南","济宁","嘉兴","荆州","昆明","廊坊","丽水","洛阳","临沂","连云港","兰州","柳州","泸州","马鞍山","绵阳","梅州","宁波","南昌","南充","南京","南宁","南通","南阳","莆田","青岛","黔东南","秦皇岛","清远","泉州","日照","韶关","上海","石家庄","遂宁","汕头","绍兴","沈阳","三亚","深圳","苏州","泰安","天津","唐山","太原","台州","泰州","潍坊","武汉","芜湖","威海","乌鲁木齐","无锡","温州","西安","香港","厦门","西宁","邢台","新乡","信阳","襄阳","咸阳","徐州","银川","盐城","宜昌","营口","烟台","岳阳","扬州","淄博","珠海","镇江","湛江","肇庆","中山","遵义","郑州","漳州","株洲"]
			,salaryshow:true,
			salarylist:["没有要求",'2k以下','2k-5k','5k-10k','10k-15k','15k-25k','25k-50k','50k以上']
			,sizeshow:true,
			sizelist:{"没有要求":"","初创型":"(天使轮及未融资)","成长型":"(A轮或B轮融资)","成熟型":"(C轮融资以上但未上市)","上市公司":""}
		}
		this.click = this.click.bind(this)
		this.typeshow = this.typeshow.bind(this)
		this.locationshow = this.locationshow.bind(this)
		this.salaryshow = this.salaryshow.bind(this)
		this.sizeshow = this.sizeshow.bind(this)
		this.index = this.index.bind(this)

		this.localtype = this.localtype.bind(this)
		this.locallocation = this.locallocation.bind(this)
		this.localsalaty = this.localsalaty.bind(this)
		this.localsize = this.localsize.bind(this)

	}
	index(){
		this.props.history.push("/app/postion")
		//window.location = "/app/postion"
	}
	typeshow(){
		this.setState({
			typeshow:!this.state.typeshow
		})
	}
	locationshow(){
		this.setState({
			locationshow:!this.state.locationshow
		})
	}
	salaryshow(){
		this.setState({
			salaryshow:!this.state.salaryshow
		})
	}
	sizeshow(){
		this.setState({
			sizeshow:!this.state.sizeshow
		})
	}

	click(){
		console.log("aaaa")
	}


	localtype(e){
	localStorage.type = e.target.innerHTML
	this.typeshow()
	}
	locallocation(e){
	localStorage.location = e.target.innerHTML
	this.locationshow()
	}
	localsalaty(e){
	localStorage.salaty = e.target.innerHTML
	this.salaryshow()	
	}
	localsize(e){
		if(e.target.firstChild.nodeValue.length>=5){
			return
		}
	localStorage.size = e.target.firstChild.nodeValue
	console.log(e.target.firstChild.nodeValue)
	this.sizeshow()
	}








	render(){
		var _this = this
		var typelist = this.state.typelist.map(function(item,index){
					return <li onClick={_this.localtype} key={index}>{item}</li>
				})
		var locationlist = this.state.locationlist.map(function(item,index){
			return 	<li key={index} onClick={_this.locallocation}>{item}</li>
		})
		var salarylist = this.state.salarylist.map(function(item,index){
			return <li key={index} onClick={_this.localsalaty}>{item}</li>
		})


		var type = []
		var detali = []
		for(var i in this.state.sizelist){
			type.push(i)
			detali.push(this.state.sizelist[i])
		}
		var sizedetali = detali.map(function(item,index){
			return item
		})
		var sizetype = type.map(function(item,index){
			return <li key={index} onClick={_this.localsize}>{item}<span className="color">{sizedetali[index]}</span></li>
		})

		return(

			<div>

			<Link to="/eidt"><Header font="设置定制信息"/ ></Link>
	

				{this.state.typeshow && this.state.locationshow && this.state.salaryshow && this.state.sizeshow?<div className="contain">
				<div className="positionType position">
					<p className="small">职位类型</p>
					<a className="fastclick title" onClick={this.typeshow}>{localStorage.type?localStorage.type:<span>请选择职位类型</span>}</a>
				</div>
				<div className="positionlocation position">
					<p className="small">工作地点</p>
					<a className="fastclick location" onClick={this.locationshow}>{localStorage.location?localStorage.location:<span>请选择工作地点</span>}</a>
				</div>
				<div className="positionsalary position">
					<p className="small">理想薪水</p>
					<a className="fastclick salary" onClick={this.salaryshow}>{localStorage.salaty?localStorage.salaty:<span>请选择理想薪水</span>}</a>
				</div>
				<div className="positionsize position">
					<p className="small">公司规模</p>
					<a className="fastclick size" onClick={this.sizeshow}>{localStorage.size?localStorage.size:<span>请选择公司规模</span>}</a>				
				</div>

			</div>:""}


			{this.state.typeshow?"":
			<div className="dahezi">
				<div className="bigtitle">想要找什么职位呢</div>
				<div className="iiiii">
				<input className="want" type="text" placeholder="想要找什么样的工作呢"/>
				<button className="returnbtn" onClick={this.typeshow}>OK!</button>
				</div>
				<ul className="positionTypes">{typelist}</ul>
			</div>}

			

			{this.state.locationshow?"":
			<div className="dahezi">
				<div className="bigtitle">告诉我期望的工作地点</div>
				<div className="iiiii">
				<input className="want" type="text" placeholder="告诉我期望的工作地点"/>
				<button className="returnbtn" onClick={this.locationshow}>OK!</button>
				</div>
				<ul className="positionTypes">{locationlist}</ul>
			</div>}

			{this.state.salaryshow?"":
			<div className="dahezi">
				<div className="bigtitle">你值得生活的更好，告诉我你期望的工资</div>
				<div className="iiiii">
				<input className="want" type="text" placeholder="你值得生活的更好，告诉我你期望的工资"/>
				<button className="returnbtn" onClick={this.salaryshow}>OK!</button>
				</div>
				<ul className="positionTypes">{salarylist}</ul>
			</div>}



			{this.state.sizeshow?"":
			<div className="dahezi">
				<div className="bigtitle">对公司的规模有何要求</div>
				<div className="iiiii">
				<input className="want" type="text" placeholder="对公司的规模有何要求"/>
				<button className="returnbtn" onClick={this.sizeshow}>OK!</button>
				</div>
				<ul className="positionTypes">
					{sizetype}
				</ul>
			</div>}

			{this.state.typeshow && this.state.locationshow && this.state.salaryshow && this.state.sizeshow?
				<button className="start" onClick={this.index}>开始搜索</button>
				:""}
			</div>
			)
	}
}


export default EidtPages