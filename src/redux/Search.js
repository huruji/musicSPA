import Redux from 'redux';
import fetchJsonp from 'fetch-jsonp';
import Config from './../config';

const RECEIVESEARCH = 'RECEIVESEARCH';


const initialState = {
  searchSongList: [],
  searchKeyword: '',
};
const SearchList = (state=initialState, action) => {
  if(!state){
    return initialState;
  }
  switch (action.type) {
    case RECEIVESEARCH:
      return {...state, searchKeyword: action.keyword, searchSongList: action.songList};
    default:
      return state;
  }
};

export const receiveSearch = (keyword, songList) => {
  return {
    type: RECEIVESEARCH,
    keyword: keyword,
    songList: songList
  }
};

export const fetchSearch = (keyword) => {
  return (dispatch, getState) => {
    console.log('getState');
    console.log(getState());
    const url = `${Config.baseUrl}?${Config.searchMethod}${keyword}${Config.searchSize}`;
    fetchJsonp(url)
        .then(response => response.json())
        .then(json => {
          console.log(json);
          const SongList = json.song_list;
          dispatch(receiveSearch(keyword, SongList));
        })
  }
};

export default SearchList;