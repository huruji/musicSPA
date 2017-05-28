import React,{Component} from 'react';
import ArtistHeader from './../Components/ArtistHeader';
import ArtistSongContent from './../Components/ArtistSongContent';
import {fetchArtistInfo} from './../redux/ArtistInfo';
import {fetchArtistSong} from './../redux/ArtistSong';
import {fetchArtistAlbum} from './../redux/AritstAlbum';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';

class ArtistSong extends Component{
  constructor(){
    super();
  }

  componentWillMount(){
    const uid = this.props.match.params.tinguid;
    if(this.props.artistInfo.ting_uid !== uid){
      this.props.fetchArtistInfo(uid);
      this.props.fetchArtistSong(uid);
      this.props.fetchArtistAlbum(uid);
    }
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
          {
            this.props.artistAlbumInfo.map((item,index) => {
              console.log(item);
              return (
                  <ArtistSongContent key={index}  themeColor={this.props.themeColor} listContent={item.songlist} showDuration='table-cell' albumimg={item.albumInfo ? item.albumInfo.pic_big : ''} albumid={item.albumInfo ? item.albumInfo.album_id : ''} publishtime={item.albumInfo ? item.albumInfo.publishtime : ''} title={item.albumInfo ? item.albumInfo.title : ''}  loveSearchList={item.songlist}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(ArtistSong);