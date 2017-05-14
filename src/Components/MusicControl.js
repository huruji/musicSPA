import React,{ Component } from 'react';
import {connect} from 'react-redux';
import {playStateShift, changeVolume, changeMuted, changeCurTime} from '../redux/MusicNow';
import offsetLeft from '../utils/offsetLeft';
import {duration} from '../utils/time';

class MusicControl extends Component {
  constructor(){
    super();
    this.playShift = this.playShift.bind(this);
    this.changeVolume = this.changeVolume.bind(this);
    this.changeMuted = this.changeMuted.bind(this);
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
      }.bind(this),1)
    }
  }
  componentDidMount(){
    this.props.playStateShift(this.audio);
    this.audio.volume = this.props.volume / 100;
    this.changeTime();
  }
  componentDidUpdate(){
    this.audio.volume = this.props.volume / 100;
    this.audio.muted = this.props.muted;
    this.changeTime();
  }
  render(){
    let {play,volume,muted,curTime,totalTime} = this.props;
    const current = `${curTime / totalTime * 100}%`;
    muted = muted ? 'icon-novolume' : 'icon-volume';
    play = play ?'m-pause':'m-play';
    curTime = duration(curTime);
    totalTime = duration(totalTime);
    return(
      <div className="music-box">
        <audio src={this.props.song_url} ref={(audio) => {this.audio = audio;}}/>
        <div className="music-control">
          <span className="m-icon m-prev music-prev" />
          <span className={`m-icon music-play ${play}`} onClick={this.playShift}/>
          <span className="m-icon m-next music-next" />
        </div>
        <span className="music-curTime">{curTime}</span>
        <span className="music-totalTime">{totalTime}</span>
        <div className="music-volume">
          <span className={`${muted}`} onClick={this.changeMuted}></span>
          <div className="music-volumeBar" onClick={this.changeVolume}>
            <div className="music-curVolume" style={{width: `${volume}%`}}>
            </div>
          </div>
        </div>
        <div className="music-playMode" >
          <span className={`m-icon`}></span>
        </div>
        <div className="music-listicon" >
          <div className="music-listcnt">{}</div>
        </div>
        <div className="music-timeline">
          <div className="music-lineContainer" >
            <div className="music-playhead" style={{width:current}}></div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const musicNow = state.MusicNow;
  return {
    song_url: musicNow.song_url,
    play: musicNow.playFlag,
    volume: musicNow.volume,
    muted: musicNow.muted,
    curTime: musicNow.curTime,
    totalTime: musicNow.totalTime
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    playStateShift: audio => dispatch(playStateShift(audio)),
    changeVolume: volume => dispatch(changeVolume(volume)),
    changeMuted: () => dispatch(changeMuted()),
    changeCurTime: (time) => dispatch(changeCurTime(time))
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(MusicControl);