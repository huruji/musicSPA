import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchSearch} from '../redux/Search'

class Header extends Component{
  constructor() {
    super();
    this.state = {searchValue: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSearchClick = this.handleSearchClick.bind(this);
  }
  handleChange(event){
    this.setState({searchValue:event.target.value});
  };
  handleSearchClick(){
    this.props.fetchSearchSong(this.keyword.value);
  };
  render(){
    return(
      <div className="header">
        <div className="logo">
          Baidu音乐API
        </div>
        <div className="searchArea">
          <input type="text" placeholder="搜索音乐，歌手，歌词" className="searchInput"  value={this.state.searchValue} ref={(keyword) => this.keyword = keyword} onChange={this.handleChange}/>
          <Link to='/search' className="searchBtn" onClick={this.handleSearchClick}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{}
};
const mapDispatchToProps = (dispatch) => {
  return{
    fetchSearchSong: (keyword) => dispatch(fetchSearch(keyword))
  }
};
export default connect(mapStateToProps,mapDispatchToProps)(Header);
