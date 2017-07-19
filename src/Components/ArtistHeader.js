import React,{Component} from 'react';

const ArtistHeader = (props) => {

  // avatar_s180:音乐人头像    themeColor:主题色    name:音乐人姓名
  // aliasname:音乐人昵称    songs_total:歌曲数量  albums_total:专辑数量
  // mv_total:mv数量
  const {avatar_s180,themeColor, name, aliasname, songs_total, albums_total, mv_total} = {...props};

  return(
    <div className="artist-header clear-float">
      <div className="artist-header-img">
        <img src={avatar_s180} alt=""/>
      </div>
      <div className="artist-header-info">
        <div className="artist-header-info-name">
          <p><span style={{backgroundColor: themeColor}}>歌手</span>{name}</p>
          <p>{aliasname}</p>
        </div>
        <ul className="artist-header-info-song">
          <li>
            单曲数:{songs_total}
          </li>
          <li>
            专辑数:{albums_total}
          </li>
          <li>
            MV数:{mv_total}
          </li>
        </ul>
      </div>
    </div>
  )
};

export default ArtistHeader;