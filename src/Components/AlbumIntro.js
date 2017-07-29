import React from 'react';

const AlbumIntro = (props) => {
  let intro = [];
  if(props.info){
    intro = props.info.split('\n');
  }
  return(
    <div className="artist-intro">
      {intro.map((item, i) => (<p key={i}>{item}</p>))}
    </div>
  )
};

export default AlbumIntro;