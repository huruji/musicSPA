import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchAlbumInfo} from './../redux/AlbumInfo'
import AlbumHeader from './../Components/AlbumHeader';
import ListContent from './../Components/ListContent';
import {NavLink} from 'react-router-dom';

class AlbumSong extends Component{
  constructor(){
    super();
  }
  componentWillMount(){
    this.props.fetchAlbumInfo(this.props.match.params.albumid);
  }
  render() {
    return(
        <div>
          <AlbumHeader albumInfo={this.props.albumInfo}/>
          <ul className="artist-navbar clear-float">
            <li className="artist-navbar-item"><NavLink to={`/albumsong/${this.props.match.params.albumid}`} activeClassName='artist-navbar-item-active'>歌曲列表</NavLink></li>
            <li className="artist-navbar-item"><NavLink to={`/albuminfo/${this.props.match.params.albumid}`} activeClassName='artist-navbar-item-active'>专辑详情</NavLink></li>
          </ul>
          <ListContent listContent={this.props.loveSearchList } showDuration='table-cell' loveSearchList={this.props.loveSearchList}/>
        </div>
        )
  }
}

const mapStateToProps = (state) => {
  const albumInfo = state.AlbumInfo.albumInfo;
  const loveSearchList = state.AlbumInfo.songlist;
  return {
    albumInfo,
    loveSearchList,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAlbumInfo: (albumid) => dispatch(fetchAlbumInfo(albumid))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AlbumSong);