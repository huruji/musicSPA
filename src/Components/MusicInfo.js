import React,{ Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class MusicInfo extends Component {
  constructor(){
    super();
  }
  render(){
    /*console.log(this.props);*/
    const {title, author, bg} = this.props;
    return(
     <div className="music-info">
       <Link to="/lyric" className='music-img' style={bg}></Link>
       <div className="music-baseInfo">
         <h6>{title}</h6>
         <p>{author}</p>
       </div>
     </div>
    )
  }
}

const mapStateToProps = (state) => {
  const musicNow = state.MusicNow;
  return{
    title: musicNow.song_title,
    author: musicNow.song_author,
    bg: {background: `url(${musicNow.pic_small})`}
  }
};

export default connect(mapStateToProps)(MusicInfo);