import React,{ Component } from 'react';

class LyricImg extends Component {
  render(){
    return(
        <div className="lyric-operation" >
          <div className="lyric-outer rotate" style={{animationPlayState: this.props.playFlag ? 'running' : 'paused'}}>
            <div className="lyric-inner">
              <div className="lyric-img" ><img src={this.props.pic_big} alt=""/></div>
            </div>
          </div>
        </div>
    )
  }
}

export default LyricImg;