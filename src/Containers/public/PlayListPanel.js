import React,{ Component } from 'react';
import PlayListTable from '../../Components/PlayListTable';
import {connect} from 'react-redux';
import {fetchAddPlaySong} from '../../redux'

class PlayListPanel extends Component {
  constructor(){
    super();
  }
  render(){
    const {songList, playSong, show, length} = {...this.props};
    const Table = songList.map((item, index) => {
      return (
        <PlayListTable {...item} key={index} seq={index + 1} playSong={playSong}/>
      )
    });
    return(
      <div className="playlist" style={{display:show}}>
        <div className="playlist-type">播放列表</div>
        <div className="playlist-info">
          <span className="playlist-cnt">总{length}首</span>
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
    playSong: (songId) => dispatch(fetchAddPlaySong(songId))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayListPanel);