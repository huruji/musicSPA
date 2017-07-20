import React,{Component} from 'react';
import ArtistHeader from './../Components/ArtistHeader';
import ArtistIntro from './../Components/ArtistIntro';
import {fetchArtistInfo} from './../redux/ArtistInfo';
import {fetchArtistSong} from './../redux/ArtistSong';
import {fetchArtistAlbum} from './../redux/AritstAlbum';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import Hlayer from './../assets/hlayer/Hlayer';
import FetchingFailed from './../Components/FetchingFailed';

class ArtistInfo extends Component{
  constructor(){
    super();
  }
  componentWillMount(){
    const uid = this.props.match.params.tinguid;
    if(this.props.artistInfo.ting_uid != uid){
      this.props.fetchArtistInfo(uid);
      this.props.fetchArtistAlbum(uid);
    }
  }
  render(){

    // themeColor:主题色    match:路由信息    artistInfoFetching:音乐人信息是否在获取中
    // artistInfoFailed:音乐人信息是否获取失败   artistAlbumFetching:音乐人专辑信息是否在获取中
    // artistAlbumFailed:音乐人专辑信息是否在获取失败
    const {themeColor, match, artistInfo,artistInfoFetching, artistInfoFailed, artistAlbumFetching, artistAlbumFailed} = {...this.props};

    // 音乐人、音乐人专辑信息获取中返回loading
    if(artistInfoFetching || artistAlbumFetching){
      return (
          <Hlayer type="loading" handleShow={this.handleLoadingShow} config = {{animateType: 3, time: 7000, loadingType: 2, shadow: true, loadingColor: themeColor}}/>
      )
    }

    // 音乐人、音乐人专辑信息获取中返回失败页面
    if(artistInfoFailed || artistAlbumFailed){
      return (
          <FetchingFailed/>
      )
    }

    return(
        <div>
          <ArtistHeader {...this.props.artistInfo} themeColor={themeColor}/>
          <ul className="artist-navbar clear-float" style={{borderBottomColor: themeColor}}>
            <li className="artist-navbar-item"><NavLink to={`/artistsong/${match.params.tinguid}`} activeClassName='artist-navbar-item-active' activeStyle={{backgroundColor: themeColor}}>专辑</NavLink></li>
            <li className="artist-navbar-item"><NavLink to={`/artistinfo/${match.params.tinguid}`} activeClassName='artist-navbar-item-active' activeStyle={{backgroundColor: themeColor}}>歌手详情</NavLink></li>
          </ul>
          <ArtistIntro {...artistInfo}/>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  const themeColor = state.Setting.themes[state.Setting.curThemeIndex].color;
  return {
    songList: state.ArtistSong.songList,
    artistInfo: state.ArtistInfo,
    artistAlbumInfo: state.ArtistAlbum.albumInfo,
    themeColor,
    artistInfoFetching: state.ArtistInfo.fetching,
    arthstInfoFailed: state.ArtistInfo.failed,
    artistAlbumFetching: state.ArtistAlbum.fetching,
    artistAlbumFailed: state.ArtistAlbum.failed
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchArtistInfo: (tinguid) => dispatch(fetchArtistInfo(tinguid)),
    fetchArtistSong: (tinguid) => dispatch(fetchArtistSong(tinguid)),
    fetchArtistAlbum: (tinguid) => dispatch(fetchArtistAlbum(tinguid))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ArtistInfo);