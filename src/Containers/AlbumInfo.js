import React,{Component} from 'react';
import AlbumHeader from './../Components/AlbumHeader';
import AlbumIntro from './../Components/AlbumIntro';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import {fetchAlbumInfo} from './../redux/AlbumInfo'
import Hlayer from './../assets/hlayer/Hlayer';
import FetchingFailed from './../Components/FetchingFailed';

class AlbumInfo extends Component{
  constructor(){
    super();
  }
  componentWillMount(){
    if(this.props.match.params.albumid !== this.props.albumInfo.album_id) {
      this.props.fetchAlbumInfo(this.props.match.params.albumid);
    }
  }
  render(){
    console.log('albumInfo Props:', this.props);
    // albumInfo:   themeColor:主题色    match:路由信息
    // fetching：是否在获取中    failed:是否获取失败
    const {albumInfo, themeColor, match, fetching, failed} = {...this.props};

    // 信息获取中返回loading
    if(fetching){
      return (
          <Hlayer type="loading" handleShow={this.handleLoadingShow} config = {{animateType: 3, time: 7000, loadingType: 2, shadow: true, loadingColor: themeColor}}/>
      )
    }

    // 信息获取失败返回失败页面
    if(failed){
      return (
          <FetchingFailed/>
      )
    }

    return(
        <div>
          <AlbumHeader albumInfo={albumInfo} themeColor={themeColor}/>
          <ul className="artist-navbar clear-float" style={{borderBottomColor: themeColor}}>
            <li className="artist-navbar-item"><NavLink to={`/albumsong/${match.params.albumid}`} activeClassName='artist-navbar-item-active' activeStyle={{backgroundColor: this.props.themeColor}}>歌曲列表</NavLink></li>
            <li className="artist-navbar-item"><NavLink to={`/albuminfo/${match.params.albumid}`} activeClassName='artist-navbar-item-active' activeStyle={{backgroundColor: this.props.themeColor}}>专辑详情</NavLink></li>
          </ul>
          <AlbumIntro {...albumInfo}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(AlbumInfo);