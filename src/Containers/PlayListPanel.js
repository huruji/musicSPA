import React,{ Component } from 'react';
import PlayListTable from '../Components/PlayListTable';
import {addPlayList} from './../redux/PlayList';
import {connect} from 'react-redux';

class PlayListPanel extends Component {
  constructor(){
    super();
  }
  render(){
    const Table = this.props.songList.map((item, index) => {
      return (
        <PlayListTable {...item} key={index} seq={index + 1}/>
      )
    });
    console.log('this.props.songlist');
    console.log(this.props.songList);
    return(
      <div className="playlist" style={{display:this.props.show}}>
        <div className="playlist-type">播放列表</div>
        <div className="playlist-info">
          <span className="playlist-cnt">总{this.props.length}首</span>
          <span className="playlist-clearall" >清空</span>
          <span className="playlist-separator">|</span>
          <span className="playlist-loveall" >收藏全部</span>
        </div>
        <div className="playlist-content">
         <table>
           <tbody>
           {Table}
           </tbody>
         </table>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const playList = state.PlayList;
  const musicNow = state.MusicNow;
  const show = musicNow.playListShow ? 'block' : 'none';
  return {
    songList: playList.song_list,
    length: playList.song_list.length,
    show: show
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayListPanel);