import React,{Component} from 'react';
import LyricInfo from './../Components/LyricInfo';
import LyricContent from './../Components/LyricContent';
import LyricImg from './../Components/LyricImg';
import Recommand from '../Components/Recommand';
import {connect} from 'react-redux';
import {getLyric} from '../redux/MusicNow';
import {fetchCommandList} from '../redux/Recommand';
import {fetchAddPlaySong} from './../redux';

class Lyric extends Component{
  constructor(){
    super();
    this.getLyric = this.getLyric.bind(this);
    this.fetchAddPlaySong = this.fetchAddPlaySong.bind(this);
  }

  // 获取歌词
  getLyric(){
    this.props.getLyric(this.props.song_id);
  }

  // 获取推荐歌曲列表
  getRecommand() {
    this.props.fetchCommandList(this.props.song_id);
  }

  fetchAddPlaySong(song_id){
    this.props.fetchAddPlaySong(song_id, this.props.recommandList);
  }

  componentDidMount(){
    this.getLyric();
    this.getRecommand()
  }
  componentDidUpdate(prevProps){
    if(this.props.song_id !== prevProps.song_id){
      this.getLyric();
      this.getRecommand();
    }
  }
  render() {
    // pic_big:歌曲图片   playFlay:是否播放   title：歌曲名
    // album_id:专辑ID    ting_uid:歌手ID   author:歌手
    // lrclink:歌词连接   lyricContent:歌曲内容   lyricTime:歌词时间
    // curTime:当前时间   recommandList:推荐歌曲列表
    const {pic_big, playFlag, title, album_title, album_id, ting_uid, author, lrclink, lyricContent, lyricTime, curTime, recommandList} = {...this.props};

    return(
      <div className="lyric clear-float">
        <div className="clear-float">
          <LyricImg pic_big={pic_big} playFlag={playFlag}/>
          <div className="lyric-container">
            <LyricInfo title={title} album_title={album_title} author={author} album_id={album_id} ting_uid={ting_uid}/>
            <LyricContent lrclink={lrclink} lyricContent={lyricContent} lyricTime={lyricTime} curTime={curTime}/>
          </div>
        </div>
        <Recommand recommandList={recommandList} fetchAddPlaySong={this.fetchAddPlaySong}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const musicNow = state.MusicNow;
  const recommandList = state.Recommand.recommandList;
  return {
    title: musicNow.song_title,
    author: musicNow.song_author,
    album_title: musicNow.album_title,
    pic_big: musicNow.pic_big,
    muted: musicNow.muted,
    playFlag: musicNow.playFlag,
    song_id: musicNow.song_id,
    lyricContent: musicNow.lyricContent,
    lyricTime: musicNow.lyricTime,
    curTime: musicNow.curTime,
    recommandList,
    album_id: musicNow.album_id,
    ting_uid: musicNow.ting_uid
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getLyric: (song_id) => dispatch(getLyric(song_id)),
    fetchCommandList: (song_id) => dispatch(fetchCommandList(song_id)),
    fetchAddPlaySong: (song_id, songList) => dispatch(fetchAddPlaySong(song_id, songList))
  }
};
export default  connect(mapStateToProps,mapDispatchToProps)(Lyric);