import React,{Component} from 'react';
import ArtistHeader from './../Components/ArtistHeader';
import ArtistSongContent from './../Components/ArtistSongContent';
import {fetchArtistInfo} from './../redux/ArtistInfo';
import {fetchArtistSong} from './../redux/ArtistSong';
import {fetchArtistAlbum} from './../redux/AritstAlbum';
import {connect} from 'react-redux';

class ArtistSong extends Component{
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
          {
            this.props.artistAlbumInfo.map((item,index) => {
              console.log(item);
              return (
                  <ArtistSongContent key={index} listContent={item.songlist} showDuration='table-cell' albumimg={item.albumInfo ? item.albumInfo.pic_big : ''} loveSearchList={item.songlist}/>
              )
            })
          }

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

export default connect(mapStateToProps, mapDispatchToProps)(ArtistSong);