import React,{ Component } from 'react';

class LyricImg extends Component {
  render(){
    const {playFlag, pic_big} = {...this.props};
    return(
        <div className="lyric-operation" >
          <div className="lyric-outer rotate" style={{animationPlayState: playFlag ? 'running' : 'paused'}}>
            <div className="lyric-inner">
              <div className="lyric-img" ><img src={pic_big} alt=""/></div>
            </div>
          </div>
        </div>
    )
  }
}

export default LyricImg;