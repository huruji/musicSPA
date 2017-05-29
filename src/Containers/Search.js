import React,{Component} from 'react';
import {connect} from 'react-redux';
import ListContent from '../Components/ListContent';
import SearchArtist from './../Components/SearchArtist';
import PleaseSearch from './../Components/PleaseSearch';

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
    let searchArtist = null, listContent = null;
    if(this.props.searchInfo.is_artist || this.props.searchInfo.is_album){
      searchArtist = <SearchArtist {...this.props.searchInfo}/>
    }
    if(this.props.searchInfo.song_list.length > 0) {
      listContent = <ListContent listContent={this.props.songList} themeColor={this.props.themeColor} showDuration="none" loveSearchList={this.props.loveSearchList}/>
    } else {
      listContent = <PleaseSearch/>
    }
    return(
        <div>
          <div className="search-header">
            {searchInfo}
          </div>
          {searchArtist}
          {listContent}
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  const searchList = state.SearchList;
  const themeColor = state.Setting.themes[state.Setting.curThemeIndex].color;
  console.log(searchList);
  return{
      songList:searchList.searchInfo.song_list,
      keyword: searchList.searchKeyword,
      searchInfo: searchList.searchInfo,
      loveSearchList: searchList.searchInfo.song_list,
      themeColor
  }
};
const mapDispatchToProps = (dispatch) => {
  return {}
};
export default  connect(mapStateToProps, mapDispatchToProps)(Search);