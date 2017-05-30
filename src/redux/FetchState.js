const FETCHING = 'FETCHING';
const FETCHINGFAILED = 'FETCHINGFAILED';
const FETCHINGSUCCESS = 'FETCHINGSUCCESS';

const initialState = {
  fetching: false,
  failed: false,
};

const FetchState = (state, action) => {
  if(!state) {
    return initialState;
  }
  switch(action.type) {
    case FETCHING:
      return {fetching: true, failed: false};
    case FETCHINGFAILED:
      return {fetching: false, failed: true};
    case FETCHINGSUCCESS:
      return {fetching: false, failed: false};
    default:
      return state
  }
};

export const fetching = () => {
  return{
    type: FETCHING
  }
};

export const fetchingFailed = () => {
  return{
    type: FETCHINGFAILED
  }
};

export const fetchingSuccess = () => {
  return {
    type: FETCHINGSUCCESS
  }
};

export default FetchState;
