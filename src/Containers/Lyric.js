import React,{Component} from 'react';
import LyricInfo from './../Components/LyricInfo';
import LyricContent from './../Components/LyricContent';

class Lyric extends Component{
  render() {
    return(
      <div className="lyric clear-float">
        <div className="lyric-operation">
          <div className="lyric-outer">
            <div className="lyric-inner">
              <div className="lyric-img" ></div>
            </div>
          </div>
        </div>
        <div className="lyric-container">
          <LyricInfo />
          <LyricContent/>
        </div>
      </div>
    )
  }
}

export default  Lyric;