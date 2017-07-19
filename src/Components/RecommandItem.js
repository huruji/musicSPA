import React, {Component} from 'react';

const RecommandItem = (props) => {
  const {song, fetchAddPlaySong} = {...props};

  const fetch = function() {
    fetchAddPlaySong(song.song_id)
  }
  return (
    <li onClick={fetch}>
      <img src={song.pic_small} alt=""/>
      <p>{song.author}-{song.title}</p>
    </li>
  )
};

export default RecommandItem;
