import React from 'react';

const ListHeader = (props) => {
  const {url, themeColor, listName, comment, playAll, date, listcnt} = {...props};
  return(
    <div className="list-header">
      <div className="list-avatar" style={{background: `url(${url})`}}>
      </div>
      <div className="list-info">
        <div className="list-title">
          <div>
            <span className="list-logo" style={{backgroundColor: themeColor}}>歌单</span>
            <span className="list-name">{listName}</span>
          </div>
          <p>{date}创建</p>
        </div>
        <div className="list-btn">
          <div className="list-playAll">
            <span className="list-text" onClick={playAll}>
              <i className="m-icon m-play" style={{color: themeColor}}></i>
              播放全部
            </span>
            <span className="list-add">+</span>
          </div>
        </div>
        <div className="list-comment">
          <span>简介：</span>{comment}
        </div>
      </div>
      <div className="list-count">
        {listcnt}
      </div>
    </div>
  )
};


export default ListHeader;