import React,{Component} from 'react';
import {connect} from 'react-redux';
import ListContent from '../Components/ListContent';

class Search extends Component{
  constructor(){
    super();
  }
  render(){
    console.log('search');
    console.log(this.props);
    return(
        <div>
          <div className="search-header">
          </div>
          <ListContent listContent={this.props.songList} showDuration="none" loveSearchList={this.props.loveSearchList}/>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  const searchList = state.SearchList;
  return{
      songList:searchList.searchSongList,
      keyword: searchList.searchKeyword,
      loveSearchList: searchList.searchSongList
  }
};
const mapDispatchToProps = (dispatch) => {
  return {}
};
export default  connect(mapStateToProps, mapDispatchToProps)(Search);