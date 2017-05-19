import React,{Component} from 'react';
import LyricInfo from './../Components/LyricInfo';
import LyricContent from './../Components/LyricContent';
import {connect} from 'react-redux';

class Lyric extends Component{
  render() {
    return(
      <div className="lyric clear-float">
        <div className="lyric-operation">
          <div className="lyric-outer">
            <div className="lyric-inner">
              <div className="lyric-img" ></div>
            </div>
          </div>
        </div>
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
    album_title: musicNow.album_title
  }
};

export default  connect(mapStateToProps)(Lyric);