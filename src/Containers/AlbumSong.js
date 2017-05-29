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
    const {albumInfo, themeColor, match, loveSearchList} = {...this.props};
    return(
        <div>
          <AlbumHeader albumInfo={albumInfo} themeColor={themeColor}/>
          <ul className="artist-navbar clear-float" style={{borderBottomColor: themeColor}}>
            <li className="artist-navbar-item"><NavLink to={`/albumsong/${match.params.albumid}`} activeClassName='artist-navbar-item-active' activeStyle={{backgroundColor: themeColor}}>歌曲列表</NavLink></li>
            <li className="artist-navbar-item"><NavLink to={`/albuminfo/${match.params.albumid}`} activeClassName='artist-navbar-item-active' activeStyle={{backgroundColor: themeColor}}>专辑详情</NavLink></li>
          </ul>
          <ListContent listContent={loveSearchList } themeColor={themeColor} showDuration='table-cell' loveSearchList={loveSearchList}/>
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