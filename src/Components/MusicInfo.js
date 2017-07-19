import React,{ Component } from 'react';
import {Link} from 'react-router-dom';

const MusicInfo = (props) => {
  const {bg, title, author} = {...props};
  return(
    <div className="music-info">
      <Link to="/lyric" className='music-img' style={bg}></Link>
      <div className="music-baseInfo">
        <h6>{title}</h6>
        <p>{author}</p>
      </div>
    </div>
  )
};

export default MusicInfo