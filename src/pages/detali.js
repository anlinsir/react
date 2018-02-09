import React, { Component } from 'react';
import axios from "axios"
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch,
  NavLink
} from "react-router-dom"
import "./detali.css"
import Header from "../component/Header"



class Detali extends Component {
  constructor(){
    super()
    this.state = {
        list:[]
    }

  }

  componentWillMount(){


    var  _this = this
    axios.post("/api/positionlist").then(function(data){
        data = data.data.data.content.data.page.result
        console.log(data)
          for(var i in data){
          if(_this.props.match.params.positionId == data[i].positionId){
              _this.setState({
                list:data[i]
              })
   

          }
        }
      
    })
  }
    



  render() {
    this.state.list = [this.state.list]
    console.log(this.state.list)
        var li = this.state.list.map(function(item,index){           
            return  (
                  <div id="content" key="index">
            <div className="postitle">
            <h2 className="title">{item.companyFullName}</h2>
            <div className="collicon activeable">
                <span className="icon notcoll"></span>
                <span className="text">
                                            未收藏
                                    </span>
            </div>
        </div>
          
          
          <div className="detail">
            <div className="items">
                                    <span className="item salary">
                        <em className="icon"></em>
                        <span className="text">{item.salary}</span>
                    </span>
                                                    <span className="item workaddress">
                        <em className="icon"></em>
                        <span className="text">{item.city}</span>
                    </span>
                                                    <span className="item jobnature">
                        <em className="icon"></em>
                        <span className="text">全职</span>
                    </span>
                                                    <span className="item workyear">
                        <em className="icon"></em>
                        <span className="text">3-5年</span>
                    </span>
                                                    <span className="item education">
                        <em className="icon"></em>
                        <span className="text">
                            大专及以上                        </span>
                    </span>
                            </div>
            
            <div className="temptation">
                职位诱惑：工作开心,薪资高,氛围活力
            </div>
        </div>

          <div className="company activeable" data-lg-tj-id="19v6" data-lg-tj-no="0030" data-lg-tj-cid="263135">
            <img src={"//static.lagou.com/"+item.companyLogo} alt="" className="logo" />
            <div className="desc">
                <div className="dleft">
                    <h2 className="title">
                        {item.companyName}
                    </h2>
                    <p className="info">
                    移动互联网,文化娱乐/ 天使轮/ 15-50人
                    </p>
                </div>
                </div>
        </div>
            <div className="positiondesc">
            <header className="header">
                职位描述
            </header>
            <div className="content">
                <p>（一）岗位职责</p>
<p><br/></p>
<p>1.负责公司自媒体微信公众号账号和微博运营，提高关注度和用户转化率，包括日常内容选题、排版编辑、校对、圈粉、发布、维护、互动。</p>
<p><br/></p>
<p>2.负责微信、微博话题策划、执行和业务需求的功能迭代对接、跟进。</p>
<p><br/></p>
<p>3.开展阶段性组织的多号（大小号）联动推广及运营，并进行跟进执行和统计。</p>
<p><br/></p>
<p>4.利用微信平台推广公司的课程和活动。</p>
<p><br/></p>
<p>5.跟踪微信推广效果，提升数据的使用率，建立有效运营手段提升用户活跃度，增加粉丝数量。</p>
<p><br/></p>
<p>6.协助平台各渠道和各部门定期策划并执行营销活动，配合公司的课程推广、大型活动、合作项目、网站整体宣传和品牌推广。</p>
<p><br/></p>
<p>（二）任职要求</p>
<p><br/></p>
<p>1.大专及以上学历，3年及以上相关工作经验，有微博微信运营成功案例经验者优先。</p>
<p><br/></p>
<p>2.有新闻敏感性和文字功底，能抓热点事件，借力宣传公司微博和微信，提高微信影响力和粉丝量。</p>
<p><br/></p>
<p>3.具有较好的原创内容编辑、较强的选题、策划、编辑撰写能力。</p>
<p><br/></p>
<p>4.具备强烈责任心，丰富创造力。</p>
<p><br/></p>
<p>5.对知识付费行业有热情！</p>
<p><br/></p>

            </div>
        </div>







          </div>

              )
        })
      // console.log(this.props.match.params.positionId)
    return (

      <div className="App">
          <Link to="/app/postion"><Header font="职位详情"/></Link>
          {li}
          <div className="detali_footer">
              <button>投递简历</button>

          </div>
      </div>
    );
  }
}

export default Detali;
