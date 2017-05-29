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
    const {song} = {...this.props};
    return (
        <li onClick={this.fetchAddPlaySong}>
          <img src={song.pic_small} alt=""/>
          <p>{song.author}-{song.title}</p>
        </li>
    )
  }
}

export default RecommandItem;
