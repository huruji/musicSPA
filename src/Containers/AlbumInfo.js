import React,{Component} from 'react';
import AlbumHeader from './../Components/AlbumHeader';
import AlbumIntro from './../Components/AlbumIntro';
import {fetchArtistInfo} from './../redux/ArtistInfo';
import {fetchArtistSong} from './../redux/ArtistSong';
import {fetchArtistAlbum} from './../redux/AritstAlbum';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import {fetchAlbumInfo} from './../redux/AlbumInfo'

class AlbumInfo extends Component{
  constructor(){
    super();
  }

  render(){
    const {albumInfo, themeColor, match} = {...this.props};
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
  return {
    albumInfo,
    loveSearchList,
    themeColor
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAlbumInfo: (albumid) => dispatch(fetchAlbumInfo(albumid))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AlbumInfo);