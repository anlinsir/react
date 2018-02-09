

import React,{Component} from "react"
import Header from "../component/Header"
import SearchInput from "../component/SearchInput"
import PositionList from "../component/PositionList"
import "./search.css"
import axios from "axios"


class City extends Component{
	constructor(){
		super()
		this.City = this.City.bind(this)
	}
	City(city){
		this.props.search(city)
	}
	render(){
		console.log(this.props.city)
		var _this = this
		var li = this.props.city.map(function(item,index){
			return <OnCity City={_this.City} item={item} key={index}/>
		})
		return(
			<div>
			{li}
			</div>
			)
	}
}
class OnCity extends Component{
	constructor(){
		super()
		this.city = this.city.bind(this)
	}
	city(city){
		this.props.City(city)
	}
	render(){	
		var {item} = this.props
		var _this = this 
		var lis = item.cityList.map(function(item,index){
			return <SmCity city={_this.city} item={item} key={index}/>
		})
		return(

			<div className="city_div">
				<p style={{color:"#aaa"}}>{item.nameStr}</p>
				<ul className="city_ul">
					{lis}
				</ul>
			</div>
			)
	}
}

class SmCity extends Component{
	constructor(){
		super()
		this.click= this.click.bind(this)
	}
	click(e){
		this.props.city(e.target.innerHTML)
	}
	render(){
		var {item} = this.props
		return(
			<li onClick={this.click}>
				{item}

			</li>
		)
	}
}

		var list = []
		
		localStorage.init = "历史记录"
		localStorage.aa = localStorage.aa?localStorage.aa:localStorage.init



class Local extends Component{
	constructor(){
		super()
		this.put = this.put.bind(this)
		this.close = this.close.bind(this)
	}
	render(){
			var {item} = this.props
		return(

			<li onClick={this.put}  className="a">{item}{localStorage.search?<span onClick={this.close} className="search_span">X</span>:""}</li>
		)
	}
	close(e){		
		var num =localStorage.search.indexOf(this.props.item)
		if( num != -1){
			console.log(num)
		localStorage.search = localStorage.search.split(',').filter(function(item,index){
			return  num != index 
		})
		console.log(localStorage.search)
		this.props.changeS(localStorage.search)

						
		}
	}

	put(e){
		var html = e.target.firstChild.nodeValue
		this.props.onbou(html)
	}
}







	class Search extends Component{
	constructor(){
		super()
		this.state ={
			city:[{"cityList":["北京","上海","广州","深圳","成都","杭州"],"name":"热门城市","nameStr":"热门城市"},{"cityList":["保定","北海","北京","包头","长春","成都","常德","承德","重庆","长沙","常州","沧州","滁州","郴州","东莞","大连","东营","德阳","德州","达州","佛山","阜阳","福州"],"name":"","nameStr":"ABCDEF"},{"cityList":["桂林","贵阳","广州","赣州","淮安","邯郸","哈尔滨","合肥","黄冈","呼和浩特","海口","衡阳","河源","杭州","惠州","湖州","菏泽","金华","江门","荆门","济南","济宁","嘉兴","荆州"],"name":"","nameStr":"GHIJ"},{"cityList":["昆明","廊坊","丽水","洛阳","临沂","连云港","兰州","柳州","泸州","马鞍山","绵阳","梅州","宁波","南昌","南充","南京","南宁","南通","南阳"],"name":"","nameStr":"KLMN"},{"cityList":["莆田","青岛","黔东南","秦皇岛","清远","泉州","日照"],"name":"","nameStr":"OPQR"},{"cityList":["韶关","上海","石家庄","遂宁","汕头","绍兴","沈阳","三亚","深圳","苏州","泰安","天津","唐山","太原","台州","泰州"],"name":"","nameStr":"STUV"},{"cityList":["潍坊","武汉","芜湖","威海","乌鲁木齐","无锡","温州","西安","香港","厦门","西宁","邢台","新乡","信阳","襄阳","咸阳","徐州","银川","盐城","宜昌","营口","烟台","岳阳","扬州","淄博","珠海","镇江","湛江","肇庆","中山","遵义","郑州","漳州","株洲"],"name":"","nameStr":"WXYZ"}]
			,value:"",
			search:[],
			show:false,
			c:false,
			choose:"",
			html:[],
			hshow:false,
			local:[]

		}
		this.getCity = this.getCity.bind(this)
		this.change = this.change.bind(this)
		this.clicksearch = this.clicksearch.bind(this)
		this.search = this.search.bind(this)
		this.changes = this.changes.bind(this)
		this.fou = this.fou.bind(this)
		this.bou = this.bou.bind(this)
		this.changesss =this.changesss.bind(this)
		this.bl = this.bl.bind(this)
	}
	search(c){
		console.log(c)
		this.setState({
			show:!this.state.show,
			choose:c,
			c:!this.state.c
		})
	}
	bl(){
		this.setState({
			hshow:false
		})
	}
	
	componentWillMount(){
		var _this = this

		axios.post("/api/positionlist").then(function(data){		
			data = data.data.data.content.data.page.result			
			_this.setState({
				html:data
			})		
		})
	}
	changes(id){

			var html = {}
		for(var i in this.state.html){
			if(id == this.state.html[i].positionId){
				 html = this.state.html[i]
				 this.props.history.replace(`/app/detali/${this.state.html[i].positionId}`)
			}
		}
	}

	bou(html){
		if(html === "X"){
			return
		}
		this.setState({
			hshow:false,
			value:html
		})
	}



	changesss(val){
		console.log(val)
		this.setState({
			local:val.split(",")
		})
	}

	render(){

		var _this = this
			var li = this.state.city.map(function(item,index){
				return <SearchInput item={item.cityList  } key={index}/>
			})
			var ss = this.state.search.map(function(item,index){				
				return <PositionList onchange={_this.changes} item={item} key={index}/>
			})
			if(this.state.local){
			var aa =this.state.local.map(function(item,index){
				return	<Local changeS={_this.changesss} onClick={_this.clicksearch} onbou={_this.bou}  item={item} key={index} /> 
				 
				})	
			}
		return(
				
				<div>
					<Header font="拉勾网" />
					<ul className="search_ul">
    					<li onClick={this.getCity} className="li1">{this.state.c?this.state.choose:"全国"}</li>
    					<li  className="li2"><input  value={this.state.value}  onFocus={this.fou} style={{color:"#404040"}}  onChange={this.change} type="text" placeholder="search"/><button className="search_btn" onClick={this.clicksearch}>now job</button></li>
    				</ul>
					{this.state.hshow?<ul className="history">
							
						{localStorage.search?aa:""}
					</ul>:""}



					<ul className="list">
						{ss}
						{ss.length?<li  className="activeable list-more">加载更多</li>:""}	
					</ul>
					{this.state.show?<ul  className="city">
						<City  search={this.search} city={this.state.city} />
						
					</ul>:""}
					

				</div>
			)
	}
	fou(){
		this.setState({
			show:false,
			hshow:true
		})
	}

	getCity(){
		this.setState({
			show:!this.state.show
		})

	}



	clicksearch(e){
		console.log("aaa")
		 e.preventDefault();
		 if(!this.state.value){
			alert("inoput")
			return
		}
		 this.setState({
		 	hshow:false
		 })
		if(list.indexOf(this.state.value) == -1){
			list.push(this.state.value)
		}
		
		var bb = localStorage.search?localStorage.search.split(",").concat(list):list
		bb = new Set(bb)
		bb = Array.from(bb)
		localStorage.search = bb
		this.setState({
			local:localStorage.search.split(",")
		})
		
		
		var  _this = this
		console.log(this.state.value)
		
		axios.post("/api/positionlist").then(function(data){
			data = data.data.data.content.data.page.result		
			console.log(data)
			var li = data.filter(function(item){
				return item.positionName.indexOf(_this.state.value) != -1 || item.city.indexOf(_this.state.value) != -1 || item.companyFullName.indexOf(_this.state.value) != -1 || item.salary.indexOf(_this.state.value) != -1

			})
			_this.setState({
				search:li
			})
			
		})

			
		
			
	}

	change(e){

		this.setState({
			value:e.target.value
		})
		
	}

}





export default Search