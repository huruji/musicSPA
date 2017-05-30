import React,{Component} from 'react';
import {connect} from 'react-redux';
import CategorySongHeader from '../Components/CategorySongHeader';
import {fetchCategorySong} from './../redux/CategorySong';
import ListContent from './../Components/ListContent';

class CategorySong extends Component{
  constructor(){
    super();
  }
  componentDidMount(){
    console.log(111);
    this.props.fetchCategorySong(this.props.match.params.catename);
  }
  render() {
    const {loveSearchList, themeColor} = {...this.props};
    return(
        <div>
          <CategorySongHeader/>
          <ListContent listContent={loveSearchList } themeColor={themeColor} showDuration='table-cell' loveSearchList={loveSearchList}/>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  const title = state.CategorySong.title;
  const loveSearchList = state.CategorySong.songList;
  const themeColor = state.Setting.themes[state.Setting.curThemeIndex].color;
  return {
    title,
    loveSearchList,
    themeColor
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCategorySong: (name) => dispatch(fetchCategorySong(name))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CategorySong);

