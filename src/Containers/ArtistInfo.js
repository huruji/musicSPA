import React,{Component} from 'react';
import ArtistHeader from './../Components/ArtistHeader';
import ArtistIntro from './../Components/ArtistIntro';
import {fetchArtistInfo} from './../redux/ArtistInfo';
import {fetchArtistSong} from './../redux/ArtistSong';
import {fetchArtistAlbum} from './../redux/AritstAlbum';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';

class ArtistInfo extends Component{
  constructor(){
    super();
  }
  componentWillMount(){
    const uid = this.props.match.params.tinguid;
    this.props.fetchArtistInfo(uid);
    this.props.fetchArtistSong(uid);
    this.props.fetchArtistAlbum(uid);
  }
  render(){
    console.log('match');
    console.log(this.props);
    return(
        <div>
          <ArtistHeader {...this.props.artistInfo} themeColor={this.props.themeColor}/>
          <ul className="artist-navbar clear-float" style={{borderBottomColor: this.props.themeColor}}>
            <li className="artist-navbar-item"><NavLink to={`/artistsong/${this.props.match.params.tinguid}`} activeClassName='artist-navbar-item-active' activeStyle={{backgroundColor: this.props.themeColor}}>专辑</NavLink></li>
            <li className="artist-navbar-item"><NavLink to={`/artistinfo/${this.props.match.params.tinguid}`} activeClassName='artist-navbar-item-active' activeStyle={{backgroundColor: this.props.themeColor}}>歌手详情</NavLink></li>
          </ul>

          <ArtistIntro {...this.props.artistInfo}/>
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
    themeColor
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