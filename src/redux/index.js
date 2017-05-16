import {combineReducers} from 'redux';

import LocalPlayList from './LocaPlayList';
import ResiveMusic from './Channel';
import MusicNow from './MusicNow';
import PlayList from './PlayList'

import fetchJsonp from 'fetch-jsonp';
import CONFIG from './../config';
import changeSongJson from './../utils/changSongJson';
import {updatePlaySong, updateNewSong} from './MusicNow';
import {addPlayList} from './PlayList'

const rootReducer = combineReducers({
  LocalPlayList,
  ResiveMusic,
  MusicNow,
  PlayList
});

export const fetchAddPlaySong = (id, index) => {
  return (dispatch, getState) => {
    const url = `${CONFIG.baseUrl}?${CONFIG.songMethod}${id}`;
    return fetchJsonp(url,{
      timeout: 10000
    })
      .then(response => response.json())
      .then(json => {
        const curSongIds = getState().PlayList.song_list.map(item => item.song_id);
        console.log(curSongIds);
        if(!curSongIds.includes(id)){
          const addSong = getState().ResiveMusic.song_list[index];
          dispatch(addPlayList(addSong))
        }
        const song = changeSongJson(json);
        dispatch(updatePlaySong(song));
        const newSong = !getState().MusicNow.newSong;
        dispatch(updateNewSong(newSong));
      })
  }
};

export default rootReducer;