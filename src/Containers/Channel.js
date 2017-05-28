import React,{Component} from 'react';
import ListHeader from './../Components/ListHeader';
import ListContent from './../Components/ListContent';
import fetchJsonp from 'fetch-jsonp';
import CONFIG from './../config';
import changeJson from './../utils/changeJson';
import  {fetchChannelList} from './../redux/Channel';
import {connect} from 'react-redux';
import {playAll} from './../redux/index'

class ChannelContainer extends Component{
  constructor(props){
    super(props);
    this.state = {id : this.props.match.params.id}
  }
  componentWillMount(){
    this.props.fetchChannelList(this.props.match.params.id);
  }
  componentWillReceiveProps(nextProps){
    if(this.props.match.params.id != nextProps.match.params.id){
      this.props.fetchChannelList(nextProps.match.params.id);
    }
  }
  render() {
    let {name, avator_url, length, date, comment, song_list, action, loveSearchList, themeColor} = this.props;
    return(
      <div>
        <ListHeader url={avator_url} themeColor={themeColor} themelistName={name} listcnt={length} date={date} comment={comment} playAll={this.props.playAll}/>
        <ListContent listContent={song_list } themeColor={themeColor} showDuration='table-cell' loveSearchList={loveSearchList}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const resiveMusic = state.ResiveMusic;
  const loveSearchList = state.ResiveMusic.song_list;
  const themeColor = state.Setting.themes[state.Setting.curThemeIndex].color;
  return {
    avator_url: resiveMusic.avator_url,
    name: resiveMusic.name,
    length: resiveMusic.length,
    date: resiveMusic.date,
    comment: resiveMusic.comment,
    song_list: resiveMusic.song_list,
    loveSearchList: loveSearchList,
    themeColor
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchChannelList: (json) => {dispatch(fetchChannelList(json))},
    playAll: () => dispatch(playAll())
  }
};



export default  connect(mapStateToProps,mapDispatchToProps)(ChannelContainer);