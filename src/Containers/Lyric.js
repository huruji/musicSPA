import React,{Component} from 'react';
import LyricInfo from './../Components/LyricInfo';
import LyricContent from './../Components/LyricContent';
import LyricImg from './../Components/LyricImg';
import Recommand from '../Components/Recommand';
import {connect} from 'react-redux';
import {getLyric} from '../redux/MusicNow';
import {fetchCommandList} from '../redux/Recommand';
import {fetchAddPlaySong, loveShift, addSongToPlayList} from './../redux';

class Lyric extends Component{
  constructor(){
    super();
    this.getLyric = this.getLyric.bind(this);
    this.fetchAddPlaySong = this.fetchAddPlaySong.bind(this);
  }
  getLyric(){
    this.props.getLyric(this.props.song_id);
  }
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
    return(
      <div className="lyric clear-float">
        <div className="clear-float">
          <LyricImg pic_big={this.props.pic_big} playFlag={this.props.playFlag}/>
          <div className="lyric-container">
            <LyricInfo title={this.props.title} album_title={this.props.album_title} author={this.props.author}/>
            <LyricContent lrclink={this.props.lrclink} lyricContent={this.props.lyricContent} lyricTime={this.props.lyricTime} curTime={this.props.curTime}/>
          </div>
        </div>
        <Recommand recommandList={this.props.recommandList} fetchAddPlaySong={this.fetchAddPlaySong}/>
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
    recommandList
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