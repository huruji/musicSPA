import React,{ Component } from 'react';
import  {duration} from './../utils/time'

class PlayListTable extends Component {
  constructor(){
    super();
  }
  render(){
    return (
      <tr className="cell" >
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