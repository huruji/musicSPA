import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchAlbumInfo} from './../redux/AlbumInfo'
import AlbumHeader from './../Components/AlbumHeader';
import ListContent from './../Components/ListContent';
import {NavLink} from 'react-router-dom';
import Hlayer from './../assets/hlayer/Hlayer';
import FetchingFailed from './../Components/FetchingFailed';

class AlbumSong extends Component{
  constructor(){
    super();
  }

  componentWillMount(){
   if(this.props.match.params.albumid !== this.props.albumInfo.album_id) {
     this.props.fetchAlbumInfo(this.props.match.params.albumid);
   }
  }

  render() {

    // albumInfo:    themeColor:主题色    match:路由信息
    // fetching: 是否正在获取   failed:是否获取失败   loveSearchList:
    const {albumInfo, themeColor, match, loveSearchList, fetching, failed} = {...this.props};

    // 信息获取中返回loading
    if(fetching){
      return (
          <Hlayer type="loading" handleShow={this.handleLoadingShow} config = {{animateType: 3, time: 7000, loadingType: 2, shadow: true, loadingColor: themeColor}}/>
      )
    }

    // 获取失败返回失败页面
    if(failed){
      return (
          <FetchingFailed/>
      )
    }

    return(
        <div>
          <AlbumHeader albumInfo={albumInfo} themeColor={themeColor}/>
          <ul className="artist-navbar clear-float" style={{borderBottomColor: themeColor}}>
            <li className="artist-navbar-item"><NavLink to={`/albumsong/${match.params.albumid}`} activeClassName='artist-navbar-item-active' activeStyle={{backgroundColor: themeColor}}>歌曲列表</NavLink></li>
            <li className="artist-navbar-item"><NavLink to={`/albuminfo/${match.params.albumid}`} activeClassName='artist-navbar-item-active' activeStyle={{backgroundColor: themeColor}}>专辑详情</NavLink></li>
          </ul>
          <ListContent listContent={loveSearchList } themeColor={themeColor} showDuration='table-cell' loveSearchList={loveSearchList}/>
        </div>
        )
  }
}

const mapStateToProps = (state) => {
  const albumInfo = state.AlbumInfo.albumInfo;
  const loveSearchList = state.AlbumInfo.songlist;
  const themeColor = state.Setting.themes[state.Setting.curThemeIndex].color;
  const {fetching, failed} = {...state.FetchState};
  return {
    albumInfo,
    loveSearchList,
    themeColor,
    fetching,
    failed
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAlbumInfo: (albumid) => dispatch(fetchAlbumInfo(albumid))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AlbumSong);