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

const updateCategory = (publicList, artistList) => {
  return {
    type: UPDATECATEGORY,
    public: publicList,
    artist: artistList
  }
};

export const fetchCategory = () => {
  return (dispatch, getState) => {
    const url = `${CONFIG.originHost}?${CONFIG.categoryList}`;
    console.log(url);
    fetchJsonp(url)
        .then(response => response.json())
        .then(json => {
          console.log(json);
          const publicList = json.result[0].channellist;
          const artist = json.result[1].channellist;
          dispatch(updateCategory(publicList, artist));
        })
  }
};

export default Category;