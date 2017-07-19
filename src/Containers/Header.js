import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchSearch} from '../redux/Search'
import {updateCurTheme} from './../redux/Setting';

class Header extends Component{
  constructor() {
    super();
    this.state = {searchValue: '', themeShow: false};
    this.handleChange = this.handleChange.bind(this);
    this.handleSearchClick = this.handleSearchClick.bind(this);
    this.toggleThemeShow = this.toggleThemeShow.bind(this);
    this.changeTheme = this.changeTheme.bind(this);
  }
  handleChange(event){
    this.setState({searchValue:event.target.value});
  };

  // 点击搜索
  handleSearchClick(){
    this.props.fetchSearchSong(this.keyword.value);
  };

  // 更换主题
  changeTheme(e){
    e.stopPropagation();
    const index = e.target.getAttribute('data-index');
    this.props.updateCurTheme(index);
  }

  // 更换主题面板显示影藏
  toggleThemeShow(e){
    e.stopPropagation();
    e.cancelBubble= true;
    this.setState((prevState) => {return {themeShow: !prevState.themeShow}})
  }

  render(){
    const {themes, curThemeIndex} = {...this.props};
    return(
      <div className="header clear-float" style={{background: themes[curThemeIndex].color}}>
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
          <form onSubmit={this.handleSearchClick}>
            <input type="text" placeholder="搜索音乐，歌手，歌词" className="searchInput"  value={this.state.searchValue} ref={(keyword) => this.keyword = keyword} onChange={this.handleChange}/>
          </form>
          <Link to='/search' className="searchBtn" onClick={this.handleSearchClick}/>
        </div>
        <div className="setting-area" style={{position:'relative'}}>
          <span onClick={this.toggleThemeShow} ref={(theme) => this.theme = theme}>
            <i className="iconfont">&#xe635;</i>
            <div className="theme-container" style={{display:this.state.themeShow ? 'block' : 'none'}}  onClick={(e) => e.stopPropagation()}>
              <ul className="clear-float">
                {
                  themes.map((item, i) => {
                    return (<li style={{backgroundColor: item.color}} key={i} data-index={i} onClick={this.changeTheme}><span>{item.intro}</span></li>)
                })
                }
              </ul>
            </div>
          </span>
          <span onClick={this.shiftMaxed}><i className="iconfont">&#xe65c;</i></span>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const setting = state.Setting;
  return{
    themes: setting.themes,
    curThemeIndex: setting.curThemeIndex
  }
};

const mapDispatchToProps = (dispatch) => {
  return{
    fetchSearchSong: (keyword) => dispatch(fetchSearch(keyword)),
    updateCurTheme: (index) => dispatch(updateCurTheme(index))
  }
};
export default connect(mapStateToProps,mapDispatchToProps)(Header);
