import Redux from 'redux';

const UPDATELOCALLIST = 'UPDATELOCALLIST';
const DELETEROMLOCALLIST = 'DELETEROMLOCALLIST';
const ADDLOCALPLAYLIST = 'ADDLOCALPLAYLIST';

const LocalPlayList = function(state, action){
  if(!state){
    return {length:0,date:'2017-01-01',name:'我喜欢的音乐',comment:'',avator_url:'http://upload.jianshu.io/users/upload_avatars/1641380/efbbe5ab8270.jpg',song_list:[]};
  }
  switch (action.type){
    case UPDATELOCALLIST:
      return {
        ...state,
        length:state.length + action.items.length,
        song_list: state.song_list.concat(action.items)
      };
    case DELETEROMLOCALLIST:
      return{
        ...state,
        length: state.song_list.length - 1,
        song_list: [].concat(state.song_list.slice(0,action.index), state.song_list.slice(action.index + 1))
      };
    case ADDLOCALPLAYLIST:
      return{
        ...state,
        length: state.length + action.song.length,
        song_list: state.song_list.concat(action.song)
      };
    default:
      return state;
  }
};

export const updateLocalList = (items) => {
  return {
    type: UPDATELOCALLIST,
    items: items
  }
};

export const deleteRomLocalList = (index) => {
  return {
    type: DELETEROMLOCALLIST,
    index: index
  }
};

export const addLocalPlayList = (song) => {
  return {
    type: ADDLOCALPLAYLIST,
    song: song
  }
};
6
export default LocalPlayList;