import React,{ Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class LyricInfo extends Component {
  constructor(){
    super();
  }
  render(){
    return(
      <div className="lyric-info">
        <h3>{this.props.title}</h3>
        专辑：<span>{this.props.album_title}</span>
        歌手：<span>{this.props.author}</span>
      </div>
    )
  }
}

export default LyricInfo;