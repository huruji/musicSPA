import React,{ Component } from 'react';

class LyricContent extends Component {
  constructor(){
    super();
  }
  render(){
    const {lyricContent, curTime, lyricTime, } = {...this.props};
    const lis = lyricContent.map((item,i) =>{
      if(curTime > lyricTime[i] && curTime < lyricTime[i+1]){
        if(this.lyric){
          const scrollTop = this.lyric.scrollTop;
          if(scrollTop < (i-5)*30){
            this.lyric.scrollTop = 30*(i - 5);
          }
        }
        return (<li key={i} style={{color:'#C10D0C'}}>{item}</li>);
      } else{
        return (<li key={i}>{item}</li>);
      }
    } );
    return(
      <div className="lyric-content" ref={lyric => this.lyric = lyric}>
        <ul>
          {lis}
        </ul>
      </div>
    )
  }
}

export default LyricContent;