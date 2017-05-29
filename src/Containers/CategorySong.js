import React,{Component} from 'react';
import {connect} from 'react-redux';
import CategorySongHeader from '../Components/CategorySongHeader';
import {fetchCategory} from './../redux/Category';
import CONFIG from './../config';

class CategorySong extends Component{
  constructor(){
    super();
  }
  componentDidMount(){
    console.log(111);
    this.props.fetchCategory();
  }
  render() {
    const {publicList, artistList} = this.props;
    return(
        <div>
          <CategorySongHeader/>
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

export default connect(mapStateToProps, mapDispatchToProps)(CategorySong);

