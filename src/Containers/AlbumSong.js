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
          <AlbumHeader albumInfo={this.props.albumInfo} themeColor={this.props.themeColor}/>
          <ul className="artist-navbar clear-float" style={{borderBottomColor: this.props.themeColor}}>
            <li className="artist-navbar-item"><NavLink to={`/albumsong/${this.props.match.params.albumid}`} activeClassName='artist-navbar-item-active' activeStyle={{backgroundColor: this.props.themeColor}}>歌曲列表</NavLink></li>
            <li className="artist-navbar-item"><NavLink to={`/albuminfo/${this.props.match.params.albumid}`} activeClassName='artist-navbar-item-active' activeStyle={{backgroundColor: this.props.themeColor}}>专辑详情</NavLink></li>
          </ul>
          <ListContent listContent={this.props.loveSearchList } themeColor={this.props.themeColor} showDuration='table-cell' loveSearchList={this.props.loveSearchList}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(AlbumSong);