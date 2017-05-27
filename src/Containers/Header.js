import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchSearch} from '../redux/Search'

class Header extends Component{
  constructor() {
    super();
    this.state = {searchValue: '', themeShow: false};
    this.handleChange = this.handleChange.bind(this);
    this.handleSearchClick = this.handleSearchClick.bind(this);
    this.toggleThemeShow = this.toggleThemeShow.bind(this);
  }
  handleChange(event){
    this.setState({searchValue:event.target.value});
  };
  handleSearchClick(){
    this.props.fetchSearchSong(this.keyword.value);
  };

  toggleThemeShow(){
    this.setState((prevState) => {return {themeShow: !prevState.themeShow}})
  }
  render(){
    return(
      <div className="header clear-float">
        <div className="logo">
          醉城音乐
        </div>
        <div className="header-nav-btn" style={{float:'left'}}>
          <span onClick={() => history.back()}>
            <i className="iconfont">&#xf0343;</i>
          </span>
          <span onClick={() => history.go(1)}><i className="iconfont">&#xf0344;</i></span>
        </div>
        <div className="searchArea">
          <input type="text" placeholder="搜索音乐，歌手，歌词" className="searchInput"  value={this.state.searchValue} ref={(keyword) => this.keyword = keyword} onChange={this.handleChange}/>
          <Link to='/search' className="searchBtn" onClick={this.handleSearchClick}/>
        </div>
        <div className="setting-area" style={{position:'relative'}}>
          <span onClick={this.toggleThemeShow}>
            <i className="iconfont">&#xe635;</i>
            <div className="theme-container" style={{display:this.state.themeShow ? 'block' : 'none'}}>
              <ul className="clear-float">
                <li><span>酷炫黑</span></li>
                <li><span>官方红</span></li>
                <li><span>可爱粉</span></li>
                <li><span>天空蓝</span></li>
                <li><span>清新绿</span></li>
                <li><span>土豪金</span></li>
              </ul>
            </div>
          </span>
          <span><i className="iconfont">&#xe65c;</i></span>
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
