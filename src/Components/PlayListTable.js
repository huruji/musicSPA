import React,{ Component } from 'react';
import  {duration} from './../utils/time'

class PlayListTable extends Component {
  constructor(){
    super();
    this.playSong = this.playSong.bind(this);
  }
  playSong(){
    this.props.playSong(this.props.song_id);
  }
  render(){
    return (
      <tr className="cell" onClick={this.playSong}>
        <td>
          <span ></span>
          {this.props.title}
        </td>
        <td>{this.props.author}</td>
        <td>{duration(this.props.file_duration)}</td>
      </tr>
    );
  }
}

export default PlayListTable;