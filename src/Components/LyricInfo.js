import React,{ Component } from 'react';
import {Link} from 'react-router-dom';

class LyricInfo extends Component {
  render(){
    const {title, album_title, author, album_id, ting_uid} = {...this.props};
    return(
      <div className="lyric-info">
        <h3>{title}</h3>
        专辑：<span><Link to={`/albumsong/${album_id}`}>{album_title}</Link></span>
        歌手：<span><Link to={`/artistsong/${ting_uid}`}>{author}</Link></span>
      </div>
    )
  }
}

export default LyricInfo;