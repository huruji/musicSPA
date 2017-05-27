import fetchJsonp from 'fetch-jsonp';
import CONFIG from './../config';

const UPDATEALBUMINFO = 'UPDATEALBUMINFO';

const initialState = {
  albumInfo:{},
  songlist:[]
};

const AlbumInfo = (state = initialState, action) => {
  if(!state) {
    return initialState;
  }
  switch(action.type) {
    case UPDATEALBUMINFO:
      return {albumInfo: action.albumInfo, songlist: action.songlist};
    default:
      return state;
  }
};

const updateAlbumInfo = (albumInfo, songlist) => {
  return {
    type: UPDATEALBUMINFO,
    albumInfo,
    songlist
  }
};

export const fetchAlbumInfo= (album_id) => {
  return (dispatch, getState) => {
    const url = `${CONFIG.baseUrl}?${CONFIG.albumSong}${album_id}`;
    fetchJsonp(url)
        .then(response => response.json())
        .then(json =>{
          const albumInfo = json.albumInfo;
          const songlist = json.songlist;
          dispatch(updateAlbumInfo(albumInfo, songlist));
        })
  }
};

export default AlbumInfo;

