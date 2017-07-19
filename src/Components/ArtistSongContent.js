import React, {Component} from 'react';
import ArtistAlbumList from './ArtistAlbumList';
import {Link} from 'react-router-dom';

const ArtistSongContent = (props) => {
  // albumid:专辑ID   albumimg:专辑图片   publishtime:发行时间
  // themeColor:主题色   showDuration:是否显示时长   listContent:歌曲列表
  // loveSearchList:    title：专辑名称
  const {albumid, albumimg, publishtime, themeColor, showDuration, listContent, loveSearchList, title} = {...this.props};
  return(
    <div className="clear-float" style={{margin:'0 20px'}}>
      <div className="album-img-container" >
        <Link to={`/albumsong/${albumid}`}>
          <img src={albumimg} alt=""/>
          <p>{publishtime}</p>
        </Link>
      </div>
      <div className="list-content" style={{float:'left',width:'80%'}}>
        <p><Link to={`/albumsong/${albumid}`} style={{color:'#333',fontSize: '14px', lineHeight: '28px'}}>{title}</Link></p>
        <table>
          <thead>
          <tr style={{borderTopColor: themeColor}}>
            <th>序号</th>
            <th>操作</th>
            <th>音乐标题</th>
            <th style={{display: showDuration}}>时长</th>
          </tr>
          </thead>
          <ArtistAlbumList list={listContent} showDuration={showDuration} loveSearchList={loveSearchList}/>
        </table>
      </div>
    </div>
  )
};

export default ArtistSongContent;