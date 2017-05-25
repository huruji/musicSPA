const CONFIG = {
  baseUrl: 'http://172.20.37.167:4000/v1/restserver/ting',
  channelMethod: 'method=baidu.ting.billboard.billList',
  songMethod: 'method=baidu.ting.song.playAAC&songid=',
  songLyric: 'method=baidu.ting.song.lry&songid=',
  searchMethod: 'method=baidu.ting.search.common&query=',
  searchSize: '&page_no=&page_size=500',
  recommend: 'method=baidu.ting.song.getRecommandSongList&song_id=',
  recommendSize: '&num=5'
};

export default CONFIG;