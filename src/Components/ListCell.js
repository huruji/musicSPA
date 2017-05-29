import React,{ Component } from 'react';
import {duration} from '../utils/time';
import {connect} from 'react-redux';
import {fetchAddPlaySong, loveShift, addSongToPlayList} from './../redux';
import {Link} from 'react-router-dom';

class ListCell extends Component{
  constructor(){
    super();
    this.play = this.play.bind(this);
    this.loveShift = this.loveShift.bind(this);
    this.addPlayList = this.addPlayList.bind(this);
  }
  play(){
    this.props.play(this.props.song_id, this.props.loveSearchList);
  }
  loveShift() {

    this.props.loveShift(this.props.song_id, this.props.loveSearchList);
  }
  addPlayList() {
    this.props.addPlayList(this.props.song_id, this.props.loveSearchList);
  }
  render() {

    const {seq, title, author, album_title, showDuration, file_duration, heartColor} = this.props;
    let artistSong = null;
    if(this.props.ting_uid){
      artistSong = <td><Link to={`/artistsong/${this.props.ting_uid}`} dangerouslySetInnerHTML={{__html: author}}></Link></td>
    } else{
      artistSong = <td dangerouslySetInnerHTML={{__html: author}}></td>
    }
    return(
      <tr className="cell" onDoubleClick={this.play}>
        <td style={{textAlign:"right"}}>{seq}</td>
        <td>
          <span className="m-icon m-heart" style={{color: heartColor}} onClick={this.loveShift}/>
          <span className="cell-add" onClick={this.addPlayList}>+</span>
        </td>
        <td dangerouslySetInnerHTML={{__html: title}}></td>
        {artistSong}
        <td><Link to={`/albumsong/${this.props.album_id}`} dangerouslySetInnerHTML={{__html:album_title}}></Link></td>
        <td style={{display: showDuration}}> {file_duration} </td>
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
    play: (song_id, loveSearchList) => dispatch(fetchAddPlaySong(song_id, loveSearchList)),
    loveShift: (song_id,loveSearchList) => dispatch(loveShift(song_id, loveSearchList)),
    addPlayList: (song_id, loveSearchList) => dispatch(addSongToPlayList(song_id, loveSearchList))
  }
};

export default connect(mapStateTOProps, mapDispatchToProps)(ListCell);