import Redux from 'redux';

const UPDATEPLAYLIST = 'UPDATEPLAYLIST';
const ADDPLAYLISTSONG = 'ADDPLAYLISTSONG';
const UPDATEALLPLAYLIST = 'UPDATEALLPLAYLIST';

const initState = {
  song_list:[{"artist_id":"88","language":"国语","pic_big":"http://musicdata.baidu.com/data2/pic/ab055cc7c59de25a37f06f060ec3bccf/540561450/540561450.jpg@s_0,w_150","pic_small":"http://musicdata.baidu.com/data2/pic/ab055cc7c59de25a37f06f060ec3bccf/540561450/540561450.jpg@s_0,w_90","country":"内地","area":"0","publishtime":"2017-04-25","album_no":"0","lrclink":"http://musicdata.baidu.com/data2/lrc/7057f8fdd0176a3e647f0c1a2294eaf8/540721954/540721954.lrc","copy_type":"1","hot":"283409","all_artist_ting_uid":"2517","resource_type":"0","is_new":"1","rank_change":"1","rank":"1","all_artist_id":"88","style":"","del_status":"0","relate_status":"0","toneid":"0","all_rate":"64,128,256,320,flac","file_duration":249,"has_mv_mobile":0,"versions":"","bitrate_fee":"{\"0\":\"0|0\",\"1\":\"0|0\"}","song_id":"540560826","title":"我害怕","ting_uid":"2517","author":"薛之谦","album_id":"540560824","album_title":"我害怕","is_first_publish":0,"havehigh":2,"charge":0,"has_mv":0,"learn":0,"song_source":"web","piao_id":"0","korean_bb_song":"0","resource_type_ext":"0","mv_provider":"0000000000","artist_name":"薛之谦"}]
};
  
const PlayList = function(state = initState, action){
  if(!state){
    return {song_list:[]};
  }
  switch (action.type){
    case UPDATEPLAYLIST:
      return {
        ...state,
        length:state.length + action.items.length,
        song_list: state.song_list.concat(action.items)
      };
    case ADDPLAYLISTSONG:
      return{
        song_list: state.song_list.concat(action.item)
      };
    case UPDATEALLPLAYLIST:
      return{
        ...state,
        song_list: action.songList
      };
    default:
      return state;
  }
};

export const addPlayList = (item) => {
  return {
    type: ADDPLAYLISTSONG,
    item: item
  }
};

export const updateAllPlayList = (songList) => {
  return {
    type: UPDATEALLPLAYLIST,
    songList: songList
  }
};

export default PlayList;