import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component{
  constructor() {
    super();
    this.state = {searchValue: ''};
  }
  handleChange(event){
    this.setState({searchValue:event.target.value});
  }
  render(){
    return(
      <div className="header">
        <div className="logo">
          Baidu音乐API
        </div>
        <div className="searchArea">
          <input type="text" placeholder="搜索音乐，歌手，歌词" className="searchInput"  value={this.state.searchValue} onChange={this.handleChange}/>
          <Link to='/search' className="searchBtn"/>
        </div>
      </div>
    )
  }
}


export default Header;
