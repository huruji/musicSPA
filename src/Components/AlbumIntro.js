import React,{Component} from 'react';

class AlbumIntro extends Component{
  constructor(){
    super();
  }
  render(){
    let intro = [];
    if(this.props.info){
      intro = this.props.info.split('\n');
    }
    return(
        <div className="artist-intro">
          {intro.map((item, i) => (<p key={i}>{item}</p>))}
        </div>
    )
  }
}


export default AlbumIntro;