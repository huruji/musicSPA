import React, {Component} from 'react';
import ArtistAlbumListCell from './ArtistAlbumListCell';

class ArtistAlbumList extends Component{
  render() {
    if(!this.props.list){
      return null;
    }
    const {showDuration, loveSearchList} = {...this.props};
    return(
        <tbody>
        {
          this.props.list.map((item, index) => (
              <ArtistAlbumListCell key={index} seq={index + 1} {...item} showDuration={showDuration} loveSearchList={loveSearchList}/>
          ))
        }
        </tbody>
    )
  }
}

export default  ArtistAlbumList;