import fetchJsonp from 'fetch-jsonp';
import CONFIG from './../config';

const UPDATECOMMANDLIST = 'UPDATECOMMANDLIST';

const initialState = {
  recommandList: []
};

const Recommand = function(state,action){
  if(!state){
    return initialState;
  }
  switch(action.type){
    case UPDATECOMMANDLIST:
      return {...state, recommandList: action.songList};
    default:
      return state;
  }
}

export const updateCommandList = (songList) => {
  return {
    type: UPDATECOMMANDLIST,
    songList
  }
}


export const fetchCommandList = (song_id) => {
  return (dispatch, getState) => {
    const url = `${CONFIG.baseUrl}?${CONFIG.recommend}${song_id}${CONFIG.recommendSize}`;
    fetchJsonp(url)
        .then(response => response.json())
        .then(json => {
          const list = json.result.list;
          dispatch(updateCommandList(list));
        })
  }
}

export default Recommand;

