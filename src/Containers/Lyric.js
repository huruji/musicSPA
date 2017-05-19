import React,{Component} from 'react';
import LyricInfo from './../Components/LyricInfo';
import LyricContent from './../Components/LyricContent';
import LyricImg from './../Components/LyricImg';
import {connect} from 'react-redux';

class Lyric extends Component{
  render() {
    return(
      <div className="lyric clear-float">
        <LyricImg pic_big={this.props.pic_big} playFlag={this.props.playFlag}/>
        <div className="lyric-container">
          <LyricInfo title={this.props.title} album_title={this.props.album_title} author={this.props.author} />
          <LyricContent/>
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
    playFlag: musicNow.playFlag
  }
};

export default  connect(mapStateToProps)(Lyric);