import React, {Component} from 'react';
import CategorySongListCell from './CategorySongListCell';

class CategorySongList extends Component{
  render() {
    if(!this.props.list){
      return null;
    }
    return(
        <tbody>
        {
          this.props.list.map((item, index) => (
              <CategorySongListCell key={index} seq={index + 1} {...item} showDuration={this.props.showDuration} loveSearchList={this.props.loveSearchList}/>
          ))
        }
        </tbody>
    )
  }
}

export default  CategorySongList;