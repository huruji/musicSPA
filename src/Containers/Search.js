import React,{Component} from 'react';
import {connect} from 'react-redux';
import ListContent from '../Components/ListContent';
import SearchArtist from './../Components/SearchArtist';
import PleaseSearch from './../Components/PleaseSearch';
import Hlayer from './../assets/hlayer/Hlayer';
import FetchingFailed from './../Components/FetchingFailed';

class Search extends Component{
  constructor(){
    super();
  }
  render(){
    let searchInfoContent = null;
    const {keyword, songList, searchInfo, loveSearchList, themeColor, fetching, failed} = {...this.props};
    if(fetching){
      return (
          <Hlayer type="loading" handleShow={this.handleLoadingShow} config = {{animateType: 3, time: 7000, loadingType: 2, shadow: true, loadingColor: themeColor}}/>
      )
    }
    if(failed){
      return (
          <FetchingFailed/>
      )
    }
    if(keyword){
      searchInfoContent = <div>搜索 <span>&quot;{keyword}&quot;</span>，找到 {songList.length} 首单曲</div>
    }
    let searchArtist = null, listContent = null;
    if(searchInfo.is_artist || searchInfo.is_album){
      searchArtist = <SearchArtist {...searchInfo}/>
    }
    if(this.props.searchInfo.song_list.length > 0) {
      listContent = <ListContent listContent={songList} themeColor={themeColor} showDuration="none" loveSearchList={loveSearchList}/>
    } else {
      listContent = <PleaseSearch/>
    }
    return(
        <div>
          <div className="search-header">
            {searchInfoContent}
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
  const {fetching, failed} = {...state.FetchState};
  return{
      songList:searchList.searchInfo.song_list,
      keyword: searchList.searchKeyword,
      searchInfo: searchList.searchInfo,
      loveSearchList: searchList.searchInfo.song_list,
      themeColor,
      fetching,
      failed
  }
};
const mapDispatchToProps = (dispatch) => {
  return {}
};
export default  connect(mapStateToProps, mapDispatchToProps)(Search);