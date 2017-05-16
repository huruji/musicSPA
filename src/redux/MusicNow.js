import React from 'react';
import fetchJsonp from 'fetch-jsonp';
import CONFIG from './../config';
import changeSongJson from './../utils/changSongJson';

const PLAYERSTATESHIFT = 'PLAYERSTATESHIFT';
const CHANGEVOLUME = 'CHANGEVOLUME';
const CHANGEMUTED = 'CHANGEMUTED';
const CHANGECURTIME = 'CHANGECURTIME';
const UPDATEPLAYSONG = 'UPDATEPLAYSONG';
const ACTPLAYSTATE = 'ACTPLAYSTATE';
const UPDATENEWSONG = 'UPDATENEWSONG';

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
  totalTime: 269,
  newSong:false
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
      return {...state, curTime: action.curTime};
    case UPDATEPLAYSONG:
      return {...state, ...action.item, playFlag: action.playFlag, curTime: 0};
    case ACTPLAYSTATE:
      return {...initState, playFlag: true};
    case UPDATENEWSONG:
      return {...state, newSong: action.newSong};
    default:
      return state;
  }
};

export const updateNewSong = (newSong) => {
  return {
    type: UPDATENEWSONG,
    newSong: newSong
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
};
export const updatePlaySong = (song) => {
  return {
    type: UPDATEPLAYSONG,
    item: song,
    playFlag: true
  }
};
export const actPlayState = () => {
  return{
    type: ACTPLAYSTATE
  }
};
export default MusicNow;