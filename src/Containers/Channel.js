import React,{Component} from 'react';
import ListHeader from './../Components/ListHeader';
import ListContent from './../Components/ListContent';
import  {fetchChannelList} from './../redux/Channel';
import {connect} from 'react-redux';
import {playAll} from './../redux/index';
import Hlayer from './../assets/hlayer/Hlayer';
import FetchingFailed from './../Components/FetchingFailed';

class ChannelContainer extends Component{
  constructor(props){
    super(props);
    this.state = {id : this.props.match.params.id};
  }

  // 通过路由的match参数获取频道歌曲
  componentWillMount(){
    this.props.fetchChannelList(this.props.match.params.id);
  }

  // 路径改变重新获取频道歌曲
  componentWillReceiveProps(nextProps){
    if(this.props.match.params.id != nextProps.match.params.id){
      this.props.fetchChannelList(nextProps.match.params.id);
    }
  }
  render() {
    // name:频道名   avator_url:频道图片   date:创建时间
    // comment:简介   song_list:歌曲列表    playAll:播放全部
    // loveSearchList:    themeColor:主题色  fetching:是否正在获取频道信息
    // failed:是否获取失败
    let {name, avator_url, length, date, comment, song_list, playAll, loveSearchList, themeColor, fetching, failed} = this.props;

    // 正在获取歌曲返回loading
    if(fetching){
      return (
          <Hlayer type="loading" handleShow={this.handleLoadingShow} config = {{animateType: 3, time: 7000, loadingType: 2, shadow: true, loadingColor: themeColor}}/>
      )
    }

    // 获取歌曲失败返回失败信息
    if(failed){
      return (
          <FetchingFailed/>
      )
    }

    return(
      <div>
        <ListHeader url={avator_url} themeColor={themeColor} themelistName={name} listcnt={length} date={date} comment={comment} playAll={playAll}/>
        <ListContent listContent={song_list } themeColor={themeColor} showDuration='table-cell' loveSearchList={loveSearchList}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const resiveMusic = state.ResiveMusic;
  const loveSearchList = state.ResiveMusic.song_list;
  const themeColor = state.Setting.themes[state.Setting.curThemeIndex].color;
  const {fetching, failed} = {...state.FetchState};
  return {
    avator_url: resiveMusic.avator_url,
    name: resiveMusic.name,
    length: resiveMusic.length,
    date: resiveMusic.date,
    comment: resiveMusic.comment,
    song_list: resiveMusic.song_list,
    loveSearchList: loveSearchList,
    themeColor,
    fetching,
    failed
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchChannelList: (json) => {dispatch(fetchChannelList(json))},
    playAll: () => dispatch(playAll())
  }
};



export default  connect(mapStateToProps,mapDispatchToProps)(ChannelContainer);