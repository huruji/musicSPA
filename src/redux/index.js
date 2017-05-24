import {combineReducers} from 'redux';

import LocalPlayList from './LocaPlayList';
import ResiveMusic from './Channel';
import MusicNow from './MusicNow';
import PlayList from './PlayList'
import SearchList from './Search'

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
  PlayList,
  SearchList
});
export const addSongToPlayList  = (song_id) => {
  return (dispatch, getState) => {
    const receiveIds = getState().ResiveMusic.song_list.map((item) => {return item.song_id});
    const playListIds = getState().PlayList.song_list.map((item) => {return item.song_id});
    console.log('ids');
    console.log(song_id);
    console.log(receiveIds);
    console.log(playListIds);
    if(receiveIds.includes(song_id) && !playListIds.includes(song_id)) {
      let addSong;
      console.log('addSong');
      getState().ResiveMusic.song_list.forEach((item, index, arr) => {
        if(item.song_id == song_id) {
          addSong = {...arr[index]};
          console.log(addSong);
          dispatch(addPlayList(addSong))
        }
      });
    }
  }
};

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

export const loveShift = (song_id,songList) => {
  return (dispatch, getState) => {
    const localSongIds = getState().LocalPlayList.song_list.map(item => item.song_id);
    if(localSongIds.includes(song_id)){
      console.log('delete');
      dispatch(deleteRomLocalList(localSongIds.indexOf(song_id)));
    } else {
      console.log('safsdf');
      let song = [];
      console.log(songList);
      songList.forEach((item, index, arr) => {
        if(item.song_id == song_id) {
          song.push({...arr[index]});
          console.log('getState().LocalPlayList.song_list');
          console.log(getState().LocalPlayList.song_list);
          dispatch(addLocalPlayList(song))
        }
      });
    }
  }
};

export const playNext = () => {
  return (dispatch, getState) => {
    const songId = getState().MusicNow.song_id;
    const playList = getState().PlayList.song_list;
    let index;
    playList.forEach((item, i) => {
      if(item.song_id === songId) {
        index = i;
      }
    });
    console.log('index');
    console.log(index);
    if(index !== undefined && index < playList.length - 1){
      console.log('kasjf');
      const newSongId = playList[index + 1].song_id;
      dispatch(fetchAddPlaySong(newSongId))
    } else if(index !== undefined && index == playList.length - 1) {
      const newSongId = playList[0].song_id;
      dispatch(fetchAddPlaySong(newSongId))
    }
  }
};

export const playPrev = () => {
  return (dispatch, getState) => {
    const songId = getState().MusicNow.song_id;
    const playList = getState().PlayList.song_list;
    let index;
    playList.forEach((item, i) => {
      if(item.song_id === songId) {
        index = i;
      }
    });
    console.log('index');
    console.log(index);
    if(index !== undefined && index > 0){
      console.log('kasjf');
      const newSongId = playList[index - 1].song_id;
      dispatch(fetchAddPlaySong(newSongId))
    } else if(index !== undefined && index == 0) {
      const newSongId = playList[playList.length -1].song_id;
      dispatch(fetchAddPlaySong(newSongId))
    }
  }
};

export default rootReducer;