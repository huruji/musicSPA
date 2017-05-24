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
          <ListContent listContent={this.props.songList}/>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  const searchList = state.SearchList;
  return{
      songList:searchList.searchSongList,
      keyword: searchList.searchKeyword
  }
};
const mapDispatchToProps = (dispatch) => {
  return {}
};
export default  connect(mapStateToProps, mapDispatchToProps)(Search);