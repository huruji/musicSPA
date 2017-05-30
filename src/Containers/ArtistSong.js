import React,{Component} from 'react';
import ArtistHeader from './../Components/ArtistHeader';
import ArtistSongContent from './../Components/ArtistSongContent';
import {fetchArtistInfo} from './../redux/ArtistInfo';
import {fetchArtistSong} from './../redux/ArtistSong';
import {fetchArtistAlbum} from './../redux/AritstAlbum';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import Hlayer from './../assets/hlayer/Hlayer';
import FetchingFailed from './../Components/FetchingFailed';


class ArtistSong extends Component{
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
    const {themeColor, artistInfo, match, artistAlbumInfo,artistInfoFetching, artistInfoFailed, artistAlbumFetching, artistAlbumFailed} = {...this.props};
    if(artistInfoFetching || artistAlbumFetching){
      return (
          <Hlayer type="loading" handleShow={this.handleLoadingShow} config = {{animateType: 3, time: 7000, loadingType: 2, shadow: true, loadingColor: themeColor}}/>
      )
    }
    if(artistInfoFailed || artistAlbumFailed){
      return (
          <FetchingFailed/>
      )
    }
    return(
        <div>
          <ArtistHeader {...artistInfo} themeColor={themeColor}/>
          <ul className="artist-navbar clear-float" style={{borderBottomColor: themeColor}}>
            <li className="artist-navbar-item"><NavLink to={`/artistsong/${match.params.tinguid}`} activeClassName='artist-navbar-item-active' activeStyle={{backgroundColor: themeColor}}>专辑</NavLink></li>
            <li className="artist-navbar-item"><NavLink to={`/artistinfo/${match.params.tinguid}`} activeClassName='artist-navbar-item-active' activeStyle={{backgroundColor: themeColor}}>歌手详情</NavLink></li>
          </ul>
          {
            artistAlbumInfo.map((item,index) => {
              return (
                  <ArtistSongContent key={index}  themeColor={themeColor} listContent={item.songlist} showDuration='table-cell' albumimg={item.albumInfo ? item.albumInfo.pic_big : ''} albumid={item.albumInfo ? item.albumInfo.album_id : ''} publishtime={item.albumInfo ? item.albumInfo.publishtime : ''} title={item.albumInfo ? item.albumInfo.title : ''}  loveSearchList={item.songlist}/>
              )
            })
          }

        </div>
    )
  }
}

const mapStateToProps = (state) => {
  const themeColor = state.Setting.themes[state.Setting.curThemeIndex].color;
  return {
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

export default connect(mapStateToProps, mapDispatchToProps)(ArtistSong);