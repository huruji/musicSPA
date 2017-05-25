import React,{Component} from 'react';
import ArtistHeader from './../Components/ArtistHeader';
import ListContent from './../Components/ListContent';
import {fetchArtistInfo} from './../redux/ArtistInfo';
import {fetchArtistSong} from './../redux/ArtistSong';
import {connect} from 'react-redux';

class ArtistSong extends Component{
  constructor(){
    super();
  }

  componentWillMount(){
    const uid = this.props.match.params.tinguid;
    this.props.fetchArtistInfo(uid);
    this.props.fetchArtistSong(uid);
  }

  render(){
    console.log('match');
    console.log(this.props);
    return(
        <div>
          <ArtistHeader artistInfo={this.props.artistInfo}/>
          <ListContent listContent={this.props.songList} showDuration='table-cell' loveSearchList={this.props.songList}/>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    songList: state.ArtistSong.songList,
    artistInfo: state.ArtistSong
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchArtistInfo: (tinguid) => dispatch(fetchArtistInfo(tinguid)),
    fetchArtistSong: (tinguid) => dispatch(fetchArtistSong(tinguid))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ArtistSong);