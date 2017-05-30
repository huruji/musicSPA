import fetchJsonp from 'fetch-jsonp';
import CONFIG from './../config';
import changeJson from './../utils/changeJson';

import {fetching, fetchingFailed, fetchingSuccess} from './FetchState';

const UPDATEREAIVEMUSIC = 'UPDATEREAIVEMUSIC';



const ResiveMusic = function(state,action){
  if(!state){
    return {length:0,date:'',name:'',comment:'',avator_url:'',song_list:[]}
  }
  switch(action.type){
    case UPDATEREAIVEMUSIC:
      return {
        length: action.billboard.length,
        date: action.billboard.date,
        comment: action.billboard.comment,
        name: action.billboard.name,
        avator_url: action.billboard.avator_url,
        song_list: action.song_list,
      };
    default:
      return state
  }
};

export const updateChannelList = (json) => {
  return {
    type: UPDATEREAIVEMUSIC,
    billboard: json.billboard,
    song_list: json.song_list
  }
};


export function fetchChannelList(id) {
  return (dispatch, getState) => {
    dispatch(fetching());
    const url = `${CONFIG.baseUrl}?${CONFIG.channelMethod}&type=${id}`;
    return fetchJsonp(url,{
      timeout: 5000
    }).then((response) =>(
          response.json()
        )
      ).then((json) => {
        const music = changeJson(json);
        dispatch(updateChannelList(music));
        dispatch(fetchingSuccess())
      }).catch(((err) => {
        console.log('catch');
        dispatch(fetchingFailed());
    }))
  }
}


export default ResiveMusic;

