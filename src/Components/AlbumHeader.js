import React,{Component} from 'react';

const AlbumHeader = (props) => {

  const {pic_big, title, author, publishtime} = {...props.albumInfo};
  const themeColor = props.themeColor;

  return(
    <div className="artist-header clear-float">
      <div className="artist-header-img">
        <img src={pic_big} alt=""/>
      </div>
      <div className="artist-header-info">
        <div className="artist-header-info-name">
          <p><span style={{backgroundColor: themeColor}}>专辑</span>{title}</p>
        </div>
        <ul className="artist-header-info-song">
          <li>
            歌手：{author}
          </li>
          <li>
            时间：{publishtime}
          </li>
        </ul>
      </div>
    </div>
  )
};

export default AlbumHeader;