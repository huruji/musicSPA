import React from 'react';

const LyricImg = (props) => {
  const {playFlag, pic_big} = {...props};
  return(
    <div className="lyric-operation" >
      <div className="lyric-outer rotate" style={{animationPlayState: playFlag ? 'running' : 'paused'}}>
        <div className="lyric-inner">
          <div className="lyric-img" ><img src={pic_big} alt=""/></div>
        </div>
      </div>
    </div>
  )
};

export default LyricImg;