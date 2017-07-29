import React,{ Component } from 'react';
import {connect} from 'react-redux';
import MusicInfo from './../../Components/MusicInfo';
import MusicControl from './../../Components/MusicControl';

class MusicPanel extends Component {
  render(){
    return(
      <div className="player-panel">
        <MusicInfo {...this.props}/>
        <MusicControl/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const musicNow = state.MusicNow;
  return{
    title: musicNow.song_title,
    author: musicNow.song_author,
    bg: {background: `url(${musicNow.pic_small})`}
  }
};

export default connect(mapStateToProps)(MusicPanel);