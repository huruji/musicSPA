import fetchJsonp from 'fetch-jsonp';
import CONFIG from './../config';
import changeJson from './../utils/changeJson';

const UPDATEREAIVEMUSIC = 'UPDATEREAIVEMUSIC';
const FETCHINGFAILED = 'FETCHINGFAILED';
const FETCHING = 'FETCHING';

const ResiveMusic = function(state,action){
  if(!state){
    return {length:0,date:'',name:'',comment:'',avator_url:'',song_list:[],fetching:false,failed: false}
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
        fetching: false
      };
    case FETCHINGFAILED:
      return {...state, failed: true, fetching: false};
    case FETCHING:
      return {...state, fetching: true};
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

export const fetchFailed = () => {
  return {
    type: FETCHINGFAILED
  }
};

export const fetching = () => {
  return {
    type: FETCHING
  }
}

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
      }).catch(((err) => {
        console.log('catch');
        dispatch(fetchFailed());
    }))
  }
}


export default ResiveMusic;

