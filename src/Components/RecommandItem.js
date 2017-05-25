import React, {Component} from 'react';

class RecommandItem extends Component{
  constructor(){
    super();
    this.fetchAddPlaySong = this.fetchAddPlaySong.bind(this);
  }
  fetchAddPlaySong(){
    this.props.fetchAddPlaySong((this.props.song.song_id));
  }

  render(){
    return (
        <li onClick={this.fetchAddPlaySong}>
          <img src={this.props.song.pic_small} alt=""/>
          <p>{this.props.song.author}-{this.props.song.title}</p>
        </li>
    )
  }
}

export default RecommandItem;
