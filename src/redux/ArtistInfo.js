import fetchJsonp from 'fetch-jsonp';
import CONFIG from './../config';

const UPDATEARTISTINFO = 'UPDATEARTISTINFO';
const FETCHING = 'FETCHING';
const FETCHINGFAILED = 'FETCHINGFAILED';

const initialState = {
  fetching: false,
  failed: false
};

const ArtistInfo = function(state,action){
  if(!state){
    return initialState;
  }
  switch(action.type){
    case UPDATEARTISTINFO:
      return {...state,...action.artistInfo, fetching: false, failed: false};
    case FETCHING:
      return {...state, fetching: true, failed: false};
    case FETCHINGFAILED:
      return {...state, fetching: false, failed: true};
    default:
      return state;
  }
};

export const updateArtistInfo = (artistInfo) => {
  return {
    type: UPDATEARTISTINFO,
    artistInfo
  }
};
const fetching = () => {
  return {
    type: FETCHING
  }
};
const fetchingFailed = () => {
  return {
    type: FETCHINGFAILED
  }
};

export const fetchArtistInfo = (tinguid) => {
  return (dispatch, getState) => {
    dispatch(fetching());
    const url = `${CONFIG.baseUrl}?${CONFIG.artistInfo}${tinguid}`;
    fetchJsonp(url,{
      timeout: 5000
    }).then(response => response.json())
        .then(json => {
          dispatch(updateArtistInfo(json));
        }).catch(err => dispatch(fetchingFailed()))
  }
};

export default ArtistInfo;

