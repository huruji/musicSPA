import React,{ Component } from 'react';

class LyricInfo extends Component {
  render(){
    const {title, album_title, author} = {...this.props};
    return(
      <div className="lyric-info">
        <h3>{title}</h3>
        专辑：<span>{album_title}</span>
        歌手：<span>{author}</span>
      </div>
    )
  }
}

export default LyricInfo;