import React,{ Component } from 'react';
import {duration} from '../utils/time';

class listCell extends Component{
  render() {
    let {seq, title, author, album_title, durationStyle, file_duration} = this.props;
    file_duration = duration(file_duration);
    return(
      <tr className="cell" >
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

export default listCell;