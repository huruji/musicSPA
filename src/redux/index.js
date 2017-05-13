import {combineReducers} from 'redux';

import LocalPlayList from './LocaPlayList';
import ResiveMusic from './Channel';
import MusicNow from './MusicNow';

const rootReducer = combineReducers({
  LocalPlayList,
  ResiveMusic,
  MusicNow,
});

export default rootReducer;