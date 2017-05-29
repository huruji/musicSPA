import CONFIG from './../config';
import fetchJsonp from 'fetch-jsonp';

const UPDATECATEGORY = 'UPDATECATEGORY';

const initialState = {
  public: [],
  artist: []
};

const Category = (state, action) => {
  if(!state) {
    return initialState
  }
  switch(action.type) {
    case UPDATECATEGORY:
      return {public:action.public, artist: action.artist};
    default:
      return state;
  }
};

const updateCategory = (public, artist) => {
  return {
    type: UPDATECATEGORY,
    public,
    artist
  }
};

export const fetchCategory = () => {
  return (dispatch, getState) => {
    const url = `${CONFIG.baseUrl}?${CONFIG.categoryList}`;
    fetchJsonp(url)
        .then(response => response.json())
        .then(json => {
          const publicList = json.result[0];
          const artist = json.result[1];
          dispatch(updateCategory(publicList, artist));
        })
  }
};

export default Category;