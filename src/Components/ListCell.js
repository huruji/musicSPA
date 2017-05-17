import React,{ Component } from 'react';
import {duration} from '../utils/time';
import {connect} from 'react-redux';
import {fetchAddPlaySong, loveShift, addSongToPlayList} from './../redux';

class ListCell extends Component{
  constructor(){
    super();
    this.play = this.play.bind(this);
    this.loveShift = this.loveShift.bind(this);
    this.addPlayList = this.addPlayList.bind(this);
  }
  play(){
    this.props.play(this.props.song_id);
  }
  loveShift() {
    console.log('love');
    this.props.loveShift(this.props.song_id);
  }
  addPlayList() {
    console.log('add');
    this.props.addPlayList(this.props.song_id);
  }
  render() {
    const {seq, title, author, album_title, durationStyle, file_duration, heartColor} = this.props;
    return(
      <tr className="cell" onDoubleClick={this.play}>
        <td style={{textAlign:"right"}}>{seq}</td>
        <td>
          <span className="m-icon m-heart" style={{color: heartColor}} onClick={this.loveShift}/>
          <span className="cell-add" onClick={this.addPlayList}>+</span>
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
  const localSongListIds = state.LocalPlayList.song_list.map(item => item.song_id);
  const heartColor = localSongListIds.includes(ownProps.song_id) ? '#EB363F' : '#cdd2d7';
  return {...ownProps, file_duration: duration(ownProps.file_duration), heartColor}
};
const mapDispatchToProps = (dispatch) => {
  return{
    play: (song_id, index) => dispatch(fetchAddPlaySong(song_id)),
    loveShift: (song_id) => dispatch(loveShift(song_id)),
    addPlayList: (song_id) => dispatch(addSongToPlayList(song_id))
  }
};

export default connect(mapStateTOProps, mapDispatchToProps)(ListCell);