import React, {Component} from 'react';
import ArtistAlbumListCell from './ArtistAlbumListCell';

const ArtistAlbumList = (props) => {
  if(!this.props.list){
    return null;
  }
  const {showDuration, loveSearchList} = {...props};
  return(
    <tbody>
    {
      this.props.list.map((item, index) => (
        <ArtistAlbumListCell key={index} seq={index + 1} {...item} showDuration={showDuration} loveSearchList={loveSearchList}/>
      ))
    }
    </tbody>
  )
};

export default  ArtistAlbumList;