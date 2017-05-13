import React,{ Component } from 'react';
import {connect} from 'react-redux';

class MusicControl extends Component {
  constructor(){
    super();
  }
  render(){
    console.log(this.props);
    return(
      <div className="music-box">
        <audio src={this.props.song_url} autoPlay/>
        <div className="music-control">
          <span className="m-icon m-prev music-prev" ></span>
          <span className={`m-icon music-play `} ></span>
          <span className="m-icon m-next music-next" ></span>
        </div>
        <span className="music-curTime"></span>
        <span className="music-totalTime"></span>
        <div className="music-volume">
          <span className="icon-volume"></span>
          <div className="music-volumeBar" >
            <div className="music-curVolume" >
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
            <div className="music-playhead" ></div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const musicNow = state.MusicNow;
  return {
    song_url: musicNow.song_url
  }
};

export default connect(mapStateToProps)(MusicControl);