import React, {Component} from 'react';
import ArtistAlbumListCell from './ArtistAlbumListCell';

const ArtistAlbumList = (props) => {
  if(!props.list){
    return null;
  }
  const {showDuration, loveSearchList} = {...props};
  return(
    <tbody>
    {
      props.list.map((item, index) => (
        <ArtistAlbumListCell key={index} seq={index + 1} {...item} showDuration={showDuration} loveSearchList={loveSearchList}/>
      ))
    }
    </tbody>
  )
};

export default  ArtistAlbumList;