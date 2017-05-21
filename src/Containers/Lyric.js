import React,{Component} from 'react';
import LyricInfo from './../Components/LyricInfo';
import LyricContent from './../Components/LyricContent';
import LyricImg from './../Components/LyricImg';
import {connect} from 'react-redux';
import {getLyric} from '../redux/MusicNow';

class Lyric extends Component{
  constructor(){
    super();
    this.getLyric = this.getLyric.bind(this);
  }
  getLyric(){
    this.props.getLyric(this.props.song_id);
  }
  componentDidMount(){
    this.getLyric();
  }
  componentDidUpdate(prevProps){
    if(this.props.song_id !== prevProps.song_id){
      this.getLyric();
    }
  }
  render() {
    return(
      <div className="lyric clear-float">
        <LyricImg pic_big={this.props.pic_big} playFlag={this.props.playFlag}/>
        <div className="lyric-container">
          <LyricInfo title={this.props.title} album_title={this.props.album_title} author={this.props.author}/>
          <LyricContent lrclink={this.props.lrclink} lyricContent={this.props.lyricContent} lyricTime={this.props.lyricTime} curTime={this.props.curTime}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const musicNow = state.MusicNow;
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
    curTime: musicNow.curTime
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getLyric: (song_id) => dispatch(getLyric(song_id))
  }
};
export default  connect(mapStateToProps,mapDispatchToProps)(Lyric);