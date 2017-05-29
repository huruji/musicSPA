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
    const {title, author, file_duration} = {...this.props};
    return (
      <tr className="cell" onClick={this.playSong}>
        <td>
          <span ></span>
          {title}
        </td>
        <td>{author}</td>
        <td>{duration(file_duration)}</td>
      </tr>
    );
  }
}

export default PlayListTable;