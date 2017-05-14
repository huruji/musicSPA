import React from 'react';
const PLAYERSTATESHIFT = 'PLAYERSTATESHIFT';
const CHANGEVOLUME = 'CHANGEVOLUME';
const CHANGEMUTED = 'CHANGEMUTED';
const CHANGECURTIME = 'CHANGECURTIME';
const initState = {
  playFlag:true,
  pic_small: 'http://musicdata.baidu.com/data2/pic/ab055cc7c59de25a37f06f060ec3bccf/540561450/540561450.jpg@s_0,w_90',
  pic_big: 'http://musicdata.baidu.com/data2/pic/ab055cc7c59de25a37f06f060ec3bccf/540561450/540561450.jpg@s_0,w_150',
  song_url: 'http://hlayer.huruji3.com/assets/nice.mp3',
  song_id: '540560826',
  song_title: '我害怕',
  song_author: '薛之谦',
  volume: 40,
  muted: false,
  curTime:0,
  totalTime: 269
};

const MusicNow = (state = initState, action) => {
  switch(action.type){
    case PLAYERSTATESHIFT:
      return {...state, playFlag: action.playFlag};
    case CHANGEVOLUME:
      let volume = action.volume;
      return {...state, volume: volume};
    case CHANGEMUTED:
      const muted = !state.muted;
      return {...state, muted:muted};
    case CHANGECURTIME:
      return {...state, curTime: action.curTime}
    default:
      return state;
  }
};


export const playStateShift = (audio)=>{
  return (dispatch, getState) => {
    getState().MusicNow.playFlag ? audio.pause() : audio.play();
    dispatch({type: PLAYERSTATESHIFT, playFlag: !getState().MusicNow.playFlag});
  }
};
export const changeMuted = () => {
  return{
    type: CHANGEMUTED
  }
};
export const changeVolume = (volume) => {
  return {
    type: CHANGEVOLUME,
    volume,
  }
};
export const changeCurTime = (time) => {
  return {
    type:CHANGECURTIME,
    curTime: time
  }
}
export default MusicNow;