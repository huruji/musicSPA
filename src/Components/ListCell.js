import React,{ Component } from 'react';
import {duration} from '../utils/time';
import {connect} from 'react-redux';
import {fetchPlaySong} from './../redux/MusicNow';

class ListCell extends Component{
  constructor(){
    super();
    this.play = this.play.bind(this);
  }
  play(){
    this.props.play(this.props.song_id);
  }
  render() {
    const {seq, title, author, album_title, durationStyle, file_duration} = this.props;
    return(
      <tr className="cell" onDoubleClick={this.play}>
        <td style={{textAlign:"right"}}>{seq}</td>
        <td>
          <span className="m-icon m-heart"/>
          <span className="cell-add">+</span>
        </td>
        <td>{title}</td>
        <td>{author}</td>
        <td>{album_title}</td>
        <td style={durationStyle}> {file_duration} </td>
      </tr>
    )
  }
}
const mapStateTOProps = (state, ownProps) => {
  return {...ownProps, file_duration: duration(ownProps.file_duration)}
};
const mapDispatchToProps = (dispatch) => {
  return{
    play: (song_id, audio) => dispatch(fetchPlaySong(song_id))
  }
};

export default connect(mapStateTOProps, mapDispatchToProps)(ListCell);