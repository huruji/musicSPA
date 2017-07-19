import React,{ Component } from 'react';
import {connect} from 'react-redux';
import {playStateShift, changeVolume, changeMuted, changeCurTime, actPlayState, playListShow} from '../redux/MusicNow';
import offsetLeft from '../utils/offsetLeft';
import {duration} from '../utils/time';
import {updateNewSong} from './../redux/MusicNow';
import {playNext, playPrev} from './../redux';

class MusicControl extends Component {
  constructor(){
    super();
    this.playShift = this.playShift.bind(this);
    this.changeVolume = this.changeVolume.bind(this);
    this.changeMuted = this.changeMuted.bind(this);
    this.changeTimeLine = this.changeTimeLine.bind(this);
    this.playListShow = this.playListShow.bind(this);
    this.playNext = this.playNext.bind(this);
    this.playPrev = this.playPrev.bind(this);
  }
  playListShow(){
    this.props.playListShow()
  }
  playShift(){
    this.props.playStateShift(this.audio);
  }
  changeVolume(e){
    const width = (e.clientX - offsetLeft(e.currentTarget));
    this.props.changeVolume(width);
  }
  changeMuted(){
    this.props.changeMuted();
  }
  changeTime(){
    if(this.props.play){
      clearInterval(this.timer);
      this.timer =setInterval(function(){
        const currentTime = this.audio.currentTime;
        this.props.changeCurTime(currentTime);
      }.bind(this),1000)
    }
  }
  playNext(){
    this.props.playNext();
  }
  playPrev() {
    this.props.playPrev();
  }
  changeTimeLine(e){
    const currentTime = (e.clientX - offsetLeft(e.currentTarget)) / e.currentTarget.clientWidth * this.props.totalTime;
    this.props.changeCurTime(currentTime);
    this.audio.currentTime = currentTime;
  }
  componentDidMount(){
    this.props.playStateShift(this.audio);
    this.audio.volume = this.props.volume / 100;
    this.changeTime();
  }
  componentDidUpdate(prevProps){
    if(this.props.newSong){
      this.audio.currentTime = this.props.curTime;
      this.props.updateNewSong(!this.props.newSong);
    }
    this.audio.volume = this.props.volume / 100;
    this.audio.muted = this.props.muted;
    this.changeTime();
    if (this.props.song_url !== prevProps.song_url) {
      clearInterval(this.songTimer);
      this.audio.load();
      this.audio.currentTime = this.props.curTime;
      if (this.audio.networkState == 1) {
        clearInterval(this.songTimer);
        this.audio.currentTime = this.props.curTime;
        this.audio.play();
      }
      this.songTimer = setInterval(function () {
        if(this.audio.networkState == 3 || this.audio.networkState == 2) {
          this.audio.load();
        } else if(this.audio.networkState == 1) {
          clearInterval(this.songTimer);
          this.audio.play();
        }
        }.bind(this), 30);
      }
    }
  componentWillUpdate(nextProps){
    if (this.props.song_url !== nextProps.song_url) {
      this.audio.pause();
    }
  }
  render(){
    let {play,volume,muted,curTime,totalTime, themeColor, songCount} = this.props;
    const current = `${curTime / totalTime * 100}%`;
    muted = muted ? 'icon-novolume' : 'icon-volume';
    play = play ?'m-pause':'m-play';
    curTime = duration(curTime);
    totalTime = duration(totalTime);
    return(
      <div className="music-box">
        <audio ref={(audio) => {this.audio = audio;}} onEnded={this.playNext}>
          <source src={this.props.song_url}/>
        </audio>
        <div className="music-control">
          <span className="m-icon m-prev music-prev" onClick={this.playPrev} style={{backgroundColor: themeColor}}/>
          <span className={`m-icon music-play ${play}`} onClick={this.playShift} style={{backgroundColor: themeColor}}/>
          <span className="m-icon m-next music-next" onClick={this.playNext} style={{backgroundColor: themeColor}}/>
        </div>
        <span className="music-curTime">{curTime}</span>
        <span className="music-totalTime">{totalTime}</span>
        <div className="music-volume">
          <span className={`${muted}`} onClick={this.changeMuted}></span>
          <div className="music-volumeBar" onClick={this.changeVolume}>
            <div className="music-curVolume" style={{width: `${volume}%`,backgroundColor: themeColor}}>
            </div>
          </div>
        </div>
        <div className="music-playMode" >
          <span className={`m-icon`}></span>
        </div>
        <div className="music-listicon" onClick={this.playListShow}>
          <div className="music-listcnt">{songCount}</div>
        </div>
        <div className="music-timeline">
          <div className="music-lineContainer" onClick={this.changeTimeLine}>
            <div className="music-playhead" style={{width:current, backgroundColor: themeColor}}></div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const musicNow = state.MusicNow;
  const playList = state.PlayList;
  const themeColor = state.Setting.themes[state.Setting.curThemeIndex].color;
  return {
    song_url: musicNow.song_url,
    play: musicNow.playFlag,
    volume: musicNow.volume,
    muted: musicNow.muted,
    curTime: musicNow.curTime,
    totalTime: musicNow.totalTime,
    song_id: musicNow.song_id,
    newSong: musicNow.newSong,
    show: musicNow.playListShow,
    songCount: playList.song_list.length,
    themeColor
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    actPlayState: () => dispatch(actPlayState()),
    playStateShift: audio => dispatch(playStateShift(audio)),
    changeVolume: volume => dispatch(changeVolume(volume)),
    changeMuted: () => dispatch(changeMuted()),
    changeCurTime: (time) => dispatch(changeCurTime(time)),
    updateNewSong: (newSong) => dispatch(updateNewSong(newSong)),
    playListShow: () => dispatch(playListShow()),
    playNext: () => dispatch(playNext()),
    playPrev: () => dispatch(playPrev())
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(MusicControl);