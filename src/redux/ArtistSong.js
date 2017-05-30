import fetchJsonp from 'fetch-jsonp';
import CONFIG from './../config';

const UPDATEARTISTSONG = 'UPDATEARTISTSONG';

const initialState = {
  songList: []
};

const ArtistSong = function(state,action){
  if(!state){
    return initialState;
  }
  switch(action.type){
    case UPDATEARTISTSONG:
      return {...state, songList: action.songList};
    default:
      return state;
  }
}

export const updateArtistSong = (songList) => {
  return {
    type: UPDATEARTISTSONG,
    songList: songList
  }
};


export const fetchArtistSong = (tinguid) => {
  return (dispatch, getState) => {
    const url = `${CONFIG.baseUrl}?${CONFIG.artistSong}${tinguid}`;
    console.log(url);
    fetchJsonp(url,{
      timeout: 5000
    }).then(response => response.json())
        .then(json => {
          console.log(json);
          dispatch(updateArtistSong(json.songlist));
        })
  }
};

export default ArtistSong;

