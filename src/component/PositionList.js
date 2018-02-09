


import React,{Component} from "react"
import "./PositionList.css"
class PositionList extends Component{
	constructor(){
		super()
		this.positiondetali = this.positiondetali.bind(this)
		
	}	
	render(){
			var {item}  =this.props
			
		return(
				<div>
					<li onClick={this.positiondetali} className="activeable list-item" data-positionid={item.positionId} data-companyid={item.companyId}>
            <img src={"https://static.lagou.com/"+item.companyLogo} className="item-logo" />
            <div className="item-desc">
                <h2 className="item-title">{item.companyFullName}</h2>
                <p className="item-info">
                    <span className="item-pos">
                        {item.positionName} [ {item.city} ]
                    </span>
                    <span className="item-salary">{item.salary}</span>
                </p>
                <p className="item-time">{item.createTime}</p>
            </div>
        </li>
			

       					
				</div>
			)
	}
	positiondetali(e){
		this.props.onchange(this.props.item.positionId)
		
	}




}

export default PositionList