import React,{Component} from 'react';
import ListHeader from './../Components/ListHeader';
import ListContent from './../Components/ListContent';
import {connect} from 'react-redux';
import {updateLocalList, deleteRomLocalList} from './../redux/LocaPlayList'
import './../img/default_avator.jpg';

class LocalList extends Component{
  render(){
    let {name, bg, length, date, comment, song_list, action} = this.props;
    let durationShow = true;
    console.log(this.props);
    return(
      <div>
        <ListHeader url={bg} listName={name} listcnt={length} date={date} comment={comment} />
        <ListContent listContent={song_list} durationShow={durationShow} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const localPlayList = state.LocalPlayList;
  return {
    bg: localPlayList.avator_url,
    name: localPlayList.name,
    length: localPlayList.length,
    date: localPlayList.date,
    comment:localPlayList.comment,
    song_list: localPlayList.song_list
  }
};

const mapDispatchToProps = (dispatch) => {
  return {}
};


export default connect(mapStateToProps,mapDispatchToProps)(LocalList);