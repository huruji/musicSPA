import React, {Component} from 'react';
import RecommandItem from './../Components/RecommandItem';

class Recommand extends Component{
  constructor(){
    super();
    this.fetchAddPlaySong = this.fetchAddPlaySong.bind(this);
  }
  fetchAddPlaySong(song_id){
    this.props.fetchAddPlaySong(song_id);
  }

  render(){
    const {recommandList} = {...this.props};
    return (
        <div className="recommand-container">
          <p className="recommand-title">推荐歌曲</p>
          <ul className="clear-float">
            {
              recommandList.map((item,i) => {
                return (
                    <RecommandItem key={i} song={item}  fetchAddPlaySong={this.fetchAddPlaySong}/>
                )
              })
            }
          </ul>
        </div>
    )
  }
}

export default Recommand;
