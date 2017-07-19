import React from 'react';
import ListCell from './ListCell';

const ListCellView = (props) => {
  const {list, showDuration, loveSearchList} = {...props};
  if(!list){
    return null;
  }
  return(
    <tbody>
    {
      list.map((item, index) => (
        <ListCell key={index} seq={index + 1} {...item} showDuration={showDuration} loveSearchList={loveSearchList}/>
      ))
    }
    </tbody>
  )
};

export default  ListCellView;