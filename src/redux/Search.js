import Redux from 'redux';
import fetchJsonp from 'fetch-jsonp';
import Config from './../config';

const RECEIVESEARCH = 'RECEIVESEARCH';


const initialState = {
  searchInfo: {song_list: [], album: {}, artist:{}},
  searchKeyword: ''
};
const SearchList = (state=initialState, action) => {
  if(!state){
    return initialState;
  }
  switch (action.type) {
    case RECEIVESEARCH:
      return {searchKeyword: action.searchKeyword, searchInfo: action.searchInfo};
    default:
      return state;
  }
};

export const receiveSearch = (keyword, json) => {
  return {
    type: RECEIVESEARCH,
    searchInfo: json,
    searchKeyword: keyword
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
          dispatch(receiveSearch(keyword, json));
        })
  }
};

export default SearchList;