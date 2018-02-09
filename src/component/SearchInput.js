

import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch,
  NavLink
} from "react-router-dom"

import "./SearchInput.css"


class SearchInput extends Component {
	constructor(){
		super()
		
	}


  render() {
  	var {item} = this.props;
    console.log(item)
    
    return(
         <li className="searchLi">{item}</li>
    )
   

    
  }
   
 
}

export default SearchInput;
