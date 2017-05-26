const CONFIG = {
  baseUrl: 'http://localhost:4000/v1/restserver/ting',
  channelMethod: 'method=baidu.ting.billboard.billList',
  songMethod: 'method=baidu.ting.song.playAAC&songid=',
  songLyric: 'method=baidu.ting.song.lry&songid=',
  searchMethod: 'method=baidu.ting.search.common&query=',
  searchSize: '&page_no=&page_size=500',
  recommend: 'method=baidu.ting.song.getRecommandSongList&song_id=',
  recommendSize: '&num=5',
  artistInfo: 'method=baidu.ting.artist.getInfo&tinguid=',
  artistSong: 'method=baidu.ting.artist.getSongList&limits=3000&tinguid=',
  artistAlbum: 'method=baidu.ting.artist.getAlbumList&order=1&tinguid=',
  albumSong: 'method=baidu.ting.album.getAlbumInfo&album_id='
};

export default CONFIG;