import fetchJsonp from 'fetch-jsonp';
import CONFIG from './../config';

const UPDATEALBUMLIST = 'UPDATEALBUMLIST';
const ADDALBUMINFO = 'ADDALBUMINFO';
const UPDATEALBUMINFO = 'UPDATEALBUMINFO';
const INSERTALBUMINFO = 'INSERTALBUMINFO';

const initialState = {
  albumlist: [],
  albumnums: 0,
  albumInfo: []
};

const ArtistAlbum = function(state,action){
  if(!state){
    return initialState;
  }
  switch(action.type){
    case UPDATEALBUMLIST:
      return {...state, albumlist: action.albumlist, albumnums: action.albumnums};
    case ADDALBUMINFO:
      return {...state, albumInfo: state.albumInfo.concat(action.albumInfo)};
    case UPDATEALBUMINFO:
      return {...state, albumInfo: action.albumInfo};
    case INSERTALBUMINFO:
      return {...state, albumInfo: state.albumInfo.slice(0,action.index).concat(action.albumInfo).concat(state.albumInfo.slice(action.index + 1))};
    default:
      return state;
  }
};

export const updateAlbumList = (albumlist, albumnums) => {
  return {
    type: UPDATEALBUMLIST,
    albumlist,
    albumnums
  }
};

export const updateAlbumInfo = (albumInfo) => {
  return {
    type:UPDATEALBUMINFO,
    albumInfo: albumInfo
  }
};

export const addAlbumInfo = (albumInfo) => {
  return {
    type: ADDALBUMINFO,
    albumInfo
  }
};
export const insertAlbumInfo = (index, albumInfo) => {
  return {
    type: INSERTALBUMINFO,
    index,
    albumInfo
  }
}


export const fetchArtistAlbum = (tinguid) => {
  return (dispatch, getState) => {
    const url = `${CONFIG.baseUrl}?${CONFIG.artistAlbum}${tinguid}`;
    fetchJsonp(url)
        .then(response => response.json())
        .then(json => {
          const albumlist = json.albumlist;
          const albumnums = json.albumnums;
          dispatch(updateAlbumList(albumlist, albumnums));
          let temp = [];
          for(let i = 0; i < albumlist.length; i++){
            temp.push({});
          }
          dispatch(updateAlbumInfo(temp));
          albumlist.forEach((item, index) => {
            const url = `${CONFIG.baseUrl}?${CONFIG.albumSong}${item.album_id}`;
            fetchJsonp(url)
                .then(response => response.json())
                .then(json => {
                  dispatch(insertAlbumInfo(index, json));
                })
          });


        })
  }
};

export default ArtistAlbum;

