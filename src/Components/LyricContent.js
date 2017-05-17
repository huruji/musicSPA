import React,{ Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class LyricContent extends Component {
  constructor(){
    super();
  }
  render(){
    return(
      <div className="lyric-content">
        <ul>
         lyricContent
        </ul>
      </div>
    )
  }
}

export default LyricContent;