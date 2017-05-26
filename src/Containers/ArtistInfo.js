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
          <ArtistHeader {...this.props.artistInfo}/>
          <ul className="artist-navbar clear-float">
            <li className="artist-navbar-item"><NavLink to={`/artistsong/${this.props.match.params.tinguid}`} activeClassName='artist-navbar-item-active'>专辑</NavLink></li>
            <li className="artist-navbar-item"><NavLink to={`/artistinfo/${this.props.match.params.tinguid}`} activeClassName='artist-navbar-item-active'>歌手详情</NavLink></li>
          </ul>

          <ArtistIntro {...this.props.artistInfo}/>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    songList: state.ArtistSong.songList,
    artistInfo: state.ArtistInfo,
    artistAlbumInfo: state.ArtistAlbum.albumInfo
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