import React, {Component} from 'react';
import ListCell from './ListCell';

class ListCellView extends Component{
  render() {
    const {list, showDuration, loveSearchList} = {...this.props};
    if(!list){
      return null;
    }
    return(
      <tbody>
      {
        this.props.list.map((item, index) => (
          <ListCell key={index} seq={index + 1} {...item} showDuration={showDuration} loveSearchList={loveSearchList}/>
          ))
      }
      </tbody>
    )
  }
}

export default  ListCellView;