import {combineReducers} from 'redux';

import LocalPlayList from './LocaPlayList';
import ResiveMusic from './Channel';
import MusicNow from './MusicNow';
import PlayList from './PlayList'

import fetchJsonp from 'fetch-jsonp';
import CONFIG from './../config';
import changeSongJson from './../utils/changSongJson';
import {updatePlaySong, updateNewSong} from './MusicNow';
import {addPlayList, updateAllPlayList} from './PlayList';
import {addLocalPlayList, deleteRomLocalList} from './LocaPlayList'

const rootReducer = combineReducers({
  LocalPlayList,
  ResiveMusic,
  MusicNow,
  PlayList
});

export const fetchAddPlaySong = (id) => {
  return (dispatch, getState) => {
    const url = `${CONFIG.baseUrl}?${CONFIG.songMethod}${id}`;
    return fetchJsonp(url,{
      timeout: 10000
    })
      .then(response => response.json())
      .then(json => {
        console.log(getState().PlayList);
        const curSongIds = getState().PlayList.song_list.map((item) => {return item.song_id});
        console.log(curSongIds);
        if(!curSongIds.includes(id)){
          let addSong;
          console.log('include');
          getState().ResiveMusic.song_list.forEach((item, index, arr) => {
            if(item.song_id == id) {
              addSong = {...arr[index]};
              console.log('foreach');
              console.log(addSong);
              dispatch(addPlayList(addSong))
            }
          });
        }
        const song = changeSongJson(json);
        dispatch(updatePlaySong(song));
        const newSong = !getState().MusicNow.newSong;
        dispatch(updateNewSong(newSong));
      })
  }
};

export const playAll = () => {
  return (dispatch, getState) => {
    console.log('getSate');
    console.log(getState());
    const songList = getState().ResiveMusic.song_list;
    dispatch(updateAllPlayList(songList));
    const id = songList[0].song_id;
    const url = `${CONFIG.baseUrl}?${CONFIG.songMethod}${id}`;
    fetchJsonp(url,{
      timeout: 10000
    })
      .then(response => response.json())
      .then(json => {
        const song = changeSongJson(json);
        dispatch(updatePlaySong(song));
        const newSong = !getState().MusicNow.newSong;
        dispatch(updateNewSong(newSong));
      })
  }
};

export const loveShift = (song_id) => {
  return (dispatch, getState) => {
   /* console.log(getState().LocalPlayList);*/
    const localSongIds = getState().LocalPlayList.song_list.map(item => item.song_id);
    if(localSongIds.includes(song_id)){
      console.log('delete');
      dispatch(deleteRomLocalList(localSongIds.indexOf(song_id)));
    } else {
      let song = [];
      getState().ResiveMusic.song_list.forEach((item, index, arr) => {
        if(item.song_id == song_id) {
          song.push({...arr[index]});
          /*console.log('song');
          console.log(song);*/
          console.log('getState().LocalPlayList.song_list');
          console.log(getState().LocalPlayList.song_list);
          dispatch(addLocalPlayList(song))
        }
      });
    }
  }
};

export default rootReducer;