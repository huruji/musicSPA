import React, {Component} from 'react';
import ListCell from './ListCell';

class ListCellView extends Component{
  render() {
    if(!this.props.list){
      return null;
    }
    return(
      <tbody>
      {
        this.props.list.map((item, index) => (
          <ListCell key={index} seq={index + 1} {...item}/>
          ))
      }
      </tbody>
    )
  }
}

export default  ListCellView;