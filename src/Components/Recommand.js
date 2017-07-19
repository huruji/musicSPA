import React from 'react';
import RecommandItem from './../Components/RecommandItem';

const Recommand = (props) => {
  const {recommandList, fetchAddPlaySong} = {...props};
  return (
    <div className="recommand-container">
      <p className="recommand-title">推荐歌曲</p>
      <ul className="clear-float">
        {
          recommandList.map((item,i) => {
            return (
              <RecommandItem key={i} song={item}  fetchAddPlaySong={fetchAddPlaySong}/>
            )
          })
        }
      </ul>
    </div>
  )
};

export default Recommand;
