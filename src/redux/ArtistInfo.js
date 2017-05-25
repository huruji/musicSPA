import fetchJsonp from 'fetch-jsonp';
import CONFIG from './../config';

const UPDATEARTISTINFO = 'UPDATEARTISTINFO';

const initialState = {

};

const ArtistInfo = function(state,action){
  if(!state){
    return initialState;
  }
  switch(action.type){
    case UPDATEARTISTINFO:
      return {...action.artistInfo};
    default:
      return state;
  }
}

export const updateArtistInfo = (artistInfo) => {
  return {
    type: UPDATEARTISTINFO,
    artistInfo
  }
}


export const fetchArtistInfo = (tinguid) => {
  return (dispatch, getState) => {
    const url = `${CONFIG.baseUrl}?${CONFIG.artistInfo}${tinguid}`;
    fetchJsonp(url)
        .then(response => response.json())
        .then(json => {
          dispatch(updateArtistInfo(json));
        })
  }
}

export default ArtistInfo;

