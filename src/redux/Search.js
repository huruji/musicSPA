import fetchJsonp from 'fetch-jsonp';
import Config from './../config';

import {fetching, fetchingFailed, fetchingSuccess} from './FetchState';

const RECEIVESEARCH = 'RECEIVESEARCH';


const initialState = {
  searchInfo: {song_list: [], album: {}, artist:{}},
  searchKeyword: '',
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
    dispatch(fetching());
    const url = `${Config.baseUrl}?${Config.searchMethod}${keyword}${Config.searchSize}`;
    fetchJsonp(url,{
      timeout: 5000
    }).then(response => response.json())
        .then(json => {
          console.log(json);
          dispatch(receiveSearch(keyword, json));
          dispatch(fetchingSuccess())
        }).catch(err => dispatch(fetchingFailed()))
  }
};

export default SearchList;