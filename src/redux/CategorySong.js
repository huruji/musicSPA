import  CONFIG from '../config';
import fetchJsonp from 'fetch-jsonp';

const UPDATECATEGORYSONG = 'UPDATECATEGORYSONG';

const initialState = {
  title:'',
  songList: []
};

const CategorySong = (state, action) => {
  if(!state) {
    return initialState
  }
  switch(action.type) {
    case UPDATECATEGORYSONG:
      return {title: action.title, songList:action.songList};
    default:
      return state;
  }
};


const updateCategorySong = (title, songList) => {
  return {
    type: UPDATECATEGORYSONG,
    title,
    songList
  }
};

export const fetchCategorySong = (name) => {
  return (dispatch, getState) => {
    const url = `${CONFIG.baseUrl}?${CONFIG.categorySong}${name}`;

    fetchJsonp(url)
        .then(res => res.json())
        .then(json => {
          console.log('2afsd');
          console.log(url);
          console.log(json);
          const title = json.result.channel;
          const songList = json.result.songlist;
          dispatch(updateCategorySong(title, songList));
        })
  }
};


export default CategorySong;
