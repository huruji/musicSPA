import React,{Component} from 'react';
import {connect} from 'react-redux';
import ListContent from '../Components/ListContent';

class Search extends Component{
  constructor(){
    super();
  }
  render(){
    console.log('search');
    console.log(this.props);
    let searchInfo = null;
    if(this.props.keyword){
      searchInfo = <div>搜索 <span>&quot;{this.props.keyword}&quot;</span>，找到 {this.props.songList.length} 首单曲</div>
    }
    return(
        <div>
          <div className="search-header">
            {searchInfo}
          </div>
          <ListContent listContent={this.props.songList} themeColor={this.props.themeColor} showDuration="none" loveSearchList={this.props.loveSearchList}/>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  const searchList = state.SearchList;
  const themeColor = state.Setting.themes[state.Setting.curThemeIndex].color;
  return{
      songList:searchList.searchSongList,
      keyword: searchList.searchKeyword,
      loveSearchList: searchList.searchSongList,
      themeColor
  }
};
const mapDispatchToProps = (dispatch) => {
  return {}
};
export default  connect(mapStateToProps, mapDispatchToProps)(Search);